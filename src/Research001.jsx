
import React, { useState } from "react";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSemH7XLF8DcIpvr8wxhnUP2_xFt87YPbNOpmdYR-ChxeK_UFA/viewform";

const content = {
  en: {
    back: "Back to Conilon Hoje",
    issue: "RESEARCH 001 | INAUGURAL EDITION",
    title: "How much coffee can the world afford to lose in 2027/28?",
    subtitle:
      "An independent quantitative assessment of global coffee supply risk.",
    questionTitle: "Two questions. One supply-risk assessment.",
    q1:
      "How much production headroom remains under different supply shocks in 2027/28?",
    q2:
      "What can observable coffee inventories tell us about supply resilience?",
    description:
      "The research combines public production and consumption data, origin-level scenarios, historical supply shocks and inventory evidence. It examines the resilience of the global coffee balance without presenting conditional scenarios as definitive forecasts.",
    metrics: ["Lower stress", "Central", "Severe stress"],
    balanceNote:
      "Conditional production-consumption balances, million 60-kg bags.",
    scopeTitle: "What you receive",
    scope:
      "A 22-page digital PDF with quantitative scenarios, documented assumptions, inventory analysis, methodological limitations and a practical framework for professional supply-risk assessment.",
    audience:
      "For physical traders, cooperatives, exporters, industrial coffee buyers and market analysts.",
    warning:
      "This research is not a price forecast or a guarantee of future physical availability.",
    priceLabel: "INAUGURAL PRICE",
    formTitle: "Request your payment link",
    formInfo:
      "To request an individual Payoneer payment link, click below and complete the request form. The PDF will be delivered by email after payment confirmation.",
    submit: "Request payment link",
    formNote:
      "The request form opens in a new tab. Submitting the form does not constitute a payment or purchase confirmation.",
    footer:
      "Independent coffee market research | Daniela Rondelli"
  },

  pt: {
    back: "Voltar ao Conilon Hoje",
    issue: "PESQUISA 001 | EDIÇÃO INAUGURAL",
    title: "Quanto café o mundo pode perder em 2027/28?",
    subtitle:
      "Uma avaliação quantitativa independente do risco mundial de abastecimento de café.",
    questionTitle:
      "Duas perguntas. Uma pesquisa de risco de abastecimento.",
    q1:
      "Qual é a margem de produção diante de diferentes choques de oferta em 2027/28?",
    q2:
      "O que os estoques observáveis revelam sobre a resiliência do abastecimento?",
    description:
      "A pesquisa combina dados públicos de produção e consumo, cenários por origem, choques históricos de oferta e evidências de estoques. Investiga a resiliência do balanço mundial sem apresentar cenários condicionais como previsões definitivas.",
    metrics: ["Menor estresse", "Central", "Estresse severo"],
    balanceNote:
      "Saldos condicionais entre produção e consumo, em milhões de sacas de 60 kg.",
    scopeTitle: "O que você recebe",
    scope:
      "Relatório digital em PDF com 22 páginas, cenários quantitativos, premissas documentadas, análise de estoques, limitações metodológicas e uma estrutura prática para avaliar riscos de abastecimento.",
    audience:
      "Para traders físicos, cooperativas, exportadores, compradores industriais e analistas do mercado de café.",
    warning:
      "Esta pesquisa não é uma previsão de preços nem uma garantia de disponibilidade física futura.",
    priceLabel: "PREÇO INAUGURAL",
    formTitle: "Solicite seu link de pagamento",
    formInfo:
      "Para solicitar um link individual de pagamento da Payoneer, clique abaixo e preencha o formulário de solicitação. O PDF será entregue por e-mail após a confirmação do pagamento.",
    submit: "Solicitar link de pagamento",
    formNote:
      "O formulário será aberto em uma nova aba. O envio da solicitação não representa pagamento nem confirmação de compra.",
    footer:
      "Pesquisa independente do mercado de café | Daniela Rondelli"
  }
};

const colors = {
  dark: "#102b20",
  green: "#183b2b",
  gold: "#c5a15a",
  paper: "#f7f5f0",
  ink: "#192e23",
  muted: "#617066"
};

export default function Research001() {
  const [lang, setLang] = useState("en");

  const t = content[lang];

  const section = {
    maxWidth: 1000,
    margin: "0 auto",
    padding: "40px 24px"
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: colors.paper,
        color: colors.ink,
        fontFamily: "Arial, Helvetica, sans-serif"
      }}
    >
      <header
        style={{
          background: colors.dark,
          color: "#fff",
          borderBottom: `3px solid ${colors.gold}`
        }}
      >
        <div
          style={{
            ...section,
            paddingTop: 23,
            paddingBottom: 23,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 18
          }}
        >
          <div>
            <div
              style={{
                fontSize: 19,
                letterSpacing: 2,
                fontWeight: 700
              }}
            >
              CONILON HOJE
            </div>

            <div
              style={{
                color: colors.gold,
                marginTop: 5
              }}
            >
              Market Intelligence
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 12
            }}
          >
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              style={{
                cursor: "pointer",
                fontWeight: lang === "en" ? 700 : 400
              }}
            >
              EN
            </button>

            <button
              type="button"
              onClick={() => setLang("pt")}
              aria-pressed={lang === "pt"}
              style={{
                cursor: "pointer",
                fontWeight: lang === "pt" ? 700 : 400
              }}
            >
              PT
            </button>
          </div>
        </div>
      </header>

      <section
        style={{
          background: colors.green,
          color: "#fff"
        }}
      >
        <div
          style={{
            ...section,
            paddingTop: 65,
            paddingBottom: 70
          }}
        >
          <a
            href="/"
            style={{
              color: "#d1d6cd",
              fontSize: 14
            }}
          >
            {t.back}
          </a>

          <p
            style={{
              marginTop: 42,
              color: colors.gold,
              fontWeight: 700,
              letterSpacing: 2,
              fontSize: 13
            }}
          >
            {t.issue}
          </p>

          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(36px, 5vw, 62px)",
              maxWidth: 850,
              lineHeight: 1.12,
              marginBottom: 20
            }}
          >
            {t.title}
          </h1>

          <p
            style={{
              maxWidth: 680,
              fontSize: 19,
              lineHeight: 1.65,
              color: "#d1dbd2"
            }}
          >
            {t.subtitle}
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 12,
              marginTop: 42
            }}
          >
            {["+6.1 M", "+1.2 M", "-5.4 M"].map(
              (value, i) => (
                <div
                  key={i}
                  style={{
                    background: "#244737",
                    padding: 21,
                    borderTop: `5px solid ${
                      [
                        "#55b998",
                        "#79acc9",
                        "#c66c59"
                      ][i]
                    }`
                  }}
                >
                  <div
                    style={{
                      fontSize: 30,
                      fontWeight: 700
                    }}
                  >
                    {value}
                  </div>

                  <div
                    style={{
                      color: "#d0ddd4",
                      marginTop: 7
                    }}
                  >
                    {t.metrics[i]}
                  </div>
                </div>
              )
            )}
          </div>

          <p
            style={{
              color: "#c9d7ce",
              marginTop: 16,
              fontSize: 13
            }}
          >
            {t.balanceNote}
          </p>
        </div>
      </section>

      <section style={section}>
        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 30
          }}
        >
          {t.questionTitle}
        </h2>

        <div
          style={{
            borderLeft: `4px solid ${colors.gold}`,
            paddingLeft: 22,
            lineHeight: 1.7,
            fontSize: 19
          }}
        >
          <p>
            <strong>01.</strong> {t.q1}
          </p>

          <p>
            <strong>02.</strong> {t.q2}
          </p>
        </div>

        <p
          style={{
            lineHeight: 1.8,
            maxWidth: 780,
            color: colors.muted,
            fontSize: 16,
            marginTop: 30
          }}
        >
          {t.description}
        </p>
      </section>

      <section
        style={{
          background: "#e9eee8"
        }}
      >
        <div style={section}>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 30
            }}
          >
            {t.scopeTitle}
          </h2>

          <p
            style={{
              lineHeight: 1.8,
              maxWidth: 780
            }}
          >
            {t.scope}
          </p>

          <p
            style={{
              lineHeight: 1.8,
              maxWidth: 780
            }}
          >
            {t.audience}
          </p>

          <p
            style={{
              borderLeft: `4px solid ${colors.gold}`,
              padding: "12px 18px",
              background: "#fff",
              maxWidth: 760
            }}
          >
            {t.warning}
          </p>
        </div>
      </section>

      <section
        style={{
          ...section,
          maxWidth: 720
        }}
      >
        <div
          style={{
            border: "1px solid #d8dcd4",
            padding: "32px 26px",
            background: "#fff",
            borderRadius: 12
          }}
        >
          <div
            style={{
              color: colors.muted,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 1
            }}
          >
            {t.priceLabel}
          </div>

          <div
            style={{
              fontSize: 44,
              fontWeight: 700,
              color: colors.green,
              marginTop: 6
            }}
          >
            US$ 69
          </div>

          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 27
            }}
          >
            {t.formTitle}
          </h2>

          <p
            style={{
              lineHeight: 1.7,
              color: colors.muted
            }}
          >
            {t.formInfo}
          </p>

          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              boxSizing: "border-box",
              marginTop: 26,
              padding: "16px 22px",
              width: "100%",
              borderRadius: 7,
              fontSize: 16,
              background: colors.green,
              color: "#fff",
              fontWeight: 700,
              textAlign: "center",
              textDecoration: "none"
            }}
          >
            {t.submit}
          </a>

          <p
            style={{
              fontSize: 13,
              lineHeight: 1.6,
              color: colors.muted,
              marginTop: 16
            }}
          >
            {t.formNote}
          </p>
        </div>
      </section>

      <footer
        style={{
          padding: 30,
          background: colors.dark,
          borderTop: `3px solid ${colors.gold}`,
          color: "#d4dcd3",
          textAlign: "center",
          fontSize: 13
        }}
      >
        {t.footer}

        <div
          style={{
            marginTop: 10
          }}
        >
          www.conilonhoje.com.br
        </div>
      </footer>
    </main>
  );
}
