/* ==========================================================================
   BLOCO 1 — PRECIFICAÇÃO E MERCADO (10 Objetivas + 5 Discursivas)
   ========================================================================== */
const QUESTOES_BLOCO_1 = [
  {
    "id": "b1_q1",
    "bloco": 1,
    "tipo": "objetiva",
    "dificuldade": "Fácil",
    "categoria": "Definição",
    "enunciado": "Dentro dos elementos do marketing, qual é a característica exclusiva do preço em comparação aos demais elementos e qual é o seu papel no longo prazo?",
    "alternativas": [
      "É o único elemento que gera receita, devendo no longo prazo cobrir os custos e deixar uma margem de lucro razoável.",
      "É o único elemento que gera despesas diretas, servindo apenas para combater os concorrentes no curto prazo.",
      "É um elemento neutro no faturamento, pois a receita depende apenas da propaganda e da distribuição.",
      "Define exclusivamente o custo fixo da empresa, sem comunicar posicionamento de qualidade ou status.",
      "Atua apenas na redução de tributos, sendo irrelevante para recuperar custos operacionais."
    ],
    "correta": 0,
    "explicacao": "O preço é o único elemento do marketing que gera receita (os demais geram despesas). No longo prazo, essa receita precisa cobrir os custos e proporcionar uma margem de lucro considerada razoável.",
    "porqueErrada": "As demais alternativas erram porque os outros elementos do marketing é que geram despesas, e o preço é essencial para gerar receita, comunicar posicionamento e cobrir custos com margem de lucro.",
    "porqueErradaOpcoes": [
      "",
      "Quem gera despesas são os demais elementos do marketing; o preço é o único que gera receita.",
      "O preço não é neutro: ele é justamente o único elemento que gera receita para a empresa.",
      "O preço não define o custo fixo e comunica claramente o posicionamento (qualidade, status ou economia).",
      "A função central do preço para a empresa é recuperar custos e obter lucro, e não reduzir tributos."
    ]
  },
  {
    "id": "b1_q2",
    "bloco": 1,
    "tipo": "objetiva",
    "dificuldade": "Fácil",
    "categoria": "Comparação entre conceitos",
    "enunciado": "No Modelo dos 3 Cs da precificação (Custos, Concorrência e Cliente/Valor), qual é o papel exato de cada um desses três fatores na definição do preço?",
    "alternativas": [
      "O custo define o preço máximo, a concorrência define o custo variável e o cliente define o preço mínimo.",
      "O custo define o preço mínimo, a concorrência funciona como referência de mercado e o valor percebido pelo cliente define o preço máximo.",
      "A concorrência define o preço mínimo, o custo define o preço máximo e o valor percebido elimina os custos fixos.",
      "O valor percebido pelo cliente define o preço mínimo e o custo serve apenas como referência opcional de mercado.",
      "Os três fatores definem apenas o custo variável unitário, sem estabelecer limites mínimo ou máximo para o preço."
    ],
    "correta": 1,
    "explicacao": "No Modelo dos 3 Cs, o custo determina o piso (preço mínimo, pois abaixo dele não há lucro), a concorrência serve como referência de mercado e o valor percebido pelo cliente estabelece o teto (preço máximo, acima do qual a demanda desaparece).",
    "porqueErrada": "A alternativa inverte os papéis dos 3 Cs: o custo é o limite mínimo (piso), a concorrência é a referência de mercado e o valor percebido pelo cliente é o limite máximo (teto).",
    "porqueErradaOpcoes": [
      "Inverte os limites: o custo define o preço mínimo (piso) e o cliente define o preço máximo (teto).",
      "",
      "O custo nunca é o preço máximo; abaixo do custo não há lucro, logo ele é o preço mínimo.",
      "O valor percebido pelo cliente define o teto (preço máximo), e não o preço mínimo.",
      "O Modelo dos 3 Cs estabelece justamente o piso (custo), a referência (concorrência) e o teto (valor percebido)."
    ]
  },
  {
    "id": "b1_q3",
    "bloco": 1,
    "tipo": "objetiva",
    "dificuldade": "Fácil",
    "categoria": "Interpretação de exemplo",
    "enunciado": "Como se comporta a elasticidade da demanda em produtos como sal, gasolina, açúcar e certos medicamentos, em comparação a produtos como roupas, automóveis e cosméticos?",
    "alternativas": [
      "Sal e gasolina têm demanda elástica porque possuem muitos substitutos imediatos no orçamento.",
      "Roupas e automóveis têm demanda inelástica porque são bens indispensáveis e sem substitutos.",
      "Sal, gasolina, açúcar e certos medicamentos têm demanda inelástica (pequenas variações na quantidade diante de mudanças no preço), enquanto roupas, automóveis e cosméticos têm demanda elástica.",
      "Ambos os grupos apresentam demanda perfeitamente elástica, pois o preço nunca afeta a quantidade demandada.",
      "Cosméticos e roupas têm demanda inelástica porque pequenas mudanças no preço geram grandes mudanças na quantidade."
    ],
    "correta": 2,
    "explicacao": "Bens necessários ou de difícil substituição (sal, gasolina, certos medicamentos, açúcar) possuem demanda inelástica, em que mudanças no preço alteram pouco a quantidade. Já itens com muitos substitutos (roupas, automóveis, cosméticos) têm demanda elástica.",
    "porqueErrada": "Confunde demanda elástica com inelástica: bens necessários e sem substitutos próximos têm demanda inelástica, enquanto bens com muitos substitutos têm demanda elástica.",
    "porqueErradaOpcoes": [
      "Sal e gasolina têm poucos substitutos e são necessários, portanto sua demanda é inelástica, não elástica.",
      "Roupas e automóveis possuem muitos substitutos e têm demanda elástica, sofrendo grandes variações de quantidade quando o preço muda.",
      "",
      "Os dois grupos têm comportamentos opostos de sensibilidade ao preço (inelástica versus elástica).",
      "Quando pequenas mudanças no preço geram grandes mudanças na quantidade, a demanda é chamada de elástica, e não inelástica."
    ]
  },
  {
    "id": "b1_q4",
    "bloco": 1,
    "tipo": "objetiva",
    "dificuldade": "Média",
    "categoria": "Aplicação de fórmula",
    "enunciado": "Um varejista adquire um produto por um custo de R$ 80,00 e deseja obter uma taxa de retorno (margem sobre o preço de venda) de 20%. Utilizando a fórmula <span class=\"formula-box\">Preço = Custo / (1 − taxa de retorno esperada)</span>, qual deve ser o preço de venda e o que aconteceria se ele apenas somasse 20% sobre o custo?",
    "alternativas": [
      "O preço correto é R$ 96,00; somar 20% ao custo resultaria em R$ 100,00 e margem de 25%.",
      "O preço correto é R$ 104,00; somar 20% ao custo manteria a mesma margem de 20% sobre a venda.",
      "O preço correto é R$ 120,00; somar 20% ao custo daria R$ 96,00 e margem real de 20%.",
      "O preço correto é R$ 100,00; se apenas acrescentasse 20% ao custo, venderia por R$ 96,00 e teria margem real sobre o preço de venda de cerca de 16,67%.",
      "O preço correto é R$ 100,00; se acrescentasse 20% ao custo, venderia por R$ 96,00 e teria margem real de 24%."
    ],
    "correta": 3,
    "explicacao": "Pela fórmula do varejo, Preço = 80 / (1 − 0,20) = 80 / 0,80 = R$ 100,00. Se o lojista apenas somar 20% ao custo de R$ 80,00, cobrará R$ 96,00, obtendo R$ 16,00 de lucro sobre R$ 96,00, o que equivale a cerca de 16,67% de margem sobre o preço de venda.",
    "porqueErrada": "Confunde o cálculo de markup por dentro (dividir por 1 − margem) com a simples adição percentual sobre o custo.",
    "porqueErradaOpcoes": [
      "R$ 96,00 é o resultado de somar 20% diretamente ao custo, o que reduz a margem sobre a venda para cerca de 16,67%.",
      "Dividindo R$ 80,00 por 0,80 obtém-se R$ 100,00, e não R$ 104,00.",
      "Para custo de R$ 80,00 e retorno de 20%, 80 / 0,80 resulta em R$ 100,00, não R$ 120,00.",
      "",
      "Vendendo a R$ 96,00 com custo de R$ 80,00, o ganho de R$ 16,00 representa cerca de 16,67% de R$ 96,00, e não 24%."
    ]
  },
  {
    "id": "b1_q5",
    "bloco": 1,
    "tipo": "objetiva",
    "dificuldade": "Média",
    "categoria": "Aplicação de fórmula",
    "enunciado": "Uma empresa possui Custos Fixos (CF) de R$ 600,00, preço de venda unitário (PVu) de R$ 40,00 e custo variável unitário (CVu) de R$ 20,00. Considerando <span class=\"formula-box\">PE = CF / (PVu − CVu)</span>, qual é o ponto de equilíbrio e qual é a receita total nesse ponto?",
    "alternativas": [
      "15 unidades e receita total de R$ 600,00.",
      "20 unidades e receita total de R$ 800,00.",
      "30 unidades e receita total de R$ 600,00.",
      "60 unidades e receita total de R$ 2.400,00.",
      "30 unidades e receita total de R$ 1.200,00, iniciando o lucro operacional a partir da 31ª unidade."
    ],
    "correta": 4,
    "explicacao": "A margem de contribuição unitária é MCu = 40 − 20 = R$ 20,00. Logo, PE = 600 / 20 = 30 unidades. Vendendo 30 unidades a R$ 40,00, a receita total é de R$ 1.200,00, igualando a soma dos custos fixos (R$ 600,00) e variáveis (R$ 600,00).",
    "porqueErrada": "Divide os custos fixos pelo preço total em vez da margem de contribuição unitária ou calcula incorretamente a receita total no equilíbrio.",
    "porqueErradaOpcoes": [
      "Dividiu R$ 600,00 pelo preço de venda (40) sem descontar o custo variável unitário de R$ 20,00.",
      "Com 20 unidades, a margem de contribuição total seria R$ 400,00, insuficiente para cobrir os R$ 600,00 de custos fixos.",
      "O ponto de equilíbrio é de 30 unidades, mas a receita total em 30 unidades é 30 × R$ 40,00 = R$ 1.200,00 (R$ 600,00 é apenas o custo fixo).",
      "60 unidades representam o dobro do ponto de equilíbrio necessário.",
      ""
    ]
  },
  {
    "id": "b1_q6",
    "bloco": 1,
    "tipo": "objetiva",
    "dificuldade": "Média",
    "categoria": "Raciocínio",
    "enunciado": "No funcionamento das forças de oferta e demanda em um mercado, o que ocorre quando o preço praticado está ACIMA do preço de equilíbrio e quando está ABAIXO dele, respectivamente?",
    "alternativas": [
      "Acima do equilíbrio ocorre excesso de oferta; abaixo do equilíbrio ocorre excesso de demanda ou escassez.",
      "Acima do equilíbrio ocorre escassez de produtos; abaixo do equilíbrio ocorre excesso de oferta.",
      "Em ambos os casos ocorre igualdade entre quantidade ofertada e demandada.",
      "Acima do equilíbrio a quantidade demandada aumenta e a quantidade ofertada diminui.",
      "Abaixo do equilíbrio os produtores desejam vender mais e os consumidores desejam comprar menos."
    ],
    "correta": 0,
    "explicacao": "Um preço acima do equilíbrio estimula os produtores a ofertar mais, mas reduz a quantidade demandada pelos consumidores, gerando excesso de oferta. Já um preço abaixo do equilíbrio estimula a procura e desestimula a oferta, gerando excesso de demanda ou escassez.",
    "porqueErrada": "Inverte o comportamento de oferta e demanda fora do ponto de equilíbrio.",
    "porqueErradaOpcoes": [
      "",
      "Inverte os efeitos: preço alto gera sobra de mercadoria (excesso de oferta), enquanto preço baixo gera falta (escassez).",
      "A igualdade entre quantidade ofertada e demandada só existe exatamente no preço de equilíbrio.",
      "Em geral, quanto maior o preço, menor a quantidade demandada e maior a quantidade ofertada.",
      "Preços mais baixos reduzem o estímulo à oferta dos produtores e aumentam a quantidade demandada pelos consumidores."
    ]
  },
  {
    "id": "b1_q7",
    "bloco": 1,
    "tipo": "objetiva",
    "dificuldade": "Média",
    "categoria": "Comparação entre conceitos",
    "enunciado": "Compare as estratégias de preço de Penetração, Skimming (desnatação) e Loss leader (líder de prejuízo):",
    "alternativas": [
      "Skimming inicia com preço baixo para ganhar escala; Penetração cobra preço inicial alto por inovação.",
      "Penetração usa preço baixo e margem pequena para ganhar mercado; Skimming inicia com preço alto para quem valoriza inovação/exclusividade e depois pode cair; Loss leader aplica grande desconto em item popular para atrair clientes que comprarão outros itens rentáveis.",
      "Loss leader é usado apenas para produtos de luxo com margem alta; Skimming vende abaixo do custo para eliminar estoques.",
      "Penetração é indicada para consumidores insensíveis a preço; Skimming exige que o preço nunca seja reduzido ao longo do tempo.",
      "As três estratégias cobram preços abaixo do custo variável em toda a linha de produtos da empresa."
    ],
    "correta": 1,
    "explicacao": "A penetração adota preço baixo e margem unitária reduzida para ganhar participação quando o cliente é sensível a preço. O skimming lança com preço alto para o público disposto a pagar por inovação ou status e reduz depois. Já o loss leader usa grande desconto (até com prejuízo) em um produto popular para atrair tráfego à loja.",
    "porqueErrada": "Troca as definições de penetração (preço inicial baixo por escala) e skimming (preço inicial alto por inovação/status).",
    "porqueErradaOpcoes": [
      "Inverteu os conceitos: quem começa com preço baixo é a Penetração e quem começa com preço alto é o Skimming.",
      "",
      "Preço alto sustentado por luxo e exclusividade é Premium price; Loss leader usa grandes descontos em itens populares.",
      "A penetração é adequada justamente quando o consumidor é sensível a preço, e no skimming o preço pode cair depois para atingir outros segmentos.",
      "Apenas o Loss leader pode vender um item específico com prejuízo para atrair clientes para outros produtos rentáveis."
    ]
  },
  {
    "id": "b1_q8",
    "bloco": 1,
    "tipo": "objetiva",
    "dificuldade": "Difícil",
    "categoria": "Comparação entre conceitos",
    "enunciado": "Na matriz de coerência entre Preço e Qualidade percebida, como são classificadas, respectivamente, as combinações: (1) Alta qualidade com Preço baixo; (2) Média qualidade com Preço alto; e (3) Baixa qualidade com Preço médio?",
    "alternativas": [
      "(1) Premium; (2) Valor médio; (3) Economia.",
      "(1) Alto valor; (2) Assalto ao cliente; (3) Supervalor.",
      "(1) Supervalor; (2) Preço excessivo; (3) Falsa economia.",
      "(1) Valor bom; (2) Falsa economia; (3) Assalto ao cliente.",
      "(1) Supervalor; (2) Assalto ao cliente; (3) Economia."
    ],
    "correta": 2,
    "explicacao": "Pela relação preço x qualidade: alta qualidade com preço baixo entrega 'supervalor'; média qualidade com preço alto configura 'preço excessivo'; e baixa qualidade com preço médio representa 'falsa economia' (já que baixa qualidade com preço alto é 'assalto ao cliente' e com preço baixo é 'economia').",
    "porqueErrada": "Confunde as nove posições da matriz de preço versus qualidade percebida.",
    "porqueErradaOpcoes": [
      "Premium é alta qualidade + preço alto; Valor médio é média qualidade + preço médio; Economia é baixa qualidade + preço baixo.",
      "Alto valor é alta qualidade + preço médio, e 'assalto ao cliente' ocorre quando a qualidade é baixa e o preço é alto.",
      "",
      "Valor bom corresponde a média qualidade com preço baixo.",
      "'Assalto ao cliente' refere-se a baixa qualidade + preço alto (não média qualidade), e 'economia' é baixa qualidade + preço baixo."
    ]
  },
  {
    "id": "b1_q9",
    "bloco": 1,
    "tipo": "objetiva",
    "dificuldade": "Difícil",
    "categoria": "Interpretação de exemplo",
    "enunciado": "Uma fabricante vende impressoras e também os cartuchos indispensáveis para seu funcionamento, além de despachar mercadorias em duas modalidades: na primeira, o comprador paga o transporte a partir do embarque; na segunda, o vendedor assume mercadoria, seguro e frete. Na precificação do mix e no preço geográfico, esses conceitos correspondem a:",
    "alternativas": [
      "Acessórios opcionais; frete CIF na primeira modalidade e FOB na segunda.",
      "Preço de pacote; frete ponto-base na primeira modalidade e FOB na segunda.",
      "Preço de linha inteira; frete FOB em ambas as modalidades.",
      "Produtos cativos (cartuchos); frete FOB na primeira modalidade e CIF na segunda.",
      "Trade-in (cartuchos); frete CIF na primeira modalidade e ponto-base na segunda."
    ],
    "correta": 3,
    "explicacao": "Itens necessários para utilizar o produto principal (como cartuchos de impressora) são produtos cativos. No preço geográfico, no FOB o comprador assume o transporte a partir do ponto de embarque, enquanto no CIF o vendedor assume mercadoria, seguro e frete conforme o contrato.",
    "porqueErrada": "Troca o conceito de produto cativo ou inverte as modalidades de frete FOB e CIF.",
    "porqueErradaOpcoes": [
      "Cartuchos são indispensáveis (produtos cativos, não opcionais) e o frete foi invertido entre FOB e CIF.",
      "Pacotes reúnem vários produtos por valor menor que a soma individual, e ponto-base calcula o frete a partir de uma fábrica ou depósito de referência.",
      "As duas modalidades descritas são distintas: a primeira é FOB e a segunda é CIF.",
      "",
      "Trade-in é a tática em que um produto usado é entregue como parte do pagamento."
    ]
  },
  {
    "id": "b1_q10",
    "bloco": 1,
    "tipo": "objetiva",
    "dificuldade": "Difícil",
    "categoria": "Raciocínio",
    "enunciado": "Avalie duas decisões empresariais: (I) uma empresa industrial precisa contratar um fornecedor para um insumo de alto risco e grande importância operacional; (II) um banco avalia dois pedidos de empréstimo, um classificado como rating AA e outro como rating G. De acordo com a base de estudo, qual é a conduta correta?",
    "alternativas": [
      "Na decisão I, deve-se escolher sempre a menor proposta de preço; na decisão II, o cliente G terá menor taxa e menor exigência de garantias.",
      "Na decisão I, quanto maior o risco e a importância da compra, mais adequado é decidir apenas pelo menor preço; na decisão II, AA e G têm risco moderado.",
      "Na decisão I, qualidade e reputação substituem totalmente a análise de preço em compras simples; na decisão II, o rating G tem risco mínimo.",
      "Na decisão I, o preço é o único critério objetivo; na decisão II, os ratings B, C e D são classificados como risco máximo.",
      "Na decisão I, quanto maior o risco e a importância da compra, menos adequado é decidir apenas pelo menor preço (avaliando qualidade, confiança, assistência e reputação); na decisão II, AA tem risco mínimo e G tem risco alto (maior taxa, mais garantias e maior chance de recusa)."
    ],
    "correta": 4,
    "explicacao": "Em compras de fornecedores, a menor proposta nem sempre é a melhor escolha: quanto maior o risco e a importância do item, menos se deve decidir só pelo preço. No risco de crédito bancário, AA e A têm risco mínimo, B/C/D têm risco moderado, e E/F/G/H têm risco alto, implicando juros maiores, mais garantias e maior probabilidade de recusa.",
    "porqueErrada": "Ignora que compras críticas exigem avaliar múltiplos fatores além do preço e inverte a escala de risco bancário (AA a H).",
    "porqueErradaOpcoes": [
      "A menor proposta nem sempre é a melhor escolha, e o rating G possui risco alto (logo, maior taxa e mais garantias).",
      "Quanto maior o risco da compra, MENOS adequado é decidir apenas pelo menor preço; além disso, AA é risco mínimo e G é risco alto.",
      "O rating G pertence à faixa de risco alto (E, F, G e H), e não risco mínimo (AA e A).",
      "Os ratings B, C e D representam risco moderado, e a seleção de fornecedores exige avaliar qualidade, experiência, assistência e reputação.",
      ""
    ]
  },
  {
    "id": "b1_d1",
    "bloco": 1,
    "tipo": "discursiva",
    "enunciado": "Explique por que a decisão de preço é considerada uma \"arte\" na empresa e qual é a diferença entre as influências que ela sofre no curto e no longo prazo.",
    "resposta": "A decisão de preço é o problema operacional mais importante da empresa e é vista como uma 'arte' porque envolve fatores subjetivos além da matemática, como valor percebido pelo cliente, força da marca e reação dos concorrentes. No curto prazo, o preço sofre influência direta das condições do mercado; já no longo prazo, a receita gerada pelo preço precisa obrigatoriamente cobrir todos os custos e deixar uma margem de lucro considerada razoável.",
    "pontosChave": [
      "Único elemento do marketing que gera receita (os demais geram despesas).",
      "Vista como 'arte' por envolver fatores subjetivos: valor percebido, marca e reação dos concorrentes.",
      "Curto prazo: sofre influência direta do mercado.",
      "Longo prazo: a receita deve cobrir os custos e garantir uma margem de lucro razoável."
    ]
  },
  {
    "id": "b1_d2",
    "bloco": 1,
    "tipo": "discursiva",
    "enunciado": "Diferencie o cálculo do preço de venda pelo método de markup no varejo (com custo de R$ 80,00 e retorno esperado de 20% sobre o preço de venda) da simples adição de 20% sobre o custo.",
    "resposta": "Pela fórmula do varejo, Preço = Custo / (1 − taxa de retorno esperada), temos 80 / (1 − 0,20) = 80 / 0,80 = R$ 100,00, garantindo R$ 20,00 de margem (exatos 20% sobre o preço de venda). Se o comerciante apenas acrescentar 20% sobre o custo de R$ 80,00, o preço será R$ 96,00 e o ganho de R$ 16,00 representará uma margem real sobre o preço de venda de cerca de 16,67%, inferior aos 20% desejados.",
    "pontosChave": [
      "Fórmula correta: Preço = Custo / (1 − taxa de retorno esperada) → 80 / 0,80 = R$ 100,00.",
      "Acrescendo 20% direto ao custo: R$ 80 × 1,20 = R$ 96,00.",
      "Margem real sobre a venda a R$ 96,00 cai para 16 / 96 ≈ 16,67%."
    ]
  },
  {
    "id": "b1_d3",
    "bloco": 1,
    "tipo": "discursiva",
    "enunciado": "O que determina a elasticidade da demanda de um produto? Compare a demanda elástica e a inelástica citando exemplos de cada uma.",
    "resposta": "A elasticidade da demanda depende de quatro fatores: a necessidade do produto, a existência de substitutos, o peso da compra no orçamento do consumidor e o tempo disponível para se adaptar. Na demanda inelástica, mudanças no preço geram pequenas variações na quantidade comprada, ocorrendo em bens necessários ou sem substitutos próximos (sal, gasolina, açúcar, certos medicamentos). Na demanda elástica, pequenas mudanças no preço causam grandes variações na quantidade, típica de produtos com muitos substitutos (roupas, automóveis, cosméticos).",
    "pontosChave": [
      "Fatores determinantes: necessidade, existência de substitutos, peso no orçamento e tempo de adaptação.",
      "Inelástica: pouca variação na quantidade quando o preço muda (ex.: sal, gasolina, açúcar, certos medicamentos).",
      "Elástica: grande variação na quantidade quando o preço muda (ex.: roupas, automóveis, cosméticos)."
    ]
  },
  {
    "id": "b1_d4",
    "bloco": 1,
    "tipo": "discursiva",
    "enunciado": "Defina custos fixos, custos variáveis, margem de contribuição unitária (MCu) e ponto de equilíbrio (break-even point), apresentando suas respectivas fórmulas.",
    "resposta": "Custos fixos são os que não variam diretamente com o volume produzido dentro da capacidade instalada (ex.: aluguel, certos salários). Custos variáveis variam proporcionalmente à produção ou às vendas (ex.: matéria-prima, comissões, embalagens). A margem de contribuição unitária é a diferença entre o preço de venda unitário e o custo variável unitário (MCu = PVu − CVu). O ponto de equilíbrio é a quantidade vendida em que a receita total iguala os custos totais (lucro zero), calculado por PE = Custos Fixos / (PVu − CVu).",
    "pontosChave": [
      "Custos fixos: não mudam com a quantidade produzida dentro da capacidade (aluguel, salários).",
      "Custos variáveis: mudam conforme produção/vendas (matéria-prima, comissões, embalagens).",
      "Margem de contribuição unitária: MCu = PVu − CVu.",
      "Ponto de equilíbrio: PE = Custos Fixos / (PVu − CVu), onde Receita Total = Custos Totais."
    ]
  },
  {
    "id": "b1_d5",
    "bloco": 1,
    "tipo": "discursiva",
    "enunciado": "Em um mercado de concorrência próxima da perfeita, quais são as características presentes e qual é o grau de liberdade que a empresa possui para fixar seus preços?",
    "resposta": "Um mercado de concorrência próxima da perfeita caracteriza-se pela presença de muitos compradores e vendedores, produtos semelhantes (pouca diferenciação), consumidores bem informados e poucas barreiras à entrada de novas empresas. Nesse ambiente, a empresa individual tem pouquíssima liberdade para decidir seu preço isoladamente e tende a aceitar o preço determinado pelo mercado.",
    "pontosChave": [
      "Muitos compradores e vendedores atuando no mercado.",
      "Produtos semelhantes, com pouca diferenciação e poucas barreiras de entrada.",
      "Consumidores bem informados sobre preços e opções.",
      "Consequência: a empresa tem pouca liberdade e tende a aceitar o preço de mercado."
    ]
  }
];
