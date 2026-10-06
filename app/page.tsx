export default function HomePage() {
  return (
    <div style={{ color: "#E3E6EB" }}>
      {/* HERO SECTION */}
      <section
        style={{
          marginBottom: "4rem",
          padding: "3.5rem 3rem",
          borderRadius: "22px",
          background:
            "linear-gradient(135deg, rgba(201,168,106,0.18) 0%, rgba(10,23,40,0.92) 40%, #07101F 100%)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.7)",
          border: "1px solid rgba(201,168,106,0.35)",
          position: "relative",
        }}
      >
        <h1
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: "3rem",
            marginBottom: "1.4rem",
            letterSpacing: "0.065em",
            color: "#FDF4E3",
            textShadow: "0 0 22px rgba(201,168,106,0.35)",
          }}
        >
          Crownstone Vaults Limited
        </h1>

        {/* Strong Institutional Divider */}
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
            fontSize: "1.18rem",
            lineHeight: "1.9",
            maxWidth: "780px",
            marginBottom: "2.4rem",
            letterSpacing: "0.01em",
          }}
        >
          A sovereign‑grade preservation authority engineered to safeguard institutional memory,
          regulatory artefacts, and critical records across generations. Our vaulting mandate
          ensures continuity, integrity, and controlled custodial access.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1.4rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/services"
            style={{
              padding: "1rem 1.9rem",
              borderRadius: "999px",
              background:
                "linear-gradient(135deg, #C9A86A 0%, #F3D39A 40%, #9C7C45 100%)",
              color: "#0A1728",
              fontWeight: 600,
              fontSize: "1.05rem",
              textDecoration: "none",
              boxShadow: "0 14px 34px rgba(201,168,106,0.55)",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow =
                "0 18px 44px rgba(201,168,106,0.65)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
              e.currentTarget.style.boxShadow =
                "0 14px 34px rgba(201,168,106,0.55)";
            }}
          >
            Institutional Services
          </a>

          <a
            href="/governance"
            style={{
              padding: "1rem 1.9rem",
              borderRadius: "999px",
              border: "1px solid rgba(201,168,106,0.6)",
              color: "#FDF4E3",
              fontWeight: 500,
              fontSize: "1.05rem",
              textDecoration: "none",
              background: "rgba(10,23,40,0.75)",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow =
                "0 18px 44px rgba(201,168,106,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
              e.currentTarget.style.boxShadow =
                "0 14px 34px rgba(201,168,106,0.35)";
            }}
          >
            Governance Framework
          </a>
        </div>
      </section>

      {/* MANDATE STATEMENT */}
      <section
        style={{
          marginBottom: "4rem",
          padding: "3rem 2.8rem",
          borderLeft: "5px solid #C9A86A",
          background: "rgba(9,18,32,0.92)",
          borderRadius: "14px",
        }}
      >
        <h2
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: "1.7rem",
            marginBottom: "1.2rem",
            color: "#FDF4E3",
            letterSpacing: "0.03em",
          }}
        >
          Preservation Mandate
        </h2>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: "1.85",
            maxWidth: "840px",
            letterSpacing: "0.01em",
          }}
        >
          Our mandate is to ensure that institutional records, governance artefacts, and
          compliance-critical documents remain intact, traceable, and demonstrably preserved
          across operational cycles, regulatory transitions, and generational shifts.
        </p>
      </section>

      {/* THREE PILLARS */}
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
          Core Institutional Pillars
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
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 18px 44px rgba(0,0,0,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
              e.currentTarget.style.boxShadow =
                "0 12px 32px rgba(0,0,0,0.5)";
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
              Custodial Infrastructure
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.78" }}>
              Engineered for continuity, resilience, and controlled access. Crownstone Vaults
              operates as a neutral, institutional-grade custodian for records that must remain
              intact beyond operational cycles.
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
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 18px 44px rgba(0,0,0,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
              e.currentTarget.style.boxShadow =
                "0 12px 32px rgba(0,0,0,0.5)";
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
              Governance & Compliance
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.78" }}>
              Governance structures, oversight mechanisms, and compliance protocols are designed
              to withstand scrutiny from regulators, auditors, and institutional stakeholders.
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
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 18px 44px rgba(0,0,0,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
              e.currentTarget.style.boxShadow =
                "0 12px 32px rgba(0,0,0,0.5)";
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
              Preservation Mandate
            </h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.78" }}>
              Our preservation mandate extends beyond storage. It encompasses integrity,
              traceability, and the ability to demonstrate continuity of custody over time.
            </p>
          </div>
        </div>
      </section>

      {/* ONBOARDING */}
      <section>
        {/* Strong Institutional Divider */}
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
          Institutional Onboarding
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
          Crownstone Vaults engages with institutions through a structured onboarding process,
          beginning with an assessment of preservation needs, governance requirements, and
          regulatory expectations. Each engagement is configured to align with the institution’s
          risk appetite and oversight model.
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
            transition: "transform 0.25s ease, box-shadow 0.25s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow =
              "0 18px 44px rgba(201,168,106,0.45)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0px)";
            e.currentTarget.style.boxShadow =
              "0 14px 34px rgba(201,168,106,0.35)";
          }}
        >
          Initiate Institutional Contact
        </a>
      </section>
    </div>
  );
}
