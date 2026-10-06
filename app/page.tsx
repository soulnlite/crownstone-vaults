export default function HomePage() {
  return (
    <div style={{ color: "#E3E6EB" }}>
      {/* HERO SECTION */}
      <section
        style={{
          marginBottom: "3.5rem",
          padding: "3rem 3rem",
          borderRadius: "22px",
          background:
            "linear-gradient(135deg, rgba(201,168,106,0.22) 0%, rgba(10,23,40,0.85) 35%, #0A1728 100%)",
          boxShadow: "0 28px 70px rgba(0,0,0,0.65)",
          border: "1px solid rgba(201,168,106,0.35)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle animated gold shimmer */}
        <div
          style={{
            position: "absolute",
            top: "-40%",
            left: "-20%",
            width: "140%",
            height: "140%",
            background:
              "radial-gradient(circle, rgba(201,168,106,0.12) 0%, transparent 70%)",
            animation: "pulseGold 6s ease-in-out infinite",
            pointerEvents: "none",
          }}
        ></div>

        <style>{`
          @keyframes pulseGold {
            0% { opacity: 0.25; transform: scale(1); }
            50% { opacity: 0.45; transform: scale(1.05); }
            100% { opacity: 0.25; transform: scale(1); }
          }
        `}</style>

        <h1
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: "2.8rem",
            marginBottom: "1.2rem",
            letterSpacing: "0.06em",
            color: "#FDF4E3",
            textShadow: "0 0 18px rgba(201,168,106,0.35)",
          }}
        >
          Crownstone Vaults Limited
        </h1>

        <p
          style={{
            fontSize: "1.15rem",
            lineHeight: "1.85",
            maxWidth: "760px",
            marginBottom: "2.2rem",
          }}
        >
          A sovereign‑grade preservation authority engineered to safeguard institutional memory,
          regulatory artefacts, and critical records across generations. Our vaulting mandate
          ensures continuity, integrity, and controlled custodial access.
        </p>

        <div style={{ display: "flex", gap: "1.3rem", flexWrap: "wrap" }}>
          <a
            href="/services"
            style={{
              padding: "0.95rem 1.8rem",
              borderRadius: "999px",
              background:
                "linear-gradient(135deg, #C9A86A 0%, #F3D39A 40%, #9C7C45 100%)",
              color: "#0A1728",
              fontWeight: 600,
              fontSize: "1rem",
              textDecoration: "none",
              boxShadow: "0 12px 32px rgba(201,168,106,0.55)",
            }}
          >
            Institutional Services
          </a>

          <a
            href="/governance"
            style={{
              padding: "0.95rem 1.8rem",
              borderRadius: "999px",
              border: "1px solid rgba(201,168,106,0.6)",
              color: "#FDF4E3",
              fontWeight: 500,
              fontSize: "1rem",
              textDecoration: "none",
              background: "rgba(10,23,40,0.7)",
            }}
          >
            Governance Framework
          </a>
        </div>
      </section>

      {/* MANDATE STATEMENT */}
      <section
        style={{
          marginBottom: "3.5rem",
          padding: "2.5rem 2.5rem",
          borderLeft: "4px solid #C9A86A",
          background: "rgba(9,18,32,0.85)",
          borderRadius: "12px",
        }}
      >
        <h2
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: "1.6rem",
            marginBottom: "1rem",
            color: "#FDF4E3",
          }}
        >
          Preservation Mandate
        </h2>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: "1.8",
            maxWidth: "820px",
          }}
        >
          Our mandate is to ensure that institutional records, governance artefacts, and
          compliance-critical documents remain intact, traceable, and demonstrably preserved
          across operational cycles, regulatory transitions, and generational shifts.
        </p>
      </section>

      {/* THREE PILLARS */}
      <section style={{ marginBottom: "3.5rem" }}>
        <h2
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: "1.45rem",
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
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.8rem",
          }}
        >
          {/* Pillar 1 */}
          <div
            style={{
              padding: "1.8rem 1.6rem",
              borderRadius: "16px",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(10,23,40,0.9))",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 10px 28px rgba(0,0,0,0.45)",
            }}
          >
            <h3
              style={{
                fontSize: "1.1rem",
                marginBottom: "0.7rem",
                color: "#F3D39A",
              }}
            >
              Custodial Infrastructure
            </h3>
            <p style={{ fontSize: "0.98rem", lineHeight: "1.75" }}>
              Engineered for continuity, resilience, and controlled access. Crownstone Vaults
              operates as a neutral, institutional-grade custodian for records that must remain
              intact beyond operational cycles.
            </p>
          </div>

          {/* Pillar 2 */}
          <div
            style={{
              padding: "1.8rem 1.6rem",
              borderRadius: "16px",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(10,23,40,0.9))",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 10px 28px rgba(0,0,0,0.45)",
            }}
          >
            <h3
              style={{
                fontSize: "1.1rem",
                marginBottom: "0.7rem",
                color: "#F3D39A",
              }}
            >
              Governance & Compliance
            </h3>
            <p style={{ fontSize: "0.98rem", lineHeight: "1.75" }}>
              Governance structures, oversight mechanisms, and compliance protocols are designed
              to withstand scrutiny from regulators, auditors, and institutional stakeholders.
            </p>
          </div>

          {/* Pillar 3 */}
          <div
            style={{
              padding: "1.8rem 1.6rem",
              borderRadius: "16px",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(10,23,40,0.9))",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 10px 28px rgba(0,0,0,0.45)",
            }}
          >
            <h3
              style={{
                fontSize: "1.1rem",
                marginBottom: "0.7rem",
                color: "#F3D39A",
              }}
            >
              Preservation Mandate
            </h3>
            <p style={{ fontSize: "0.98rem", lineHeight: "1.75" }}>
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
            fontSize: "1.45rem",
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
            fontSize: "1rem",
            lineHeight: "1.8",
            maxWidth: "780px",
            marginBottom: "1.8rem",
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
            padding: "0.9rem 1.7rem",
            borderRadius: "999px",
            border: "1px solid rgba(201,168,106,0.7)",
            color: "#FDF4E3",
            fontWeight: 500,
            fontSize: "1rem",
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
