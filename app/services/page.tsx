export default function ServicesPage() {
  return (
    <div style={{ color: "#E3E6EB" }}>
      {/* HERO */}
      <section
        style={{
          marginBottom: "3.8rem",
          padding: "3.2rem 2.8rem",
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
            fontSize: "2.35rem",
            marginBottom: "1.2rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#FDF4E3",
          }}
        >
          Institutional Custodial Subscription Services
        </h1>

        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: "1.85",
            maxWidth: "760px",
            marginBottom: "2.2rem",
          }}
        >
          Every Crownstone Vaults client is enrolled in a custodial subscription tier. Your tier
          determines the scope of custody, access privileges, digital clearance, and heritage
          continuity. Subscription is the foundation of service.
        </p>

        {/* CTA */}
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <div
            style={{
              display: "inline-block",
              padding: "1.8rem 2rem",
              borderRadius: "26px",
              background: "linear-gradient(145deg, #0D1A2F, #091224)",
              border: "1px solid rgba(201,168,106,0.32)",
              boxShadow:
                "inset 0 3px 6px rgba(255,255,255,0.08), inset 0 -4px 8px rgba(0,0,0,0.45), 0 14px 32px rgba(0,0,0,0.55)",
            }}
          >
            <div style={{ position: "relative", display: "inline-block" }}>
              <a
                href="/contact"
                style={{
                  padding: "0.85rem 1.7rem",
                  borderRadius: "999px",
                  background:
                    "linear-gradient(135deg, #C9A86A 0%, #F3D39A 40%, #9C7C45 100%)",
                  color: "#0A1728",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  boxShadow:
                    "0 10px 26px rgba(201,168,106,0.55), 0 0 12px rgba(201,168,106,0.35), inset 0 2px 4px rgba(255,255,255,0.25)",
                }}
              >
                Begin Subscription Onboarding
              </a>

              {/* Metallic Finger */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "84%",
                  transform: "translateX(-50%) rotate(-110deg)",
                  fontSize: "1.1rem",
                  color: "#C9B27A",
                  pointerEvents: "none",
                }}
              >
                👉
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUBSCRIPTION TIERS */}
      <section style={{ marginBottom: "3.4rem" }}>
        <h2
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: "1.45rem",
            marginBottom: "1.4rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#FDF4E3",
          }}
        >
          Subscription Tiers
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.6rem",
          }}
        >
          {/* Tier I */}
          <div
            style={{
              padding: "1.7rem 1.6rem",
              borderRadius: "16px",
              background: "rgba(9,18,32,0.96)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h3
              style={{
                fontSize: "1.05rem",
                marginBottom: "0.8rem",
                color: "#F3D39A",
              }}
            >
              Tier I — Custodial Access
            </h3>
            <ul style={{ lineHeight: "1.8", fontSize: "0.95rem", paddingLeft: "1.1rem" }}>
              <li>Physical custody of critical documents</li>
              <li>Custody of small valuables</li>
              <li>Baseline compliance protocols</li>
              <li>Controlled physical retrieval</li>
            </ul>
          </div>

          {/* Tier II */}
          <div
            style={{
              padding: "1.7rem 1.6rem",
              borderRadius: "16px",
              background: "rgba(9,18,32,0.96)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h3
              style={{
                fontSize: "1.05rem",
                marginBottom: "0.8rem",
                color: "#F3D39A",
              }}
            >
              Tier II — Digital Access Clearance
            </h3>
            <ul style={{ lineHeight: "1.8", fontSize: "0.95rem", paddingLeft: "1.1rem" }}>
              <li>Encrypted digital copies</li>
              <li>Multi-factor clearance</li>
              <li>Pre-approved access list</li>
              <li>Logged digital retrievals</li>
            </ul>
          </div>

          {/* Tier III */}
          <div
            style={{
              padding: "1.7rem 1.6rem",
              borderRadius: "16px",
              background: "rgba(9,18,32,0.96)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h3
              style={{
                fontSize: "1.05rem",
                marginBottom: "0.8rem",
                color: "#F3D39A",
              }}
            >
              Tier III — Heritage & Lineage Continuity
            </h3>
            <ul style={{ lineHeight: "1.8", fontSize: "0.95rem", paddingLeft: "1.1rem" }}>
              <li>Lineage excellence certificates</li>
              <li>Academic & professional heritage documentation</li>
              <li>Cross-generational profile building</li>
              <li>Prestige continuity services</li>
            </ul>
          </div>

          {/* Tier IV */}
          <div
            style={{
              padding: "1.7rem 1.6rem",
              borderRadius: "16px",
              background: "rgba(9,18,32,0.96)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h3
              style={{
                fontSize: "1.05rem",
                marginBottom: "0.8rem",
                color: "#F3D39A",
              }}
            >
              Tier IV — Sovereign Family Office Custody
            </h3>
            <ul style={{ lineHeight: "1.8", fontSize: "0.95rem", paddingLeft: "1.1rem" }}>
              <li>Bespoke vaulting conditions</li>
              <li>Dedicated heritage archivist</li>
              <li>Multi-decade custodial agreements</li>
              <li>Elite valuation & continuity services</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section style={{ marginBottom: "3.4rem" }}>
        <h2
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: "1.45rem",
            marginBottom: "1.4rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#FDF4E3",
          }}
        >
          Custodial Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.6rem",
          }}
        >
          {/* Documents */}
          <div
            style={{
              padding: "1.7rem 1.6rem",
              borderRadius: "16px",
              background: "rgba(9,18,32,0.96)",
              border: "1px solid rgba(201,168,106,0.35)",
            }}
          >
            <h3
              style={{
                fontSize: "1.05rem",
                marginBottom: "0.8rem",
                color: "#F3D39A",
              }}
            >
              Critical Document Custody
            </h3>
            <ul style={{ lineHeight: "1.8", fontSize: "0.95rem", paddingLeft: "1.1rem" }}>
              <li>Wills, deeds, certificates</li>
              <li>Contracts & estate papers</li>
              <li>Identity documents</li>
              <li>Controlled release conditions</li>
            </ul>
          </div>

          {/* Valuables */}
          <div
            style={{
              padding: "1.7rem 1.6rem",
              borderRadius: "16px",
              background: "rgba(9,18,32,0.96)",
              border: "1px solid rgba(201,168,106,0.35)",
            }}
          >
            <h3
              style={{
                fontSize: "1.05rem",
                marginBottom: "0.8rem",
                color: "#F3D39A",
              }}
            >
              Small Valuables Custody
            </h3>
            <ul style={{ lineHeight: "1.8", fontSize: "0.95rem", paddingLeft: "1.1rem" }}>
              <li>Jewelry, medals, collectibles</li>
              <li>Heritage artefacts</li>
              <li>Valuation certificate requirement</li>
              <li>In-house valuation available</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DIGITAL ACCESS */}
      <section style={{ marginBottom: "3.4rem" }}>
        <h2
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: "1.45rem",
            marginBottom: "1.4rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#FDF4E3",
          }}
        >
          Digital Access & Retrieval
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.6rem",
          }}
        >
          {/* Encrypted Copies */}
          <div
            style={{
              padding: "1.7rem 1.6rem",
              borderRadius: "16px",
              background: "rgba(9,18,32,0.96)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h3
              style={{
                fontSize: "1.05rem",
                marginBottom: "0.8rem",
                color: "#F3D39A",
              }}
            >
              Encrypted Document Copies
            </h3>
            <ul style={{ lineHeight: "1.8", fontSize: "0.95rem", paddingLeft: "1.1rem" }}>
              <li>Digitized custody records</li>
              <li>Encrypted storage</li>
              <li>High-clearance access</li>
              <li>Registered at onboarding</li>
            </ul>
          </div>

          {/* Access Protocols */}
          <div
            style={{
              padding: "1.7rem 1.6rem",
              borderRadius: "16px",
              background: "rgba(9,18,32,0.96)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h3
              style={{
                fontSize: "1.05rem",
                marginBottom: "0.8rem",
                color: "#F3D39A",
              }}
            >
              Controlled Access Protocols
            </h3>
            <ul style={{ lineHeight: "1.8", fontSize: "0.95rem", paddingLeft: "1.1rem" }}>
              <li>Pre-approved individuals only</li>
              <li>Pre-stated conditions</li>
              <li>Full retrieval logging</li>
              <li>Custodial oversight</li>
            </ul>
          </div>
        </div>
      </section>

      {/* HERITAGE */}
      <section style={{ marginBottom: "3.4rem" }}>
        <h2
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: "1.45rem",
            marginBottom: "1.4rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#FDF4E3",
          }}
        >
          Heritage & Lineage Continuity
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.6rem",
          }}
        >
          {/* Certificates */}
          <div
            style={{
              padding: "1.7rem 1.6rem",
              borderRadius: "16px",
              background: "rgba(9,18,32,0.96)",
              border: "1px solid rgba(201,168,106,0.35)",
            }}
          >
            <h3
              style={{
                fontSize: "1.05rem",
                marginBottom: "0.8rem",
                color: "#F3D39A",
              }}
            >
              Lineage Excellence Certificates
            </h3>
            <ul style={{ lineHeight: "1.8", fontSize: "0.95rem", paddingLeft: "1.1rem" }}>
              <li>Ivy League lineage references</li>
              <li>Advanced degree lineage</li>
              <li>Professional distinction lineage</li>
              <li>Artistic training lineage</li>
            </ul>
          </div>

          {/* Eligibility */}
          <div
            style={{
              padding: "1.7rem 1.6rem",
              borderRadius: "16px",
              background: "rgba(9,18,32,0.96)",
              border: "1px solid rgba(201,168,106,0.35)",
            }}
          >
            <h3
              style={{
                fontSize: "1.05rem",
                marginBottom: "0.8rem",
                color: "#F3D39A",
              }}
            >
              Eligibility & Tier Requirements
            </h3>
            <ul style={{ lineHeight: "1.8", fontSize: "0.95rem", paddingLeft: "1.1rem" }}>
              <li>High-paying subscription tiers</li>
              <li>Custody of qualifying documents</li>
              <li>Multi-year participation</li>
              <li>Cross-generational continuity</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ marginBottom: "2.8rem" }}>
        <h2
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: "1.4rem",
            marginBottom: "1.1rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#FDF4E3",
          }}
        >
          Begin Subscription Onboarding
        </h2>

        <p
          style={{
            fontSize: "0.98rem",
            lineHeight: "1.8",
            maxWidth: "760px",
            marginBottom: "1.7rem",
          }}
        >
          Select your subscription tier and initiate institutional onboarding. Crownstone Vaults
          is designed to remain in place across generations.
        </p>

        <a
          href="/contact"
          style={{
            padding: "0.85rem 1.7rem",
            borderRadius: "999px",
            border: "1px solid rgba(201,168,106,0.7)",
            color: "#FDF4E3",
            fontWeight: 500,
            fontSize: "0.95rem",
            textDecoration: "none",
            background: "rgba(10,23,40,0.9)",
          }}
        >
          Initiate Institutional Contact
        </a>
      </section>
    </div>
  );
}
