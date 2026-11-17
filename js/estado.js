/* ==========================================================================
   ESTADO DA APLICAÇÃO E PERSISTÊNCIA (LOCALSTORAGE)
   ========================================================================== */
const STORAGE_KEY = "simulado_economia_estado_v1";

function criarEstadoInicial() {
  return {
    modo: "estudo", // "estudo" ou "prova"
    tema: "light",  // "light" ou "dark"
    tempoProvaSegundos: 0,
    blocosFinalizados: { 1: false, 2: false, 3: false, 4: false },
    objetivas: {},  // { [id]: { selecionada: number|null, confirmada: boolean, revelouResposta: boolean } }
    discursivas: {} // { [id]: { texto: string, respondida: boolean, revelouModelo: boolean } }
  };
}

let estado = carregarEstado();
let telaAtual = "home"; // "home" | "study" | "quiz" | "blockResult" | "finalResult"
let blocoAtivo = 1;
let indiceQuestaoAtiva = 0;
let intervaloCronometro = null;

function carregarEstado() {
  try {
    const salvo = localStorage.getItem(STORAGE_KEY);
    if (!salvo) return criarEstadoInicial();
    const parsed = JSON.parse(salvo);
    return {
      ...criarEstadoInicial(),
      ...parsed,
      tempoProvaSegundos: Number(parsed.tempoProvaSegundos) || 0,
      blocosFinalizados: { ...criarEstadoInicial().blocosFinalizados, ...(parsed.blocosFinalizados || {}) },
      objetivas: parsed.objetivas || {},
      discursivas: parsed.discursivas || {}
    };
  } catch (e) {
    return criarEstadoInicial();
  }
}

function salvarEstado() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(estado));
  } catch (e) {
    console.warn("Não foi possível salvar no localStorage:", e);
  }
}

function obterQuestoesDoBloco(numBloco) {
  return QUESTOES.filter(q => q.bloco === numBloco);
}

function obterEstadoObjetiva(id) {
  if (!estado.objetivas[id]) {
    estado.objetivas[id] = { selecionada: null, confirmada: false, revelouResposta: false };
  }
  return estado.objetivas[id];
}

function obterEstadoDiscursiva(id) {
  if (!estado.discursivas[id]) {
    estado.discursivas[id] = { texto: "", respondida: false, revelouModelo: false };
  }
  return estado.discursivas[id];
}

/* ==========================================================================
   CÁLCULO DE ESTATÍSTICAS E CORREÇÃO
   ========================================================================== */
function calcularResumoBloco(numBloco) {
  const questoes = obterQuestoesDoBloco(numBloco);
  let respondidasTotal = 0;
  let objetivasConfirmadas = 0;
  let acertosObjetivas = 0;
  let discursivasMarcadas = 0;
  const erradas = [];

  questoes.forEach((q, idx) => {
    if (q.tipo === "objetiva") {
      const st = obterEstadoObjetiva(q.id);
      if (st.confirmada && st.selecionada !== null) {
        respondidasTotal++;
        objetivasConfirmadas++;
        if (st.selecionada === q.correta) {
          acertosObjetivas++;
        } else {
          erradas.push({ questao: q, indiceNoBloco: idx, escolhida: st.selecionada });
        }
      } else {
        erradas.push({ questao: q, indiceNoBloco: idx, escolhida: null, naoRespondida: true });
      }
    } else {
      const st = obterEstadoDiscursiva(q.id);
      if (st.respondida) {
        respondidasTotal++;
        discursivasMarcadas++;
      }
    }
  });

  return {
    totalQuestoes: questoes.length, // 15
    respondidasTotal,
    objetivasConfirmadas,
    acertosObjetivas,
    discursivasMarcadas,
    erradas
  };
}

/* ==========================================================================
   CRONÔMETRO DO MODO PROVA E BANNER DINÂMICO DE MODO
   ========================================================================== */
function formatarTempo(segundosTotais) {
  const min = String(Math.floor(segundosTotais / 60)).padStart(2, "0");
  const seg = String(segundosTotais % 60).padStart(2, "0");
  return `${min}:${seg}`;
}

function gerenciarCronometroModo() {
  if (intervaloCronometro) {
    clearInterval(intervaloCronometro);
    intervaloCronometro = null;
  }

  if (estado.modo === "prova") {
    intervaloCronometro = setInterval(() => {
      estado.tempoProvaSegundos = (estado.tempoProvaSegundos || 0) + 1;
      const elTimer = document.getElementById("examTimerValue");
      if (elTimer) {
        elTimer.textContent = formatarTempo(estado.tempoProvaSegundos);
      }
      if (estado.tempoProvaSegundos % 5 === 0) {
        salvarEstado();
      }
    }, 1000);
  }
}

function renderizarBannerModo() {
  const banner = document.getElementById("modeStatusBanner");
  if (!banner) return;

  if (estado.modo === "estudo") {
    banner.className = "mode-banner estudo";
    banner.innerHTML = `
      <div class="mode-banner-info">
        <div class="mode-banner-title">📘 Modo Estudo Ativo — Correção na Hora (Verde / Vermelho)</div>
        <div class="mode-banner-desc">
          Ao tocar em qualquer alternativa ela fica <strong>verde (certo)</strong> ou <strong>vermelha (errado)</strong> imediatamente com a explicação. Consulta ao resumo e gabarito liberada!
        </div>
      </div>
      <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
        <button type="button" class="btn btn-secondary" id="btnBannerAbrirResumo">📚 Estudar Resumo</button>
        <button type="button" class="btn btn-primary" id="btnBannerTrocarProva">Mudar para Modo Prova →</button>
      </div>
    `;
    const btnResumo = document.getElementById("btnBannerAbrirResumo");
    if (btnResumo) btnResumo.addEventListener("click", () => abrirAreaEnsino(telaAtual === "quiz" ? blocoAtivo : 0));

    const btnIrProva = document.getElementById("btnBannerTrocarProva");
    if (btnIrProva) btnIrProva.addEventListener("click", () => definirModo("prova"));
  } else {
    banner.className = "mode-banner prova";
    banner.innerHTML = `
      <div class="mode-banner-info">
        <div class="mode-banner-title">📝 Modo Prova Ativo — Simulado Sem Consulta (Gabarito Oculto)</div>
        <div class="mode-banner-desc">
          Suas escolhas ficam marcadas em <strong>azul</strong> (você pode trocar de alternativa livremente) e os botões de resposta/resumo ficam ocultos. O resultado verde/vermelho só aparece ao clicar em <strong>"Finalizar bloco"</strong>!
        </div>
      </div>
      <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
        <div class="exam-timer-box" title="Tempo decorrido no Modo Prova">
          ⏱️ <span id="examTimerValue">${formatarTempo(estado.tempoProvaSegundos || 0)}</span>
        </div>
        <button type="button" class="btn btn-secondary" id="btnBannerZerarTimer" title="Zerar cronômetro">↺ Tempo</button>
        <button type="button" class="btn btn-primary" id="btnBannerTrocarEstudo">Voltar ao Modo Estudo</button>
      </div>
    `;
    const btnZerarTimer = document.getElementById("btnBannerZerarTimer");
    if (btnZerarTimer) {
      btnZerarTimer.addEventListener("click", () => {
        estado.tempoProvaSegundos = 0;
        salvarEstado();
        const elTimer = document.getElementById("examTimerValue");
        if (elTimer) elTimer.textContent = "00:00";
      });
    }
    const btnIrEstudo = document.getElementById("btnBannerTrocarEstudo");
    if (btnIrEstudo) btnIrEstudo.addEventListener("click", () => definirModo("estudo"));
  }
}

/* ==========================================================================
   CONTROLE DE MODO (ESTUDO / PROVA) E TEMA (CLARO / ESCURO)
   ========================================================================== */
function aplicarTema() {
  document.documentElement.setAttribute("data-theme", estado.tema);
  const btn = document.getElementById("themeToggleBtn");
  if (btn) {
    btn.textContent = estado.tema === "dark" ? "☀️ Claro" : "🌙 Escuro";
  }
}

function alternarTema() {
  estado.tema = estado.tema === "dark" ? "light" : "dark";
  salvarEstado();
  aplicarTema();
}

function definirModo(novoModo) {
  if (novoModo !== "estudo" && novoModo !== "prova") return;
  estado.modo = novoModo;

  if (novoModo === "prova") {
    // No Modo Prova, reabre os blocos para que o gabarito fique oculto até clicar em Finalizar Bloco
    estado.blocosFinalizados = { 1: false, 2: false, 3: false, 4: false };
    Object.keys(estado.objetivas).forEach(k => {
      estado.objetivas[k].revelouResposta = false;
    });
    // Se estava na tela de Resumo (cola), leva para a tela inicial ou de questões da prova
    if (telaAtual === "study") {
      salvarEstado();
      atualizarBotoesModo();
      gerenciarCronometroModo();
      mostrarTela("home");
      return;
    }
  }

  salvarEstado();
  atualizarBotoesModo();
  gerenciarCronometroModo();

  if (telaAtual === "quiz") {
    renderizarTelaQuiz();
  } else if (telaAtual === "home") {
    renderizarTelaInicial();
  } else if (telaAtual === "blockResult") {
    renderizarResultadoBloco(blocoAtivo);
  } else if (telaAtual === "finalResult") {
    renderizarResultadoGeral();
  }
}

function atualizarBotoesModo() {
  const btnEstudo = document.getElementById("modeEstudoBtn");
  const btnProva = document.getElementById("modeProvaBtn");
  const badgeQuiz = document.getElementById("quizModeBadge");
  const btnStudyQuiz = document.getElementById("btnStudyFromQuiz");
  const btnEnsinoTop = document.getElementById("btnAreaEnsinoTop");

  if (estado.modo === "estudo") {
    if (btnEstudo) btnEstudo.classList.add("active");
    if (btnProva) btnProva.classList.remove("active");
    if (badgeQuiz) badgeQuiz.textContent = "📘 Modo Estudo (gabarito imediato)";
    if (btnStudyQuiz) btnStudyQuiz.style.display = "inline-flex";
    if (btnEnsinoTop) btnEnsinoTop.style.display = "inline-flex";
  } else {
    if (btnProva) btnProva.classList.add("active");
    if (btnEstudo) btnEstudo.classList.remove("active");
    if (badgeQuiz) badgeQuiz.textContent = "📝 Modo Prova (gabarito oculto até finalizar)";
    // Oculta atalhos de consulta ao resumo durante o Modo Prova
    if (btnStudyQuiz) btnStudyQuiz.style.display = "none";
    if (btnEnsinoTop) btnEnsinoTop.style.display = "none";
  }

  renderizarBannerModo();
}
