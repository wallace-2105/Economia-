/* ==========================================================================
   BLOCO 4 — ALAVANCAGEM (10 Objetivas + 5 Discursivas)
   ========================================================================== */
const QUESTOES_BLOCO_4 = [
  {
    "id": "b4_q1",
    "bloco": 4,
    "tipo": "objetiva",
    "dificuldade": "Fácil",
    "categoria": "Definição",
    "enunciado": "Qual é o conceito geral de alavancagem em finanças e qual é a condição indispensável para que exista alavancagem financeira em uma empresa?",
    "alternativas": [
      "Alavancagem é o uso de uma estrutura com custos fixos ou com capital de terceiros para ampliar os efeitos das variações nos resultados (ampliando ganhos, mas também riscos e perdas); e só existe alavancagem financeira se houver capital de terceiros na estrutura de capital.",
      "Alavancagem é a eliminação total dos custos fixos e das dívidas para garantir lucro sem risco; existe mesmo sem capital de terceiros.",
      "Alavancagem financeira ocorre exclusivamente quando a empresa opera 100% com capital próprio dos sócios.",
      "Alavancagem consiste em substituir todos os custos variáveis por descontos promocionais sem qualquer risco de perda.",
      "Alavancagem financeira é a redução do retorno do patrimônio líquido por meio do pagamento à vista de fornecedores."
    ],
    "correta": 0,
    "explicacao": "A alavancagem utiliza custos fixos (operacional) ou recursos de terceiros (financeira) para multiplicar o impacto das variações nos resultados, elevando tanto o potencial de ganho quanto o risco de perda. Para haver alavancagem financeira, é indispensável a presença de capital de terceiros (empréstimos, ações preferenciais e similares).",
    "porqueErrada": "Ignora que a alavancagem amplia também os riscos e perdas ou afirma que há alavancagem financeira sem capital de terceiros.",
    "porqueErradaOpcoes": [
      "",
      "A alavancagem não elimina riscos: ela amplia tanto os ganhos quanto as perdas, e depende de custos fixos ou capital de terceiros.",
      "Sem capital de terceiros na estrutura de capital não existe alavancagem financeira (GAF = 1, alavancagem nula).",
      "A alavancagem baseia-se em estruturas com custos fixos ou capital de terceiros, e sempre aumenta o risco.",
      "O objetivo da alavancagem financeira é usar capital de terceiros para tentar aumentar (e não reduzir) o retorno do capital próprio."
    ]
  },
  {
    "id": "b4_q2",
    "bloco": 4,
    "tipo": "objetiva",
    "dificuldade": "Fácil",
    "categoria": "Definição",
    "enunciado": "Como é calculado o Grau de Alavancagem Financeira (<span class=\"formula-box\">GAF = RPL / RAT</span>) e qual é a interpretação correta quando o GAF é igual a 1, maior que 1 ou menor que 1?",
    "alternativas": [
      "GAF = 1 indica falência iminente; GAF > 1 indica prejuízo; GAF < 1 indica alavancagem altamente favorável.",
      "Onde <span class=\"formula-box\">RPL = Lucro Líquido / Patrimônio Líquido</span> e <span class=\"formula-box\">RAT = LAJIR / Ativo Total</span>: GAF = 1 indica alavancagem nula (sem capital de terceiros; risco financeiro baixo); GAF > 1 indica alavancagem favorável; e GAF < 1 indica alavancagem desfavorável ou negativa.",
      "GAF = RAT / RPL; valores menores que 1 significam que a dívida está aumentando o retorno dos proprietários.",
      "GAF soma o lucro líquido com o ativo total; GAF = 1 significa endividamento máximo.",
      "GAF < 1 significa ausência de dívidas, enquanto GAF = 1 significa que o custo da dívida reduziu o retorno dos sócios."
    ],
    "correta": 1,
    "explicacao": "O GAF divide o Retorno sobre o Patrimônio Líquido (RPL = lucro líquido / patrimônio líquido) pelo Retorno sobre o Ativo Total (RAT = LAJIR / ativo total). Quando GAF = 1, a alavancagem é nula (sem capital de terceiros); quando GAF > 1, é favorável (a dívida eleva o retorno do patrimônio); e quando GAF < 1, é desfavorável/negativa (o custo da dívida reduz o retorno dos proprietários).",
    "porqueErrada": "Inverte a interpretação de GAF > 1 (favorável) e GAF < 1 (desfavorável) ou troca numerador e denominador da fórmula.",
    "porqueErradaOpcoes": [
      "Confundiu toda a escala: GAF > 1 é favorável, GAF = 1 é nula e GAF < 1 é desfavorável.",
      "",
      "A fórmula correta é GAF = RPL / RAT, e GAF < 1 é desfavorável (reduz o retorno dos proprietários).",
      "GAF = 1 significa alavancagem financeira nula (ausência de capital de terceiros e baixo risco financeiro).",
      "Ausência de capital de terceiros resulta em GAF = 1; quando o custo da dívida reduz o retorno dos proprietários, temos GAF < 1."
    ]
  },
  {
    "id": "b4_q3",
    "bloco": 4,
    "tipo": "objetiva",
    "dificuldade": "Fácil",
    "categoria": "Definição",
    "enunciado": "De onde decorre a alavancagem operacional e quais são as formas de alavancar a receita sem alterar o custo fixo?",
    "alternativas": [
      "Decorre exclusivamente dos juros bancários; alavanca-se a receita tomando novos empréstimos.",
      "Decorre apenas dos custos variáveis; alavanca-se a receita reduzindo a quantidade vendida e o preço.",
      "Decorre da presença de custos fixos na estrutura da empresa (após cobertos os custos fixos, o aumento nas vendas eleva o LAJIR em proporção maior); pode-se alavancar a receita sem alterar o custo fixo aumentando a quantidade vendida, aumentando o preço ou combinando as duas formas.",
      "Decorre da ausência total de custos fixos; qualquer queda na demanda aumenta o lucro operacional.",
      "Decorre da emissão de ações preferenciais; só é possível alavancar a receita dobrando o aluguel da fábrica."
    ],
    "correta": 2,
    "explicacao": "A alavancagem operacional surge porque os custos fixos não crescem junto com as vendas. Assim, depois que os custos fixos são cobertos, qualquer acréscimo nas vendas (seja por maior quantidade vendida, maior preço ou ambos) faz o lucro operacional (LAJIR) crescer em proporção ainda maior.",
    "porqueErrada": "Confunde alavancagem operacional (baseada em custos fixos) com alavancagem financeira (baseada em capital de terceiros).",
    "porqueErradaOpcoes": [
      "Juros bancários e empréstimos referem-se à alavancagem financeira, e não à operacional.",
      "A alavancagem operacional decorre da presença de custos fixos, e reduzir preço e quantidade diminuiria a receita.",
      "",
      "Sem custos fixos não há alavancagem operacional, e uma queda na demanda reduz o lucro em proporção maior.",
      "Ações preferenciais fazem parte do capital de terceiros na alavancagem financeira, e dobrar o aluguel aumentaria o custo fixo."
    ]
  },
  {
    "id": "b4_q4",
    "bloco": 4,
    "tipo": "objetiva",
    "dificuldade": "Média",
    "categoria": "Interpretação de exemplo",
    "enunciado": "No exemplo do imóvel que custa R$ 100.000,00 e é adquirido com uma entrada (capital próprio) de R$ 10.000,00, o que acontece com o investidor se o imóvel valorizar 10% (indo a R$ 110.000,00) ou se desvalorizar 10% (caindo a R$ 90.000,00)?",
    "alternativas": [
      "Com valorização de 10% o retorno sobre o capital investido é de apenas 10% (R$ 1.000,00); com queda de 10% perde apenas R$ 1.000,00.",
      "Tanto na valorização quanto na desvalorização de 10%, o investidor mantém intactos os seus R$ 10.000,00 de entrada.",
      "Com valorização de 10% o lucro é de R$ 100.000,00; com desvalorização de 10% não há prejuízo porque o banco absorve a perda.",
      "Com valorização de 10% obtém lucro de R$ 10.000,00 (100% sobre o valor investido de entrada); já com desvalorização de 10% perde toda a entrada de R$ 10.000,00, além das taxas e corretagens, demonstrando que a dívida amplia tanto o retorno quanto o prejuízo.",
      "A desvalorização de 10% gera ganho financeiro porque reduz o imposto sem afetar a entrada de R$ 10.000,00."
    ],
    "correta": 3,
    "explicacao": "Como o investidor aportou R$ 10.000,00 em um ativo de R$ 100.000,00, uma alta de 10% no imóvel (+R$ 10.000,00) dobra o capital investido (100% de lucro sobre a entrada). Em compensação, uma queda de 10% (−R$ 10.000,00) consome 100% da entrada de R$ 10.000,00, além das despesas de taxas e corretagens.",
    "porqueErrada": "Calcula o ganho/perda apenas sobre a entrada de R$ 10.000,00 em vez de considerar o valor total do ativo de R$ 100.000,00.",
    "porqueErradaOpcoes": [
      "A variação de 10% incide sobre o valor total do imóvel (R$ 100.000,00), gerando R$ 10.000,00 de ganho ou de perda.",
      "A desvalorização de R$ 10.000,00 no valor do imóvel consome integralmente a entrada de R$ 10.000,00 do comprador.",
      "Na alta de 10% o imóvel passa a valer R$ 110.000,00, logo o lucro é de R$ 10.000,00; na baixa, o prejuízo recai sobre o investidor.",
      "",
      "A queda de 10% no preço do imóvel faz o comprador perder toda a entrada de R$ 10.000,00 mais taxas e corretagens."
    ]
  },
  {
    "id": "b4_q5",
    "bloco": 4,
    "tipo": "objetiva",
    "dificuldade": "Média",
    "categoria": "Aplicação de fórmula",
    "enunciado": "Sabendo que o Grau de Alavancagem Operacional pode ser medido por <span class=\"formula-box\">GAO = % de variação do LAJIR / % de variação das vendas</span> (ou <span class=\"formula-box\">Margem de Contribuição / LAJIR</span>), se uma empresa possui GAO = 3, qual será o impacto esperado sobre o lucro operacional (LAJIR) diante de um aumento de 10% nas vendas e diante de uma queda de 10% nas vendas?",
    "alternativas": [
      "Aumento de 10% no LAJIR quando as vendas sobem 10%, e queda de 3% quando as vendas caem 10%.",
      "Aumento de 3% no LAJIR quando as vendas sobem 10%, sem qualquer redução caso as vendas caiam.",
      "Aumento de 30% no LAJIR tanto na alta quanto na queda de 10% nas vendas.",
      "Aumento de 13% no LAJIR na alta das vendas e queda de 7% na retração das vendas.",
      "Um aumento de 10% nas vendas tende a gerar aumento de cerca de 30% no lucro operacional (LAJIR), enquanto uma queda de 10% nas vendas tende a reduzir o lucro operacional em cerca de 30%."
    ],
    "correta": 4,
    "explicacao": "Com GAO = 3, a variação percentual do lucro operacional (LAJIR) é 3 vezes a variação percentual das vendas. Portanto, +10% nas vendas gera cerca de +30% no LAJIR (3 × 10%), e −10% nas vendas provoca cerca de −30% no LAJIR.",
    "porqueErrada": "Esquece de multiplicar a variação das vendas pelo GAO = 3 ou ignora a simetria do efeito em caso de queda nas vendas.",
    "porqueErradaOpcoes": [
      "Com GAO = 3, a variação de 10% nas vendas é multiplicada por 3 tanto na alta (+30%) quanto na baixa (−30%).",
      "Multiplicando 10% por GAO = 3 obtém-se 30% (não 3%), e quedas na demanda produzem o efeito inverso na mesma proporção.",
      "Uma queda nas vendas produz o efeito inverso: reduz o lucro em cerca de 30%, e não o aumenta.",
      "O GAO é um fator multiplicativo (3 × 10% = 30%), e não somado ou subtraído de 10%.",
      ""
    ]
  },
  {
    "id": "b4_q6",
    "bloco": 4,
    "tipo": "objetiva",
    "dificuldade": "Média",
    "categoria": "Aplicação de fórmula",
    "enunciado": "Uma empresa apresenta Lucro Antes dos Juros e do IR (LAJIR) de R$ 200.000,00 sobre um Ativo Total de R$ 1.000.000,00. Após pagar juros e IR, seu Lucro Líquido é de R$ 150.000,00 sobre um Patrimônio Líquido de R$ 500.000,00. Aplicando <span class=\"formula-box\">RPL = LL / PL</span>, <span class=\"formula-box\">RAT = LAJIR / Ativo Total</span> e <span class=\"formula-box\">GAF = RPL / RAT</span>, quais são os valores de RPL, RAT, GAF e sua classificação?",
    "alternativas": [
      "RPL = 30%, RAT = 20% e GAF = 1,50 (alavancagem financeira favorável, pois GAF > 1).",
      "RPL = 20%, RAT = 30% e GAF = 0,67 (alavancagem financeira favorável, pois GAF < 1).",
      "RPL = 15%, RAT = 20% e GAF = 0,75 (alavancagem financeira nula).",
      "RPL = 30%, RAT = 20% e GAF = 0,67 (alavancagem financeira desfavorável).",
      "RPL = 50%, RAT = 20% e GAF = 2,50 (alavancagem financeira desfavorável)."
    ],
    "correta": 0,
    "explicacao": "Calculando os indicadores: RPL = 150.000 / 500.000 = 0,30 (30%) e RAT = 200.000 / 1.000.000 = 0,20 (20%). Assim, GAF = 0,30 / 0,20 = 1,50. Como o GAF é maior que 1, a alavancagem financeira é favorável (o capital de terceiros elevou o retorno do patrimônio líquido de 20% para 30%).",
    "porqueErrada": "Inverte RPL com RAT na divisão do GAF ou interpreta incorretamente o resultado maior que 1.",
    "porqueErradaOpcoes": [
      "",
      "Trocou RPL com RAT e afirmou que GAF < 1 seria favorável (quando na verdade GAF < 1 é desfavorável).",
      "O RPL divide o Lucro Líquido (150.000) pelo Patrimônio Líquido (500.000), resultando em 30%, e não pelo Ativo Total.",
      "Dividindo RPL (30%) por RAT (20%), o resultado é 1,50 (favorável), e não 0,67.",
      "150.000 / 500.000 equivale a 30% de RPL (não 50%), e um GAF maior que 1 é favorável, não desfavorável."
    ]
  },
  {
    "id": "b4_q7",
    "bloco": 4,
    "tipo": "objetiva",
    "dificuldade": "Média",
    "categoria": "Raciocínio",
    "enunciado": "Quais são os principais benefícios e os cuidados indispensáveis (riscos) ao operar com posições alavancadas no mercado financeiro (como no mercado futuro em comparação ao mercado à vista)?",
    "alternativas": [
      "As perdas em operações alavancadas limitam-se sempre ao pequeno depósito inicial pago, não havendo chamadas de margem.",
      "A alavancagem libera capital (pois exige aportar apenas uma fração do ativo, permitindo posições maiores e diversificação) e diferencia o mercado futuro do mercado à vista; porém, as perdas não se limitam ao depósito pago, podendo exigir margem superior e cobertura de perdas, devendo-se avaliar a posição pelo seu valor total.",
      "O correto ao alavancar é pensar na exposição apenas pelo valor depositado de entrada, ignorando o valor total do contrato.",
      "A alavancagem impede a diversificação da carteira porque exige depositar 100% do valor do ativo à vista.",
      "Apenas o mercado à vista permite operar valores acima do patrimônio, enquanto o mercado futuro proíbe alavancagem."
    ],
    "correta": 1,
    "explicacao": "A alavancagem diferencia o mercado futuro do mercado à vista ao permitir operar valores acima do patrimônio aportando apenas uma fração (o que libera capital para diversificar). Contudo, se o mercado andar contra, pode exigir margem adicional e cobertura de prejuízos que ultrapassam o depósito inicial; por isso, deve-se dimensionar o risco pelo valor total da posição.",
    "porqueErrada": "Acredita equivocadamente que o prejuízo máximo em posições alavancadas se limita ao depósito inicial de margem.",
    "porqueErradaOpcoes": [
      "As perdas NÃO se limitam ao depósito pago: se o mercado andar contra, o investidor é chamado a cobrir as perdas.",
      "",
      "O correto é pensar na posição pelo seu valor total, e nunca apenas pelo valor depositado.",
      "Como só é preciso aportar uma fração do valor do ativo, a alavancagem libera capital e permite diversificação.",
      "É justamente a alavancagem que diferencia o mercado futuro do mercado à vista, permitindo operar valores acima do patrimônio."
    ]
  },
  {
    "id": "b4_q8",
    "bloco": 4,
    "tipo": "objetiva",
    "dificuldade": "Difícil",
    "categoria": "Aplicação de fórmula",
    "enunciado": "Uma empresa possui Margem de Contribuição total de R$ 300.000,00 e LAJIR de R$ 100.000,00. Além disso, seu Retorno sobre o Patrimônio Líquido (RPL) é de 24% e seu Retorno sobre o Ativo Total (RAT) é de 12%. Sabendo que <span class=\"formula-box\">GAO = Margem de Contribuição / LAJIR</span>, <span class=\"formula-box\">GAF = RPL / RAT</span> e <span class=\"formula-box\">GAC = GAF × GAO</span>, qual é o Grau de Alavancagem Combinada (GAC) e o que ele representa?",
    "alternativas": [
      "GAC = 1,5; mostra apenas a variação dos custos fixos da empresa.",
      "GAC = 5,0; é obtido pela soma entre GAO (3) e GAF (2).",
      "GAC = 6,0 (pois GAO = 3 e GAF = 2); mostra que cada 1% de variação nas vendas provoca uma variação de 6% no resultado dos proprietários ( ou 60% para uma variação de 10% nas vendas).",
      "GAC = 2,0; mostra que as vendas não afetam o resultado dos proprietários.",
      "GAC = 0,67; indica alavancagem combinada nula."
    ],
    "correta": 2,
    "explicacao": "Primeiro, calcula-se o GAO = 300.000 / 100.000 = 3. Em seguida, calcula-se o GAF = 24% / 12% = 2. O Grau de Alavancagem Combinada é o produto entre os dois: GAC = GAF × GAO = 2 × 3 = 6. Ele mede o efeito total de uma variação nas vendas sobre o resultado final dos proprietários.",
    "porqueErrada": "Soma GAO com GAF em vez de multiplicá-los (GAC = GAF × GAO) ou divide um pelo outro.",
    "porqueErradaOpcoes": [
      "Dividiu GAO por GAF (3 / 2 = 1,5), mas a fórmula da alavancagem combinada multiplica os dois graus (GAF × GAO).",
      "Somou 3 + 2 = 5, porém a fórmula correta da alavancagem combinada é multiplicativa: GAC = GAF × GAO = 2 × 3 = 6.",
      "",
      "2,0 é apenas o valor do GAF isolado, faltando multiplicá-lo pelo GAO de 3.",
      "Dividiu GAF por GAO (2 / 3 ≈ 0,67) em vez de multiplicar GAF × GAO."
    ]
  },
  {
    "id": "b4_q9",
    "bloco": 4,
    "tipo": "objetiva",
    "dificuldade": "Difícil",
    "categoria": "Raciocínio",
    "enunciado": "Duas empresas do mesmo setor possuem o mesmo Ativo Total de R$ 500.000,00 e o mesmo LAJIR de R$ 50.000,00 (portanto, RAT = 10%). A Empresa Alfa não possui dívidas (PL = R$ 500.000,00 e Lucro Líquido = R$ 50.000,00). A Empresa Beta possui capital de terceiros caro, restando um Patrimônio Líquido de R$ 250.000,00 e um Lucro Líquido de apenas R$ 15.000,00 após os juros. Compare o GAF de Alfa e de Beta:",
    "alternativas": [
      "Alfa tem GAF = 0 e Beta tem GAF = 2,0 (alavancagem favorável em Beta).",
      "Ambas possuem GAF = 1,0 porque têm o mesmo LAJIR e o mesmo Ativo Total.",
      "Alfa tem GAF = 1,5 e Beta tem GAF = 1,0.",
      "Alfa tem RPL = 10% e GAF = 1,0 (alavancagem nula, pois não usa capital de terceiros); Beta tem RPL = 6% (15.000 / 250.000) e GAF = 0,60 (alavancagem desfavorável/negativa, pois GAF < 1, indicando que o custo da dívida reduziu o retorno dos proprietários).",
      "Beta tem alavancagem favorável porque qualquer índice GAF menor que 1 amplia o ganho dos sócios."
    ],
    "correta": 3,
    "explicacao": "Em ambas, RAT = 50.000 / 500.000 = 10%. Na Empresa Alfa (sem dívidas), RPL = 50.000 / 500.000 = 10%, logo GAF = 10% / 10% = 1,0 (alavancagem nula). Na Empresa Beta, RPL = 15.000 / 250.000 = 6%, logo GAF = 6% / 10% = 0,60. Como GAF < 1, a alavancagem de Beta é desfavorável (o custo da dívida consumiu parte do retorno gerado pelos ativos).",
    "porqueErrada": "Confunde GAF = 1 com GAF = 0 ou interpreta um GAF menor que 1 como favorável.",
    "porqueErradaOpcoes": [
      "Sem dívidas o GAF é igual a 1 (não zero), e em Beta o RPL caiu para 6%, gerando GAF = 0,60 (desfavorável).",
      "Embora o RAT seja 10% nas duas, o endividamento caro reduziu o RPL de Beta para 6%, alterando seu GAF para 0,60.",
      "Sem capital de terceiros, o RPL de Alfa é igual ao RAT (10%), resultando em GAF = 1,0.",
      "",
      "Quando GAF < 1, a alavancagem financeira é desfavorável (negativa), pois o custo do capital de terceiros reduz o retorno dos proprietários."
    ]
  },
  {
    "id": "b4_q10",
    "bloco": 4,
    "tipo": "objetiva",
    "dificuldade": "Difícil",
    "categoria": "Raciocínio",
    "enunciado": "O que ocorre com o perfil de risco e retorno de uma empresa que combina, simultaneamente, uma estrutura com muitos custos fixos (alto GAO) e um elevado nível de endividamento (alto GAF)?",
    "alternativas": [
      "Os riscos operacional e financeiro se anulam mutuamente, tornando o lucro dos proprietários estável em qualquer cenário.",
      "O alto endividamento reduz o impacto dos custos fixos, protegendo a empresa caso haja retração nas vendas.",
      "A empresa terá baixo potencial de retorno em momentos de expansão das vendas, mas total segurança em crises.",
      "Os custos fixos deixam de existir quando a empresa contrata empréstimos bancários de longo prazo.",
      "A empresa passa a ter um elevado Grau de Alavancagem Combinada (<span class=\"formula-box\">GAC = GAF × GAO</span>), apresentando alto potencial de retorno para os proprietários quando as vendas crescem, mas grande vulnerabilidade a quedas nas vendas."
    ],
    "correta": 4,
    "explicacao": "A alavancagem combinada multiplica o efeito operacional pelo financeiro (GAC = GAF × GAO). Assim, uma empresa com altos custos fixos e alto endividamento amplifica fortemente os ganhos dos sócios quando a receita sobe, mas torna-se extremamente vulnerável a qualquer queda nas vendas.",
    "porqueErrada": "Supõe que as alavancagens operacional e financeira se compensam, quando na verdade elas se multiplicam.",
    "porqueErradaOpcoes": [
      "As duas alavancagens não se anulam; elas se multiplicam (GAC = GAF × GAO), ampliando a sensibilidade do resultado.",
      "O alto endividamento soma-se aos custos fixos, aumentando a vulnerabilidade da empresa diante de quedas nas vendas.",
      "Em momentos de crescimento das vendas, essa combinação proporciona alto potencial de retorno, mas alto risco nas quedas.",
      "Contratar empréstimos adiciona encargos financeiros (alavancagem financeira) sem eliminar os custos fixos operacionais.",
      ""
    ]
  },
  {
    "id": "b4_d1",
    "bloco": 4,
    "tipo": "discursiva",
    "enunciado": "Defina alavancagem financeira, explique por que ela depende da presença de capital de terceiros e ilustre seu efeito simétrico (ganho e perda) usando o exemplo do imóvel de R$ 100.000,00 adquirido com R$ 10.000,00 de entrada.",
    "resposta": "Alavancagem financeira é o uso de capital de terceiros (empréstimos, ações preferenciais e similares) na estrutura de capital para tentar elevar o retorno sobre o capital próprio (sem capital de terceiros, ela não existe). No exemplo do imóvel de R$ 100.000,00 comprado com entrada de R$ 10.000,00, se o bem valorizar 10% (R$ 110.000,00), o lucro de R$ 10.000,00 representa 100% de ganho sobre o valor investido. Porém, se desvalorizar 10% (R$ 90.000,00), o comprador perde toda a entrada de R$ 10.000,00 mais taxas e corretagens, provando que a dívida amplia tanto o retorno quanto o prejuízo.",
    "pontosChave": [
      "Conceito: uso de capital de terceiros para ampliar o retorno do capital próprio.",
      "Valorização de 10% no imóvel (R$ 110.000): lucro de R$ 10.000 = 100% sobre a entrada de R$ 10.000.",
      "Desvalorização de 10% (R$ 90.000): perda integral da entrada de R$ 10.000 + taxas e corretagens.",
      "Conclusão: a dívida multiplica tanto os ganhos quanto os prejuízos."
    ]
  },
  {
    "id": "b4_d2",
    "bloco": 4,
    "tipo": "discursiva",
    "enunciado": "Apresente a fórmula do Grau de Alavancagem Financeira (GAF), definindo RPL e RAT, e explique o significado de GAF = 1, GAF > 1 e GAF < 1.",
    "resposta": "A fórmula é GAF = RPL / RAT, onde RPL (Retorno sobre o Patrimônio Líquido) = Lucro Líquido / Patrimônio Líquido, e RAT (Retorno sobre o Ativo Total) = LAJIR / Ativo Total. Quando GAF = 1, a alavancagem é nula (não há capital de terceiros e o risco financeiro é baixo). Quando GAF > 1, a alavancagem é favorável, pois o capital de terceiros aumenta o retorno dos sócios. Quando GAF < 1, a alavancagem é desfavorável ou negativa, pois o custo da dívida reduz o retorno dos proprietários.",
    "pontosChave": [
      "Fórmulas: GAF = RPL / RAT; RPL = Lucro Líquido / PL; RAT = LAJIR / Ativo Total.",
      "GAF = 1: alavancagem nula (sem capital de terceiros; baixo risco financeiro).",
      "GAF > 1: alavancagem favorável (capital de terceiros eleva o retorno do patrimônio).",
      "GAF < 1: alavancagem desfavorável/negativa (custo da dívida reduz o retorno dos proprietários)."
    ]
  },
  {
    "id": "b4_d3",
    "bloco": 4,
    "tipo": "discursiva",
    "enunciado": "Explique como funciona a alavancagem operacional, apresente as duas fórmulas do Grau de Alavancagem Operacional (GAO) e interprete o que significa uma empresa ter GAO = 3.",
    "resposta": "A alavancagem operacional decorre da existência de custos fixos: uma vez cobertos os custos fixos, o aumento nas vendas faz o lucro operacional (LAJIR) crescer em proporção maior, já que o custo fixo não sobe com o volume vendido. Suas fórmulas são GAO = Margem de Contribuição / LAJIR ou GAO = % de variação do LAJIR / % de variação das vendas. Ter GAO = 3 significa que um aumento de 10% nas vendas tende a elevar o lucro operacional em cerca de 30%, mas uma queda de 10% nas vendas também tende a reduzir o lucro em cerca de 30%.",
    "pontosChave": [
      "Origem: presença de custos fixos (que não crescem com o aumento das vendas).",
      "Fórmulas: GAO = Margem de Contribuição / LAJIR ou % variação do LAJIR / % variação das vendas.",
      "Exemplo GAO = 3: +10% nas vendas gera +30% no LAJIR; −10% nas vendas gera −30% no LAJIR."
    ]
  },
  {
    "id": "b4_d4",
    "bloco": 4,
    "tipo": "discursiva",
    "enunciado": "O que é a Alavancagem Combinada (GAC), como é calculada e qual é a consequência para uma empresa que possui simultaneamente muitos custos fixos e alto endividamento?",
    "resposta": "A Alavancagem Combinada une a alavancagem financeira com a operacional por meio da fórmula GAC = GAF × GAO, mostrando o quanto uma variação nas vendas impacta o resultado final dos proprietários. Uma empresa que acumula muitos custos fixos (alto GAO) e elevado endividamento (alto GAF) possui alto potencial de retorno quando as vendas aumentam, mas sofre grande vulnerabilidade caso ocorra uma queda nas vendas.",
    "pontosChave": [
      "Fórmula: GAC = GAF × GAO.",
      "Mede o impacto total de uma variação nas vendas sobre o resultado dos proprietários.",
      "Muitos custos fixos + alto endividamento = alto potencial de ganho, mas grande vulnerabilidade a quedas nas vendas."
    ]
  },
  {
    "id": "b4_d5",
    "bloco": 4,
    "tipo": "discursiva",
    "enunciado": "Quais são os benefícios e os principais riscos da alavancagem para o investidor, e qual é a regra de prudência ao dimensionar uma posição alavancada?",
    "resposta": "O principal benefício é liberar capital, já que basta aportar uma pequena fração do valor do ativo, permitindo assumir posições maiores, operar valores acima do patrimônio (diferenciando o mercado futuro do mercado à vista) e diversificar. Em contrapartida, os riscos incluem exigência de margem superior e obrigação de cobrir prejuízos se o mercado andar contra, pois as perdas não se limitam ao depósito inicial. Por isso, deve-se sempre pensar na posição pelo seu valor total (e não apenas pelo valor depositado) e nunca alavancar sem preparo para cobrir perdas.",
    "pontosChave": [
      "Benefícios: libera capital (aporte de apenas uma fração), permite posições maiores e diversificação.",
      "Riscos: chamadas de margem superior e perdas que ultrapassam o depósito inicial.",
      "Regra de prudência: avaliar a exposição pelo valor total da posição (não só pelo depósito) e estar preparado para cobrir perdas."
    ]
  }
];
