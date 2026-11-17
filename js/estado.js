/* ==========================================================================
   ESTADO DA APLICAÇÃO E PERSISTÊNCIA (LOCALSTORAGE)
   ========================================================================== */
const STORAGE_KEY = "simulado_economia_estado_v1";

function criarEstadoInicial() {
  return {
    modo: "estudo", // "estudo" ou "prova"
    tema: "light",  // "light" ou "dark"
    blocosFinalizados: { 1: false, 2: false, 3: false, 4: false },
    objetivas: {},  // { [id]: { selecionada: number|null, confirmada: boolean, revelouResposta: boolean } }
    discursivas: {} // { [id]: { texto: string, respondida: boolean, revelouModelo: boolean } }
  };
}

let estado = carregarEstado();
let telaAtual = "home"; // "home" | "quiz" | "blockResult" | "finalResult"
let blocoAtivo = 1;
let indiceQuestaoAtiva = 0; // 0 a 14 dentro do blocoAtivo

function carregarEstado() {
  try {
    const salvo = localStorage.getItem(STORAGE_KEY);
    if (!salvo) return criarEstadoInicial();
    const parsed = JSON.parse(salvo);
    return {
      ...criarEstadoInicial(),
      ...parsed,
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
      if (st.confirmada) {
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
  salvarEstado();
  atualizarBotoesModo();
  if (telaAtual === "quiz") {
    renderizarTelaQuiz();
  } else if (telaAtual === "home") {
    renderizarTelaInicial();
  }
}

function atualizarBotoesModo() {
  const btnEstudo = document.getElementById("modeEstudoBtn");
  const btnProva = document.getElementById("modeProvaBtn");
  const badgeQuiz = document.getElementById("quizModeBadge");

  if (estado.modo === "estudo") {
    btnEstudo.classList.add("active");
    btnProva.classList.remove("active");
    if (badgeQuiz) badgeQuiz.textContent = "Modo Estudo (gabarito imediato)";
  } else {
    btnProva.classList.add("active");
    btnEstudo.classList.remove("active");
    if (badgeQuiz) badgeQuiz.textContent = "Modo Prova (gabarito ao finalizar)";
  }
}

