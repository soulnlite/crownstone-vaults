export default function GovernancePage() {
  return (
    <main
      style={{
        maxWidth: "960px",
        margin: "0 auto",
        padding: "0.3rem 1.5rem 3.5rem", // MATCHED TO ACCREDITATION
        color: "#FDF4E3",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* HEADER — compressed */}
      <section
        style={{
          marginBottom: "1.2rem",
          padding: "1.25rem 1.75rem",
          borderRadius: "22px",
          background:
            "linear-gradient(135deg, rgba(201,168,106,0.18) 0%, rgba(10,23,40,0.92) 40%, #07101F 100%)",
          boxShadow: "0 16px 42px rgba(0,0,0,0.58)",
          border: "1px solid rgba(201,168,106,0.35)",
        }}
      >
        <h1
          style={{
            fontSize: "1.9rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            marginBottom: "0.65rem",
            color: "rgba(201,168,106,0.92)",
            textShadow: "0 0 14px rgba(201,168,106,0.22)",
          }}
        >
          Governance Architecture
        </h1>

        <div
          style={{
            height: "4px",
            width: "150px",
            background:
              "linear-gradient(90deg, #C9A86A 0%, rgba(201,168,106,0.4) 70%, transparent 100%)",
            marginBottom: "1rem",
          }}
        ></div>

        <p
          style={{
            fontSize: "1.02rem",
            lineHeight: "1.7",
            maxWidth: "760px",
            color: "rgba(253,244,227,0.82)",
          }}
        >
          Governance at Crownstone Vaults ensures institutional continuity, custodial integrity,
          and structured oversight across operational and archival cycles.
        </p>
      </section>

      {/* PLAQUES — unchanged */}
      <section style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "1.4rem",
            marginBottom: "1.3rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "rgba(201,168,106,0.92)",
          }}
        >
          Governance Pillars
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
              Custodial Integrity
            </h3>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
              Ensuring institutional artefacts remain preserved and traceable across governance
              cycles.
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
              Oversight Continuity
            </h3>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
              Maintaining structured oversight across institutional transitions and custodial
              environments.
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
              Governance Alignment
            </h3>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
              Aligning institutional governance structures with long-horizon preservation mandates.
            </p>
          </div>
        </div>
      </section>

      {/* CTA — unchanged */}
      <section style={{ textAlign: "center", marginTop: "2rem" }}>
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
              Request Governance Briefing
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
