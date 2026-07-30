import React from "react";
import mascoteObservando from "../../assets/mascotes/mascote_observando.png";

export default function PremiumTermometroMercado({
  market,
  dollar,
  navigate,
  getField,
  num,
}) {
  const current = market?.current || {};
  const history = market?.history || [];

  const variation = (currentValue, previousValue) =>
    currentValue && previousValue
      ? ((currentValue - previousValue) / previousValue) * 100
      : null;

  const physical = num(getField(current, ["cooabriel"]));
  const physicalPrevious = history.at(-2)?.price || null;

  const ice = num(getField(current, ["ice_robusta", "robusta", "ice", "ice_londres", "robusta_londres", "bolsa_londres", "ice_robusta_usd_t", "ice_robusta_usdt", "ice_usd_t", "iceusdt", "londres"]));
  const icePrevious =
    num(
      getField(current, [
        "ice_anterior",
        "robusta_anterior",
        "ice_londres_anterior",
        "londres_anterior",
      ])
    ) || null;

  const dollarPrevious =
    num(
      getField(current, [
        "dolar_anterior",
        "dollar_anterior",
        "usdbrl_anterior",
      ])
    ) || null;

  const vectors = [
    {
      name: "Mercado físico",
      value: physical,
      change: variation(physical, physicalPrevious),
      weight: 5,
      explanation:
        "Maior influência por representar o preço regional mais próximo do produtor.",
    },
    {
      name: "ICE Robusta",
      value: ice,
      change: variation(ice, icePrevious),
      weight: 3,
      explanation:
        "Influência intermediária por funcionar como referência internacional.",
    },
    {
      name: "Dólar",
      value: dollar,
      change: variation(dollar, dollarPrevious),
      weight: 2,
      explanation:
        "Influência complementar por alterar a conversão cambial da bolsa.",
    },
  ];

  const comparable = vectors.filter((item) => item.change !== null);
  const unavailable = vectors.filter((item) => item.change === null);
  const favorable = comparable.filter((item) => item.change > 0.15);
  const negative = comparable.filter((item) => item.change < -0.15);
  const neutral = comparable.filter((item) => Math.abs(item.change) <= 0.15);

  const score = comparable.reduce((sum, item) => {
    if (Math.abs(item.change) <= 0.15) return sum;
    return sum + Math.sign(item.change) * item.weight;
  }, 0);

  const dominant = [...comparable].sort(
    (a, b) =>
      Math.abs(b.change * b.weight) - Math.abs(a.change * a.weight)
  )[0] || null;

  const overall =
    comparable.length < 2
      ? ["Comparação parcial: falta histórico", "neutral"]
      : score >= 4
      ? ["Força favorável, com confirmação parcial", "good"]
      : score <= -4
      ? ["Força negativa, com confirmação parcial", "bad"]
      : ["Vetores divididos, sem direção dominante", "neutral"];

  const mascotText =
    unavailable.length
      ? `${unavailable.map((item) => item.name).join(" e ")} ainda não possui(em) valor anterior para comparação. Eu prefiro mostrar “sem comparação” a classificar o indicador como neutro.`
      : favorable.length && negative.length
      ? `${favorable.map((item) => item.name).join(" e ")} favorecem, enquanto ${negative.map((item) => item.name).join(" e ")} pressionam. ${dominant?.name || "O vetor dominante"} é o vetor de maior influência hoje.`
      : favorable.length >= 2
      ? `${favorable.length} vetores favorecem o cenário. ${dominant?.name || "O vetor dominante"} exerce a maior influência, mas a leitura só ganha força se houver continuidade.`
      : negative.length >= 2
      ? `${negative.length} vetores pressionam o cenário. ${dominant?.name || "O vetor dominante"} tem o maior peso no movimento e merece acompanhamento no próximo fechamento.`
      : `Nenhum vetor domina sozinho. ${neutral.length} indicador(es) permanece(m) sem direção relevante.`;

  function classify(value) {
    if (value === null) return ["Sem comparação", "neutral"];
    if (Math.abs(value) <= 0.15) return ["Neutro", "neutral"];
    return value > 0
      ? ["Favorece", "good"]
      : ["Pressiona", "bad"];
  }

  return (
    <main className="labp-page labp-home">
      <div className="labp-page-head">
        <button className="labp-back" onClick={() => navigate("back")}>
          ← Voltar
        </button>
        <span className="labp-eyebrow">VETORES</span>
        <h1>O que está movendo o mercado?</h1>
        <p>
          Em vez de mostrar pontos abstratos, esta tela explica quantos
          vetores favorecem, quantos pressionam e qual possui maior
          influência.
        </p>
      </div>

      <article className="labp-card gold">
        <span className={`labp-chip ${overall[1]}`}>
          {overall[0]}
        </span>

        <h2 style={{ fontSize: 28, marginTop: 14 }}>
          {favorable.length} favorece(m) · {negative.length} pressiona(m) ·{" "}
          {neutral.length} neutro(s)
          {unavailable.length > 0 ? ` · ${unavailable.length} sem comparação` : ""}
        </h2>

        <p>
          O mercado físico recebe o maior peso analítico porque está mais
          próximo da realidade regional. ICE Robusta e dólar ajudam a
          confirmar ou contradizer esse movimento.
        </p>
      </article>

      <div className="labp-grid">
        {vectors.map((item) => {
          const [label, className] = classify(item.change);

          return (
            <article className="labp-card" key={item.name}>
              <span className="labp-eyebrow">
                {item.name.toUpperCase()}
              </span>

              <h2>
                {item.value
                  ? item.value.toLocaleString("pt-BR", {
                      maximumFractionDigits:
                        item.name === "Dólar" ? 2 : 0,
                    })
                  : "—"}
              </h2>

              <span className={`labp-chip ${className}`}>
                {label}
                {item.change !== null
                  ? ` · ${item.change > 0 ? "+" : ""}${item.change.toFixed(2)}%`
                  : ""}
              </span>

              <p style={{ marginTop: 12 }}>
                Peso analítico {item.weight}/10. {item.explanation}
              </p>
            </article>
          );
        })}
      </div>

      <section className="labp-mascot">
        <img
          src={mascoteObservando}
          alt="Seu Conilon observando"
        />
        <div>
          <span>SEU CONILON INTERPRETA</span>
          <strong>{mascotText}</strong>
        </div>
      </section>

      <article className="labp-card">
        <span className="labp-eyebrow">COMO LER ESTA TELA</span>
        <h2>Direção não é o mesmo que confirmação</h2>
        <p>
          Um vetor pode favorecer o mercado sem ser suficiente para formar
          tendência. A leitura ganha força quando os indicadores caminham
          juntos e o movimento se repete nos próximos fechamentos.
        </p>
      </article>
    </main>
  );
}