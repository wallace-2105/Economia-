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
      ? `${resumo.objetivasConfirmadas}/10 respondidas (Modo Prova)`
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
        <div style="display:flex; gap:0.5rem; flex-wrap:wrap; margin-top:0.9rem;">
          ${estado.modo === "estudo" ? `
          <button type="button" class="btn btn-secondary" style="flex:1;" data-study-block="${bloco.numero}">
            📖 Estudar Resumo
          </button>` : ""}
          <button type="button" class="btn btn-primary" style="flex:1;" data-start-block="${bloco.numero}">
            ${estado.modo === "prova" ? `📝 ${rotuloBotao} Prova` : `✍️ ${rotuloBotao} Questões`}
          </button>
          ${resumo.respondidasTotal > 0 ? `<button type="button" class="btn btn-secondary" data-result-block="${bloco.numero}" title="Finalizar e ver nota">Finalizar / Nota</button>` : ""}
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  grid.querySelectorAll("[data-study-block]").forEach(btn => {
    btn.addEventListener("click", () => {
      abrirAreaEnsino(Number(btn.getAttribute("data-study-block")));
    });
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
   RENDERIZAÇÃO: LISTA CONTÍNUA DE QUESTÕES DO BLOCO (UMA ABAIXO DA OUTRA)
   ========================================================================== */
function atualizarCabecalhoProgressoBloco() {
  const infoBloco = BLOCOS_INFO.find(b => b.numero === blocoAtivo);
  const questoes = obterQuestoesDoBloco(blocoAtivo);
  const resumo = calcularResumoBloco(blocoAtivo);
  const podeMostrarCoresGabarito = (estado.modo === "estudo") || estado.blocosFinalizados[blocoAtivo];

  document.getElementById("quizBlockTitle").textContent = `Bloco ${infoBloco.numero}: ${infoBloco.titulo}`;
  document.getElementById("quizBlockSubtitle").textContent = podeMostrarCoresGabarito
    ? `Modo Estudo: toque em qualquer alternativa para corrigir na hora (verde = certo, vermelho = errado)`
    : `Modo Prova: marque suas alternativas abaixo e clique em "Finalizar bloco" para liberar o gabarito`;
  document.getElementById("quizProgressText").textContent = podeMostrarCoresGabarito
    ? `Progresso do bloco: ${resumo.respondidasTotal}/${questoes.length} respondidas (${resumo.acertosObjetivas}/10 acertos nas objetivas)`
    : `Progresso da prova: ${resumo.respondidasTotal}/${questoes.length} marcadas (gabarito oculto no Modo Prova)`;
  document.getElementById("quizProgressFill").style.width = `${Math.round((resumo.respondidasTotal / questoes.length) * 100)}%`;
  atualizarBotoesModo();

  // Renderiza bolinhas numeradas (1 a 15) que rolam até a questão correspondente
  const pillsContainer = document.getElementById("questionPills");
  pillsContainer.innerHTML = "";

  questoes.forEach((q, idx) => {
    const pill = document.createElement("button");
    pill.type = "button";
    pill.className = "q-pill";
    pill.textContent = idx + 1;
    pill.title = `Ir para questão ${idx + 1} (${q.tipo === "objetiva" ? "Objetiva" : "Discursiva"})`;

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
      const cardEl = document.getElementById(`questao-card-${idx}`);
      if (cardEl) {
        cardEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
    pillsContainer.appendChild(pill);
  });
}

function renderizarTelaQuiz() {
  atualizarCabecalhoProgressoBloco();

  const questoes = obterQuestoesDoBloco(blocoAtivo);
  const feedContainer = document.getElementById("questionContainer");
  feedContainer.innerHTML = "";

  questoes.forEach((questao, idx) => {
    const cardWrapper = document.createElement("div");
    cardWrapper.id = `questao-card-${idx}`;
    cardWrapper.className = "question-card";
    feedContainer.appendChild(cardWrapper);

    if (questao.tipo === "objetiva") {
      renderizarQuestaoObjetivaNoCard(cardWrapper, questao, idx);
    } else {
      renderizarQuestaoDiscursivaNoCard(cardWrapper, questao, idx);
    }
  });
}

function classeDificuldade(dif) {
  if (dif === "Fácil") return "facil";
  if (dif === "Média") return "media";
  return "dificil";
}

function renderizarQuestaoObjetivaNoCard(cardEl, questao, idx) {
  const st = obterEstadoObjetiva(questao.id);
  const letras = ["A", "B", "C", "D", "E"];
  const emModoProvaAtivo = (estado.modo === "prova" && !estado.blocosFinalizados[blocoAtivo]);
  const mostrarGabaritoAgora =
    !emModoProvaAtivo && (st.revelouResposta || st.confirmada);

  // No Modo Estudo (ou após finalizar a prova), bloqueia após responder; no Modo Prova ativo, permite trocar de opção
  const bloqueada = !emModoProvaAtivo && st.confirmada;

  // Destaca o card inteiro em verde (acerto) ou vermelho (erro) quando corrigido
  cardEl.classList.remove("card-correct", "card-wrong");
  let seloStatusHTML = "";
  if (mostrarGabaritoAgora && st.confirmada && st.selecionada !== null) {
    if (st.selecionada === questao.correta) {
      cardEl.classList.add("card-correct");
      seloStatusHTML = `<span class="status-pill-card correct">✓ Acertou</span>`;
    } else {
      cardEl.classList.add("card-wrong");
      seloStatusHTML = `<span class="status-pill-card wrong">✗ Errou</span>`;
    }
  } else if (emModoProvaAtivo && st.confirmada && st.selecionada !== null) {
    seloStatusHTML = `<span class="tag tipo" style="margin-left:auto;">📝 Marcada: ${letras[st.selecionada]}</span>`;
  }

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
      feedbackHTML = `
        <div class="feedback-box neutral">
          <div class="feedback-title">💡 Resposta correta: ${letraCorreta} — ${textoCorreta}</div>
          <div class="feedback-line"><strong>Por que está certa:</strong> ${questao.explicacao}</div>
        </div>
      `;
    }
  } else if (emModoProvaAtivo && st.confirmada && st.selecionada !== null) {
    feedbackHTML = `
      <div class="feedback-box neutral">
        <div class="feedback-title">🔒 Alternativa ${letras[st.selecionada]} anotada na folha de prova</div>
        <div class="feedback-line">Você pode tocar em outra letra se quiser mudar sua resposta. O gabarito (verde/vermelho) aparecerá quando clicar em <strong>"Finalizar bloco"</strong>.</div>
      </div>
    `;
  }

  const acoesHTML = emModoProvaAtivo
    ? `
      <div class="question-actions">
        ${st.confirmada ? `<button type="button" class="btn btn-secondary" data-retry-btn="1">↺ Limpar marcação</button>` : ""}
      </div>
    `
    : `
      <div class="question-actions">
        <button type="button" class="btn btn-secondary" data-reveal-btn="1">
          ${st.revelouResposta ? "Ocultar resposta" : "Ver resposta"}
        </button>
        ${st.confirmada ? `<button type="button" class="btn btn-secondary" data-retry-btn="1">↺ Refazer questão</button>` : ""}
      </div>
    `;

  cardEl.innerHTML = `
    <div class="question-meta">
      <span class="tag">Questão ${idx + 1} • Objetiva</span>
      <span class="tag ${classeDificuldade(questao.dificuldade)}">${questao.dificuldade}</span>
      <span class="tag tipo">${questao.categoria}</span>
      ${seloStatusHTML}
    </div>
    <div class="question-statement">${questao.enunciado}</div>
    <div class="options-list">${opcoesHTML}</div>
    ${acoesHTML}
    ${feedbackHTML}
  `;

  // Ao tocar/clicar na alternativa: no Modo Estudo corrige na hora; no Modo Prova marca/troca a opção
  cardEl.querySelectorAll("[data-opt-index]").forEach(btn => {
    btn.addEventListener("click", () => {
      if (bloqueada) return;
      st.selecionada = Number(btn.getAttribute("data-opt-index"));
      st.confirmada = true;
      salvarEstado();
      renderizarQuestaoObjetivaNoCard(cardEl, questao, idx);
      atualizarCabecalhoProgressoBloco();
    });
  });

  // Botão Ver resposta
  const btnReveal = cardEl.querySelector("[data-reveal-btn]");
  if (btnReveal) {
    btnReveal.addEventListener("click", () => {
      st.revelouResposta = !st.revelouResposta;
      salvarEstado();
      renderizarQuestaoObjetivaNoCard(cardEl, questao, idx);
      atualizarCabecalhoProgressoBloco();
    });
  }

  // Botão Refazer questão (caso tenha clicado sem querer no celular)
  const btnRetry = cardEl.querySelector("[data-retry-btn]");
  if (btnRetry) {
    btnRetry.addEventListener("click", () => {
      st.selecionada = null;
      st.confirmada = false;
      st.revelouResposta = false;
      salvarEstado();
      renderizarQuestaoObjetivaNoCard(cardEl, questao, idx);
      atualizarCabecalhoProgressoBloco();
    });
  }
}

function renderizarQuestaoDiscursivaNoCard(cardEl, questao, idx) {
  const st = obterEstadoDiscursiva(questao.id);

  cardEl.classList.remove("card-correct", "card-wrong");
  if (st.respondida) {
    cardEl.classList.add("card-correct");
  }

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

  cardEl.innerHTML = `
    <div class="question-meta">
      <span class="tag">Questão ${idx + 1} • Discursiva</span>
      <span class="tag tipo">Questão Aberta (${idx - 9} de 5)</span>
      ${st.respondida ? `<span class="status-pill-card correct">✓ Respondida</span>` : ""}
    </div>
    <div class="question-statement">${questao.enunciado}</div>
    <div class="essay-area">
      <textarea
        class="essay-textarea"
        placeholder="Escreva sua resposta aqui... O texto é salvo automaticamente no navegador."
      ></textarea>
      <div class="essay-controls">
        <label class="checkbox-label">
          <input type="checkbox" class="essay-done-checkbox" ${st.respondida ? "checked" : ""} />
          <span>Marcar como respondida</span>
        </label>
        <button type="button" class="btn btn-secondary btn-toggle-model">
          ${st.revelouModelo ? "Ocultar resposta modelo" : "Ver resposta modelo"}
        </button>
      </div>
    </div>
    ${modeloHTML}
  `;

  const textarea = cardEl.querySelector(".essay-textarea");
  textarea.value = st.texto || "";
  textarea.addEventListener("input", e => {
    st.texto = e.target.value;
    salvarEstado();
  });

  const checkbox = cardEl.querySelector(".essay-done-checkbox");
  checkbox.addEventListener("change", e => {
    st.respondida = e.target.checked;
    salvarEstado();
    renderizarQuestaoDiscursivaNoCard(cardEl, questao, idx);
    atualizarCabecalhoProgressoBloco();
  });

  const btnModel = cardEl.querySelector(".btn-toggle-model");
  btnModel.addEventListener("click", () => {
    st.revelouModelo = !st.revelouModelo;
    salvarEstado();
    renderizarQuestaoDiscursivaNoCard(cardEl, questao, idx);
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
            Ir para questão →
          </button>
        </div>
      `;
    }).join("");

    revisaoHTML = `
      <h3 style="margin-top:1.25rem;">Questões para revisão (${resumo.erradas.length})</h3>
      <p style="font-size:0.9rem; color:var(--text-secondary);">Toque em qualquer questão abaixo para voltar diretamente a ela no bloco.</p>
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
  document.getElementById("btnBlockResReviewFirst").addEventListener("click", () => abrirBloco(numBloco, null));
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
        <div style="font-size:0.82rem; color:var(--text-muted);">${totalConfirmadasObj} de 40 objetivas respondidas</div>
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
      abrirBloco(Number(btn.getAttribute("data-open-block-final")), null);
    });
  });

  document.getElementById("btnFinalBackHome").addEventListener("click", () => mostrarTela("home"));
}

/* ==========================================================================
   RENDERIZAÇÃO: ÁREA DE ENSINO (RESUMO TEÓRICO DOS 4 BLOCOS)
   ========================================================================== */
let filtroBlocoEstudo = 0; // 0 = todos os blocos, 1..4 = bloco específico

function renderizarAreaEnsino(numBloco = filtroBlocoEstudo) {
  filtroBlocoEstudo = numBloco;
  const container = document.getElementById("studyContentContainer");
  if (!container || typeof RESUMO_TEORICO === "undefined") return;

  const abas = [
    { id: 0, rotulo: "📚 Todos os 4 Blocos" },
    { id: 1, rotulo: "Bloco 1: Precificação" },
    { id: 2, rotulo: "Bloco 2: Macroeconomia" },
    { id: 3, rotulo: "Bloco 3: Amortização" },
    { id: 4, rotulo: "Bloco 4: Alavancagem" }
  ];

  const abasHTML = abas.map(a => `
    <button type="button" class="study-tab-btn ${filtroBlocoEstudo === a.id ? "active" : ""}" data-tab-bloco="${a.id}">
      ${a.rotulo}
    </button>
  `).join("");

  const blocosFiltrados = filtroBlocoEstudo === 0
    ? RESUMO_TEORICO
    : RESUMO_TEORICO.filter(b => b.bloco === filtroBlocoEstudo);

  const blocosHTML = blocosFiltrados.map(bloco => {
    const topicosHTML = bloco.topicos.map(t => {
      const formulaHTML = t.formula ? `<div class="study-topic-formula">${t.formula}</div>` : "";
      const itensHTML = t.itens.map(item => `<li>${item}</li>`).join("");
      return `
        <div class="study-topic-card">
          <h3>${t.titulo}</h3>
          ${formulaHTML}
          <ul class="study-topic-list">${itensHTML}</ul>
        </div>
      `;
    }).join("");

    return `
      <div class="study-block-section">
        <div class="study-block-header">
          <div>
            <span class="block-badge">Material de Estudo • Bloco ${bloco.bloco}</span>
            <h2>${bloco.titulo}</h2>
            <p style="font-size:0.9rem; color:var(--text-secondary);">${bloco.subtitulo}</p>
          </div>
          <button type="button" class="btn btn-primary" data-practice-from-study="${bloco.bloco}">
            ✍️ Praticar Questões do Bloco ${bloco.bloco} →
          </button>
        </div>
        ${topicosHTML}
      </div>
    `;
  }).join("");

  container.innerHTML = `
    <div class="study-tabs">${abasHTML}</div>
    ${blocosHTML}
  `;

  container.querySelectorAll("[data-tab-bloco]").forEach(btn => {
    btn.addEventListener("click", () => {
      renderizarAreaEnsino(Number(btn.getAttribute("data-tab-bloco")));
    });
  });

  container.querySelectorAll("[data-practice-from-study]").forEach(btn => {
    btn.addEventListener("click", () => {
      abrirBloco(Number(btn.getAttribute("data-practice-from-study")), null);
    });
  });
}
