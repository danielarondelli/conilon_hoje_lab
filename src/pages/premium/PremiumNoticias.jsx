import React from "react";
import mascotePensando from "../../assets/mascotes/mascote_pensando.png";

export default function PremiumNoticias({
  current = {},
  navigate,
  getField,
  homeReading = "",
}) {
  const news = [1, 2, 3, 4].map((index) => ({
    title: getField(
      current,
      [
        `noticia${index}_titulo`,
        `noticia_${index}_titulo`,
        `titulo_noticia${index}`,
      ],
      `Notícia ${index}`
    ),
    text: getField(
      current,
      [
        `noticia${index}_texto`,
        `noticia_${index}_texto`,
        `noticia${index}`,
      ],
      ""
    ),
    reading: getField(
      current,
      [
        `leitura_noticia${index}`,
        `leitura_noticia_${index}`,
        `nossa_leitura${index}`,
        `premium_leitura_noticia${index}`,
        `leitura_premium_noticia${index}`,
      ],
      ""
    ),
    impact: getField(
      current,
      [
        `impacto_noticia${index}`,
        `impacto_conilon_noticia${index}`,
        `o_que_significa_noticia${index}`,
      ],
      ""
    ),
    watch: getField(
      current,
      [
        `observar_noticia${index}`,
        `o_que_observar_noticia${index}`,
      ],
      ""
    ),
  }));

  const integrated = getField(
    current,
    [
      "conversa_premium",
      "leitura_integrada",
      "conectando_os_pontos",
      "conversa_do_dia",
    ],
    ""
  );


  const normalizeText = (value) =>
    String(value || "")
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim();

  const splitIntoParagraphs = (value) => {
    const text = String(value || "").trim();
    if (!text) return [];

    const sentences = text
      .split(/(?<=[.!?])\s+/)
      .map((item) => item.trim())
      .filter(Boolean);

    const paragraphs = [];
    for (let index = 0; index < sentences.length; index += 2) {
      paragraphs.push(sentences.slice(index, index + 2).join(" "));
    }
    return paragraphs;
  };

  return (
    <main className="labp-page labp-home">
      <div className="labp-page-head">
        <button className="labp-back" onClick={() => navigate("back")}>
          ← Voltar
        </button>
        <span className="labp-eyebrow">FATOS</span>
        <h1>Quais notícias explicam o cenário?</h1>
      </div>

      <div className="labp-home">
        {news.map((item, index) => (
          <article className="labp-card" key={index}>
            <span className="labp-eyebrow">
              NOTÍCIA {index + 1}
            </span>

            <h2>{item.title}</h2>

            {item.text && normalizeText(item.text) !== normalizeText(homeReading) ? (
              <div style={{ display: "grid", gap: 10 }}>
                {splitIntoParagraphs(item.text).map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
              </div>
            ) : null}

            {item.reading && (
              <div
                style={{
                  marginTop: 14,
                  padding: 15,
                  borderLeft: "3px solid #d7c18a",
                  borderRadius: "0 13px 13px 0",
                  background: "#18271d",
                }}
              >
                <span className="labp-eyebrow">NOSSA LEITURA</span>
                <div style={{ display: "grid", gap: 10, marginTop: 8 }}>
                  {splitIntoParagraphs(item.reading).map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex} style={{ color: "#dce4dd" }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {(item.impact || item.watch) && (
              <div className="labp-grid" style={{ marginTop: 12 }}>
                {item.impact && (
                  <div
                    className="labp-card"
                    style={{ padding: 14 }}
                  >
                    <span className="labp-eyebrow">
                      O QUE ISSO SIGNIFICA
                    </span>
                    <p style={{ marginTop: 8 }}>{item.impact}</p>
                  </div>
                )}

                {item.watch && (
                  <div
                    className="labp-card"
                    style={{ padding: 14 }}
                  >
                    <span className="labp-eyebrow">
                      O QUE OBSERVAR
                    </span>
                    <p style={{ marginTop: 8 }}>{item.watch}</p>
                  </div>
                )}
              </div>
            )}
          </article>
        ))}
      </div>

      {integrated && (
        <section className="labp-mascot">
          <img
            src={mascotePensando}
            alt="Seu Conilon pensando"
          />
          <div>
            <span>CONECTANDO OS PONTOS</span>
            <strong>{integrated}</strong>
          </div>
        </section>
      )}
    </main>
  );
}