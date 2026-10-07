export default function HomePage() {
  return (
    <div style={{ color: "#E3E6EB" }}>
      {/* Hero Section */}
      <section
        style={{
          marginBottom: "3.4rem",
          padding: "2.8rem 2.8rem",
          borderRadius: "20px",
          background:
            "radial-gradient(circle at top left, rgba(201,168,106,0.22) 0%, transparent 50%), linear-gradient(135deg, #0A1728 0%, #13233D 50%, #0B1523 100%)",
          boxShadow: "0 26px 70px rgba(0,0,0,0.68)",
          border: "1px solid rgba(201,168,106,0.38)",
        }}
      >
        <h1
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: "2.55rem",
            marginBottom: "1rem",
            letterSpacing: "0.065em",
            color: "#FDF4E3",
            textShadow: "0 0 18px rgba(201,168,106,0.28)",
          }}
        >
          Institutional Vaulting & Preservation Infrastructure
        </h1>

        {/* Gold Dot Cluster Accent */}
        <div
          style={{
            display: "flex",
            gap: "6px",
            marginBottom: "1.4rem",
            paddingLeft: "2px",
          }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#C9A86A",
              boxShadow: "0 0 6px rgba(201,168,106,0.55)",
            }}
          ></div>
          <div
            style={{
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              background: "#F3D39A",
              boxShadow: "0 0 5px rgba(201,168,106,0.45)",
            }}
          ></div>
          <div
            style={{
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: "#C9A86A",
              boxShadow: "0 0 5px rgba(201,168,106,0.45)",
            }}
          ></div>
        </div>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.85",
            maxWidth: "720px",
            marginBottom: "2rem",
          }}
        >
          Crownstone Vaults Limited provides custodial-grade infrastructure for the long-term
          preservation of critical records, artefacts, and institutional memory. Our mandate is
          to safeguard what must not be lost—across generations, regimes, and market cycles.
        </p>

        {/* CTA Row */}
        <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap" }}>
          {/* Medium Glow CTA (Homepage Signature) */}
          <a
            href="/services"
            style={{
              padding: "0.9rem 1.7rem",
              borderRadius: "999px",
              background:
                "linear-gradient(135deg, #C9A86A 0%, #F3D39A 40%, #9C7C45 100%)",
              color: "#0A1728",
              fontWeight: 600,
              fontSize: "0.97rem",
              textDecoration: "none",
              boxShadow:
                "0 10px 30px rgba(201,168,106,0.55), 0 0 12px rgba(201,168,106,0.35)",
            }}
          >
            View Institutional Services
          </a>

          {/* Secondary CTA */}
          <a
            href="/governance"
            style={{
              padding: "0.9rem 1.7rem",
              borderRadius: "999px",
              border: "1px solid rgba(201,168,106,0.6)",
              color: "#FDF4E3",
              fontWeight: 500,
              fontSize: "0.97rem",
              textDecoration: "none",
              background: "rgba(10,23,40,0.7)",
            }}
          >
            Explore Governance Framework
          </a>
        </div>
      </section>

      {/* Three Pillars */}
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

      {/* Onboarding / Next Steps */}
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
