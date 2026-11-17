/* ==========================================================================
   RENDERIZAÇÃO: TELA INICIAL
   ========================================================================== */
function renderizarTelaInicial() {
  const grid = document.getElementById("blocksGrid");
  grid.innerHTML = "";

  BLOCOS_INFO.forEach(bloco => {
    const resumo = calcularResumoBloco(bloco.numero);
    const percProgresso = Math.round((resumo.respondidasTotal / resumo.totalQuestoes) * 100);
    const iniciou = resumo.respondidasTotal > 0;
    const rotuloBotao = iniciou ? "Continuar" : "Começar";

    // No Modo Prova, só exibe os acertos se o bloco já foi finalizado
    const ocultarAcertosModoProva = estado.modo === "prova" && !estado.blocosFinalizados[bloco.numero];
    const textoAcertos = ocultarAcertosModoProva
      ? `${resumo.objetivasConfirmadas}/10 confirmadas (Modo Prova)`
      : `${resumo.acertosObjetivas}/10`;

    const card = document.createElement("div");
    card.className = "block-card";
    card.innerHTML = `
      <div>
        <span class="block-badge">Bloco ${bloco.numero}</span>
        <h2>${bloco.titulo}</h2>
        <p class="block-desc">${bloco.descricao}</p>
      </div>
      <div>
        <div class="block-stats">
          <div class="stat-row">
            <span>Progresso total:</span>
            <strong>${resumo.respondidasTotal}/15 respondidas</strong>
          </div>
          <div class="stat-row">
            <span>Acertos nas objetivas:</span>
            <strong>${textoAcertos}</strong>
          </div>
          <div class="stat-row">
            <span>Discursivas concluídas:</span>
            <strong>${resumo.discursivasMarcadas}/5</strong>
          </div>
          <div class="mini-progress" aria-label="Progresso do bloco ${bloco.numero}">
            <div class="mini-progress-bar" style="width: ${percProgresso}%;"></div>
          </div>
        </div>
        <div style="display:flex; gap:0.5rem; margin-top:0.9rem;">
          <button type="button" class="btn btn-primary" style="flex:1;" data-start-block="${bloco.numero}">
            ${rotuloBotao} Bloco ${bloco.numero}
          </button>
          ${resumo.respondidasTotal > 0 ? `<button type="button" class="btn btn-secondary" data-result-block="${bloco.numero}" title="Ver resultado do bloco">Resultado</button>` : ""}
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  grid.querySelectorAll("[data-start-block]").forEach(btn => {
    btn.addEventListener("click", () => {
      abrirBloco(Number(btn.getAttribute("data-start-block")));
    });
  });

  grid.querySelectorAll("[data-result-block]").forEach(btn => {
    btn.addEventListener("click", () => {
      blocoAtivo = Number(btn.getAttribute("data-result-block"));
      estado.blocosFinalizados[blocoAtivo] = true;
      salvarEstado();
      mostrarTela("blockResult");
    });
  });
}

/* ==========================================================================
   RENDERIZAÇÃO: TELA DE QUESTÃO (DENTRO DO BLOCO)
   ========================================================================== */
function renderizarTelaQuiz() {
  const infoBloco = BLOCOS_INFO.find(b => b.numero === blocoAtivo);
  const questoes = obterQuestoesDoBloco(blocoAtivo);
  const questao = questoes[indiceQuestaoAtiva];
  const resumo = calcularResumoBloco(blocoAtivo);

  document.getElementById("quizBlockTitle").textContent = `Bloco ${infoBloco.numero}: ${infoBloco.titulo}`;
  document.getElementById("quizBlockSubtitle").textContent = `Questão ${indiceQuestaoAtiva + 1} de ${questoes.length}`;
  document.getElementById("quizProgressText").textContent = `Progresso do bloco: ${resumo.respondidasTotal}/${questoes.length} respondidas`;
  document.getElementById("quizProgressFill").style.width = `${Math.round((resumo.respondidasTotal / questoes.length) * 100)}%`;
  document.getElementById("questionCounterBottom").textContent = `Questão ${indiceQuestaoAtiva + 1} de ${questoes.length}`;
  atualizarBotoesModo();

  // Renderiza bolinhas numeradas (1 a 15)
  const pillsContainer = document.getElementById("questionPills");
  pillsContainer.innerHTML = "";
  const podeMostrarCoresGabarito = (estado.modo === "estudo") || estado.blocosFinalizados[blocoAtivo];

  questoes.forEach((q, idx) => {
    const pill = document.createElement("button");
    pill.type = "button";
    pill.className = "q-pill";
    pill.textContent = idx + 1;
    pill.title = `Ir para questão ${idx + 1} (${q.tipo === "objetiva" ? "Objetiva" : "Discursiva"})`;

    if (idx === indiceQuestaoAtiva) {
      pill.classList.add("current");
    }

    if (q.tipo === "objetiva") {
      const st = obterEstadoObjetiva(q.id);
      if (st.confirmada) {
        if (podeMostrarCoresGabarito || st.revelouResposta) {
          pill.classList.add(st.selecionada === q.correta ? "correct" : "wrong");
        } else {
          pill.classList.add("answered-neutral");
        }
      }
    } else {
      const st = obterEstadoDiscursiva(q.id);
      if (st.respondida) {
        pill.classList.add("correct");
      }
    }

    pill.addEventListener("click", () => {
      indiceQuestaoAtiva = idx;
      renderizarTelaQuiz();
    });
    pillsContainer.appendChild(pill);
  });

  // Renderiza o conteúdo da questão atual
  const container = document.getElementById("questionContainer");
  if (questao.tipo === "objetiva") {
    renderizarQuestaoObjetiva(container, questao, indiceQuestaoAtiva);
  } else {
    renderizarQuestaoDiscursiva(container, questao, indiceQuestaoAtiva);
  }

  // Botões Anterior e Próxima
  const btnPrev = document.getElementById("btnPrevQuestion");
  const btnNext = document.getElementById("btnNextQuestion");
  btnPrev.disabled = indiceQuestaoAtiva === 0;

  if (indiceQuestaoAtiva === questoes.length - 1) {
    btnNext.textContent = "Finalizar bloco ✓";
  } else {
    btnNext.textContent = "Próxima →";
  }
}

function classeDificuldade(dif) {
  if (dif === "Fácil") return "facil";
  if (dif === "Média") return "media";
  return "dificil";
}

function renderizarQuestaoObjetiva(container, questao, idx) {
  const st = obterEstadoObjetiva(questao.id);
  const letras = ["A", "B", "C", "D", "E"];
  const mostrarGabaritoAgora =
    st.revelouResposta ||
    (st.confirmada && (estado.modo === "estudo" || estado.blocosFinalizados[blocoAtivo]));

  const bloqueada = st.confirmada;

  let opcoesHTML = "";
  questao.alternativas.forEach((textoAlt, i) => {
    let classes = "option-item";
    if (bloqueada) classes += " locked";

    if (mostrarGabaritoAgora) {
      if (i === questao.correta) {
        classes += " correct-choice";
      } else if (st.confirmada && st.selecionada === i && i !== questao.correta) {
        classes += " wrong-choice";
      }
    } else if (st.selecionada === i) {
      classes += " selected";
    }

    opcoesHTML += `
      <button type="button" class="${classes}" data-opt-index="${i}" ${bloqueada ? "disabled" : ""}>
        <span class="option-letter">${letras[i]}</span>
        <span style="flex:1;">${textoAlt}</span>
      </button>
    `;
  });

  let feedbackHTML = "";
  if (mostrarGabaritoAgora) {
    const letraCorreta = letras[questao.correta];
    const textoCorreta = questao.alternativas[questao.correta];

    if (st.confirmada && st.selecionada === questao.correta) {
      feedbackHTML = `
        <div class="feedback-box correct">
          <div class="feedback-title">✓ Correto! (Alternativa ${letraCorreta})</div>
          <div class="feedback-line">${questao.explicacao}</div>
        </div>
      `;
    } else if (st.confirmada && st.selecionada !== null && st.selecionada !== questao.correta) {
      const motivoEspecifico =
        (questao.porqueErradaOpcoes && questao.porqueErradaOpcoes[st.selecionada]) ||
        questao.porqueErrada;
      feedbackHTML = `
        <div class="feedback-box wrong">
          <div class="feedback-title">✗ Resposta correta: ${letraCorreta} — ${textoCorreta}</div>
          <div class="feedback-line"><strong>Por que está certa:</strong> ${questao.explicacao}</div>
          <div class="feedback-line"><strong>Por que a sua não está:</strong> ${motivoEspecifico}</div>
        </div>
      `;
    } else {
      // Clicou em "Ver resposta" sem confirmar tentativa
      feedbackHTML = `
        <div class="feedback-box neutral">
          <div class="feedback-title">💡 Resposta correta: ${letraCorreta} — ${textoCorreta}</div>
          <div class="feedback-line"><strong>Por que está certa:</strong> ${questao.explicacao}</div>
        </div>
      `;
    }
  } else if (st.confirmada && estado.modo === "prova" && !estado.blocosFinalizados[blocoAtivo]) {
    feedbackHTML = `
      <div class="feedback-box neutral">
        <div class="feedback-title">🔒 Resposta registrada (${letras[st.selecionada]})</div>
        <div class="feedback-line">Você está no <strong>Modo Prova</strong>. Clique em <em>"Finalizar bloco"</em> para conferir o gabarito completo, ou use <em>"Ver resposta"</em> se desejar consultar agora.</div>
      </div>
    `;
  }

  container.innerHTML = `
    <div class="question-meta">
      <span class="tag">Questão ${idx + 1} • Objetiva</span>
      <span class="tag ${classeDificuldade(questao.dificuldade)}">${questao.dificuldade}</span>
      <span class="tag tipo">${questao.categoria}</span>
    </div>
    <div class="question-statement">${questao.enunciado}</div>
    <div class="options-list" id="optionsList">${opcoesHTML}</div>
    <div class="question-actions">
      <button type="button" class="btn btn-primary" id="btnConfirmOption" ${bloqueada || st.selecionada === null ? "disabled" : ""}>
        ${bloqueada ? "Resposta Confirmada" : "Confirmar (Enter)"}
      </button>
      <button type="button" class="btn btn-secondary" id="btnRevealAnswer">
        ${st.revelouResposta ? "Ocultar resposta" : "Ver resposta"}
      </button>
    </div>
    ${feedbackHTML}
  `;

  // Eventos das alternativas
  container.querySelectorAll("[data-opt-index]").forEach(btn => {
    btn.addEventListener("click", () => {
      if (st.confirmada) return;
      st.selecionada = Number(btn.getAttribute("data-opt-index"));
      salvarEstado();
      renderizarTelaQuiz();
    });
  });

  // Evento Confirmar
  const btnConfirm = document.getElementById("btnConfirmOption");
  if (btnConfirm) {
    btnConfirm.addEventListener("click", () => {
      confirmarQuestaoObjetiva(questao);
    });
  }

  // Evento Ver resposta
  const btnReveal = document.getElementById("btnRevealAnswer");
  if (btnReveal) {
    btnReveal.addEventListener("click", () => {
      st.revelouResposta = !st.revelouResposta;
      salvarEstado();
      renderizarTelaQuiz();
    });
  }
}

function confirmarQuestaoObjetiva(questao) {
  const st = obterEstadoObjetiva(questao.id);
  if (st.confirmada || st.selecionada === null) return;
  st.confirmada = true;
  salvarEstado();
  renderizarTelaQuiz();
}

function renderizarQuestaoDiscursiva(container, questao, idx) {
  const st = obterEstadoDiscursiva(questao.id);

  const pontosHTML = (questao.pontosChave || [])
    .map(p => `<li>${p}</li>`)
    .join("");

  const modeloHTML = st.revelouModelo
    ? `
      <div class="model-answer-box">
        <h4>Resposta modelo:</h4>
        <p>${questao.resposta}</p>
        ${pontosHTML ? `<h4 style="margin-top:0.65rem;">Pontos-chave:</h4><ul>${pontosHTML}</ul>` : ""}
      </div>
    `
    : "";

  container.innerHTML = `
    <div class="question-meta">
      <span class="tag">Questão ${idx + 1} • Discursiva</span>
      <span class="tag tipo">Questão Aberta (${idx - 9} de 5)</span>
    </div>
    <div class="question-statement">${questao.enunciado}</div>
    <div class="essay-area">
      <textarea
        id="essayTextarea"
        class="essay-textarea"
        placeholder="Escreva sua resposta aqui... O texto é salvo automaticamente no navegador."
      ></textarea>
      <div class="essay-controls">
        <label class="checkbox-label">
          <input type="checkbox" id="essayDoneCheckbox" ${st.respondida ? "checked" : ""} />
          <span>Marcar como respondida</span>
        </label>
        <button type="button" class="btn btn-secondary" id="btnToggleModelAnswer">
          ${st.revelouModelo ? "Ocultar resposta modelo" : "Ver resposta modelo"}
        </button>
      </div>
    </div>
    ${modeloHTML}
  `;

  const textarea = document.getElementById("essayTextarea");
  textarea.value = st.texto || "";
  textarea.addEventListener("input", e => {
    st.texto = e.target.value;
    salvarEstado();
  });

  const checkbox = document.getElementById("essayDoneCheckbox");
  checkbox.addEventListener("change", e => {
    st.respondida = e.target.checked;
    salvarEstado();
    renderizarTelaQuiz();
  });

  const btnModel = document.getElementById("btnToggleModelAnswer");
  btnModel.addEventListener("click", () => {
    st.revelouModelo = !st.revelouModelo;
    salvarEstado();
    renderizarTelaQuiz();
  });
}

/* ==========================================================================
   RENDERIZAÇÃO: TELA DE RESULTADO DO BLOCO
   ========================================================================== */
function renderizarResultadoBloco(numBloco) {
  const infoBloco = BLOCOS_INFO.find(b => b.numero === numBloco);
  const resumo = calcularResumoBloco(numBloco);
  const percentual = Math.round((resumo.acertosObjetivas / 10) * 100);
  const letras = ["A", "B", "C", "D", "E"];

  let revisaoHTML = "";
  if (resumo.erradas.length === 0) {
    revisaoHTML = `
      <div class="feedback-box correct">
        <div class="feedback-title">🎉 Parabéns! Você acertou todas as 10 questões objetivas deste bloco!</div>
      </div>
    `;
  } else {
    const itensHTML = resumo.erradas.map(item => {
      const q = item.questao;
      const statusTexto = item.naoRespondida
        ? "Não respondida"
        : `Sua escolha: ${letras[item.escolhida]} • Correta: ${letras[q.correta]}`;
      return `
        <div class="wrong-item">
          <div style="flex:1;">
            <strong>Questão ${item.indiceNoBloco + 1}:</strong> ${q.enunciado}
            <div style="font-size:0.84rem; color:var(--text-secondary); margin-top:0.25rem;">${statusTexto}</div>
          </div>
          <button type="button" class="btn btn-secondary" data-review-q="${item.indiceNoBloco}">
            Revisar questão →
          </button>
        </div>
      `;
    }).join("");

    revisaoHTML = `
      <h3 style="margin-top:1.25rem;">Questões para revisão (${resumo.erradas.length})</h3>
      <p style="font-size:0.9rem; color:var(--text-secondary);">Clique em qualquer questão abaixo para voltar diretamente a ela e revisar a explicação.</p>
      <div class="wrong-list">${itensHTML}</div>
    `;
  }

  const container = document.getElementById("blockResultContent");
  container.innerHTML = `
    <span class="block-badge">Resultado do Bloco ${infoBloco.numero}</span>
    <h2>${infoBloco.titulo}</h2>
    <div class="score-banner">
      <div>
        <div style="font-size:0.9rem; color:var(--text-secondary);">Nota nas questões objetivas</div>
        <div class="score-big">${resumo.acertosObjetivas}/10 (${percentual}%)</div>
      </div>
      <div style="text-align:right;">
        <div style="font-size:0.9rem; color:var(--text-secondary);">Discursivas marcadas como respondidas</div>
        <div style="font-size:1.35rem; font-weight:700;">${resumo.discursivasMarcadas}/5</div>
      </div>
    </div>
    ${revisaoHTML}
    <div style="display:flex; gap:0.75rem; flex-wrap:wrap; margin-top:1.75rem;">
      <button type="button" class="btn btn-secondary" id="btnBlockResHome">← Voltar ao início</button>
      <button type="button" class="btn btn-primary" id="btnBlockResReviewFirst">Voltar às questões do bloco</button>
      <button type="button" class="btn btn-success" id="btnBlockResFinal">Ver Resultado Geral (4 Blocos)</button>
    </div>
  `;

  container.querySelectorAll("[data-review-q]").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.getAttribute("data-review-q"));
      abrirBloco(numBloco, idx);
    });
  });

  document.getElementById("btnBlockResHome").addEventListener("click", () => mostrarTela("home"));
  document.getElementById("btnBlockResReviewFirst").addEventListener("click", () => abrirBloco(numBloco, 0));
  document.getElementById("btnBlockResFinal").addEventListener("click", () => mostrarTela("finalResult"));
}

/* ==========================================================================
   RENDERIZAÇÃO: TELA FINAL COM TOTAL GERAL
   ========================================================================== */
function renderizarResultadoGeral() {
  let totalAcertosObj = 0;
  let totalConfirmadasObj = 0;
  let totalDiscursivas = 0;

  const linhasBlocosHTML = BLOCOS_INFO.map(b => {
    const r = calcularResumoBloco(b.numero);
    totalAcertosObj += r.acertosObjetivas;
    totalConfirmadasObj += r.objetivasConfirmadas;
    totalDiscursivas += r.discursivasMarcadas;
    const perc = Math.round((r.acertosObjetivas / 10) * 100);

    return `
      <div class="wrong-item" style="border-left-color: var(--accent);">
        <div>
          <strong>Bloco ${b.numero}: ${b.titulo}</strong>
          <div style="font-size:0.86rem; color:var(--text-secondary);">
            Objetivas: <strong>${r.acertosObjetivas}/10 (${perc}%)</strong> • Discursivas respondidas: <strong>${r.discursivasMarcadas}/5</strong>
          </div>
        </div>
        <button type="button" class="btn btn-secondary" data-open-block-final="${b.numero}">
          Abrir Bloco ${b.numero}
        </button>
      </div>
    `;
  }).join("");

  const percGeralObj = Math.round((totalAcertosObj / 40) * 100);
  const percGeralDisc = Math.round((totalDiscursivas / 20) * 100);

  const container = document.getElementById("finalResultContent");
  container.innerHTML = `
    <span class="block-badge">Desempenho Consolidado</span>
    <h2>Resultado Geral do Simulado de Economia</h2>
    <p style="color:var(--text-secondary); font-size:0.94rem;">Resumo completo das 40 questões objetivas e 20 questões discursivas nos 4 blocos.</p>

    <div class="score-banner">
      <div>
        <div style="font-size:0.9rem; color:var(--text-secondary);">Total Geral — Questões Objetivas</div>
        <div class="score-big">${totalAcertosObj}/40 (${percGeralObj}%)</div>
        <div style="font-size:0.82rem; color:var(--text-muted);">${totalConfirmadasObj} de 40 objetivas confirmadas</div>
      </div>
      <div>
        <div style="font-size:0.9rem; color:var(--text-secondary);">Total Geral — Discursivas Respondidas</div>
        <div class="score-big" style="color:var(--success);">${totalDiscursivas}/20 (${percGeralDisc}%)</div>
        <div style="font-size:0.82rem; color:var(--text-muted);">Marcadas como concluídas pelo aluno</div>
      </div>
    </div>

    <h3>Desempenho por Bloco</h3>
    <div class="wrong-list">${linhasBlocosHTML}</div>

    <div style="display:flex; gap:0.75rem; flex-wrap:wrap; margin-top:1.75rem;">
      <button type="button" class="btn btn-primary" id="btnFinalBackHome">← Voltar ao início</button>
    </div>
  `;

  container.querySelectorAll("[data-open-block-final]").forEach(btn => {
    btn.addEventListener("click", () => {
      abrirBloco(Number(btn.getAttribute("data-open-block-final")), 0);
    });
  });

  document.getElementById("btnFinalBackHome").addEventListener("click", () => mostrarTela("home"));
}
