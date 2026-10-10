export default function AccreditationPage() {
  return (
    <main
      style={{
        maxWidth: "960px",
        margin: "0 auto",
        padding: "2rem 1.5rem 3.5rem", // REDUCED TOP PADDING
        color: "#FDF4E3",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* HEADER — Raised closer to top */}
      <section
        style={{
          marginBottom: "2.2rem", // REDUCED FROM 3rem
          padding: "2.1rem 2.2rem", // REDUCED INTERNAL PADDING
          borderRadius: "22px",
          background:
            "linear-gradient(135deg, rgba(201,168,106,0.18) 0%, rgba(10,23,40,0.92) 40%, #07101F 100%)",
          boxShadow: "0 24px 65px rgba(0,0,0,0.7)", // Slightly reduced shadow height
          border: "1px solid rgba(201,168,106,0.35)",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            marginBottom: "1rem", // Slightly reduced
            color: "rgba(201,168,106,0.92)",
            textShadow: "0 0 18px rgba(201,168,106,0.22)",
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
            marginBottom: "1.4rem", // Reduced
          }}
        ></div>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: "1.8",
            maxWidth: "760px",
            color: "rgba(253,244,227,0.82)",
          }}
        >
          Crownstone Vaults Limited operates under an accreditation framework engineered to satisfy
          institutional, regulatory, and sovereign-grade oversight requirements. Accreditation
          ensures continuity of custody, demonstrable compliance, and alignment with long-horizon
          preservation mandates.
        </p>
      </section>

      {/* ACCREDITATION PILLARS — Services plaques */}
      <section style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "1.4rem",
            marginBottom: "1.5rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "rgba(201,168,106,0.92)",
          }}
        >
          Accreditation Pillars
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          <div
            style={{
              padding: "1.6rem 1.5rem",
              borderRadius: "14px",
              background:
                "linear-gradient(135deg, rgba(10,21,38,0.92), rgba(7,16,31,0.96))",
              border: "1px solid rgba(201,168,106,0.35)",
            }}
          >
            <h3
              style={{
                fontSize: "1.05rem",
                marginBottom: "0.6rem",
                color: "rgba(201,168,106,0.92)",
              }}
            >
              Institutional Accreditation
            </h3>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
              Accreditation validates Crownstone Vaults as a neutral custodian capable of
              maintaining integrity, traceability, and continuity of custody.
            </p>
          </div>

          <div
            style={{
              padding: "1.6rem 1.5rem",
              borderRadius: "14px",
              background:
                "linear-gradient(135deg, rgba(10,21,38,0.92), rgba(7,16,31,0.96))",
              border: "1px solid rgba(201,168,106,0.35)",
            }}
          >
            <h3
              style={{
                fontSize: "1.05rem",
                marginBottom: "0.6rem",
                color: "rgba(201,168,106,0.92)",
              }}
            >
              Compliance Verification
            </h3>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
              Verification protocols ensure alignment with regulatory expectations and
              multi-jurisdictional governance standards.
            </p>
          </div>

          <div
            style={{
              padding: "1.6rem 1.5rem",
              borderRadius: "14px",
              background:
                "linear-gradient(135deg, rgba(10,21,38,0.92), rgba(7,16,31,0.96))",
              border: "1px solid rgba(201,168,106,0.35)",
            }}
          >
            <h3
              style={{
                fontSize: "1.05rem",
                marginBottom: "0.6rem",
                color: "rgba(201,168,106,0.92)",
              }}
            >
              Oversight Integration
            </h3>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
              Oversight integration enables institutions to embed Crownstone Vaults within their
              governance and compliance architecture.
            </p>
          </div>
        </div>
      </section>

      {/* CTA — Services signature CTA */}
      <section style={{ textAlign: "center", marginTop: "2.2rem" }}>
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
            <a
              href="/contact"
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
              Request Accreditation Briefing
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
