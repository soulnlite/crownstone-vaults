export default function InfrastructurePage() {
  return (
    <main
      style={{
        maxWidth: "960px",
        margin: "0 auto",
        padding: "0.3rem 1.5rem 3.5rem",
        color: "rgba(253,244,227,0.82)",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* HEADER */}
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
          Infrastructure Architecture
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
          Crownstone Vaults operates on a sovereign‑grade infrastructure stack engineered for
          resilience, continuity, and institutional‑level custodial assurance.
        </p>
      </section>

      {/* INFRASTRUCTURE MODULES */}
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
          Core Infrastructure Modules
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {/* Module 1 */}
          <div
            style={{
              padding: "1.6rem 1.5rem",
              borderRadius: "14px",
              background:
                "linear-gradient(135deg, rgba(10,21,38,0.92), rgba(7,16,31,0.96))",
              border: "1px solid rgba(201,168,106,0.35)",
              boxShadow: "0 12px 32px rgba(0,0,0,0.5)",
            }}
          >
            <h3
              style={{
                fontSize: "1.05rem",
                marginBottom: "0.6rem",
                color: "rgba(201,168,106,0.92)",
              }}
            >
              Redundant Custodial Systems
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: "1.7",
                color: "rgba(253,244,227,0.82)",
              }}
            >
              Multi‑layered redundancy ensures uninterrupted custodial operations across
              distributed environments.
            </p>
          </div>

          {/* Module 2 */}
          <div
            style={{
              padding: "1.6rem 1.5rem",
              borderRadius: "14px",
              background:
                "linear-gradient(135deg, rgba(10,21,38,0.92), rgba(7,16,31,0.96))",
              border: "1px solid rgba(201,168,106,0.35)",
              boxShadow: "0 12px 32px rgba(0,0,0,0.5)",
            }}
          >
            <h3
              style={{
                fontSize: "1.05rem",
                marginBottom: "0.6rem",
                color: "rgba(201,168,106,0.92)",
              }}
            >
              Sovereign‑Grade Continuity
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: "1.7",
                color: "rgba(253,244,227,0.82)",
              }}
            >
              Infrastructure continuity protocols ensure operational stability under all
              conditions.
            </p>
          </div>

          {/* Module 3 */}
          <div
            style={{
              padding: "1.6rem 1.5rem",
              borderRadius: "14px",
              background:
                "linear-gradient(135deg, rgba(10,21,38,0.92), rgba(7,16,31,0.96))",
              border: "1px solid rgba(201,168,106,0.35)",
              boxShadow: "0 12px 32px rgba(0,0,0,0.5)",
            }}
          >
            <h3
              style={{
                fontSize: "1.05rem",
                marginBottom: "0.6rem",
                color: "rgba(201,168,106,0.92)",
              }}
            >
              Institutional‑Level Safeguards
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: "1.7",
                color: "rgba(253,244,227,0.82)",
              }}
            >
              Safeguard systems provide institutional‑grade protection across all custodial
              layers.
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
            border: "1px solid rgba(201,168,106,0.35)",
            boxShadow:
              "0 10px 26px rgba(201,168,106,0.55), 0 0 12px rgba(201,168,106,0.35), inset 0 2px 4px rgba(255,255,255,0.25)",
            transform: "translateY(-2px)",
          }}
        >
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
              display: "inline-block",
            }}
          >
            Request Infrastructure Briefing
          </a>
        </div>
      </section>
    </main>
  );
}
