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

export default function PremiumCooabrielClaude({
  market,
  navigate,
  getField,
  num,
  money,
}) {
  const current = market?.current || {};
  const history = (market?.history || []).slice(-30);

  const [type, setType] = React.useState("7");
  const [cost, setCost] = React.useState("");
  const [bags, setBags] = React.useState("");

  const priceOptions = [
    {
      id: "7",
      label: "Tipo 7",
      value: num(getField(current, ["cooabriel"])),
    },
    {
      id: "7/8",
      label: "Tipo 7/8",
      value: num(
        getField(current, [
          "cooabriel_tipo_78",
          "cooabriel_78",
          "tipo_78",
          "tipo78",
        ])
      ),
    },
    {
      id: "8",
      label: "Tipo 8",
      value: num(
        getField(current, [
          "cooabriel_tipo_8",
          "cooabriel_8",
          "tipo_8",
          "tipo8",
        ])
      ),
    },
  ];

  const selectedOption =
    priceOptions.find((item) => item.id === type) || priceOptions[0];

  const selectedPrice =
    selectedOption.value || priceOptions[0].value || 0;

  const referenceCost = 591;
  const realCost = Number(cost) || referenceCost;
  const margin = selectedPrice - realCost;
  const totalMargin = margin * (Number(bags) || 0);
  const grossValue = selectedPrice * (Number(bags) || 0);

  const values = history
    .map((item) => item.price)
    .filter(Boolean);

  const min = values.length ? Math.min(...values) : 0;
  const max = values.length ? Math.max(...values) : 0;
  const avg = values.length
    ? values.reduce((sum, value) => sum + value, 0) / values.length
    : 0;

  const currentPosition =
    max > min ? ((selectedPrice - min) / (max - min)) * 100 : 50;

  const averagePosition =
    max > min ? ((avg - min) / (max - min)) * 100 : 50;

  return (
    <main className="labp-page labp-home">
      <div className="labp-page-head">
        <button className="labp-back" onClick={() => navigate("back")}>
          ← Voltar
        </button>
        <span className="labp-eyebrow">MEU CAFÉ</span>
        <h1>Quanto vale e quanto fica?</h1>
        <p>
          Escolha o tipo do café. A margem, a posição em 30 dias e a
          simulação serão atualizadas com esse preço.
        </p>
      </div>

      <section className="labp-section">
        <div className="labp-section-head">
          <span className="labp-eyebrow">PREÇO SELECIONADO</span>
          <h2>Qual café você quer analisar?</h2>
        </div>

        <div className="labp-shortcuts">
          {priceOptions.map((item) => (
            <button
              className="labp-shortcut"
              key={item.id}
              onClick={() => setType(item.id)}
              style={{
                borderColor:
                  type === item.id ? "#d7c18a" : "#2c4938",
                background:
                  type === item.id
                    ? "linear-gradient(145deg,#263527,#102119)"
                    : "#10231a",
              }}
            >
              <strong>{item.label}</strong>
              <p style={{ fontSize: 27, color: "#f5f4ee" }}>
                {money(item.value)}
              </p>
              <b>
                {type === item.id
                  ? "Selecionado para os cálculos"
                  : "Selecionar →"}
              </b>
            </button>
          ))}
        </div>
      </section>

      <div className="labp-grid">
        <article className="labp-card gold">
          <span className="labp-eyebrow">MARGEM ESTIMADA</span>
          <h2
            style={{
              fontSize: 38,
              color: margin >= 0 ? "#78d592" : "#f3a1a1",
            }}
          >
            {margin >= 0 ? "+" : ""}
            {money(margin)}/sc
          </h2>
          <p>
            Esta margem mostra quanto sobra em cada saca depois de
            descontar o custo de produção. Enquanto você não informa seu
            próprio custo, o cálculo utiliza a referência estadual de{" "}
            {money(referenceCost)} por saca.
          </p>
        </article>

        <article className="labp-card">
          <span className="labp-eyebrow">
            POSIÇÃO DO PREÇO NOS ÚLTIMOS 30 DIAS
          </span>
          <h2>
            {selectedPrice >= avg
              ? "Acima da média"
              : "Abaixo da média"}
          </h2>

          <div
            style={{
              position: "relative",
              height: 52,
              margin: "20px 4px 8px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 19,
                left: 0,
                right: 0,
                height: 8,
                borderRadius: 999,
                background: "#0c1d14",
                border: "1px solid #2c4938",
              }}
            />

            <div
              style={{
                position: "absolute",
                top: 12,
                left: `${Math.max(
                  2,
                  Math.min(98, averagePosition)
                )}%`,
                width: 2,
                height: 23,
                background: "#b8c3bb",
              }}
            />

            <div
              style={{
                position: "absolute",
                top: 9,
                left: `${Math.max(
                  2,
                  Math.min(98, currentPosition)
                )}%`,
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: "#78d592",
                border: "3px solid #153123",
                transform: "translateX(-50%)",
              }}
            />

            <span
              style={{
                position: "absolute",
                left: 0,
                bottom: 0,
                fontSize: 9,
                color: "#b8c3bb",
              }}
            >
              Mínima
            </span>
            <span
              style={{
                position: "absolute",
                left: "50%",
                bottom: 0,
                fontSize: 9,
                color: "#b8c3bb",
                transform: "translateX(-50%)",
              }}
            >
              Média
            </span>
            <span
              style={{
                position: "absolute",
                right: 0,
                bottom: 0,
                fontSize: 9,
                color: "#b8c3bb",
              }}
            >
              Máxima
            </span>
          </div>

          <p>
            Mín. {money(min)} · Média {money(avg)} · Atual{" "}
            {money(selectedPrice)} · Máx. {money(max)}
          </p>
        </article>
      </div>

      <article className="labp-card">
        <span className="labp-eyebrow">
          HISTÓRICO FÍSICO · 30 DIAS
        </span>

        <div style={{ height: 290, marginTop: 12 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={history}>
              <CartesianGrid
                stroke="rgba(255,255,255,.07)"
                vertical={false}
              />
              <XAxis dataKey="day" hide />
              <YAxis
                tick={{ fill: "#b8c3bb", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                width={55}
              />
              <Tooltip
                formatter={(value) => money(value)}
                contentStyle={{
                  background: "#10231a",
                  border: "1px solid #2c4938",
                  borderRadius: 12,
                  color: "#f5f4ee",
                }}
              />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#78d592"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </article>

      <article className="labp-card">
        <span className="labp-eyebrow">
          TRAZER PARA MINHA REALIDADE
        </span>
        <h2>
          {selectedOption.label} · preço usado:{" "}
          {money(selectedPrice)}/sc
        </h2>
        <p>
          A seleção feita acima já está aplicada. Você também pode trocar o
          tipo diretamente nesta calculadora.
        </p>

        <div
          style={{
            display: "flex",
            gap: 8,
            overflowX: "auto",
            marginTop: 14,
            paddingBottom: 4,
          }}
        >
          {priceOptions.map((item) => (
            <button
              key={item.id}
              onClick={() => setType(item.id)}
              style={{
                flex: "0 0 auto",
                border: `1px solid ${
                  type === item.id ? "#d7c18a" : "#2c4938"
                }`,
                borderRadius: 999,
                background:
                  type === item.id
                    ? "rgba(215,193,138,.12)"
                    : "transparent",
                color:
                  type === item.id ? "#d7c18a" : "#b8c3bb",
                padding: "9px 12px",
                fontWeight: 850,
              }}
            >
              {item.label} · {money(item.value)}
            </button>
          ))}
        </div>

        <div className="labp-grid" style={{ marginTop: 14 }}>
          <label>
            <span
              style={{
                display: "block",
                marginBottom: 7,
                color: "#b8c3bb",
                fontSize: 11,
              }}
            >
              Meu custo por saca
            </span>
            <input
              value={cost}
              onChange={(event) => setCost(event.target.value)}
              type="number"
              placeholder={`Referência: ${referenceCost}`}
              style={{
                width: "100%",
                minHeight: 48,
                border: "1px solid #2c4938",
                borderRadius: 13,
                background: "#0c1d14",
                color: "#f5f4ee",
                padding: "0 13px",
              }}
            />
          </label>

          <label>
            <span
              style={{
                display: "block",
                marginBottom: 7,
                color: "#b8c3bb",
                fontSize: 11,
              }}
            >
              Quantidade de sacas
            </span>
            <input
              value={bags}
              onChange={(event) => setBags(event.target.value)}
              type="number"
              placeholder="Ex.: 100"
              style={{
                width: "100%",
                minHeight: 48,
                border: "1px solid #2c4938",
                borderRadius: 13,
                background: "#0c1d14",
                color: "#f5f4ee",
                padding: "0 13px",
              }}
            />
          </label>
        </div>

        <div className="labp-grid" style={{ marginTop: 14 }}>
          <div className="labp-card" style={{ padding: 14 }}>
            <span className="labp-eyebrow">PREÇO USADO</span>
            <h3>{money(selectedPrice)}/sc</h3>
          </div>

          <div className="labp-card" style={{ padding: 14 }}>
            <span className="labp-eyebrow">CUSTO USADO</span>
            <h3>{money(realCost)}/sc</h3>
          </div>
        </div>

        {Number(bags) > 0 && (
          <div
            style={{
              marginTop: 16,
              padding: 18,
              borderRadius: 16,
              background: "#183b29",
              textAlign: "center",
            }}
          >
            <span style={{ display: "block", color: "#b8c3bb" }}>
              Valor bruto estimado: {money(grossValue)}
            </span>
            <span
              style={{
                display: "block",
                marginTop: 8,
                color: "#b8c3bb",
              }}
            >
              Margem estimada para {bags} sacas de{" "}
              {selectedOption.label}
            </span>
            <strong
              style={{
                display: "block",
                margin: "8px 0",
                fontSize: 34,
                color:
                  totalMargin >= 0 ? "#78d592" : "#f3a1a1",
              }}
            >
              {totalMargin >= 0 ? "+" : ""}
              {money(totalMargin)}
            </strong>
          </div>
        )}
      </article>
    </main>
  );
}