export default function HomePage() {
  return (
    <div style={{ color: "#E3E6EB" }}>
      {/* HERO */}
      <section
        style={{
          marginBottom: "3.8rem",
          padding: "3rem 2.8rem",
          borderRadius: "22px",
          background:
            "linear-gradient(135deg, #0A1728 0%, #13233D 50%, #0B1523 100%)",
          boxShadow: "0 28px 75px rgba(0,0,0,0.7)",
          border: "1px solid rgba(201,168,106,0.38)",
        }}
      >
        <h1
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: "2.45rem",
            marginBottom: "1.2rem",
            letterSpacing: "0.065em",
            color: "#FDF4E3",
            textShadow: "0 0 14px rgba(201,168,106,0.22)",
          }}
        >
          Institutional Vaulting & Preservation Infrastructure
        </h1>

        <p
          style={{
            fontSize: "1.06rem",
            lineHeight: "1.85",
            maxWidth: "720px",
            marginBottom: "2.2rem",
          }}
        >
          Crownstone Vaults Limited provides custodial-grade infrastructure for the long-term
          preservation of critical records, artefacts, and institutional memory. Our mandate is
          to safeguard what must not be lost—across generations, regimes, and market cycles.
        </p>

        {/* LEFT-ALIGNED PLAQUE + SMALLER 3D CTA */}
        <div
          style={{
            display: "inline-block",
            padding: "1.8rem 2rem",
            borderRadius: "26px",
            background: "linear-gradient(145deg, #0D1A2F, #091224)",
            border: "1px solid rgba(201,168,106,0.32)",
            boxShadow:
              "inset 0 3px 6px rgba(255,255,255,0.08), inset 0 -4px 8px rgba(0,0,0,0.45), 0 14px 32px rgba(0,0,0,0.55)",
            transform: "translateY(-2px)",
          }}
        >
          <div style={{ position: "relative", display: "inline-block" }}>
            {/* PRIMARY CTA (smaller) */}
            <a
              href="/services"
              style={{
                padding: "0.8rem 1.55rem",
                borderRadius: "999px",
                background:
                  "linear-gradient(135deg, #C9A86A 0%, #F3D39A 40%, #9C7C45 100%)",
                color: "#0A1728",
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
                boxShadow:
                  "0 10px 26px rgba(201,168,106,0.55), 0 0 12px rgba(201,168,106,0.35), inset 0 2px 4px rgba(255,255,255,0.25)",
                display: "inline-block",
              }}
            >
              View Institutional Services
            </a>

            {/* POINTING FINGER CURSOR (placed after + slightly below last letter) */}
            <div
              style={{
                position: "absolute",
                right: "-18px",
                top: "60%",
                transform: "translateY(-50%)",
                fontSize: "1.1rem",
                opacity: 0.8,
                pointerEvents: "none",
              }}
            >
              👉
            </div>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: "1.4rem",
            marginBottom: "1.5rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#FDF4E3",
          }}
        >
          Core Institutional Pillars
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem",
          }}
        >
          <div
            style={{
              padding: "1.6rem 1.5rem",
              borderRadius: "14px",
              background: "rgba(9,18,32,0.9)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <h3
              style={{
                fontSize: "1.05rem",
                marginBottom: "0.6rem",
                color: "#F3D39A",
              }}
            >
              Custodial Infrastructure
            </h3>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
              Engineered for continuity, resilience, and controlled access. Crownstone Vaults
              operates as a neutral, institutional-grade custodian for records that must remain
              intact beyond operational cycles.
            </p>
          </div>

          <div
            style={{
              padding: "1.6rem 1.5rem",
              borderRadius: "14px",
              background: "rgba(9,18,32,0.9)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <h3
              style={{
                fontSize: "1.05rem",
                marginBottom: "0.6rem",
                color: "#F3D39A",
              }}
            >
              Governance & Compliance
            </h3>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
              Governance structures, oversight mechanisms, and compliance protocols are designed
              to withstand scrutiny from regulators, auditors, and institutional stakeholders.
            </p>
          </div>

          <div
            style={{
              padding: "1.6rem 1.5rem",
              borderRadius: "14px",
              background: "rgba(9,18,32,0.9)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <h3
              style={{
                fontSize: "1.05rem",
                marginBottom: "0.6rem",
                color: "#F3D39A",
              }}
            >
              Preservation Mandate
            </h3>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
              Our preservation mandate extends beyond storage. It encompasses integrity,
              traceability, and the ability to demonstrate continuity of custody over time.
            </p>
          </div>
        </div>
      </section>

      {/* ONBOARDING */}
      <section>
        <h2
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: "1.4rem",
            marginBottom: "1rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#FDF4E3",
          }}
        >
          Institutional Onboarding
        </h2>
        <p
          style={{
            fontSize: "0.98rem",
            lineHeight: "1.8",
            maxWidth: "780px",
            marginBottom: "1.6rem",
          }}
        >
          Crownstone Vaults engages with institutions through a structured onboarding process,
          beginning with an assessment of preservation needs, governance requirements, and
          regulatory expectations. Each engagement is configured to align with the institution’s
          risk appetite and oversight model.
        </p>

        <a
          href="/contact"
          style={{
            padding: "0.8rem 1.5rem",
            borderRadius: "999px",
            border: "1px solid rgba(201,168,106,0.7)",
            color: "#FDF4E3",
            fontWeight: 500,
            fontSize: "0.95rem",
            textDecoration: "none",
            background: "rgba(10,23,40,0.85)",
          }}
        >
          Initiate Institutional Contact
        </a>
      </section>
    </div>
  );
}
