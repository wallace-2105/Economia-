/* ==========================================================================
   NAVEGAÇÃO ENTRE TELAS
   ========================================================================== */
function mostrarTela(nomeTela) {
  telaAtual = nomeTela;
  document.querySelectorAll(".screen").forEach(sec => sec.classList.remove("active"));
  if (nomeTela === "home") {
    document.getElementById("screenHome").classList.add("active");
    renderizarTelaInicial();
  } else if (nomeTela === "study") {
    document.getElementById("screenStudy").classList.add("active");
    renderizarAreaEnsino(filtroBlocoEstudo);
  } else if (nomeTela === "quiz") {
    document.getElementById("screenQuiz").classList.add("active");
    renderizarTelaQuiz();
  } else if (nomeTela === "blockResult") {
    document.getElementById("screenBlockResult").classList.add("active");
    renderizarResultadoBloco(blocoAtivo);
  } else if (nomeTela === "finalResult") {
    document.getElementById("screenFinalResult").classList.add("active");
    renderizarResultadoGeral();
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function abrirAreaEnsino(numBloco = 0) {
  filtroBlocoEstudo = numBloco;
  mostrarTela("study");
}

function abrirBloco(numBloco, indiceInicial = null) {
  blocoAtivo = numBloco;
  const questoes = obterQuestoesDoBloco(numBloco);

  if (indiceInicial !== null && indiceInicial >= 0 && indiceInicial < questoes.length) {
    indiceQuestaoAtiva = indiceInicial;
  } else {
    // Procura a primeira questão ainda não respondida; se todas foram, abre a primeira
    const idxNaoRespondida = questoes.findIndex(q => {
      if (q.tipo === "objetiva") return !obterEstadoObjetiva(q.id).confirmada;
      return !obterEstadoDiscursiva(q.id).respondida;
    });
    indiceQuestaoAtiva = idxNaoRespondida !== -1 ? idxNaoRespondida : 0;
  }

  mostrarTela("quiz");
}

/* ==========================================================================
   EVENTOS GLOBAIS E ATALHOS DE TECLADO
   ========================================================================== */
function inicializarEventos() {
  // Navegação Topo e Área de Ensino
  document.getElementById("brandHomeBtn").addEventListener("click", () => mostrarTela("home"));
  document.getElementById("btnBackHomeQuiz").addEventListener("click", () => mostrarTela("home"));
  document.getElementById("btnVerResultadoGeralTop").addEventListener("click", () => mostrarTela("finalResult"));
  document.getElementById("btnResultadoGeralHome").addEventListener("click", () => mostrarTela("finalResult"));

  const btnEnsinoTop = document.getElementById("btnAreaEnsinoTop");
  if (btnEnsinoTop) btnEnsinoTop.addEventListener("click", () => abrirAreaEnsino(0));

  const btnEnsinoHome = document.getElementById("btnAreaEnsinoHome");
  if (btnEnsinoHome) btnEnsinoHome.addEventListener("click", () => abrirAreaEnsino(0));

  const btnBackStudy = document.getElementById("btnBackHomeStudy");
  if (btnBackStudy) btnBackStudy.addEventListener("click", () => mostrarTela("home"));

  const btnStudyQuiz = document.getElementById("btnStudyFromQuiz");
  if (btnStudyQuiz) btnStudyQuiz.addEventListener("click", () => abrirAreaEnsino(blocoAtivo));

  // Alternância de Modo Estudo / Prova
  document.getElementById("modeEstudoBtn").addEventListener("click", () => definirModo("estudo"));
  document.getElementById("modeProvaBtn").addEventListener("click", () => definirModo("prova"));

  // Alternância de Tema Claro / Escuro
  document.getElementById("themeToggleBtn").addEventListener("click", alternarTema);

  // Finalizar bloco no topo do quiz
  document.getElementById("btnFinishBlockTop").addEventListener("click", () => {
    estado.blocosFinalizados[blocoAtivo] = true;
    salvarEstado();
    mostrarTela("blockResult");
  });

  // Botões Anterior e Próxima
  document.getElementById("btnPrevQuestion").addEventListener("click", () => {
    if (indiceQuestaoAtiva > 0) {
      indiceQuestaoAtiva--;
      renderizarTelaQuiz();
    }
  });

  document.getElementById("btnNextQuestion").addEventListener("click", () => {
    const questoes = obterQuestoesDoBloco(blocoAtivo);
    if (indiceQuestaoAtiva < questoes.length - 1) {
      indiceQuestaoAtiva++;
      renderizarTelaQuiz();
    } else {
      estado.blocosFinalizados[blocoAtivo] = true;
      salvarEstado();
      mostrarTela("blockResult");
    }
  });

  // Modal de Zerar Progresso
  const resetModal = document.getElementById("resetModal");
  document.getElementById("btnResetAll").addEventListener("click", () => {
    resetModal.classList.add("active");
  });
  document.getElementById("btnCancelReset").addEventListener("click", () => {
    resetModal.classList.remove("active");
  });
  document.getElementById("btnConfirmReset").addEventListener("click", () => {
    const temaAtual = estado.tema;
    const modoAtual = estado.modo;
    estado = criarEstadoInicial();
    estado.tema = temaAtual;
    estado.modo = modoAtual;
    salvarEstado();
    resetModal.classList.remove("active");
    mostrarTela("home");
  });

  // Atalhos de teclado: A-E selecionam, Enter confirma, Setas navegam
  window.addEventListener("keydown", e => {
    if (telaAtual !== "quiz") return;

    // Ignora atalhos quando o aluno está digitando na caixa de texto discursiva
    const tagAtiva = document.activeElement ? document.activeElement.tagName.toLowerCase() : "";
    if (tagAtiva === "textarea" || tagAtiva === "input") return;

    const questoes = obterQuestoesDoBloco(blocoAtivo);
    const questaoAtual = questoes[indiceQuestaoAtiva];

    const tecla = e.key.toUpperCase();
    const mapaLetras = { A: 0, B: 1, C: 2, D: 3, E: 4 };

    if (questaoAtual.tipo === "objetiva" && mapaLetras.hasOwnProperty(tecla)) {
      e.preventDefault();
      const st = obterEstadoObjetiva(questaoAtual.id);
      if (!st.confirmada) {
        st.selecionada = mapaLetras[tecla];
        salvarEstado();
        renderizarTelaQuiz();
      }
    } else if (e.key === "Enter" && questaoAtual.tipo === "objetiva") {
      const st = obterEstadoObjetiva(questaoAtual.id);
      if (!st.confirmada && st.selecionada !== null) {
        e.preventDefault();
        confirmarQuestaoObjetiva(questaoAtual);
      }
    } else if (e.key === "ArrowLeft") {
      if (indiceQuestaoAtiva > 0) {
        e.preventDefault();
        indiceQuestaoAtiva--;
        renderizarTelaQuiz();
      }
    } else if (e.key === "ArrowRight") {
      if (indiceQuestaoAtiva < questoes.length - 1) {
        e.preventDefault();
        indiceQuestaoAtiva++;
        renderizarTelaQuiz();
      }
    }
  });
}

// Inicialização ao carregar a página
aplicarTema();
atualizarBotoesModo();
inicializarEventos();
renderizarTelaInicial();
