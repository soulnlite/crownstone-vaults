export default function AccreditationPage() {
  return (
    <div style={{ color: "#E3E6EB" }}>
      {/* HERO — Compliance Header Design Inculcated */}
      <section
        style={{
          marginBottom: "4rem",
          padding: "3.2rem 2.8rem",
          borderRadius: "22px",
          background:
            "linear-gradient(135deg, rgba(201,168,106,0.18) 0%, rgba(10,23,40,0.92) 40%, #07101F 100%)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.7)",
          border: "1px solid rgba(201,168,106,0.35)",
        }}
      >
        <h1
          style={{
            fontFamily:
              "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontSize: "2.25rem", // scaled down from Compliance 2.7rem
            marginBottom: "1.3rem",
            letterSpacing: "0.065em",
            color: "#FDF4E3",
            textShadow: "0 0 20px rgba(201,168,106,0.32)",
            textTransform: "uppercase",
          }}
        >
          Accreditation Framework
        </h1>

        <div
          style={{
            height: "4px",
            width: "150px",
            background:
              "linear-gradient(90deg, #C9A86A 0%, rgba(201,168,106,0.4) 70%, transparent 100%)",
            marginBottom: "2rem",
          }}
        ></div>

        <p
          style={{
            fontSize: "1.12rem",
            lineHeight: "1.9",
            maxWidth: "780px",
            marginBottom: "2.4rem",
            letterSpacing: "0.01em",
          }}
        >
          Crownstone Vaults Limited operates under an accreditation framework engineered to satisfy
          institutional, regulatory, and sovereign-grade oversight requirements. Accreditation
          ensures continuity of custody, demonstrable compliance, and alignment with long-horizon
          preservation mandates.
        </p>
      </section>

      {/* ACCREDITATION STRUCTURE */}
      <section style={{ marginBottom: "4rem" }}>
        <h2
          style={{
            fontFamily:
              "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontSize: "1.55rem",
            marginBottom: "1.8rem",
            letterSpacing: "0.085em",
            textTransform: "uppercase",
            color: "#FDF4E3",
          }}
        >
          Accreditation Pillars
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: "2rem",
          }}
        >
          {/* Pillar 1 */}
          <div
            style={{
              padding: "2rem 1.8rem",
              borderRadius: "18px",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.045), rgba(10,23,40,0.96))",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 12px 32px rgba(0,0,0,0.5)",
            }}
          >
            <h3
              style={{
                fontSize: "1.15rem",
                marginBottom: "0.8rem",
                color: "#F3D39A",
                letterSpacing: "0.02em",
              }}
            >
              Institutional Accreditation
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.78" }}>
              Accreditation validates Crownstone Vaults as a neutral custodian capable of maintaining
              integrity, traceability, and continuity of custody across operational cycles.
            </p>
          </div>

          {/* Pillar 2 */}
          <div
            style={{
              padding: "2rem 1.8rem",
              borderRadius: "18px",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.045), rgba(10,23,40,0.96))",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 12px 32px rgba(0,0,0,0.5)",
            }}
          >
            <h3
              style={{
                fontSize: "1.15rem",
                marginBottom: "0.8rem",
                color: "#F3D39A",
                letterSpacing: "0.02em",
              }}
            >
              Compliance Verification
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.78" }}>
              Verification protocols ensure alignment with regulatory expectations, audit
              requirements, and multi-jurisdictional governance standards.
            </p>
          </div>

          {/* Pillar 3 */}
          <div
            style={{
              padding: "2rem 1.8rem",
              borderRadius: "18px",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.045), rgba(10,23,40,0.96))",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 12px 32px rgba(0,0,0,0.5)",
            }}
          >
            <h3
              style={{
                fontSize: "1.15rem",
                marginBottom: "0.8rem",
                color: "#F3D39A",
                letterSpacing: "0.02em",
              }}
            >
              Oversight Integration
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.78" }}>
              Oversight integration enables institutions to embed Crownstone Vaults within their
              governance, risk, and compliance architecture.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div
          style={{
            height: "4px",
            width: "150px",
            background:
              "linear-gradient(90deg, #C9A86A 0%, rgba(201,168,106,0.4) 70%, transparent 100%)",
            marginBottom: "1.4rem",
          }}
        ></div>

        <h2
          style={{
            fontFamily:
              "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontSize: "1.55rem",
            marginBottom: "1.2rem",
            letterSpacing: "0.085em",
            textTransform: "uppercase",
            color: "#FDF4E3",
          }}
        >
          Accreditation Engagement
        </h2>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: "1.85",
            maxWidth: "800px",
            marginBottom: "2rem",
            letterSpacing: "0.01em",
          }}
        >
          Institutions requiring accreditation validation, compliance verification, or governance
          alignment may initiate contact through our formal engagement pathway.
        </p>

        <a
          href="/contact"
          style={{
            padding: "1rem 1.8rem",
            borderRadius: "999px",
            border: "1px solid rgba(201,168,106,0.7)",
            color: "#FDF4E3",
            fontWeight: 500,
            fontSize: "1.05rem",
            textDecoration: "none",
            background: "rgba(10,23,40,0.85)",
          }}
        >
          Request Accreditation Briefing
        </a>
      </section>
    </div>
  );
}
