/* ==========================================================================
   ÁREA DE ENSINO — RESUMO TEÓRICO COMPLETO DOS 4 BLOCOS (BASE DE CONTEÚDO)
   ========================================================================== */
const RESUMO_TEORICO = [
  {
    bloco: 1,
    titulo: "Bloco 1 — Precificação e Mercado",
    subtitulo: "Conceito de preço, 3 Cs, markup, oferta e demanda, elasticidade, custos, ponto de equilíbrio, estratégias, táticas e risco de crédito.",
    topicos: [
      {
        titulo: "1. Conceito e Importância do Preço",
        itens: [
          "<strong>Troca econômica:</strong> O consumidor entrega dinheiro para satisfazer uma necessidade; a empresa entrega o produto buscando recuperar custos e obter lucro.",
          "<strong>Único gerador de receita:</strong> O preço é o único elemento do marketing que gera receita. Todos os demais elementos geram despesas.",
          "<strong>Posicionamento:</strong> Preço alto sugere qualidade, exclusividade ou status. Preço baixo sugere economia, acessibilidade ou ganho de mercado.",
          "<strong>Decisão operacional mais importante:</strong> No <em>curto prazo</em>, sofre influência direta do mercado. No <em>longo prazo</em>, a receita deve cobrir os custos e deixar uma margem de lucro razoável. Por envolver fatores subjetivos (valor percebido, marca, reação dos concorrentes), é vista como uma <strong>\"arte\"</strong>."
        ]
      },
      {
        titulo: "2. Métodos de Precificação e o Modelo dos 3 Cs",
        itens: [
          "<strong>Baseada em custos:</strong> custo + margem de lucro.",
          "<strong>Baseada na concorrência:</strong> considera os preços dos concorrentes e de produtos substitutos.",
          "<strong>Baseada em valor:</strong> considera quanto o cliente percebe de benefício e está disposto a pagar.",
          "<strong>Modelo dos 3 Cs:</strong> O <strong>Custo</strong> define o preço <em>MÍNIMO</em> (abaixo dele não há lucro); a <strong>Concorrência</strong> é a <em>referência de mercado</em>; o <strong>Valor percebido pelo cliente</strong> define o preço <em>MÁXIMO</em> (preço alto demais elimina a demanda)."
        ]
      },
      {
        titulo: "3. Markup (Precificação por Custos no Varejo)",
        formula: "Preço = Custo / (1 − taxa de retorno esperada)",
        itens: [
          "<strong>Exemplo prático:</strong> Custo de R$ 80,00 e margem desejada de 20% sobre o preço de venda → <span class=\"formula-box\">80 / (1 − 0,20) = 80 / 0,80 = R$ 100,00</span>.",
          "<strong>Cuidado com a confusão comum:</strong> Acrescentar 20% diretamente ao custo daria R$ 96,00, e a margem real sobre o preço de venda cairia para cerca de <strong>16,67%</strong> (R$ 16 / R$ 96)."
        ]
      },
      {
        titulo: "4. Oferta, Demanda e Elasticidade",
        itens: [
          "<strong>Demanda:</strong> quantidade que os consumidores desejam comprar em cada preço. Em geral, quanto maior o preço, menor a quantidade demandada.",
          "<strong>Oferta:</strong> quantidade que os produtores desejam vender em cada preço. Em geral, preço maior estimula maior quantidade ofertada.",
          "<strong>Preço de equilíbrio:</strong> ponto em que quantidade ofertada = quantidade demandada. <em>Acima do equilíbrio:</em> excesso de oferta. <em>Abaixo do equilíbrio:</em> excesso de demanda ou escassez.",
          "<strong>Demanda Inelástica:</strong> pequenas mudanças no preço provocam pequenas mudanças na quantidade. Ocorre em bens necessários ou de difícil substituição (<em>sal, gasolina, certos medicamentos, açúcar</em>).",
          "<strong>Demanda Elástica:</strong> pequenas mudanças no preço provocam grandes mudanças na quantidade. Ocorre quando há muitos substitutos (<em>roupas, automóveis, cosméticos</em>).",
          "<strong>Fatores da elasticidade:</strong> necessidade do produto, existência de substitutos, peso da compra no orçamento e tempo para o consumidor se adaptar."
        ]
      },
      {
        titulo: "5. Custos e Ponto de Equilíbrio (Break-even Point)",
        formula: "MCu = PVu − CVu   |   PE = Custos Fixos / (PVu − CVu)",
        itens: [
          "<strong>Custos Fixos (CF):</strong> não variam diretamente com a quantidade produzida dentro da capacidade (ex.: aluguel, certos salários).",
          "<strong>Custos Variáveis (CV):</strong> variam com a produção ou as vendas (ex.: matéria-prima, comissões, embalagens).",
          "<strong>Margem de Contribuição Unitária (MCu):</strong> preço de venda unitário (<span class=\"formula-box\">PVu</span>) menos custo variável unitário (<span class=\"formula-box\">CVu</span>).",
          "<strong>Ponto de Equilíbrio (PE):</strong> quantidade vendida em que Receita Total = Custos Totais (lucro e prejuízo zerados).",
          "<strong>Exemplo prático:</strong> CF = R$ 600, PVu = R$ 40, CVu = R$ 20 → <span class=\"formula-box\">PE = 600 / (40 − 20) = 30 unidades</span>. Com 30 unidades: Receita = R$ 1.200, CV = R$ 600, CF = R$ 600 (Custo Total = R$ 1.200). A partir da 31ª unidade começa o lucro operacional."
        ]
      },
      {
        titulo: "6. Estratégias de Preço e Matriz Preço × Qualidade",
        itens: [
          "<strong>Penetração:</strong> preço baixo e margem unitária pequena para ganhar mercado (indicada quando o consumidor é sensível a preço e a escala reduz custos).",
          "<strong>Skimming (desnatação):</strong> preço inicial alto para quem paga mais por inovação, exclusividade ou status; depois pode cair para alcançar outros segmentos.",
          "<strong>Recuperação rápida de caixa:</strong> preço e margem altos para recuperar rápido o investimento em P&D (comum em produtos de ciclo de vida curto).",
          "<strong>Loss leader (líder de prejuízo):</strong> produto popular com grande desconto (às vezes com prejuízo) para atrair clientes que comprarão outros itens rentáveis.",
          "<strong>Outras estratégias:</strong> <em>Premium price</em> (exclusividade/marca superior), <em>Preço competitivo</em> (acompanhar/combater concorrentes), <em>Preço psicológico</em> (R$ 2,99), <em>Promocional</em> (redução temporária) e <em>Diferenciado</em> (por cliente, região, quantidade ou ocasião).",
          "<strong>Concorrência próxima da perfeita:</strong> muitos compradores e vendedores, produtos semelhantes, consumidores bem informados, pouca diferenciação e poucas barreiras de entrada → a empresa tem pouca liberdade e tende a aceitar o preço de mercado.",
          "<strong>Matriz Preço × Qualidade:</strong> Alta qualidade + preço alto = <em>Premium</em> | Alta + médio = <em>Alto valor</em> | Alta + baixo = <em>Supervalor</em> | Média + alto = <em>Preço excessivo</em> | Média + médio = <em>Valor médio</em> | Média + baixo = <em>Valor bom</em> | Baixa + alto = <em>\"Assalto ao cliente\"</em> | Baixa + médio = <em>Falsa economia</em> | Baixa + baixo = <em>Economia</em>."
        ]
      },
      {
        titulo: "7. Táticas, Frete Geográfico, Mix, Fornecedores e Risco Bancário",
        itens: [
          "<strong>Táticas de preço:</strong> prazo de pagamento, desconto por volume/quantidade, redução de tabela, preço combinado, por segmento, desconto por utilização, sazonal, à vista, para intermediários e <em>trade-in</em> (usado dado como parte do pagamento).",
          "<strong>Preço geográfico:</strong> <strong>FOB</strong> (comprador paga o transporte a partir do embarque); <strong>CIF</strong> (vendedor assume mercadoria, seguro e frete conforme contrato); <strong>Ponto-base</strong> (frete calculado a partir de local de referência, como fábrica/depósito).",
          "<strong>Mix de produtos:</strong> linha inteira; acessórios opcionais; <strong>produtos cativos</strong> (necessários para usar o principal, como cartuchos de impressora); e <strong>pacotes</strong> (vendidos juntos por valor menor que a soma dos separados).",
          "<strong>Compra de fornecedores:</strong> a menor proposta nem sempre é a melhor escolha. Avaliam-se preço, qualidade, experiência, confiança, assistência, risco e reputação. Quanto maior o risco e a importância da compra, menos adequado é decidir só pelo menor preço.",
          "<strong>Risco de crédito bancário:</strong> <strong>AA e A</strong> = risco mínimo | <strong>B, C e D</strong> = risco moderado | <strong>E, F, G e H</strong> = risco alto. Quanto maior o risco, maior a taxa de juros, maior a exigência de garantias e maior a chance de recusa."
        ]
      }
    ]
  },
  {
    bloco: 2,
    titulo: "Bloco 2 — Noções de Macroeconomia",
    subtitulo: "Micro vs. macro, curto e longo prazo, objetivos, Keynes e emprego, inflação, renda per capita, políticas e mercados macroeconômicos.",
    topicos: [
      {
        titulo: "1. Micro × Macro, Prazos e Equilíbrio Parcial × Geral",
        itens: [
          "<strong>Macroeconomia:</strong> estuda a economia como um todo (renda nacional, produto, nível geral de preços, emprego/desemprego, moeda, juros, balanço de pagamentos e câmbio).",
          "<strong>Microeconomia:</strong> estuda consumidores, empresas e mercados específicos (ex.: preço de um produto isolado). Não há conflito entre elas, apenas diferença de enfoque.",
          "<strong>Curto × Longo Prazo:</strong> A macroeconomia tradicional foca no <em>curto prazo</em> (desemprego, inflação, nível de atividade). A teoria do crescimento e desenvolvimento foca no <em>longo prazo</em> (capacidade produtiva, tecnologia, qualificação, mudanças estruturais).",
          "<strong>Equilíbrio Parcial × Geral:</strong> O <em>parcial</em> analisa um mercado isolado mantendo os demais constantes. O <em>geral</em> considera as interações simultâneas entre mercados (juros, câmbio e renda afetando consumo, investimento, produção e emprego ao mesmo tempo)."
        ]
      },
      {
        titulo: "2. Os 4 Objetivos Macroeconômicos e a Questão do Emprego",
        itens: [
          "<strong>Quatro objetivos da política macroeconômica:</strong> (1) Alto nível de emprego; (2) Estabilidade de preços; (3) Distribuição de renda socialmente justa; (4) Crescimento econômico.",
          "<strong>Pensamento liberal vs. Crise de 1929:</strong> Os liberais defendiam que o mercado sem Estado levaria ao pleno emprego pela \"mão invisível\". A quebra da Bolsa de Nova York (1929) mostrou que o desemprego elevado e a capacidade ociosa podem durar longo período.",
          "<strong>John Maynard Keynes:</strong> defendeu a intervenção do Estado na economia, principalmente pelos gastos públicos e pelo estímulo à demanda agregada."
        ]
      },
      {
        titulo: "3. Inflação, Renda per Capita e Crescimento Econômico",
        formula: "Renda per capita = Renda Nacional / População",
        itens: [
          "<strong>Inflação:</strong> aumento <em>contínuo e generalizado</em> do nível de preços (alta isolada de um item não é inflação). Problemas: distorce a distribuição de renda, afeta expectativas, reduz o poder de compra e prejudica o balanço de pagamentos.",
          "<strong>Foco e causas da inflação:</strong> Países industrializados costumam focar no desemprego; países em desenvolvimento focam na inflação. Depende da estrutura de mercado (oligopólio repassa mais custos que concorrência) e da abertura econômica (economia mais aberta tem mais concorrência e menores preços).",
          "<strong>Distribuição de renda:</strong> Um país pode crescer mantendo desigualdade alta. A renda per capita é apenas uma média e não mostra a distribuição; sozinha, não garante alto padrão de vida nem justiça social.",
          "<strong>Crescimento econômico:</strong> Com desemprego e capacidade ociosa, estímulos à produção aumentam o produto sem novos recursos. No limite da capacidade, crescer exige mais recursos, investimentos, tecnologia, produtividade, infraestrutura e qualificação. Para elevar o padrão de vida, a <strong>renda real precisa crescer mais que a população</strong>."
        ]
      },
      {
        titulo: "4. Os 5 Instrumentos de Política Macroeconômica",
        itens: [
          "<strong>1. Política Fiscal (gastos públicos e tributos):</strong> Para combater inflação de demanda → reduzir gastos e/ou aumentar impostos. Para estimular emprego/crescimento → aumentar gastos e/ou reduzir impostos. É a <strong>mais eficaz para melhorar a distribuição de renda</strong> (tributar rendas altas e gastar nos setores menos favorecidos).",
          "<strong>2. Política Monetária (moeda, crédito e juros):</strong> Instrumentos: <em>emissão monetária, reservas compulsórias, open market</em> (compra e venda de títulos públicos) e <em>redesconto</em> (empréstimo do BC aos bancos comerciais). Expansionista estimula atividade; contracionista contém inflação, mas pode frear produção e emprego.",
          "<strong>3. Política Cambial:</strong> atua sobre a taxa de câmbio (fixa, administrada ou flutuante).",
          "<strong>4. Política Comercial:</strong> tarifas, incentivos e restrições a exportações e importações.",
          "<strong>5. Política de Rendas:</strong> intervenção direta em salários e preços (controle ou congelamento). Pode ter efeito temporário, mas gera escassez e distorções porque os preços deixam de responder ao mercado."
        ]
      },
      {
        titulo: "5. Os 5 Mercados Macroeconômicos (Parte Real × Parte Monetária)",
        itens: [
          "<strong>Parte \"Real\" — Mercado de Bens e Serviços:</strong> determina produto, renda e nível geral de preços (oferta agregada = demanda agregada).",
          "<strong>Parte \"Real\" — Mercado de Trabalho:</strong> determina nível de emprego e salários.",
          "<strong>Parte \"Monetária\" — Mercado Monetário:</strong> oferta e demanda de moeda definem a taxa de juros e o estoque de moeda.",
          "<strong>Parte \"Monetária\" — Mercado de Títulos:</strong> agentes superavitários (poupam/emprestam) vs. deficitários (tomam emprestado) definem o preço dos títulos.",
          "<strong>Parte \"Monetária\" — Mercado de Divisas (moedas estrangeiras):</strong> exportações e entrada de capital geram <em>oferta</em>; importações e saída de capital geram <em>demanda</em>. Define a taxa de câmbio, com possível intervenção do Banco Central."
        ]
      }
    ]
  },
  {
    bloco: 3,
    titulo: "Bloco 3 — Sistemas de Amortização",
    subtitulo: "Conceitos básicos, Sistema Price (Francês), SAC, comparação Price × SAC, SACRE, SAM, Sistema Americano (SAA), Pagamento Único e Variáveis.",
    topicos: [
      {
        titulo: "1. Conceitos Fundamentais",
        formula: "Prestação = Amortização + Juros (+ eventuais tarifas/seguros)",
        itens: [
          "<strong>Amortização:</strong> é a devolução do capital principal emprestado.",
          "<strong>Regra de ouro dos juros:</strong> Os juros são <strong>sempre calculados sobre o saldo devedor</strong> de cada período."
        ]
      },
      {
        titulo: "2. Sistema Price (Francês) e Exemplo Numérico",
        formula: "PMT = PV × [i(1+i)ⁿ] / [(1+i)ⁿ − 1]",
        itens: [
          "<strong>Características:</strong> Prestações iguais (fixas), juros decrescentes e amortização crescente. Muito usado em compras a prazo de bens de consumo e CDC.",
          "<strong>Exemplo (PV = R$ 1.000 | i = 3% a.m. | n = 4 meses):</strong> Prestação fixa <span class=\"formula-box\">PMT ≈ R$ 269,03</span>.",
          "• <strong>Mês 1:</strong> Juros = R$ 30,00 | Amortização = R$ 239,03 | Saldo = R$ 760,97.",
          "• <strong>Mês 2:</strong> Juros = R$ 22,83 | Amortização = R$ 246,20 | Saldo = R$ 514,78.",
          "• <strong>Mês 3:</strong> Juros = R$ 15,44 | Amortização = R$ 253,58 | Saldo = R$ 261,19.",
          "• <strong>Mês 4:</strong> Juros = R$ 7,84 | Amortização = R$ 261,19 | Saldo = R$ 0,00.",
          "• <strong>Totais na Price:</strong> Total de juros = <strong>R$ 76,11</strong> | Total pago = <strong>R$ 1.076,12</strong>."
        ]
      },
      {
        titulo: "3. Sistema de Amortização Constante (SAC) e Comparação Price × SAC",
        formula: "A = PV / n",
        itens: [
          "<strong>Características:</strong> Amortização constante, juros decrescentes e prestações decrescentes (em progressão aritmética). Usado em financiamentos longos, habitacionais e bancos de desenvolvimento.",
          "<strong>Exemplo com o mesmo empréstimo (R$ 1.000 | 3% a.m. | 4 meses):</strong> Amortização fixa <span class=\"formula-box\">A = 1.000 / 4 = R$ 250,00</span>.",
          "• <strong>Juros mensais:</strong> R$ 30,00 (Mês 1); R$ 22,50 (Mês 2); R$ 15,00 (Mês 3); R$ 7,50 (Mês 4). Total de juros = <strong>R$ 75,00</strong>.",
          "• <strong>Prestações mensais:</strong> R$ 280,00 (Mês 1); R$ 272,50 (Mês 2); R$ 265,00 (Mês 3); R$ 257,50 (Mês 4). Total pago = <strong>R$ 1.075,00</strong>.",
          "<strong>Comparação Price × SAC (mesma taxa e prazo):</strong> O SAC exige prestações iniciais mais altas, mas abate o saldo devedor mais rápido e gera <strong>menos juros totais</strong> (ex.: em R$ 50.000 a 1% a.m. por 5 meses, a Price tem parcelas fixas de R$ 10.302,00 e o SAC começa em R$ 10.500,00 caindo até R$ 10.100,00)."
        ]
      },
      {
        titulo: "4. SACRE, SAM, Sistema Americano (SAA), Pagamento Único e Variáveis",
        formula: "SAA (1º caso): J = PV × i   |   Pagamento Único (2º caso): M = PV × (1 + i)ⁿ",
        itens: [
          "<strong>SACRE (Sistema de Amortização Crescente):</strong> combina SAC e Price. Tem juros maiores no início e amortização crescente com recálculos periódicos da prestação (no exemplo de R$ 50.000 em 20 parcelas de R$ 2.500, no início cerca de R$ 900 abatem a dívida e R$ 1.600 são juros). Indicado para quem busca parcelas mais estáveis, menos juros no longo prazo e menor risco de inadimplência.",
          "<strong>SAM (Sistema de Amortização Misto):</strong> cada prestação, juro, amortização e saldo é a <strong>média aritmética</strong> entre SAC e Price. Ex.: 1ª prestação = <span class=\"formula-box\">(280,00 + 269,03) / 2 ≈ R$ 274,52</span>.",
          "<strong>Sistema Americano (SAA — 1º caso):</strong> paga apenas juros periodicamente (<span class=\"formula-box\">J = PV × i</span>) e devolve o principal no final junto com o último juro. Ex.: R$ 10.000 a 2% a.m. → paga R$ 200 por período e, no vencimento, R$ 200 + R$ 10.000.",
          "<strong>Pagamento Único (2º caso do SAA):</strong> capital e juros pagos juntos no vencimento (<span class=\"formula-box\">M = PV × (1 + i)ⁿ</span>). Muito usado em capital de giro industrial e títulos descontados em bancos.",
          "<strong>Pagamentos Variáveis:</strong> parcelas variáveis conforme acordo e condição do devedor, pagando os juros sobre o saldo a cada período. Exemplo: <strong>cartão de crédito</strong> (o pagamento parcial prolonga a dívida e eleva muito o custo total)."
        ]
      }
    ]
  },
  {
    bloco: 4,
    titulo: "Bloco 4 — Alavancagem",
    subtitulo: "Conceito geral, Alavancagem Financeira (GAF, RPL, RAT), Alavancagem Operacional (GAO), Alavancagem Combinada (GAC) e riscos.",
    topicos: [
      {
        titulo: "1. Conceito Geral e Alavancagem Financeira",
        itens: [
          "<strong>Conceito geral:</strong> uso de uma estrutura com custos fixos ou com capital de terceiros para ampliar os efeitos das variações nos resultados. Aumenta o potencial de ganhos, mas também aumenta o risco e as perdas.",
          "<strong>Alavancagem financeira:</strong> uso de capital de terceiros (empréstimos, ações preferenciais e similares) para tentar elevar o retorno do capital próprio. <strong>Só existe se houver capital de terceiros na estrutura de capital.</strong>",
          "<strong>Exemplo do imóvel (R$ 100.000 com entrada de R$ 10.000):</strong>",
          "• Se valorizar 10% (vale R$ 110.000) → lucro de R$ 10.000, o que representa <strong>100% de ganho</strong> sobre os R$ 10.000 investidos.",
          "• Se desvalorizar 10% (vale R$ 90.000) → <strong>perde toda a entrada de R$ 10.000</strong>, além de taxas e corretagens."
        ]
      },
      {
        titulo: "2. Grau de Alavancagem Financeira (GAF)",
        formula: "GAF = RPL / RAT   |   RPL = Lucro Líquido / PL   |   RAT = LAJIR / Ativo Total",
        itens: [
          "<strong>GAF = 1 (Alavancagem nula):</strong> empresa sem capital de terceiros; risco financeiro baixo.",
          "<strong>GAF > 1 (Alavancagem favorável):</strong> o capital de terceiros eleva o retorno do patrimônio líquido dos sócios.",
          "<strong>GAF < 1 (Alavancagem desfavorável ou negativa):</strong> o custo do capital de terceiros reduz o retorno dos proprietários."
        ]
      },
      {
        titulo: "3. Alavancagem Operacional e GAO",
        formula: "GAO = Margem de Contribuição / LAJIR   ou   GAO = % variação do LAJIR / % variação das vendas",
        itens: [
          "<strong>Origem:</strong> decorre da presença de <strong>custos fixos</strong>. Depois que os custos fixos são cobertos, qualquer aumento nas vendas eleva o lucro operacional (LAJIR) em proporção maior, pois o custo fixo não cresce com as vendas.",
          "<strong>Como alavancar a receita sem alterar o custo fixo:</strong> aumentar a quantidade vendida, aumentar o preço ou combinar as duas ações.",
          "<strong>Risco simétrico:</strong> uma queda na demanda reduz o lucro em proporção maior. Exemplo: com <strong>GAO = 3</strong>, +10% nas vendas gera <strong>+30% no LAJIR</strong>, mas −10% nas vendas gera <strong>−30% no LAJIR</strong>."
        ]
      },
      {
        titulo: "4. Alavancagem Combinada (GAC) e Gestão de Benefícios e Riscos",
        formula: "GAC = GAF × GAO",
        itens: [
          "<strong>Alavancagem Combinada (GAC):</strong> multiplica a alavancagem financeira pela operacional, mostrando quanto uma variação nas vendas afeta o resultado final dos proprietários.",
          "<strong>Vulnerabilidade:</strong> uma empresa com muitos custos fixos e alto endividamento tem alto potencial de retorno na expansão, mas grande vulnerabilidade a quedas nas vendas.",
          "<strong>Benefícios × Riscos no mercado:</strong> libera capital (aporta-se apenas uma fração do ativo, permitindo posições maiores e diversificação) e diferencia o mercado futuro do mercado à vista. Porém, as perdas <strong>não se limitam ao depósito inicial</strong> (pode exigir margem superior e cobertura de perdas). Deve-se pensar na posição pelo <strong>valor total</strong> e nunca alavancar sem preparo para cobrir perdas."
        ]
      }
    ]
  }
];
