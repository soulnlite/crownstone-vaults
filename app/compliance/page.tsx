export default function CompliancePage() {
  return (
    <div style={{ color: "#E3E6EB" }}>
      {/* HERO */}
      <section
        style={{
          marginBottom: "4rem",
          padding: "3.5rem 3rem",
          borderRadius: "22px",
          background:
            "linear-gradient(135deg, rgba(201,168,106,0.18) 0%, rgba(10,23,40,0.92) 40%, #07101F 100%)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.7)",
          border: "1px solid rgba(201,168,106,0.35)",
        }}
      >
        <h1
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: "2.7rem",
            marginBottom: "1.4rem",
            letterSpacing: "0.065em",
            color: "#FDF4E3",
            textShadow: "0 0 22px rgba(201,168,106,0.35)",
          }}
        >
          Compliance Architecture
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
            fontSize: "1.15rem",
            lineHeight: "1.9",
            maxWidth: "780px",
            marginBottom: "2.4rem",
            letterSpacing: "0.01em",
          }}
        >
          Crownstone Vaults maintains a compliance architecture engineered to withstand regulatory
          scrutiny, preserve institutional integrity, and ensure alignment across operational,
          archival, and governance cycles.
        </p>
      </section>

      {/* COMPLIANCE STRUCTURE */}
      <section style={{ marginBottom: "4rem" }}>
        <h2
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: "1.55rem",
            marginBottom: "1.8rem",
            letterSpacing: "0.085em",
            textTransform: "uppercase",
            color: "#FDF4E3",
          }}
        >
          Compliance Pillars
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
              Regulatory Alignment
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.78" }}>
              Ensuring institutional artefacts, custodial environments, and governance structures
              meet evolving regulatory standards across jurisdictions.
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
              Compliance Resilience
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.78" }}>
              Reinforcing institutional compliance structures to withstand audits, transitions,
              and external scrutiny without operational disruption.
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
              Institutional Integrity
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.78" }}>
              Safeguarding institutional memory, custodial environments, and governance artefacts
              through structured compliance protocols.
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
            fontFamily: "Merriweather, serif",
            fontSize: "1.55rem",
            marginBottom: "1.2rem",
            letterSpacing: "0.085em",
            textTransform: "uppercase",
            color: "#FDF4E3",
          }}
        >
          Compliance Engagement
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
          Institutions requiring compliance reinforcement, regulatory alignment, or governance
          support may initiate contact through our formal engagement pathway.
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
          Initiate Institutional Contact
        </a>
      </section>
    </div>
  );
}
