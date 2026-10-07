export default function ServicesPage() {
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
            fontSize: "2.2rem",
            marginBottom: "1.1rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#FDF4E3",
          }}
        >
          Institutional Subscription Services
        </h1>

        <p
          style={{
            fontSize: "1.02rem",
            lineHeight: "1.85",
            maxWidth: "760px",
            marginBottom: "2.1rem",
          }}
        >
          Crownstone Vaults Limited operates exclusively on a subscription basis. Every client is
          enrolled into a custodial subscription tier that governs access to document storage,
          valuables custody, digital clearance, and cross-generational heritage services. No
          subscription—no service.
        </p>

        {/* PRIMARY CTA PLAQUE */}
        <div style={{ display: "flex", justifyContent: "center" }}>
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
                  padding: "0.8rem 1.7rem",
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
                Initiate Subscription Onboarding
              </a>

              {/* METALLIC GOLD-SILVER FINGER */}
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
        </div>
      </section>

      {/* SUBSCRIPTION TIERS OVERVIEW */}
      <section style={{ marginBottom: "3.2rem" }}>
        <h2
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: "1.4rem",
            marginBottom: "1.4rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#FDF4E3",
          }}
        >
          Subscription Architecture
        </h2>

        <p
          style={{
            fontSize: "0.98rem",
            lineHeight: "1.8",
            maxWidth: "780px",
            marginBottom: "1.8rem",
          }}
        >
          All services are delivered through tiered subscriptions. Each tier defines the scope of
          custody, the level of access, and the depth of cross-generational continuity. Clients
          may upgrade tiers over time as their custodial and heritage requirements evolve.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {/* Tier I */}
          <div
            style={{
              padding: "1.6rem 1.5rem",
              borderRadius: "14px",
              background: "rgba(9,18,32,0.95)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <h3
              style={{
                fontSize: "1.02rem",
                marginBottom: "0.5rem",
                color: "#F3D39A",
              }}
            >
              Tier I — Custodial Access
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: "1.7" }}>
              Base subscription for physical custody of critical personal documents and small
              valuables. Establishes sovereign-grade storage conditions and controlled physical
              access, without digital retrieval or lineage services.
            </p>
          </div>

          {/* Tier II */}
          <div
            style={{
              padding: "1.6rem 1.5rem",
              borderRadius: "14px",
              background: "rgba(9,18,32,0.95)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <h3
              style={{
                fontSize: "1.02rem",
                marginBottom: "0.5rem",
                color: "#F3D39A",
              }}
            >
              Tier II — Digital Access Clearance
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: "1.7" }}>
              Extends custody with encrypted digital copies of registered documents. Access is
              granted only to pre-approved individuals under pre-stated conditions, with full
              logging and high-level clearance protocols.
            </p>
          </div>

          {/* Tier III */}
          <div
            style={{
              padding: "1.6rem 1.5rem",
              borderRadius: "14px",
              background: "rgba(9,18,32,0.95)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <h3
              style={{
                fontSize: "1.02rem",
                marginBottom: "0.5rem",
                color: "#F3D39A",
              }}
            >
              Tier III — Heritage & Lineage Continuity
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: "1.7" }}>
              Designed for families seeking cross-generational continuity. Enables the issuance of
              lineage excellence certificates based on stored academic, professional, and artistic
              records, for use in applications and prestige documentation.
            </p>
          </div>

          {/* Tier IV */}
          <div
            style={{
              padding: "1.6rem 1.5rem",
              borderRadius: "14px",
              background: "rgba(9,18,32,0.95)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <h3
              style={{
                fontSize: "1.02rem",
                marginBottom: "0.5rem",
                color: "#F3D39A",
              }}
            >
              Tier IV — Sovereign Family Office Custody
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: "1.7" }}>
              Ultra-elite custodial subscription for high-paying clients. Provides bespoke vaulting
              conditions, dedicated heritage archivists, and multi-decade custodial agreements
              spanning generations.
            </p>
          </div>
        </div>
      </section>

      {/* CORE SERVICES: DOCUMENT & VALUABLES CUSTODY */}
      <section style={{ marginBottom: "3.2rem" }}>
        <h2
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: "1.4rem",
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
          {/* Document Custody */}
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
                fontSize: "1.04rem",
                marginBottom: "0.6rem",
                color: "#F3D39A",
              }}
            >
              Critical Document Custody
            </h3>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.8", marginBottom: "0.9rem" }}>
              Secure storage of wills, deeds, certificates, contracts, estate papers, and identity
              documents. Each item is catalogued, preserved, and held under custodial protocols
              designed to withstand generational transitions and institutional scrutiny.
            </p>
            <p style={{ fontSize: "0.9rem", lineHeight: "1.7", color: "#C7CCD6" }}>
              Access to originals is governed by pre-defined conditions and pre-approved
              beneficiaries, ensuring continuity of intent and controlled release.
            </p>
          </div>

          {/* Valuables Custody */}
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
                fontSize: "1.04rem",
                marginBottom: "0.6rem",
                color: "#F3D39A",
              }}
            >
              Small Valuables Custody
            </h3>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.8", marginBottom: "0.9rem" }}>
              Custody of small, high-value items such as jewelry, medals, collectibles, and
              heritage artefacts. Each item must be accompanied by valuation certificates from
              approved sources to qualify for custody.
            </p>
            <p style={{ fontSize: "0.9rem", lineHeight: "1.7", color: "#C7CCD6" }}>
              Where valuation certificates are not available, Crownstone Vaults can arrange
              valuation services as an integrated, compliant offering under the client’s
              subscription.
            </p>
          </div>
        </div>
      </section>

      {/* DIGITAL ACCESS & CONTROLLED RETRIEVAL */}
      <section style={{ marginBottom: "3.2rem" }}>
        <h2
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: "1.4rem",
            marginBottom: "1.4rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#FDF4E3",
          }}
        >
          Digital Access & Controlled Retrieval
        </h2>

        <p
          style={{
            fontSize: "0.98rem",
            lineHeight: "1.8",
            maxWidth: "780px",
            marginBottom: "1.7rem",
          }}
        >
          For clients enrolled in higher clearance tiers, Crownstone Vaults provides encrypted
          digital access to registered document copies. Access is strictly controlled, logged, and
          limited to pre-approved individuals under pre-stated conditions.
        </p>

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
              padding: "1.6rem 1.5rem",
              borderRadius: "15px",
              background: "rgba(9,18,32,0.96)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <h3
              style={{
                fontSize: "1.02rem",
                marginBottom: "0.6rem",
                color: "#F3D39A",
              }}
            >
              Encrypted Document Copies
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: "1.8" }}>
              Digitized copies of critical documents are stored in encrypted form and made
              available only to clients registered for digital access clearance at the time of
              custody onboarding.
            </p>
          </div>

          {/* Pre-Approved Access */}
          <div
            style={{
              padding: "1.6rem 1.5rem",
              borderRadius: "15px",
              background: "rgba(9,18,32,0.96)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <h3
              style={{
                fontSize: "1.02rem",
                marginBottom: "0.6rem",
                color: "#F3D39A",
              }}
            >
              Pre-Approved Access Protocols
            </h3>
            <p style={{ fontSize: "0.94rem", lineHeight: "1.8" }}>
              Access to digital copies and physical items is granted only to pre-approved persons,
              under conditions defined at subscription onboarding. All retrievals are logged and
              subject to custodial oversight.
            </p>
          </div>
        </div>
      </section>

      {/* HERITAGE & LINEAGE SERVICES */}
      <section style={{ marginBottom: "3.2rem" }}>
        <h2
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: "1.4rem",
            marginBottom: "1.4rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#FDF4E3",
          }}
        >
          Heritage & Lineage Continuity
        </h2>

        <p
          style={{
            fontSize: "0.98rem",
            lineHeight: "1.8",
            maxWidth: "780px",
            marginBottom: "1.7rem",
          }}
        >
          For qualifying families in higher subscription tiers, Crownstone Vaults issues
          cross-generational profile certificates that document academic, professional, and
          artistic excellence across lineage. These certificates are designed for presentation in
          applications for further studies, scholarships, and employment.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.6rem",
          }}
        >
          {/* Lineage Certificates */}
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
                fontSize: "1.04rem",
                marginBottom: "0.6rem",
                color: "#F3D39A",
              }}
            >
              Lineage Excellence Certificates
            </h3>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.8" }}>
              Certificates referencing parental or ancestral achievements—such as Ivy League
              alumni status, advanced degrees, professional distinctions, or artistic training—are
              issued to participating family members upon key milestones, such as high school
              graduation.
            </p>
          </div>

          {/* Eligibility & Tiering */}
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
                fontSize: "1.04rem",
                marginBottom: "0.6rem",
                color: "#F3D39A",
              }}
            >
              Eligibility & High-Value Tiers
            </h3>
            <p style={{ fontSize: "0.95rem", lineHeight: "1.8" }}>
              These heritage services are reserved for high-paying subscription categories and
              require that qualifying documents and records be held under custody with Crownstone
              Vaults over time, creating multi-generational continuity.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ marginBottom: "2.8rem" }}>
        <h2
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: "1.35rem",
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
          Prospective clients and families are invited to initiate a structured onboarding process
          to determine the appropriate subscription tier, custodial scope, and heritage
          configuration. Crownstone Vaults is designed to remain in place across generations.
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
