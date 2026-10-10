import { colors, spacing, fonts, shadows } from "../../tokens";

export default function CompliancePage() {
  return (
    <main
      style={{
        maxWidth: "960px",
        margin: "0 auto",
        padding: `${spacing.pageTop} 1.5rem 3.5rem`,
        color: colors.textPlatinum,
        fontFamily: fonts.base,
      }}
    >
      {/* HEADER */}
      <section
        style={{
          marginBottom: spacing.headerMarginBottom,
          padding: spacing.headerPadding,
          borderRadius: "22px",
          background: colors.headerPlaqueBg,
          boxShadow: shadows.header,
          border: `1px solid ${colors.plaqueBorderGold}`,
        }}
      >
        <h1
          style={{
            fontSize: "1.9rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            marginBottom: "0.65rem",
            color: colors.headerGold,
            textShadow: "0 0 14px rgba(201,168,106,0.22)",
          }}
        >
          Compliance Framework
        </h1>

        <div
          style={{
            height: "4px",
            width: "150px",
            background: colors.underlineGold,
            marginBottom: "1rem",
          }}
        ></div>

        <p
          style={{
            fontSize: "1.02rem",
            lineHeight: "1.7",
            maxWidth: "760px",
            color: colors.textPlatinum,
          }}
        >
          Crownstone Vaults maintains a compliance architecture engineered to satisfy
          multi‑jurisdictional regulatory expectations, institutional governance requirements,
          and sovereign‑grade custodial mandates.
        </p>
      </section>

      {/* COMPLIANCE PILLARS */}
      <section style={{ marginBottom: spacing.sectionSpacing }}>
        <h2
          style={{
            fontSize: "1.4rem",
            marginBottom: "1.3rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: colors.headerGold,
          }}
        >
          Compliance Pillars
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {/* Pillar 1 */}
          <div
            style={{
              padding: spacing.plaquePadding,
              borderRadius: "14px",
              background: colors.plaqueBgDark,
              border: `1px solid ${colors.plaqueBorderGold}`,
            }}
          >
            <h3
              style={{
                fontSize: "1.05rem",
                marginBottom: "0.6rem",
                color: colors.headerGold,
              }}
            >
              Regulatory Alignment
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: "1.7",
                color: colors.textPlatinum,
              }}
            >
              Ensuring all custodial operations adhere to applicable regulatory frameworks and
              institutional oversight requirements.
            </p>
          </div>

          {/* Pillar 2 */}
          <div
            style={{
              padding: spacing.plaquePadding,
              borderRadius: "14px",
              background: colors.plaqueBgDark,
              border: `1px solid ${colors.plaqueBorderGold}`,
            }}
          >
            <h3
              style={{
                fontSize: "1.05rem",
                marginBottom: "0.6rem",
                color: colors.headerGold,
              }}
            >
              Compliance Verification
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: "1.7",
                color: colors.textPlatinum,
              }}
            >
              Verification protocols ensure demonstrable compliance across archival, custodial,
              and operational cycles.
            </p>
          </div>

          {/* Pillar 3 */}
          <div
            style={{
              padding: spacing.plaquePadding,
              borderRadius: "14px",
              background: colors.plaqueBgDark,
              border: `1px solid ${colors.plaqueBorderGold}`,
            }}
          >
            <h3
              style={{
                fontSize: "1.05rem",
                marginBottom: "0.6rem",
                color: colors.headerGold,
              }}
            >
              Governance Integration
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: "1.7",
                color: colors.textPlatinum,
              }}
            >
              Compliance structures integrate seamlessly with institutional governance and
              oversight architectures.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", marginTop: "2rem" }}>
        <div
          style={{
            display: "inline-block",
            padding: "1.8rem 2rem",
            borderRadius: "26px",
            background: "linear-gradient(145deg, #0D1A2F, #091224)",
            border: `1px solid ${colors.plaqueBorderGold}`,
            boxShadow: shadows.cta,
            transform: "translateY(-2px)",
          }}
        >
          <div style={{ position: "relative", display: "inline-block" }}>
            <a
              href="/contact"
              style={{
                padding: "0.8rem 1.55rem",
                borderRadius: "999px",
                background: colors.ctaGold,
                color: "#0A1728",
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
                boxShadow: shadows.cta,
                display: "inline-block",
              }}
            >
              Request Compliance Briefing
            </a>

            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "84%",
                transform: "translateX(-50%) rotate(-110deg)",
                fontSize: "1.1rem",
                opacity: 1,
                color: "#C9B27A",
                pointerEvents: "none",
              }}
            >
              👉
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
