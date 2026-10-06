export default function ServicesPage() {
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
          Institutional Services
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
          Crownstone Vaults provides institutional-grade custodial, governance, and preservation
          services engineered to safeguard critical records, regulatory artefacts, and compliance
          documentation across operational cycles.
        </p>
      </section>

      {/* SERVICE BLOCKS */}
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
          Core Service Lines
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: "2rem",
          }}
        >
          {/* Service 1 */}
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
              Custodial Record Vaulting
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.78" }}>
              Secure, neutral, institutional-grade vaulting for records requiring long-term
              preservation, controlled access, and demonstrable continuity of custody.
            </p>
          </div>

          {/* Service 2 */}
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
              Governance Framework Support
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.78" }}>
              Structural governance support for institutions requiring oversight mechanisms,
              compliance alignment, and regulatory continuity.
            </p>
          </div>

          {/* Service 3 */}
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
              Preservation Mandate Execution
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.78" }}>
              End-to-end preservation mandate execution ensuring integrity, traceability, and
              institutional continuity across generational transitions.
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
          Engage With Crownstone Vaults
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
          Institutions seeking custodial, governance, or preservation support may initiate contact
          through our formal engagement pathway