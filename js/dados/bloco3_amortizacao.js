/* ==========================================================================
   BLOCO 3 — SISTEMAS DE AMORTIZAÇÃO (10 Objetivas + 5 Discursivas)
   ========================================================================== */
const QUESTOES_BLOCO_3 = [
  {
    "id": "b3_q1",
    "bloco": 3,
    "tipo": "objetiva",
    "dificuldade": "Fácil",
    "categoria": "Definição",
    "enunciado": "Nos sistemas de amortização de empréstimos e financiamentos, qual é a definição correta de amortização, como é composta a prestação e sobre qual base os juros são calculados?",
    "alternativas": [
      "Amortização é a devolução do capital emprestado; a prestação soma amortização + juros (e eventuais tarifas/seguros), e os juros são sempre calculados sobre o saldo devedor.",
      "Amortização é a taxa de juros cobrada pelo banco; os juros são calculados sempre sobre o valor já pago pelo devedor.",
      "Prestação é apenas o valor do seguro; a amortização é calculada multiplicando a taxa de juros pelo lucro líquido.",
      "Os juros são sempre calculados sobre o valor da última parcela, e a amortização nunca reduz o saldo devedor.",
      "Amortização e juros são sinônimos: ambos representam apenas a remuneração do banco sem abater a dívida principal."
    ],
    "correta": 0,
    "explicacao": "Amortização é a parcela destinada a devolver o capital principal emprestado. A prestação periódica equivale à soma da amortização com os juros (podendo incluir tarifas ou seguros), sendo que os juros incidem sempre sobre o saldo devedor vigente.",
    "porqueErrada": "Confunde amortização (devolução do principal) com juros ou erra a base de cálculo dos juros (que é sempre o saldo devedor).",
    "porqueErradaOpcoes": [
      "",
      "Amortização é a devolução do capital (não os juros), e os juros incidem sobre o saldo devedor restante, não sobre o valor já pago.",
      "A prestação é composta por amortização mais juros (e às vezes tarifas ou seguros).",
      "Os juros incidem sobre o saldo devedor de cada período, e a amortização é justamente o que abate esse saldo.",
      "Juros remuneram o capital emprestado, enquanto a amortização devolve o principal e reduz a dívida."
    ]
  },
  {
    "id": "b3_q2",
    "bloco": 3,
    "tipo": "objetiva",
    "dificuldade": "Fácil",
    "categoria": "Comparação entre conceitos",
    "enunciado": "Compare o comportamento das prestações, da amortização e dos juros no Sistema Price (Francês) e no Sistema de Amortização Constante (SAC):",
    "alternativas": [
      "No Price as prestações são decrescentes e a amortização é constante; no SAC as prestações são fixas.",
      "No Price as prestações são iguais (fixas), os juros são decrescentes e a amortização é crescente; no SAC a amortização é constante, os juros são decrescentes e as prestações são decrescentes em progressão aritmética.",
      "Em ambos os sistemas os juros são crescentes ao longo do contrato porque o saldo devedor aumenta.",
      "No SAC não há cobrança de juros nas primeiras parcelas, enquanto no Price toda a dívida é paga em parcela única no final.",
      "No Price a amortização é constante e os juros são fixos durante todo o financiamento."
    ],
    "correta": 1,
    "explicacao": "No Sistema Price (Francês), usado no comércio e crédito ao consumidor, as prestações são iguais, os juros caem e a amortização cresce a cada mês. No SAC, usado em financiamentos habitacionais e de longo prazo, a amortização é constante (A = PV / n), os juros caem e as prestações diminuem em progressão aritmética.",
    "porqueErrada": "Inverte as características do Sistema Price com as do SAC ou afirma que os juros aumentam com a queda do saldo devedor.",
    "porqueErradaOpcoes": [
      "Inverteu os dois sistemas: quem tem amortização constante e prestações decrescentes é o SAC, enquanto o Price tem prestações iguais.",
      "",
      "Como o saldo devedor diminui a cada amortização, os juros são decrescentes tanto no Price quanto no SAC.",
      "Ambos cobram juros sobre o saldo devedor em todas as parcelas; pagamento único no final é o segundo caso do Sistema Americano.",
      "No Price as prestações são iguais, mas como os juros caem sobre o saldo menor, a cota de amortização é crescente, não constante."
    ]
  },
  {
    "id": "b3_q3",
    "bloco": 3,
    "tipo": "objetiva",
    "dificuldade": "Fácil",
    "categoria": "Aplicação de fórmula",
    "enunciado": "No primeiro caso do Sistema Americano de Amortização (SAA), o devedor paga periodicamente apenas os juros (<span class=\"formula-box\">J = PV × i</span>) e devolve o principal no final. Para um empréstimo de R$ 10.000,00 à taxa de 2% ao mês, quanto o devedor paga em cada período intermediário e quanto desembolsa no vencimento final?",
    "alternativas": [
      "R$ 2.000,00 por período intermediário e R$ 10.000,00 no vencimento.",
      "R$ 500,00 por período intermediário e R$ 10.500,00 no vencimento.",
      "R$ 200,00 de juros em cada período intermediário e, no vencimento final, o último juro de R$ 200,00 mais os R$ 10.000,00 do principal (totalizando R$ 10.200,00 no último pagamento).",
      "R$ 0,00 nos períodos intermediários e apenas R$ 10.000,00 sem juros no vencimento.",
      "R$ 200,00 de amortização em cada mês, zerando o saldo devedor antes do vencimento."
    ],
    "correta": 2,
    "explicacao": "No primeiro caso do Sistema Americano, o saldo devedor permanece em R$ 10.000,00 até o fim, gerando juros iguais de J = 10.000 × 0,02 = R$ 200,00 por período. No vencimento final, quitam-se o último juro (R$ 200,00) e o capital principal (R$ 10.000,00).",
    "porqueErrada": "Calcula 20% em vez de 2% ou confunde o pagamento periódico de juros com amortização do principal.",
    "porqueErradaOpcoes": [
      "R$ 2.000,00 corresponderia a uma taxa de 20% ao mês; 2% de R$ 10.000,00 equivale a R$ 200,00.",
      "2% de R$ 10.000,00 resulta em R$ 200,00 por período, e não R$ 500,00.",
      "",
      "Não pagar nada nos períodos intermediários caracteriza o sistema de Pagamento Único (segundo caso), no qual os juros se capitalizam.",
      "Os R$ 200,00 periódicos são juros, e não amortização; o principal de R$ 10.000,00 permanece intacto até o vencimento."
    ]
  },
  {
    "id": "b3_q4",
    "bloco": 3,
    "tipo": "objetiva",
    "dificuldade": "Média",
    "categoria": "Aplicação de fórmula",
    "enunciado": "Considere um empréstimo de R$ 1.000,00 contratado pelo SAC à taxa de 3% ao mês para pagamento em 4 meses (<span class=\"formula-box\">A = PV / n</span>). Quais são os valores corretos da amortização mensal, das 4 prestações sucessivas e do total de juros pagos?",
    "alternativas": [
      "Amortização de R$ 200,00; prestações de R$ 230,00, R$ 222,50, R$ 215,00 e R$ 207,50; juros totais de R$ 75,00.",
      "Amortização de R$ 250,00; quatro prestações fixas de R$ 269,03; juros totais de R$ 76,11.",
      "Amortização de R$ 250,00; prestações de R$ 250,00 em todos os meses; juros totais de R$ 30,00.",
      "Amortização de R$ 250,00 em todos os meses; prestações de R$ 280,00, R$ 272,50, R$ 265,00 e R$ 257,50; total de juros de R$ 75,00 (total pago de R$ 1.075,00).",
      "Amortização crescente iniciando em R$ 239,03; prestações decrescentes e total de juros de R$ 120,00."
    ],
    "correta": 3,
    "explicacao": "No SAC, a amortização constante é A = 1.000 / 4 = R$ 250,00. Os saldos no início de cada mês são R$ 1.000, R$ 750, R$ 500 e R$ 250, gerando juros (3%) de R$ 30,00, R$ 22,50, R$ 15,00 e R$ 7,50 (soma = R$ 75,00). Somando R$ 250,00 de amortização a cada juro, as prestações são R$ 280,00, R$ 272,50, R$ 265,00 e R$ 257,50.",
    "porqueErrada": "Confunde os valores do SAC com os da tabela Price (R$ 269,03) ou erra a divisão do principal por 4 meses.",
    "porqueErradaOpcoes": [
      "Dividindo R$ 1.000,00 por 4 meses, a amortização constante é R$ 250,00, e não R$ 200,00.",
      "Prestações fixas de R$ 269,03 e juros totais de R$ 76,11 pertencem ao Sistema Price para esse mesmo empréstimo.",
      "As prestações precisam somar a amortização (R$ 250,00) com os juros de cada mês (R$ 30,00, R$ 22,50, R$ 15,00 e R$ 7,50).",
      "",
      "Amortização iniciando em R$ 239,03 refere-se ao Sistema Price; no SAC ela é fixa em R$ 250,00."
    ]
  },
  {
    "id": "b3_q5",
    "bloco": 3,
    "tipo": "objetiva",
    "dificuldade": "Média",
    "categoria": "Interpretação de exemplo",
    "enunciado": "No exemplo do Sistema Price (<span class=\"formula-box\">PMT = PV × [i(1+i)ⁿ] / [(1+i)ⁿ − 1]</span>) para PV = R$ 1.000,00, i = 3% a.m. e n = 4 meses, a prestação fixa é de R$ 269,03. Quais são os valores de juros, amortização e saldo devedor no Mês 1 e o total de juros pagos ao fim dos 4 meses?",
    "alternativas": [
      "Mês 1: juros de R$ 269,03, amortização de R$ 0,00 e saldo de R$ 1.000,00; juros totais de R$ 100,00.",
      "Mês 1: juros de R$ 22,83, amortização de R$ 246,20 e saldo de R$ 514,78; juros totais de R$ 75,00.",
      "Mês 1: juros de R$ 30,00, amortização de R$ 250,00 e saldo de R$ 750,00; juros totais de R$ 75,00.",
      "Mês 1: juros de R$ 7,84, amortização de R$ 261,19 e saldo de R$ 0,00; juros totais de R$ 30,00.",
      "Mês 1: juros de R$ 30,00, amortização de R$ 239,03 e saldo devedor de R$ 760,97; total de juros pagos nos 4 meses de R$ 76,11."
    ],
    "correta": 4,
    "explicacao": "No Mês 1 do Sistema Price, os juros são 3% de R$ 1.000,00 = R$ 30,00. Subtraindo os juros da prestação fixa (269,03 − 30,00), a amortização é de R$ 239,03 e o saldo cai para R$ 760,97. Somando os juros dos 4 meses (30,00 + 22,83 + 15,44 + 7,84), o total de juros é R$ 76,11.",
    "porqueErrada": "Troca os dados do Mês 1 pelos de outros meses da tabela Price ou pelos valores do SAC.",
    "porqueErradaOpcoes": [
      "A prestação de R$ 269,03 paga R$ 30,00 de juros e já amortiza R$ 239,03 do principal no primeiro mês.",
      "Juros de R$ 22,83, amortização de R$ 246,20 e saldo de R$ 514,78 correspondem ao Mês 2 da tabela Price, e não ao Mês 1.",
      "Amortização de R$ 250,00, saldo de R$ 750,00 e juros totais de R$ 75,00 são os números do sistema SAC.",
      "Juros de R$ 7,84 e amortização de R$ 261,19 ocorrem apenas no Mês 4 (última parcela) da tabela Price.",
      ""
    ]
  },
  {
    "id": "b3_q6",
    "bloco": 3,
    "tipo": "objetiva",
    "dificuldade": "Média",
    "categoria": "Aplicação de fórmula",
    "enunciado": "Como funciona o Sistema de Amortização Misto (SAM) e qual é o valor da 1ª prestação no SAM para o empréstimo de R$ 1.000,00 (3% a.m., 4 meses), sabendo que a 1ª prestação no SAC é R$ 280,00 e na Price é R$ 269,03?",
    "alternativas": [
      "Cada prestação do SAM é a média aritmética entre a prestação do SAC e a da Price; logo, a 1ª prestação é (280,00 + 269,03) / 2 ≈ R$ 274,52.",
      "Cada prestação do SAM soma a parcela do SAC com a da Price, resultando em R$ 549,03 no 1º mês.",
      "O SAM cobra apenas a diferença entre SAC e Price, resultando em R$ 10,97 no 1º mês.",
      "O SAM utiliza a parcela da Price nos meses ímpares (R$ 269,03) e a do SAC nos meses pares (R$ 280,00).",
      "O SAM multiplica a amortização do SAC pela taxa da Price, gerando 1ª prestação de R$ 250,00."
    ],
    "correta": 0,
    "explicacao": "No SAM (Sistema de Amortização Misto), as prestações, os juros, as amortizações e os saldos devedores equivalem à média aritmética simples entre os respectivos valores do SAC e do Sistema Price. Assim, no 1º mês: (280,00 + 269,03) / 2 = 549,03 / 2 ≈ R$ 274,52.",
    "porqueErrada": "Desconhece que o SAM é obtido pela média aritmética simples entre os valores do SAC e da Price.",
    "porqueErradaOpcoes": [
      "",
      "R$ 549,03 é apenas a soma das duas prestações; no SAM é obrigatório dividir a soma por 2 para obter a média aritmética.",
      "Subtrair uma prestação da outra não tem relação com a regra de cálculo do SAM.",
      "O SAM calcula a média aritmética em cada período, e não alterna sistemas entre meses pares e ímpares.",
      "R$ 250,00 é apenas a cota de amortização do SAC sem incluir os juros do período."
    ]
  },
  {
    "id": "b3_q7",
    "bloco": 3,
    "tipo": "objetiva",
    "dificuldade": "Média",
    "categoria": "Comparação entre conceitos",
    "enunciado": "Compare o sistema de Pagamento Único (segundo caso do Sistema Americano) com o sistema de Pagamentos Variáveis:",
    "alternativas": [
      "No Pagamento Único o devedor paga juros mensais; nos Pagamentos Variáveis o principal é quitado obrigatoriamente na primeira parcela.",
      "No Pagamento Único o capital e os juros são pagos juntos no vencimento (<span class=\"formula-box\">M = PV × (1 + i)ⁿ</span>), sendo muito usado em capital de giro industrial e títulos descontados; nos Pagamentos Variáveis o devedor paga valores variáveis conforme sua condição (como no cartão de crédito), quitando os juros sobre o saldo a cada período, mas o pagamento parcial pode prolongar a dívida e elevar muito o custo total.",
      "Nos Pagamentos Variáveis não há incidência de juros sobre o saldo devedor; no Pagamento Único as parcelas decrescem em progressão aritmética.",
      "O Pagamento Único é exclusivo para financiamento habitacional de longo prazo, enquanto o cartão de crédito usa o SAC.",
      "Ambos os sistemas proíbem o uso de juros compostos e mantêm a prestação fixa mensal."
    ],
    "correta": 1,
    "explicacao": "No Pagamento Único (segundo caso do SAA), todo o capital e os juros acumulados são pagos de uma só vez no vencimento por M = PV × (1 + i)ⁿ, sendo comum em capital de giro industrial e desconto de títulos. Já nos Pagamentos Variáveis (como cartão de crédito), o devedor amortiza conforme sua condição e paga os juros periódicos sobre o saldo, mas pagar só parte da fatura prolonga a dívida e encarece muito o custo total.",
    "porqueErrada": "Confunde o pagamento único no vencimento com pagamentos periódicos ou ignora o risco de custo elevado no pagamento parcial de faturas variáveis.",
    "porqueErradaOpcoes": [
      "Quem paga juros periódicos antes do vencimento é o primeiro caso do Sistema Americano, e não o Pagamento Único.",
      "",
      "Nos Pagamentos Variáveis os juros sobre o saldo devedor são cobrados ao fim de cada período, e parcelas em progressão aritmética são do SAC.",
      "Financiamento habitacional de longo prazo utiliza tipicamente o SAC ou SACRE, enquanto o cartão de crédito é exemplo de pagamentos variáveis.",
      "O Pagamento Único aplica juros compostos pela fórmula M = PV × (1 + i)ⁿ e não possui prestações mensais fixas."
    ]
  },
  {
    "id": "b3_q8",
    "bloco": 3,
    "tipo": "objetiva",
    "dificuldade": "Difícil",
    "categoria": "Raciocínio",
    "enunciado": "Contratando um financiamento com a mesma taxa de juros e o mesmo prazo (como o exemplo de R$ 50.000,00 a 1% a.m. em 5 pagamentos, em que a Price tem parcelas fixas de R$ 10.302,00 e o SAC inicia em R$ 10.500,00 caindo até R$ 10.100,00), por que o SAC gera menos juros totais que o Sistema Price?",
    "alternativas": [
      "Porque a taxa percentual de juros contratada no SAC é sempre menor que a taxa da Price.",
      "Porque no SAC os juros são calculados sobre o valor da prestação e não sobre o saldo devedor.",
      "Porque no SAC a amortização inicial é maior (exigindo prestações iniciais mais altas), o que faz o saldo devedor cair mais rapidamente desde o primeiro mês e reduz a base de cálculo dos juros nos períodos seguintes.",
      "Porque na Price o devedor só começa a amortizar o capital principal na última parcela do contrato.",
      "Porque o SAC elimina a cobrança de juros na segunda metade do financiamento."
    ],
    "correta": 2,
    "explicacao": "Para mesma taxa e mesmo prazo, o SAC desembolsa uma amortização maior logo nas primeiras parcelas (por exemplo, R$ 250,00 contra R$ 239,03 no 1º mês do caso de R$ 1.000,00, ou parcela inicial de R$ 10.500,00 contra R$ 10.302,00 no caso de R$ 50.000,00). Como os juros incidem sempre sobre o saldo devedor, abater o saldo mais rápido no início resulta em menor volume total de juros ao longo do prazo.",
    "porqueErrada": "Atribui a economia de juros do SAC a uma mudança na regra de juros, quando na verdade ela decorre da redução mais rápida do saldo devedor no início.",
    "porqueErradaOpcoes": [
      "A comparação considera exatamente a mesma taxa de juros e o mesmo prazo nos dois sistemas.",
      "Em qualquer sistema de amortização, os juros são sempre calculados sobre o saldo devedor.",
      "",
      "Na Price há amortização desde a 1ª parcela (e ela cresce a cada mês), apenas começando menor do que no SAC.",
      "O SAC cobra juros em todos os períodos até que o saldo devedor seja zerado na última prestação."
    ]
  },
  {
    "id": "b3_q9",
    "bloco": 3,
    "tipo": "objetiva",
    "dificuldade": "Difícil",
    "categoria": "Interpretação de exemplo",
    "enunciado": "Sobre o SACRE (Sistema de Amortização Crescente), quais são suas características técnicas reais, como se comporta o exemplo de R$ 50.000,00 citado na base e para qual perfil ele é indicado?",
    "alternativas": [
      "É idêntico ao Sistema Americano: o devedor paga apenas juros e nunca amortiza a dívida antes do último mês.",
      "Tem amortização decrescente e juros crescentes, aumentando o risco de inadimplência para quem tem renda incerta.",
      "Não cobra juros no início do contrato, abatendo 100% da prestação diretamente no saldo devedor.",
      "Combina características do SAC e da Price, tendo como característica central a amortização crescente com recálculos periódicos da prestação e juros maiores no início (no exemplo de R$ 50.000,00 com parcelas iniciais de R$ 2.500,00, cerca de R$ 1.600,00 são juros e cerca de R$ 900,00 abatem a dívida); é indicado para quem busca parcelas mais estáveis, menos juros no longo prazo e menor chance de inadimplência diante de incerteza na renda.",
      "É utilizado exclusivamente em cartões de crédito rotativo e desconto de duplicatas industriais."
    ],
    "correta": 3,
    "explicacao": "O SACRE mescla elementos do SAC e da Price: possui juros mais elevados no começo do contrato e amortização crescente ao longo do tempo, com recálculos periódicos da prestação. Como o abatimento da dívida cresce a cada prestação, reduz o risco de inadimplência para quem tem incerteza sobre a renda e permite pagar menos juros no longo prazo.",
    "porqueErrada": "Descaracteriza a amortização crescente com recálculos periódicos do SACRE ou inverte a proporção inicial entre juros e amortização.",
    "porqueErradaOpcoes": [
      "No SACRE há amortização desde o início (cerca de R$ 900,00 no exemplo citado), e essa amortização cresce ao longo do tempo.",
      "Como o nome indica (Sistema de Amortização Crescente), a amortização cresce e a chance de inadimplência cai.",
      "No início do contrato do SACRE os juros são maiores (cerca de R$ 1.600,00 de uma parcela de R$ 2.500,00 no exemplo).",
      "",
      "Cartão de crédito usa pagamentos variáveis e desconto de títulos usa pagamento único."
    ]
  },
  {
    "id": "b3_q10",
    "bloco": 3,
    "tipo": "objetiva",
    "dificuldade": "Difícil",
    "categoria": "Aplicação de fórmula",
    "enunciado": "Uma indústria toma um empréstimo de R$ 10.000,00 para capital de giro pelo sistema de Pagamento Único (segundo caso do Sistema Americano), com juros compostos de 10% ao período durante 2 períodos (<span class=\"formula-box\">M = PV × (1 + i)ⁿ</span>). Se ela optasse pelo primeiro caso do Sistema Americano (pagamento periódico de juros) nas mesmas condições, qual seria a diferença entre o total de juros pagos nas duas modalidades?",
    "alternativas": [
      "No Pagamento Único pagaria R$ 2.000,00 de juros; no primeiro caso pagaria R$ 2.100,00.",
      "Em ambos os casos o total de juros seria de R$ 2.000,00, pois a taxa e o prazo são iguais.",
      "No Pagamento Único pagaria R$ 1.000,00 de juros; no primeiro caso pagaria R$ 2.000,00.",
      "Em ambos os casos o montante final seria de R$ 12.100,00 sem qualquer pagamento no período 1.",
      "No Pagamento Único o montante no vencimento é R$ 12.100,00 (R$ 2.100,00 de juros compostos acumulados), enquanto no primeiro caso do SAA pagaria R$ 1.000,00 de juros em cada um dos 2 períodos (total de R$ 2.000,00 de juros), resultando em R$ 100,00 a mais de juros no Pagamento Único."
    ],
    "correta": 4,
    "explicacao": "No Pagamento Único com juros compostos, M = 10.000 × (1 + 0,10)² = 10.000 × 1,21 = R$ 12.100,00 (sendo R$ 2.100,00 de juros). Já no primeiro caso do SAA, os juros de R$ 1.000,00 (10.000 × 10%) são pagos ao fim do 1º período, não se incorporando ao saldo para o 2º período; logo, pagam-se dois juros de R$ 1.000,00 (total de R$ 2.000,00), uma diferença de R$ 100,00.",
    "porqueErrada": "Esquece a capitalização dos juros sobre juros no sistema de Pagamento Único: (1,10)² = 1,21.",
    "porqueErradaOpcoes": [
      "Inverteu os resultados: quem acumula juros sobre juros (R$ 2.100,00) é o Pagamento Único.",
      "No Pagamento Único os juros do 1º período não são pagos e rendem juros no 2º período, elevando os juros de R$ 2.000,00 para R$ 2.100,00.",
      "Com 10% ao período em 2 períodos sobre R$ 10.000,00, os juros superam R$ 1.000,00 em ambas as modalidades.",
      "No primeiro caso do SAA existe pagamento de R$ 1.000,00 de juros no fim do 1º período.",
      ""
    ]
  },
  {
    "id": "b3_d1",
    "bloco": 3,
    "tipo": "discursiva",
    "enunciado": "Compare o Sistema Price (Francês) e o Sistema de Amortização Constante (SAC) quanto ao comportamento das prestações, da amortização, dos juros e do total de juros pagos para um mesmo prazo e taxa.",
    "resposta": "No Sistema Price, as prestações são iguais (fixas), os juros são decrescentes e a cota de amortização é crescente ao longo do tempo. No SAC, a amortização é constante (A = PV / n), os juros são decrescentes e as prestações caem em progressão aritmética. Para a mesma taxa e prazo, o SAC exige prestações iniciais mais altas, mas abate o saldo devedor mais rapidamente e, por isso, gera um total de juros menor que o Sistema Price.",
    "pontosChave": [
      "Price: prestações iguais, juros decrescentes e amortização crescente.",
      "SAC: amortização constante (PV / n), juros decrescentes e prestações decrescentes.",
      "Comparação: SAC tem parcelas iniciais maiores, porém gera menos juros totais que a Price."
    ]
  },
  {
    "id": "b3_d2",
    "bloco": 3,
    "tipo": "discursiva",
    "enunciado": "Demonstre passo a passo os valores de amortização, juros e prestação de cada um dos 4 meses de um empréstimo de R$ 1.000,00 a 3% ao mês pelo sistema SAC.",
    "resposta": "Pelo SAC, a amortização mensal fixa é A = 1.000 / 4 = R$ 250,00. No Mês 1 (saldo R$ 1.000): juros = R$ 30,00 e prestação = R$ 280,00. No Mês 2 (saldo R$ 750): juros = R$ 22,50 e prestação = R$ 272,50. No Mês 3 (saldo R$ 500): juros = R$ 15,00 e prestação = R$ 265,00. No Mês 4 (saldo R$ 250): juros = R$ 7,50 e prestação = R$ 257,50, zerando a dívida com R$ 75,00 de juros totais e R$ 1.075,00 de total pago.",
    "pontosChave": [
      "Amortização constante em todos os 4 meses: 1.000 / 4 = R$ 250,00.",
      "Juros mensais (3% sobre o saldo): R$ 30,00; R$ 22,50; R$ 15,00; e R$ 7,50 (total = R$ 75,00).",
      "Prestações mensais (Amortização + Juros): R$ 280,00; R$ 272,50; R$ 265,00; e R$ 257,50 (total = R$ 1.075,00)."
    ]
  },
  {
    "id": "b3_d3",
    "bloco": 3,
    "tipo": "discursiva",
    "enunciado": "Explique a diferença entre o primeiro caso do Sistema Americano (SAA) e o segundo caso (Pagamento Único), indicando em quais operações o Pagamento Único é muito utilizado.",
    "resposta": "No primeiro caso do Sistema Americano (SAA), o devedor paga periodicamente apenas os juros (J = PV × i, que são iguais em todos os períodos) e devolve o capital principal integralmente no vencimento, junto com o último juro. Já no segundo caso (Pagamento Único), não há pagamentos intermediários: o capital e todos os juros acumulados são pagos juntos apenas no vencimento (M = PV × (1 + i)ⁿ). O Pagamento Único é muito usado em operações de capital de giro industrial e em títulos descontados em bancos.",
    "pontosChave": [
      "1º caso do SAA: pagamento periódico apenas dos juros (J = PV × i) e devolução do principal no final.",
      "2º caso (Pagamento Único): capital e juros pagos juntos somente no vencimento, com M = PV × (1 + i)ⁿ.",
      "Aplicações do Pagamento Único: capital de giro industrial e títulos descontados em bancos."
    ]
  },
  {
    "id": "b3_d4",
    "bloco": 3,
    "tipo": "discursiva",
    "enunciado": "O que são o Sistema de Amortização Crescente (SACRE) e o Sistema de Amortização Misto (SAM), e como cada um se relaciona com o SAC e o Sistema Price?",
    "resposta": "O SACRE combina características do SAC e da Price: apresenta juros maiores no início do contrato e tem como característica central a amortização crescente ao longo do tempo, com recálculos periódicos da prestação (ajudando a pagar menos juros no longo prazo e reduzindo a chance de inadimplência). Já o SAM calcula cada prestação, juro, amortização e saldo devedor exatamente como a média aritmética simples entre os valores correspondentes do SAC e do Sistema Price.",
    "pontosChave": [
      "SACRE: combina SAC e Price, com juros maiores no início, amortização crescente e recálculos periódicos da prestação.",
      "Vantagem do SACRE: abatimento crescente da dívida reduz risco de inadimplência e juros no longo prazo.",
      "SAM: prestações, juros, amortizações e saldos são a média aritmética entre SAC e Price."
    ]
  },
  {
    "id": "b3_d5",
    "bloco": 3,
    "tipo": "discursiva",
    "enunciado": "Como funciona o sistema de Pagamentos Variáveis, qual é o seu exemplo clássico e qual é o risco financeiro para o devedor ao realizar pagamentos parciais?",
    "resposta": "No sistema de Pagamentos Variáveis, não há parcela fixa predeterminada: o devedor amortiza quantias variáveis de acordo com sua condição financeira e o acordo firmado, pagando os juros incidentes sobre o saldo devedor ao final de cada período. O exemplo clássico é o cartão de crédito; o grande risco é que realizar pagamentos parciais da dívida prolonga o prazo de quitação e eleva drasticamente o custo total pago em juros.",
    "pontosChave": [
      "Devedor paga valores variáveis conforme sua condição e acordo.",
      "Juros calculados sobre o saldo devedor são cobrados ao fim de cada período.",
      "Exemplo clássico: cartão de crédito; risco: o pagamento parcial prolonga a dívida e encarece muito o custo total."
    ]
  }
];
