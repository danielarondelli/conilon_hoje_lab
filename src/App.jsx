import React from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import PremiumPreview from "./pages/premium/PremiumPreview.jsx";

import logoConilon from "./assets/logo-conilon.jpg.jpeg";
import mascoteAlegre from "./assets/mascotes/mascote_alegre.png";
import mascoteObservando from "./assets/mascotes/mascote_observando.png";
import mascotePensando from "./assets/mascotes/mascote_pensando.png";
import mascotePreocupado from "./assets/mascotes/mascote_preocupado.png";
import mascoteTriste from "./assets/mascotes/mascote_triste.png";

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vT538JtTs5njlBOQ9W_zW94-MBB84BBIVwteDGctFQDD2RQC_bUdSkYbyeAq1N-R2uGZsVsIIIuH0CN/pub?gid=863354306&single=true&output=csv";

const KNOWLEDGE = {
  historia: {
    title: "História do Conilon",
    intro: "Como o Espírito Santo transformou uma crise em uma das maiores histórias de sucesso da cafeicultura brasileira.",
    blocks: [
      ["🌱 A maior crise da cafeicultura capixaba", "No fim da década de 1960, muitos acreditavam que a cafeicultura capixaba estava chegando ao fim. O Governo Federal implantou o Programa de Erradicação dos Cafezais para reduzir a oferta nacional de café. Milhares de produtores receberam incentivo para arrancar suas lavouras, e o Espírito Santo foi um dos estados mais afetados. Municípios cuja economia dependia do café viveram um período de profunda incerteza."],
      ["🌿 Uma aposta quando ninguém acreditava", "Foi justamente em meio à crise que alguns produtores decidiram seguir um caminho diferente. Enquanto muitos abandonavam a atividade, um pequeno grupo apostou em uma variedade ainda pouco conhecida: o Conilon. Durante anos, ele permaneceu restrito a pequenas propriedades, cultivado por agricultores que acreditavam em seu potencial mesmo sem reconhecimento do mercado."],
      ["👨‍🌾 São Gabriel da Palha e o nascimento do Conilon moderno", "Em São Gabriel da Palha, essa transformação ganhou força com a atuação do então prefeito Dr. Dário Martinelli, hoje reconhecido como um dos grandes pioneiros do Conilon capixaba. Ao observar o êxodo rural que atingia a região, enxergou em uma pequena lavoura remanescente uma oportunidade de reconstrução econômica. A partir dessas plantas foram produzidas mudas, distribuídas gratuitamente aos agricultores e acompanhadas por orientação técnica, dando início à expansão organizada da cultura."],
      ["🤝 A força do cooperativismo", "Nenhuma transformação desse tamanho acontece sozinha. Produtores, técnicos, pesquisadores e lideranças locais trabalharam juntos para fortalecer a cafeicultura. Fundada em 1963, a Cooabriel acompanhou essa transformação e tornou-se um dos principais pilares da organização dos produtores, contribuindo decisivamente para o desenvolvimento do Conilon no norte capixaba."],
      ["🧬 A revolução tecnológica", "Nas décadas seguintes vieram a seleção de materiais superiores, o melhoramento genético, a clonagem, a irrigação, a poda programada e novas técnicas de manejo. Essas inovações transformaram completamente a produção. O Conilon deixou de ser apenas uma alternativa para regiões quentes e passou a ser referência mundial em produtividade, eficiência e qualidade."],
      ["🌍 Um legado que continua sendo escrito", "Hoje, o Espírito Santo é o maior produtor brasileiro de café Conilon e uma referência internacional na produção de robusta. Mas essa história vai muito além dos números. Ela representa a coragem de produtores que permaneceram no campo quando muitos acreditavam que a cafeicultura havia chegado ao fim. Transformaram uma crise em oportunidade e construíram um dos capítulos mais importantes da agricultura brasileira. A história do Conilon continua sendo escrita todos os dias, por milhares de famílias que fazem do café parte da identidade e do desenvolvimento do Espírito Santo."],
    ],
  },
  producao: {
    title: "Produção Mundial de Robusta",
    intro: "Como o mercado mundial influencia o preço do Conilon brasileiro.",
    blocks: [
      ["🌍 Um mercado conectado", "Nenhum produtor de Conilon trabalha isolado, mesmo sem perceber isso no dia a dia. O café colhido no Espírito Santo entra em um mercado que se movimenta 24 horas por dia, em fusos horários diferentes, com compradores, exportadores, indústrias e investidores observando simultaneamente o que acontece nas principais origens de robusta do mundo. Uma seca no Vietnã, um problema logístico na Indonésia ou uma quebra de safra na Costa do Marfim podem chegar ao preço pago ao produtor brasileiro muito mais rápido do que se imagina. Entender essa engrenagem é entender por que o preço do Conilon nunca depende apenas da safra do Espírito Santo."],
      ["🇻🇳 Vietnã: o gigante que dita o ritmo", "Se existe um país que o mercado observa com mais atenção do que qualquer outro, é o Vietnã. Maior produtor mundial de robusta e fortemente voltado à exportação, o país tem enorme peso na formação dos preços internacionais. Basta uma notícia de seca prolongada, chuva em excesso, problema na florada ou queda nos estoques vietnamitas para o mercado global reagir, muitas vezes no mesmo dia."],
      ["🇧🇷 Brasil: a potência que se reinventou", "Nas últimas décadas, o Brasil ampliou rapidamente sua participação no mercado mundial de robusta, impulsionado pelos ganhos de produtividade, tecnologia e qualidade obtidos principalmente no Espírito Santo e em Rondônia. Hoje, o país figura entre os principais fornecedores de robusta para diversos mercados e disputa espaço em uma cadeia internacional antes muito mais concentrada no Sudeste Asiático."],
      ["🌱 Espírito Santo: onde essa história se concentra", "Dentro do Brasil, essa transformação tem endereço certo. O Espírito Santo concentra a maior parte da produção nacional de Conilon e reúne, em um único território, produtores, cooperativas, exportadores, pesquisa, assistência técnica, indústria e logística. É no estado que se encontra o principal ecossistema do Conilon brasileiro, uma cadeia altamente integrada que ajuda a explicar por que o Espírito Santo se tornou referência mundial em produtividade, tecnologia e qualidade."],
      ["🌎 Os outros nomes que também formam o preço", "Vietnã e Brasil concentram as atenções, mas não são os únicos a moldar a oferta mundial. Indonésia, Uganda, Índia e Costa do Marfim completam o mapa do robusta, cada um com seu próprio calendário e suas próprias vulnerabilidades. Quando qualquer um deles enfrenta dificuldades climáticas ou logísticas, o mercado global recalcula suas expectativas de oferta, e o efeito, ainda que menor que o de Vietnã ou Brasil, também entra na formação dos preços."],
      ["📅 Um mundo, vários calendários", "Um detalhe passa despercebido para quem está de fora: os grandes produtores não colhem ao mesmo tempo. Enquanto um país está em plena colheita, outro pode estar na florada, e um terceiro no enchimento dos frutos. Essa defasagem leva o mercado a acompanhar continuamente todas as origens, tentando antecipar onde a próxima mudança na oferta poderá aparecer."],
      ["📈 O que realmente move a oferta", "Existe um erro comum: achar que produção mundial se resume a quantos hectares estão plantados. Na prática, o mercado observa uma combinação muito mais complexa: produtividade, clima, irrigação, custo de produção, nível de estoques, ritmo de comercialização, logística de exportação e consumo mundial. É o cruzamento desses fatores, e não um único indicador isolado, que define a real disponibilidade de café e, consequentemente, os preços. Por isso, quem acompanha apenas um indicador dificilmente consegue compreender o mercado por completo."],
      ["🌍 O produtor capixaba dentro de tudo isso", "Fechando o ciclo, o preço recebido pelo produtor no Espírito Santo nunca é resultado apenas da sua própria safra. Ele nasce do cruzamento entre a produção brasileira, a oferta das demais origens, o consumo mundial, a logística internacional e o comportamento dos compradores. Interpretar o mercado é enxergar essas conexões antes que elas apareçam no preço. Esse é justamente o propósito do Conilon Hoje: transformar informação dispersa em uma leitura clara, ajudando o produtor a compreender por que o mercado se movimenta e o que pode acontecer a seguir."],
    ],
  },
  lavoura: {
    title: "O Ciclo da Lavoura",
    intro: "Como o Conilon é construído safra após safra.",
    blocks: [
      ["🌿 Tudo começa antes do plantio", "O potencial de uma lavoura é definido antes de qualquer muda tocar o solo. Escolha da área, análise de solo, correção de fertilidade e planejamento de espaçamento não são etapas burocráticas: são decisões que travam, para os próximos anos, o teto de produtividade que aquela área poderá alcançar. Erros aqui não se corrigem depois: se acumulam."],
      ["🌱 Implantação: uma decisão de décadas", "O Conilon é perene. Uma vez implantada, uma lavoura bem conduzida permanece produtiva por muitos anos, o que torna a implantação uma decisão de longuíssimo prazo, não de curto prazo. Material genético, espaçamento, sistema de irrigação e distribuição das plantas definem, desde o primeiro dia, tanto o ritmo de desenvolvimento quanto os custos de produção que acompanharão a lavoura por todo o seu ciclo produtivo."],
      ["🌧️ O manejo é diário, não sazonal", "Produzir café não se resume à colheita anual. Na prática, o produtor toma decisões o ano inteiro: adubação, irrigação, poda, controle de plantas daninhas e nutrição. Cada uma dessas decisões não fica isolada no calendário: ela se converte em produtividade, ou em perda dela, na safra seguinte. É esse acompanhamento contínuo, e não um evento pontual, que define a cafeicultura moderna."],
      ["🍃 Sanidade é antecipação, não reação", "Pragas e doenças são parte estrutural de qualquer lavoura: a variável real não é se vão aparecer, mas quando. Por isso, o diferencial não está em combater o problema depois que ele já se instalou, e sim em monitorar constantemente para agir no momento certo. Uma lavoura sadia preserva folhas, frutos e, no fim da conta, o potencial produtivo que foi construído nos anos anteriores."],
      ["☀️ A colheita é o resultado, não o início", "Quando o período de colheita chega, o resultado já está, em grande parte, decidido e foi construído nos meses anteriores. O que resta ao produtor nessa fase é a execução: o ponto certo de maturação, a organização logística da colheita e a velocidade entre colher e processar. Esses três fatores determinam a qualidade final e o rendimento que o produtor efetivamente vai capturar daquilo que a lavoura já produziu."],
      ["🌾 Pós-colheita: onde a qualidade se confirma ou se perde", "O trabalho não termina no terreiro. Secagem, armazenamento e classificação são as etapas que decidem se a qualidade construída no campo chega intacta ao comprador ou se parte dela se perde no caminho. Um bom manejo pós-colheita reduz perdas, preserva as características que fazem diferença comercial e amplia as opções de venda do produtor."],
      ["📈 O ciclo se fecha e recomeça", "A produtividade de uma lavoura de Conilon não é explicada pelo clima de um único ano. Ela é a soma de decisões tomadas ao longo de vários ciclos: investimento, planejamento, tecnologia e acompanhamento técnico. Cada safra carrega o resultado do que foi feito nas anteriores e, ao mesmo tempo, define as condições da próxima. Por isso, cada safra é muito mais do que uma colheita. Ela representa o resultado de anos de planejamento, investimento e trabalho no campo. Compreender esse ciclo é compreender como o Conilon é, de fato, construído."],
    ],
  },
  qualidade: {
    title: "Qualidade: a moeda mais valiosa do café Conilon",
    intro: "Qualidade não se compra no fim da cadeia: ela é construída ao longo de todo o ciclo produtivo.",
    blocks: [
      ["🌱 Tudo começa na planta", "Nenhum processo de pós-colheita cria qualidade que não existia no fruto. Nutrição equilibrada, sanidade da lavoura, manejo correto, disponibilidade hídrica e material genético adequado são o que determinam, desde o início, o teto de qualidade que aquele café poderá alcançar. O processamento não adiciona valor que não estava lá: ele apenas revela, com mais ou menos fidelidade, o que a lavoura já havia construído."],
      ["🍒 A maturação é onde a precisão começa a importar", "Frutos verdes, maduros e secos no pé carregam perfis sensoriais distintos, e a diferença entre um lote consistente e um lote irregular geralmente começa aqui. Quanto mais uniforme a maturação no momento da colheita, menor a variabilidade de defeitos no lote final. Colher no ponto certo não é detalhe operacional: é uma das primeiras decisões que separa um café comum de um café diferenciado."],
      ["⚙️ Processamento: a escolha que define o perfil", "A partir da colheita, o produtor decide o caminho que aquele café vai seguir: natural, cereja descascado ou fermentações controladas, cada um revelando um perfil sensorial próprio. Mas a escolha do método importa menos do que a disciplina na execução. Um processo simples bem controlado supera, quase sempre, um processo sofisticado mal conduzido. Aqui, consistência vale mais que ambição."],
      ["☀️ Secagem: onde a qualidade mais se perde", "Se existe uma etapa em que cafés excelentes se transformam em cafés medianos, é esta. Temperatura, velocidade, uniformidade e controle da umidade final determinam a estabilidade química do grão e, por consequência, sua vida de prateleira e seu comportamento na torra. Uma secagem irregular pode apagar, em poucos dias, o que a lavoura levou uma safra inteira para construir."],
      ["🔎 Classificação: transformando qualidade em linguagem comum", "Depois de seco, o café precisa ser traduzido em critérios que o mercado entenda. Tipo, peneira, umidade, contagem de defeitos e avaliação sensorial funcionam como um vocabulário técnico compartilhado. É isso que permite que um comprador em Roterdã e um produtor em São Gabriel da Palha negociem utilizando uma linguagem técnica comum."],
      ["💰 Consistência é o que realmente compra a fidelidade do mercado", "Um lote excepcional chama atenção uma vez. Repetir esse padrão safra após safra é o que constrói uma relação comercial de longo prazo. Rastreabilidade, padronização e previsibilidade de entrega pesam, hoje, tanto quanto a nota na xícara, especialmente à medida que novas exigências internacionais, como o Regulamento Europeu sobre Produtos Livres de Desmatamento, tornam a origem documentada um critério de compra, e não apenas um diferencial."],
      ["🌍 O Conilon deixou de ser sinônimo de volume", "Por décadas, o Conilon carregou uma reputação construída em torno de escala, não de requinte. Essa página está sendo reescrita. Melhoramento genético, manejo de precisão e protocolos de pós-colheita mais rigorosos mudaram o teto de qualidade que essa espécie é capaz de entregar, abrindo espaço em segmentos que, até pouco tempo, eram território exclusivo do Arábica. Hoje, cafés Conilon de alta qualidade já participam de concursos, microlotes e mercados especializados, mostrando que a espécie também pode entregar excelência sensorial quando bem conduzida. O Espírito Santo está no centro dessa mudança: produtividade e excelência deixaram de ser objetivos concorrentes."],
      ["⭐ O mercado não cria valor: ele reconhece quem já o construiu", "No fim, cabe uma correção de perspectiva: o comprador não paga por potencial, paga por resultado entregue. E esse resultado começou a ser decidido muito antes da negociação, na escolha da muda, no manejo diário, no ponto de colheita, na secagem e na classificação. O mercado não premia o acaso. Ele remunera consistência, confiança e qualidade construída ao longo de todo o ciclo produtivo. É por isso que cada decisão tomada na lavoura continua acompanhando aquele café muito depois que ele deixa a propriedade."],
    ],
  },
};

const MASCOTS = {
  alegre: mascoteAlegre,
  observando: mascoteObservando,
  pensando: mascotePensando,
  preocupado: mascotePreocupado,
  triste: mascoteTriste,
};

const css = `
:root{--bg:#07140e;--s1:#10231a;--s2:#153123;--s3:#0c1d14;--line:#2c4938;--text:#f5f4ee;--muted:#b8c3bb;--green:#78d592;--premium:#d7c18a}
*{box-sizing:border-box}
html,body,#root{width:100%;min-width:0;min-height:100%;margin:0;padding:0;overflow-x:hidden;background:var(--bg)}
body{display:block!important;place-items:initial!important;color:var(--text);font-family:Inter,"Segoe UI",system-ui,sans-serif;text-align:left!important;background:radial-gradient(circle at 80% 0,#173322 0,transparent 28%),var(--bg)}
#root{display:block!important;width:100%!important;min-width:0!important;max-width:none!important;margin:0!important;padding:0!important;text-align:left!important;overflow-x:hidden!important}
button,input,select{font:inherit}button{cursor:pointer}img{display:block;max-width:100%}
h1,h2,h3,p,strong,span,label,small,a,button{color:inherit}
.header{position:sticky;top:0;z-index:30;height:72px;display:flex;align-items:center;gap:18px;padding:0 max(20px,calc((100vw - 1180px)/2));background:#07140ef2;border-bottom:1px solid rgba(120,213,146,.18);backdrop-filter:blur(18px)}
.brand{display:flex;align-items:center;gap:11px;border:0;background:none}.brand img{width:42px;height:42px;border-radius:13px;object-fit:cover;border:1px solid rgba(120,213,146,.25)}.brand strong{font-size:18px}
.desktop-nav{display:flex;gap:4px;margin:auto}.desktop-nav button,.round,.premium-small{border:0;border-radius:12px;background:transparent;color:var(--muted);padding:10px 13px}.desktop-nav .active{background:var(--s2);color:var(--text)}
.header-date{display:grid;text-align:right}.header-date strong{font-size:12px}.header-date span{font-size:10px;color:var(--muted)}.header-actions{display:flex;gap:7px}.round{font-size:24px;border:1px solid var(--line);color:var(--text)}.premium-small{background:var(--premium);color:#182017;font-weight:850}
.language-switch{display:flex;align-items:center;gap:5px}
.language-switch button{width:42px;height:34px;border:1px solid var(--line);border-radius:10px;background:transparent;color:var(--text);font-size:17px;line-height:1;padding:0;display:grid;place-items:center}
.language-switch button.active{border-color:var(--green);background:rgba(120,213,146,.12);box-shadow:inset 0 0 0 1px rgba(120,213,146,.12)}
.language-switch button span{font-size:9px;font-weight:900;margin-left:2px}
#google_translate_element{position:fixed!important;left:-9999px!important;top:-9999px!important;width:1px!important;height:1px!important;overflow:hidden!important;opacity:0!important;pointer-events:none!important}
.goog-te-banner-frame.skiptranslate,.goog-te-gadget-icon{display:none!important}
#goog-gt-tt,.goog-te-balloon-frame{display:none!important}
.goog-text-highlight{background:transparent!important;box-shadow:none!important}
body{top:0!important}
.page{width:min(1180px,calc(100% - 32px));margin:auto;padding:26px 0 110px}.home{display:grid;gap:18px}
.hero{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.1fr) auto;gap:20px;align-items:center;padding:26px;border:1px solid var(--line);border-radius:26px;background:linear-gradient(145deg,#173a29,#0e2117);overflow:hidden}
.eyebrow{font-size:11px;font-weight:900;letter-spacing:.11em;color:var(--green)}.hero h1{margin:8px 0 2px;font-size:clamp(40px,7vw,68px);line-height:1;color:var(--text)}.hero p,.page-head p{margin:0;color:var(--muted)}.date-line{margin-top:8px!important;font-size:12px}
.mini-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.mini-grid div,.price-card{min-width:0;padding:15px;border:1px solid var(--line);border-radius:16px;background:var(--s3)}.mini-grid span,.mini-grid strong{display:block}.mini-grid strong{margin-top:7px;white-space:nowrap}
.primary,.mascot button,.premium button{border:0;border-radius:14px;background:var(--green);color:#07140e;font-weight:900;padding:14px 17px}
.mascot{display:grid;grid-template-columns:180px minmax(0,1fr);align-items:center;min-height:184px;border:1px solid var(--line);border-radius:26px;background:linear-gradient(145deg,#173826,#10251a);overflow:hidden}.mascot-image{height:184px;display:grid;place-items:end center;overflow:hidden}.mascot-image img{max-width:168px;max-height:195px;object-fit:contain;animation:float 3s ease-in-out infinite}.mascot-copy{padding:20px}.mascot-copy strong{display:block;margin:9px 0 14px;font-size:20px;line-height:1.38}.mascot-copy span{font-size:11px;font-weight:900;letter-spacing:.11em;color:var(--green)}
.section{padding:4px 0}.section-head{margin:8px 0 13px}.section-head h2{margin:6px 0 0;font-size:24px;color:var(--text)}
.h-scroll{display:flex;gap:12px;overflow-x:auto;max-width:100%;padding:0 1px 8px;scroll-snap-type:x mandatory}.h-scroll>*{scroll-snap-align:start}
.shortcut,.knowledge-card{flex:0 0 min(270px,82vw);min-height:150px;text-align:left;border:1px solid var(--line);border-radius:20px;background:var(--s1);padding:20px}.shortcut strong,.knowledge-card strong{font-size:19px}.shortcut p,.knowledge-card p,.news-card p,.content-card p,.panel p,.premium p{color:var(--muted);line-height:1.6}.shortcut b,.knowledge-card b{color:var(--green)}
.news-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.news-card,.content-card,.panel,.premium{min-width:0;padding:20px;border:1px solid var(--line);border-radius:20px;background:var(--s1);overflow:hidden}.news-card h3{margin:8px 0;font-size:18px}.news-card button,.news-card a{display:inline-flex;margin-top:13px;border:0;background:none;color:var(--green);font-weight:800;padding:0;text-decoration:none}
.external{display:grid;grid-template-columns:minmax(180px,34%) minmax(0,1fr);gap:18px;align-items:stretch;border:1px solid #45664f;border-radius:22px;background:var(--s1);overflow:hidden}.external-media{min-height:210px;background:#0a1810}.external-media img{width:100%;height:100%;object-fit:cover}.external-copy{padding:22px}.external-copy h3{margin:8px 0}.external-copy p{color:var(--muted);line-height:1.6}.external-copy a{display:inline-flex;margin-top:12px;color:var(--green);font-weight:800;text-decoration:none}
.premium{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:24px;align-items:center;border-color:#6f6445;background:linear-gradient(145deg,#263527,#102119)}.premium h2{margin:7px 0}.premium button{background:var(--premium);color:#182017}
.page-head{margin-bottom:20px}.page-head button{border:0;background:none;color:var(--green);padding:0;margin-bottom:18px;font-weight:750}.page-head h1{margin:7px 0;font-size:clamp(32px,6vw,56px)}
.tabs{display:flex;gap:8px;overflow-x:auto;max-width:100%;padding-bottom:4px;margin-bottom:16px}.tabs button{flex:0 0 auto;border:1px solid var(--line);border-radius:999px;background:transparent;color:var(--muted);padding:11px 15px}.tabs .active{background:var(--green);color:#07140e;font-weight:850}
.panel-grid{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,.85fr);gap:14px}.actions{display:grid;gap:9px}.actions button{display:grid;grid-template-columns:minmax(0,1fr) auto;text-align:left;border:1px solid var(--line);border-radius:17px;background:var(--s1);padding:17px}.actions span{grid-column:1;color:var(--muted);font-size:12px;margin-top:5px}.actions b{grid-column:2;grid-row:1/3;color:var(--green)}
.price-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.price-card span,.price-card strong{display:block}.price-card strong{margin-top:10px;font-size:23px}.chart{height:350px}.weather{display:flex;gap:10px;overflow-x:auto}.weather article{flex:0 0 130px;padding:19px;text-align:center;border:1px solid var(--line);border-radius:17px;background:var(--s1)}
.weather-permission{display:grid;gap:14px;padding:22px;border:1px solid var(--line);border-radius:20px;background:var(--s1)}
.weather-permission h3{margin:0}.weather-permission p{margin:0;color:var(--muted);line-height:1.55}
.weather-actions{display:flex;flex-wrap:wrap;gap:9px}.weather-actions button{border:0;border-radius:13px;background:var(--green);color:#07140e;font-weight:850;padding:12px 14px}.weather-actions .secondary{border:1px solid var(--line);background:transparent;color:var(--text)}
.dollar-summary{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin-top:12px}.dollar-summary div{padding:12px;border:1px solid var(--line);border-radius:14px;background:var(--s3)}.dollar-summary span,.dollar-summary strong{display:block}.dollar-summary span{font-size:10px;color:var(--muted)}.dollar-summary strong{margin-top:5px}
.premium-mascot{display:grid;grid-template-columns:115px minmax(0,1fr);gap:12px;align-items:center;margin-bottom:16px}.premium-mascot img{max-height:135px;object-fit:contain}.premium-mascot strong{display:block;font-size:18px;line-height:1.35}.premium-mascot span{display:block;margin-bottom:5px;font-size:10px;font-weight:900;letter-spacing:.1em;color:var(--premium)}.weather span,.weather strong,.weather small{display:block}.weather strong{margin:14px 0;font-size:27px}.weather small{color:var(--muted)}
.detail-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.content-list{display:grid;gap:10px}.content-card h2{margin:0}
.form{display:grid;grid-template-columns:1fr 1fr;gap:12px}.form label{display:grid;gap:8px;color:var(--muted)}.form input,.form select{min-height:48px;border:1px solid var(--line);border-radius:13px;background:var(--s3);color:var(--text);padding:0 13px}.result{margin-top:18px;padding:20px;border-radius:16px;background:#183b29;text-align:center}.result span,.result strong,.result small{display:block}.result strong{margin:8px 0;font-size:38px;color:var(--green)}
.bottom{display:none}.search{position:fixed;inset:0;z-index:50;display:grid;place-items:start center;padding-top:15vh;background:#020806c9;backdrop-filter:blur(10px)}.search-box{position:relative;width:min(600px,calc(100% - 28px));padding:22px;border:1px solid var(--line);border-radius:22px;background:var(--s1)}.search-box button{position:absolute;right:15px;top:12px;border:0;background:none;font-size:28px}.search-box input{width:calc(100% - 35px);border:0;background:none;color:var(--text);font-size:17px}.search-box input:focus{outline:0}
@keyframes float{50%{transform:translateY(-5px)}}
@media(max-width:800px){
.desktop-nav,.premium-small,.header-date{display:none!important}
.header{width:100%!important;height:66px;padding:0 16px!important;gap:10px}
.brand{min-width:0}.brand strong{font-size:17px;white-space:nowrap}
.language-switch{gap:3px;margin-left:auto}
.language-switch button{width:37px;height:32px;font-size:15px}
.language-switch button span{display:none}
.header-actions{margin-left:0}.round{width:48px;height:48px;padding:0}
.page{display:block!important;width:calc(100% - 24px)!important;max-width:calc(100% - 24px)!important;margin:0 12px!important;padding:18px 0 110px!important;overflow:hidden!important}
.home{display:grid!important;width:100%!important;gap:16px!important}
.hero{display:block!important;width:100%!important;max-width:100%!important;padding:20px!important;overflow:hidden!important}
.hero>div,.hero>button{width:100%!important;max-width:100%!important;min-width:0!important}
.hero h1{margin-top:10px!important;font-size:clamp(40px,13vw,58px)!important;line-height:1.05!important;white-space:normal!important;overflow-wrap:anywhere!important;text-align:left!important}
.hero p,.hero .eyebrow{text-align:left!important;white-space:normal!important;overflow-wrap:anywhere!important}
.mini-grid{display:grid!important;width:100%!important;max-width:100%!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:8px!important;margin-top:18px!important;overflow:hidden!important}
.mini-grid div{width:100%!important;min-width:0!important;padding:13px 8px!important;text-align:center!important;overflow:hidden!important}
.mini-grid div:nth-child(3){grid-column:1/-1}
.mini-grid span{font-size:10px!important}.mini-grid strong{font-size:14px!important;white-space:normal!important;overflow-wrap:anywhere!important}
.hero>.primary{display:block!important;width:100%!important;max-width:100%!important;margin-top:16px!important;padding:14px 10px!important;font-size:16px!important;line-height:1.25!important;white-space:normal!important;text-align:center!important}
.mascot{display:grid!important;width:100%!important;max-width:100%!important;grid-template-columns:95px minmax(0,1fr)!important;min-height:165px!important;overflow:hidden!important}
.mascot-image{height:165px!important}.mascot-image img{max-width:105px!important;max-height:165px!important}
.mascot-copy{min-width:0!important;padding:15px 12px!important;text-align:left!important}.mascot-copy strong{font-size:15px!important;line-height:1.35!important;white-space:normal!important;overflow-wrap:anywhere!important}.mascot-copy button{max-width:100%!important;white-space:normal!important}
.section,.section-head,.news-grid,.news-card,.external,.premium,.panel,.content-card{width:100%!important;max-width:100%!important;min-width:0!important}
.section-head{text-align:left!important}.section-head h2{font-size:23px!important;line-height:1.25!important;overflow-wrap:anywhere!important}
.news-grid,.panel-grid,.detail-grid{display:grid!important;grid-template-columns:minmax(0,1fr)!important;gap:10px!important}
.news-card,.content-card,.panel,.premium{overflow:hidden!important}
.external{display:grid!important;grid-template-columns:1fr!important}.external-media{min-height:190px}
.premium{display:grid!important;grid-template-columns:1fr!important}.premium button{width:100%!important;white-space:normal!important}
.h-scroll{width:100%!important;max-width:100%!important;overflow-x:auto!important}.shortcut,.knowledge-card{flex:0 0 78vw!important;max-width:78vw!important}
.price-grid{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:8px!important}
.dollar-summary{grid-template-columns:repeat(2,minmax(0,1fr))}
.weather-actions{display:grid}.weather-actions button{width:100%}
.premium-mascot{grid-template-columns:90px minmax(0,1fr)}.premium-mascot img{max-height:115px}.premium-mascot strong{font-size:16px}
.chart{height:285px!important}.form{grid-template-columns:1fr!important}
.tabs{width:100%!important;max-width:100%!important;overflow-x:auto!important}
.bottom{position:fixed;z-index:25;left:12px;right:12px;bottom:10px;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));padding:7px;border:1px solid var(--line);border-radius:18px;background:#091810f2;backdrop-filter:blur(16px)}
.bottom button{min-width:0;border:0;background:none;color:var(--muted);padding:10px 2px;font-size:10px;white-space:normal}.bottom .active{border-radius:11px;background:var(--s2);color:var(--green)}
}
`;

function parseCSV(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];
    if (char === '"' && quoted && next === '"') {
      cell += '"';
      i += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(cell.trim());
      cell = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (cell || row.length) {
        row.push(cell.trim());
        rows.push(row);
        row = [];
        cell = "";
      }
    } else {
      cell += char;
    }
  }
  if (cell || row.length) {
    row.push(cell.trim());
    rows.push(row);
  }
  return rows;
}

function num(value) {
  if (!value) return 0;
  const clean = String(value).replace(/[R$\s]/g, "").replace(/\./g, "").replace(",", ".");
  const parsed = Number(clean);
  return Number.isFinite(parsed) ? parsed : 0;
}

function money(value, digits = 0) {
  return value
    ? Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
        maximumFractionDigits: digits,
      })
    : "—";
}

function pick(object, keys, fallback = "") {
  for (const key of keys) if (object?.[key]) return object[key];
  return fallback;
}

function dateLabel(value) {
  const date = value ? new Date(value) : new Date();
  if (Number.isNaN(date.getTime())) return String(value || "");
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function buildNews(current) {
  const items = [1, 2, 3, 4]
    .map((index) => {
      const title = pick(current, [
        `noticia${index}_titulo`,
        `noticia_${index}_titulo`,
        `titulo_noticia${index}`,
      ]);
      const text = pick(current, [
        `noticia${index}_texto`,
        `noticia_${index}_texto`,
        `noticia${index}`,
        `noticia_${index}`,
      ]);
      const link = pick(current, [
        `noticia${index}_link`,
        `noticia_${index}_link`,
        `link_noticia${index}`,
      ]);
      return title || text ? { title: title || `Notícia ${index}`, text, link } : null;
    })
    .filter(Boolean);

  return items.length
    ? items
    : [
        { title: "Mercado físico", text: "Acompanhe as referências regionais e o ritmo de negociação." },
        { title: "Bolsa de Londres", text: "Observe o Robusta e se o movimento encontra confirmação no físico." },
        { title: "Câmbio", text: "O dólar altera a conversão da bolsa e a formação do preço." },
        { title: "Clima e oferta", text: "Condições climáticas e disponibilidade seguem relevantes." },
      ];
}

function buildExternal(current) {
  const title = pick(current, ["destaque_titulo", "externo_titulo"]);
  const text = pick(current, ["destaque_texto", "externo_texto"]);
  const image = pick(current, ["destaque_imagem", "externo_imagem"]);
  const link = pick(current, ["destaque_link", "externo_link"]);
  const type = pick(current, ["destaque_tipo", "externo_tipo"], "DESTAQUE EXTERNO");
  return title ? { title, text, image, link, type } : null;
}

function buildMarketVectors(current, market, dollar, dollarHistory) {
  const price = num(current.cooabriel);
  const previous = market.history.at(-2)?.price || 0;
  const physicalChange = previous && price ? ((price - previous) / previous) * 100 : 0;
  const dollarPrevious = dollarHistory.at(-2)?.value || 0;
  const dollarChange = dollarPrevious && dollar
    ? ((dollar - dollarPrevious) / dollarPrevious) * 100
    : 0;

  const changed = pick(
    current,
    ["o_que_mudou", "oque_mudou"],
    Math.abs(physicalChange) >= 0.2
      ? `O preço físico variou ${physicalChange.toFixed(1).replace(".", ",")}% em relação à referência anterior. O dólar variou ${dollarChange.toFixed(1).replace(".", ",")}% no período mais recente.`
      : "O preço físico ficou próximo da estabilidade. O principal sinal do dia está na relação entre bolsa, câmbio e disponibilidade regional."
  );

  const importance = pick(
    current,
    ["por_que_importa", "porque_importa"],
    Math.sign(physicalChange) === Math.sign(dollarChange) && Math.abs(physicalChange) >= 0.2
      ? "Físico e câmbio caminharam na mesma direção, o que pode reforçar o movimento se a bolsa também confirmar."
      : "Os vetores não estão totalmente alinhados. Isso reduz a força de uma conclusão baseada em apenas um indicador."
  );

  const watch = pick(
    current,
    ["o_que_observar", "oque_observar"],
    "Observe o fechamento da ICE Robusta, a direção do dólar, a disponibilidade regional e o ritmo de venda dos produtores."
  );

  const mascot = pick(
    current,
    ["comentario_mascote", "comentário_mascote", "mascote_texto"],
    Math.abs(physicalChange) >= 0.7
      ? "Hoje o preço físico se movimentou de forma relevante. O próximo passo é verificar se os outros vetores confirmam."
      : "O mercado não enviou um único sinal dominante. Compare os vetores antes de concluir."
  );

  return { changed, importance, watch, mascot };
}


async function loadMarket() {
  const text = await fetch(`${SHEET_URL}&t=${Date.now()}`).then((response) => {
    if (!response.ok) throw new Error("Falha ao carregar dados");
    return response.text();
  });
  const rows = parseCSV(text);
  const headers = rows[0] || [];
  const data = rows.slice(1).map((columns) =>
    Object.fromEntries(headers.map((header, index) => [header, columns[index] || ""]))
  );
  const current = data[0] || {};
  const history = data
    .filter((item) => item.data_grafico_cooabriel && item.valor_grafico_cooabriel)
    .map((item) => ({
      day: String(item.data_grafico_cooabriel).slice(0, 5),
      price: num(item.valor_grafico_cooabriel),
    }))
    .filter((item) => item.price);
  return { current, history };
}

async function loadDollar() {
  const data = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL").then((r) =>
    r.json()
  );
  return Number(data?.USDBRL?.bid || 0);
}

async function loadDollarHistory() {
  const data = await fetch("https://economia.awesomeapi.com.br/json/daily/USD-BRL/7").then((r) => {
    if (!r.ok) throw new Error("Falha ao carregar histórico do dólar");
    return r.json();
  });

  return [...data].reverse().map((item) => ({
    day: new Date(Number(item.timestamp) * 1000).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
    }),
    value: Number(item.bid || item.ask || 0),
  })).filter((item) => item.value);
}

async function fetchWeather(latitude, longitude) {
  const data = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,precipitation_sum&timezone=auto&forecast_days=5`
  ).then((r) => {
    if (!r.ok) throw new Error("Falha ao carregar o clima");
    return r.json();
  });

  return (data?.daily?.time || []).map((date, index) => ({
    date,
    temperature: data.daily.temperature_2m_max[index],
    rain: data.daily.precipitation_sum[index],
  }));
}

async function loadRegionalWeather() {
  const location = await fetch(
    "https://geocoding-api.open-meteo.com/v1/search?name=Sao%20Gabriel%20da%20Palha&count=1&language=pt&format=json"
  ).then((r) => r.json());

  const city = location?.results?.[0];
  if (!city) throw new Error("Cidade não localizada");
  return fetchWeather(city.latitude, city.longitude);
}

async function loadWeather() {
  if (!navigator.geolocation) {
    const error = new Error("Geolocalização indisponível");
    error.code = 0;
    throw error;
  }

  const position = await new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      timeout: 12000,
      maximumAge: 600000,
      enableHighAccuracy: false,
    })
  );

  return fetchWeather(position.coords.latitude, position.coords.longitude);
}

function Header({ page, navigate, onSearch, language, onLanguage }) {
  const today = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  return (
    <header className="header">
      <button className="brand" onClick={() => navigate("home")}>
        <img src={logoConilon} alt="Logo Conilon Hoje" />
        <strong className="notranslate" translate="no">Conilon Hoje</strong>
      </button>
      <div className="language-switch notranslate" translate="no" aria-label="Idioma do aplicativo">
        <button
          type="button"
          className={language === "pt" ? "active" : ""}
          onClick={() => onLanguage("pt")}
          aria-label="Português"
        >
          🇧🇷 <span>PT</span>
        </button>
        <button
          type="button"
          className={language === "en" ? "active" : ""}
          onClick={() => onLanguage("en")}
          aria-label="English"
        >
          🇬🇧 <span>EN</span>
        </button>
      </div>
      <nav className="desktop-nav">
        {[
          ["home", "Início"],
          ["market", "Mercado"],
          ["knowledge", "Conhecimento"],
          ["news", "Notícias"],
          ["tools", "Ferramentas"],
        ].map(([id, label]) => (
          <button key={id} className={page === id ? "active" : ""} onClick={() => navigate(id)}>
            {label}
          </button>
        ))}
      </nav>
      <div className="header-date">
        <strong>{today}</strong>
        <span>Atualização diária</span>
      </div>
      <div className="header-actions">
        <button className="round" onClick={onSearch}>⌕</button>
        <button className="premium-small" onClick={() => navigate("premium")}>Premium</button>
      </div>
    </header>
  );
}

function Mascot({ state = "pensando", message, action, onAction }) {
  return (
    <section className="mascot">
      <div className="mascot-image">
        <img src={MASCOTS[state] || MASCOTS.pensando} alt="Seu Conilon" />
      </div>
      <div className="mascot-copy">
        <span>SEU CONILON</span>
        <strong>{message}</strong>
        {action && <button onClick={onAction}>{action} →</button>}
      </div>
    </section>
  );
}

function ExternalHighlight({ item }) {
  if (!item) return null;
  return (
    <section className="section">
      <div className="section-head">
        <span className="eyebrow">QUADRO DO DIA</span>
        <h2>Vale ver</h2>
      </div>
      <article className="external">
        {item.image && (
          <div className="external-media">
            <img src={item.image} alt="" />
          </div>
        )}
        <div className="external-copy">
          <span className="eyebrow">{item.type}</span>
          <h3>{item.title}</h3>
          {item.text && <p>{item.text}</p>}
          {item.link && <a href={item.link} target="_blank" rel="noreferrer">Abrir conteúdo externo →</a>}
        </div>
      </article>
    </section>
  );
}

function Premium({ onOpen }) {
  return (
    <section className="premium">
      <div>
        <span className="eyebrow">CONILON HOJE PREMIUM</span>
        <h2>Análises e ferramentas avançadas</h2>
        <p>Leituras aprofundadas, termômetro de mercado, comparativos e newsletter.</p>
      </div>
      <button onClick={onOpen}>Conhecer o Premium</button>
    </section>
  );
}

function Home({ market, dollar, navigate }) {
  const current = market.current || {};
  const price = num(current.cooabriel);
  const previous = market.history.at(-2)?.price || 0;
  const variation = previous && price ? ((price - previous) / previous) * 100 : 0;
  const news = buildNews(current);
  const external = buildExternal(current);
  const state =
    variation > 0.8 ? "alegre" :
    variation < -1.5 ? "triste" :
    variation < -0.4 ? "preocupado" :
    Math.abs(variation) < 0.25 ? "observando" : "pensando";
  const message =
    variation > 0.8 ? "O físico ganhou força. Vamos conferir bolsa e dólar." :
    variation < -1.5 ? "O recuo foi mais forte. Vamos separar os fatores." :
    variation < -0.4 ? "O mercado perdeu força. Vale acompanhar os vetores." :
    "O mercado está estável. Hoje, o contexto merece atenção.";

  return (
    <main className="page home">
      <section className="hero">
        <div>
          <span className="eyebrow">MERCADO DE HOJE</span>
          <h1>{money(price)}</h1>
          <p>Cooabriel • Tipo 7 • por saca</p>
          <p className="date-line">{dateLabel(pick(current, ["data", "date", "data_atualizacao"]))}</p>
        </div>
        <div className="mini-grid">
          <div><span className="eyebrow notranslate" translate="no">CCCV</span><strong>{money(num(current.cccv))}</strong></div>
          <div><span className="eyebrow notranslate" translate="no">ICE</span><strong>{current.ice_robusta || current.robusta || "—"}</strong></div>
          <div><span className="eyebrow">Dólar</span><strong>{money(dollar, 2)}</strong></div>
        </div>
        <button className="primary" onClick={() => navigate("market")}>Abrir mercado completo →</button>
      </section>

      <Mascot state={state} message={message} action="Ver leitura do dia" onAction={() => navigate("market")} />

      <section className="section">
        <div className="section-head"><span className="eyebrow">NOTÍCIAS</span><h2>O que está acontecendo hoje</h2></div>
        <div className="news-grid">
          {news.slice(0, 2).map((item, index) => (
            <article className="news-card" key={index}>
              <span className="eyebrow">NOTÍCIA {index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <button onClick={() => navigate("news")}>Ler as quatro notícias →</button>
            </article>
          ))}
        </div>
      </section>

      <ExternalHighlight item={external} />

      <section className="section">
        <div className="section-head"><span className="eyebrow">ACESSO RÁPIDO</span><h2>O que você quer consultar?</h2></div>
        <div className="h-scroll">
          {[
            ["market", "Mercado", "Preços, histórico, clima e leitura"],
            ["knowledge", "Conhecimento", "História, produção, lavoura e glossário"],
            ["news", "Notícias", "As quatro informações mais relevantes"],
            ["tools", "Ferramentas", "Simulador e comparativos"],
          ].map(([id, title, text]) => (
            <button className="shortcut" key={id} onClick={() => navigate(id)}>
              <strong>{title}</strong><p>{text}</p><b>→</b>
            </button>
          ))}
        </div>
      </section>

      <Premium onOpen={() => navigate("premium")} />
    </main>
  );
}

function Market({
  market,
  dollar,
  dollarHistory,
  weather,
  weatherStatus,
  requestWeather,
  useRegionalWeather,
  navigate,
}) {
  const [tab, setTab] = React.useState("overview");
  const current = market.current || {};
  const vectors = buildMarketVectors(current, market, dollar, dollarHistory);
  const reading = pick(
    current,
    ["leitura_mercado", "leitura", "sintese"],
    "O mercado deve ser lido pela combinação entre físico, bolsa, câmbio, clima e ritmo de vendas."
  );

  const dollarValues = dollarHistory.map((item) => item.value);
  const dollarMin = dollarValues.length ? Math.min(...dollarValues) : 0;
  const dollarMax = dollarValues.length ? Math.max(...dollarValues) : 0;
  const dollarAvg = dollarValues.length
    ? dollarValues.reduce((sum, value) => sum + value, 0) / dollarValues.length
    : 0;
  const dollarFirst = dollarValues[0] || 0;
  const dollarLast = dollarValues.at(-1) || dollar;
  const dollarVariation = dollarFirst
    ? ((dollarLast - dollarFirst) / dollarFirst) * 100
    : 0;

  return (
    <main className="page">
      <div className="page-head">
        <button onClick={() => navigate("back")}>← Voltar</button>
        <span className="eyebrow">MERCADO</span>
        <h1>Mercado do Conilon</h1>
      </div>

      <div className="tabs">
        {[
          ["overview", "Visão geral"],
          ["prices", "Preços"],
          ["history", "Histórico"],
          ["dollar", "Dólar 7 dias"],
          ["weather", "Clima"],
          ["intelligence", "Inteligência"],
        ].map(([id, label]) => (
          <button key={id} className={tab === id ? "active" : ""} onClick={() => setTab(id)}>
            {label}
          </button>
        ))}
      </div>

      {tab === "overview" && (
        <div className="panel-grid">
          <article className="panel">
            <span className="eyebrow">SÍNTESE DO DIA</span>
            <h2>Leitura do mercado</h2>
            <p>{reading}</p>
          </article>
          <div className="actions">
            {[
              ["O que mudou", vectors.changed],
              ["Por que importa", vectors.importance],
              ["O que observar", vectors.watch],
            ].map(([title, text]) => (
              <button key={title} onClick={() => setTab("intelligence")}>
                <strong>{title}</strong><span>{text}</span><b>→</b>
              </button>
            ))}
          </div>
        </div>
      )}

      {tab === "prices" && (
        <div className="price-grid">
          {[
            ["Cooabriel", money(num(current.cooabriel))],
            ["CCCV Vitória", money(num(current.cccv))],
            ["ICE Robusta", current.ice_robusta || current.robusta || "—"],
            ["Dólar", money(dollar, 2)],
          ].map(([title, value]) => (
            <article className="price-card" key={title}>
              <span className="eyebrow notranslate" translate={title.startsWith("ICE") ? "no" : undefined}>
                {title}
              </span>
              <strong>{value}</strong>
            </article>
          ))}
        </div>
      )}

      {tab === "history" && (
        <article className="panel">
          <h2>Histórico Cooabriel</h2>
          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={market.history}>
                <CartesianGrid stroke="rgba(255,255,255,.07)" vertical={false} />
                <XAxis dataKey="day" tick={{ fill: "#b8c3bb", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "#b8c3bb", fontSize: 11 }} axisLine={false} tickLine={false} width={52} />
                <Tooltip formatter={(value) => money(value)} contentStyle={{ background: "#12251b", border: "1px solid #294032", borderRadius: 12, color: "#f5f4ee" }} />
                <Line type="monotone" dataKey="price" stroke="#78d592" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </article>
      )}

      {tab === "dollar" && (
        <article className="panel">
          <h2>Dólar — últimos 7 dias</h2>
          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dollarHistory}>
                <CartesianGrid stroke="rgba(255,255,255,.07)" vertical={false} />
                <XAxis dataKey="day" tick={{ fill: "#b8c3bb", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "#b8c3bb", fontSize: 11 }} axisLine={false} tickLine={false} width={52} domain={["dataMin - 0.03", "dataMax + 0.03"]} />
                <Tooltip formatter={(value) => money(value, 2)} contentStyle={{ background: "#12251b", border: "1px solid #294032", borderRadius: 12, color: "#f5f4ee" }} />
                <Line type="monotone" dataKey="value" stroke="#d7c18a" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="dollar-summary">
            <div><span>Hoje</span><strong>{money(dollarLast, 2)}</strong></div>
            <div><span>Mínima</span><strong>{money(dollarMin, 2)}</strong></div>
            <div><span>Média</span><strong>{money(dollarAvg, 2)}</strong></div>
            <div><span>Variação</span><strong>{dollarVariation.toFixed(2).replace(".", ",")}%</strong></div>
          </div>
        </article>
      )}

      {tab === "weather" && (
        <>
          {weather.length ? (
            <div className="weather">
              {weather.map((day, index) => (
                <article key={day.date}>
                  <span>{index === 0 ? "Hoje" : new Date(day.date + "T12:00").toLocaleDateString("pt-BR", { weekday: "short" })}</span>
                  <strong>{Math.round(day.temperature)}°</strong>
                  <small>{day.rain} mm</small>
                </article>
              ))}
            </div>
          ) : (
            <section className="weather-permission">
              <div>
                <h3>Clima da sua região</h3>
                <p>
                  Autorize a localização para receber a previsão do lugar onde você está.
                  Também é possível consultar diretamente São Gabriel da Palha.
                </p>
              </div>
              <div className="weather-actions">
                <button onClick={requestWeather}>Permitir localização</button>
                <button className="secondary" onClick={useRegionalWeather}>
                  Usar São Gabriel da Palha
                </button>
              </div>
              {weatherStatus && <p>{weatherStatus}</p>}
            </section>
          )}
        </>
      )}

      {tab === "intelligence" && (
        <div className="home">
          <Mascot state="observando" message={vectors.mascot} />
          <div className="detail-grid">
            <article className="content-card"><span className="eyebrow">O QUE MUDOU</span><p>{vectors.changed}</p></article>
            <article className="content-card"><span className="eyebrow">POR QUE IMPORTA</span><p>{vectors.importance}</p></article>
            <article className="content-card"><span className="eyebrow">O QUE OBSERVAR</span><p>{vectors.watch}</p></article>
          </div>
        </div>
      )}
    </main>
  );
}

function Knowledge({ navigate }) {
  const [topic, setTopic] = React.useState(null);
  if (topic) {
    const item = KNOWLEDGE[topic];
    return <main className="page"><div className="page-head"><button onClick={()=>setTopic(null)}>← Conhecimento</button><span className="eyebrow">CONTEÚDO</span><h1>{item.title}</h1><p>{item.intro}</p></div><div className="content-list">{item.blocks.map(([title,text])=><article className="content-card" key={title}><h2>{title}</h2><p>{text}</p></article>)}</div></main>;
  }
  return <main className="page"><div className="page-head"><button onClick={()=>navigate("back")}>← Voltar</button><span className="eyebrow">CONHECIMENTO</span><h1>Conheça o Conilon</h1></div><Mascot state="pensando" message="Escolha um assunto. O conteúdo abre em uma página própria."/><div className="h-scroll">{Object.entries(KNOWLEDGE).map(([id,item])=><button className="knowledge-card" key={id} onClick={()=>setTopic(id)}><strong>{item.title}</strong><p>{item.intro}</p><b>Abrir conteúdo →</b></button>)}</div></main>;
}

function News({ market, navigate }) {
  const news = buildNews(market.current || {});
  return <main className="page"><div className="page-head"><button onClick={()=>navigate("back")}>← Voltar</button><span className="eyebrow">NOTÍCIAS</span><h1>As quatro notícias do dia</h1></div><div className="content-list">{news.map((item,index)=><article className="news-card" key={index}><span className="eyebrow">NOTÍCIA {index+1}</span><h3>{item.title}</h3><p>{item.text}</p>{item.link&&<a href={item.link} target="_blank" rel="noreferrer">Abrir fonte →</a>}</article>)}</div></main>;
}

function Tools({ market, navigate }) {
  const [bags, setBags] = React.useState("");
  const [type, setType] = React.useState("7");
  const current = market.current || {};

  const prices = {
    "7": num(current.cooabriel),
    "7/8": num(current.cooabriel_tipo_78 || current.cooabriel_78 || current.tipo_78),
    "8": num(current.cooabriel_tipo_8 || current.cooabriel_8 || current.tipo_8),
  };

  const selectedPrice = prices[type] || prices["7"] || 0;
  const total = (Number(bags) || 0) * selectedPrice;

  return (
    <main className="page">
      <div className="page-head">
        <button onClick={() => navigate("back")}>← Voltar</button>
        <span className="eyebrow">FERRAMENTAS</span>
        <h1>Simulador de venda</h1>
        <p>Escolha o tipo do café e estime o valor bruto do lote.</p>
      </div>

      <article className="panel">
        <div className="form">
          <label>
            Tipo do café
            <select value={type} onChange={(event) => setType(event.target.value)}>
              <option value="7">Tipo 7</option>
              <option value="7/8">Tipo 7/8</option>
              <option value="8">Tipo 8</option>
            </select>
          </label>
          <label>
            Quantidade de sacas
            <input type="number" min="0" value={bags} onChange={(event) => setBags(event.target.value)} placeholder="Ex.: 100" />
          </label>
        </div>
        <div className="result">
          <span>Valor bruto estimado</span>
          <strong>{money(total)}</strong>
          <small>Tipo selecionado: {type} • Referência: {money(selectedPrice)}/saca</small>
        </div>
      </article>
    </main>
  );
}

function PremiumPage({ navigate }) {
  return (
    <main className="page home">
      <div className="page-head">
        <button onClick={() => navigate("back")}>← Voltar</button>
        <span className="eyebrow">PREMIUM</span>
        <h1>Conilon Hoje Premium</h1>
      </div>

      <section className="premium">
        <div>
          <div className="premium-mascot">
            <img src={mascoteAlegre} alt="Seu Conilon" />
            <div>
              <span>SEU CONILON</span>
              <strong>Quer entender o que está movendo o preço e quais sinais merecem atenção?</strong>
            </div>
          </div>
          <p>Leituras aprofundadas, termômetro de mercado, comparativos, newsletter e interpretação das notícias do dia.</p>
        </div>
        <button>Conhecer os recursos</button>
      </section>
    </main>
  );
}

export default function App() {
  const [page, setPage] = React.useState("home");
  const [history, setHistory] = React.useState([]);
  const [market, setMarket] = React.useState({ current: {}, history: [] });
  const [dollar, setDollar] = React.useState(0);
  const [dollarHistory, setDollarHistory] = React.useState([]);
  const [weather, setWeather] = React.useState([]);
  const [weatherStatus, setWeatherStatus] = React.useState("");
  const [search, setSearch] = React.useState(false);
  const [language, setLanguage] = React.useState("pt");

  React.useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) return;
      const host = document.getElementById("google_translate_element");
      if (!host || host.dataset.ready === "true") return;
      host.dataset.ready = "true";
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "pt",
          includedLanguages: "pt,en",
          autoDisplay: false,
          multilanguagePage: true,
        },
        "google_translate_element"
      );
    };

    if (window.google?.translate?.TranslateElement) {
      window.googleTranslateElementInit();
      return undefined;
    }

    if (!document.querySelector('script[data-conilon-translate="true"]')) {
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.dataset.conilonTranslate = "true";
      document.body.appendChild(script);
    }

    return undefined;
  }, []);

  function changeLanguage(nextLanguage) {
    setLanguage(nextLanguage);
    document.documentElement.lang = nextLanguage === "en" ? "en" : "pt-BR";
    const target = nextLanguage === "en" ? "en" : "pt";

    const apply = (attempt = 0) => {
      const combo = document.querySelector("select.goog-te-combo");
      if (combo) {
        combo.value = target;
        combo.dispatchEvent(new Event("change", { bubbles: true }));
        return;
      }
      if (attempt < 20) {
        window.setTimeout(() => apply(attempt + 1), 250);
      }
    };

    apply();
  }

  React.useEffect(() => {
    document.documentElement.lang = language === "en" ? "en" : "pt-BR";
    loadMarket().then(setMarket).catch(console.error);
    loadDollar().then(setDollar).catch(() => {});
    loadDollarHistory().then(setDollarHistory).catch(() => {});
  }, [language]);

  async function requestWeather() {
    setWeatherStatus("Aguardando sua autorização...");
    try {
      setWeather(await loadWeather());
      setWeatherStatus("");
    } catch (error) {
      if (error?.code === 1) {
        setWeatherStatus("A localização foi recusada. Libere a permissão no navegador ou use São Gabriel da Palha.");
      } else if (error?.code === 2) {
        setWeatherStatus("O aparelho não conseguiu identificar sua localização.");
      } else if (error?.code === 3) {
        setWeatherStatus("A localização demorou para responder. Tente novamente.");
      } else {
        setWeatherStatus("Neste acesso local, o navegador pode bloquear a localização. Use a referência regional.");
      }
    }
  }

  async function useRegionalWeather() {
    setWeatherStatus("Carregando a previsão de São Gabriel da Palha...");
    try {
      setWeather(await loadRegionalWeather());
      setWeatherStatus("");
    } catch {
      setWeatherStatus("Não foi possível carregar a previsão regional agora.");
    }
  }

  function navigate(destination) {
    if (destination === "back") {
      const previous = history.at(-1) || "home";
      setHistory((items) => items.slice(0, -1));
      setPage(previous);
    } else if (destination !== page) {
      setHistory((items) => [...items, page]);
      setPage(destination);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function returnToBasic() {
    setHistory([]);
    setPage("home");
    setSearch(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (page === "premium") {
    return <PremiumPreview onBackToBasic={returnToBasic} />;
  }

  let content = <Home market={market} dollar={dollar} navigate={navigate} />;

  if (page === "market") {
    content = (
      <Market
        market={market}
        dollar={dollar}
        dollarHistory={dollarHistory}
        weather={weather}
        weatherStatus={weatherStatus}
        requestWeather={requestWeather}
        useRegionalWeather={useRegionalWeather}
        navigate={navigate}
      />
    );
  }
  if (page === "knowledge") content = <Knowledge navigate={navigate} />;
  if (page === "news") content = <News market={market} navigate={navigate} />;
  if (page === "tools") content = <Tools market={market} navigate={navigate} />;

  return (
    <>
      <style>{css}</style>
      <Header
        page={page}
        navigate={navigate}
        onSearch={() => setSearch(true)}
        language={language}
        onLanguage={changeLanguage}
      />
      <div id="google_translate_element" className="notranslate" translate="no" />
      {content}

      {search && (
        <div className="search">
          <div className="search-box">
            <button onClick={() => setSearch(false)}>×</button>
            <input autoFocus placeholder="O que você quer saber sobre Conilon?" />
            <p>Pesquise por mercado, história, produção, lavoura, qualidade ou notícias.</p>
          </div>
        </div>
      )}

      <nav className="bottom">
        {[
          ["home", "Início"],
          ["market", "Mercado"],
          ["knowledge", "Conhecimento"],
          ["tools", "Ferramentas"],
        ].map(([id, label]) => (
          <button key={id} className={page === id ? "active" : ""} onClick={() => navigate(id)}>
            {label}
          </button>
        ))}
      </nav>
    </>
  );
}