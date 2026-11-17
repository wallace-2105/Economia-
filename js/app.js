/* ==========================================================================
   NAVEGAÇÃO ENTRE TELAS
   ========================================================================== */
function mostrarTela(nomeTela, rolarTopo = true) {
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
  if (rolarTopo) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function abrirAreaEnsino(numBloco = 0) {
  filtroBlocoEstudo = numBloco;
  mostrarTela("study");
}

function abrirBloco(numBloco, indiceParaRolar = null) {
  blocoAtivo = numBloco;
  mostrarTela("quiz", indiceParaRolar === null);

  if (indiceParaRolar !== null) {
    setTimeout(() => {
      const cardEl = document.getElementById(`questao-card-${indiceParaRolar}`);
      if (cardEl) {
        cardEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 60);
  }
}

/* ==========================================================================
   EVENTOS GLOBAIS
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

  // Botões na barra inferior da lista de questões do bloco
  const btnPrev = document.getElementById("btnPrevQuestion");
  if (btnPrev) {
    btnPrev.addEventListener("click", () => {
      mostrarTela("home");
    });
  }

  const btnScrollTop = document.getElementById("btnScrollTopQuiz");
  if (btnScrollTop) {
    btnScrollTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const btnNext = document.getElementById("btnNextQuestion");
  if (btnNext) {
    btnNext.addEventListener("click", () => {
      estado.blocosFinalizados[blocoAtivo] = true;
      salvarEstado();
      mostrarTela("blockResult");
    });
  }

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
}

// Inicialização ao carregar a página
aplicarTema();
atualizarBotoesModo();
gerenciarCronometroModo();
inicializarEventos();
renderizarTelaInicial();
