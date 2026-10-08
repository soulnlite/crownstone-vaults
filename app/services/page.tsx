const services = [
  {
    tier: "Silver",
    title: "Basic Vault Access",
    description: "Entry-level access to Crownstone Vaults’ foundational vault environment."
  },
  {
    tier: "Silver",
    title: "Standard Preservation",
    description: "Baseline preservation protocols ensuring consistent and reliable containment."
  },
  {
    tier: "Silver",
    title: "Foundational Compliance",
    description: "Core compliance features aligned with institutional minimums."
  },
  {
    tier: "Silver",
    title: "Introductory Infrastructure",
    description: "Access to essential infrastructure systems without enhanced features."
  },
  {
    tier: "Gold",
    title: "Priority Vault Access",
    description: "Enhanced access with prioritized vault operations."
  },
  {
    tier: "Gold",
    title: "Enhanced Preservation",
    description: "Improved preservation protocols with extended stability measures."
  },
  {
    tier: "Gold",
    title: "Extended Compliance",
    description: "Broader compliance coverage with additional institutional safeguards."
  },
  {
    tier: "Gold",
    title: "Mid-Tier Infrastructure",
    description: "Infrastructure with enhanced throughput and reliability."
  },
  {
    tier: "Platinum",
    title: "Engineered Vault Access",
    description: "Adaptive, engineered vault access with liquid-alloy precision."
  },
  {
    tier: "Platinum",
    title: "Artifact-Grade Preservation",
    description: "High-precision preservation with dynamic alloy behavior."
  },
  {
    tier: "Platinum",
    title: "Institutional Compliance",
    description: "Compliance protocols designed for institutional-grade governance."
  },
  {
    tier: "Platinum",
    title: "Advanced Infrastructure",
    description: "High-capacity infrastructure with engineered throughput."
  },
  {
    tier: "Crown",
    title: "Executive Vault Access",
    description: "Sovereign-level vault access reserved for executive operations."
  },
  {
    tier: "Crown",
    title: "Sovereign Preservation",
    description: "Highest-grade preservation protocols with governance-level safeguards."
  },
  {
    tier: "Crown",
    title: "Governance-Level Compliance",
    description: "Compliance designed for governance, oversight, and executive review."
  },
  {
    tier: "Crown",
    title: "Top-Tier Infrastructure",
    description: "Institutional infrastructure with maximum throughput and authority."
  }
];

const tierStyles: Record<
  string,
  { border: string; background: string; labelColor: string }
> = {
  Silver: {
    border: "1px solid #C0C0C0",
    background: "#111827",
    labelColor: "#E5E7EB"
  },
  Gold: {
    border: "1px solid #D4AF37",
    background: "#1F2933",
    labelColor: "#FDE68A"
  },
  Platinum: {
    border: "1px solid #E5E4E2",
    background: "#111827",
    labelColor: "#E5E7EB"
  },
  Crown: {
    border: "1px solid #8B6F47",
    background: "#1F2933",
    labelColor: "#FDE68A"
  }
};

export default function ServicesPage() {
  return (
    <div
      style={{
        color: "#E3E6EB",
        padding: "3.5rem 4rem",
        background: "#020617",
        minHeight: "100vh"
      }}
    >
      <section style={{ marginBottom: "2.8rem" }}>
        <a
          style={{
            padding: "0.85rem 1.7rem",
            borderRadius: "999px",
            border: "1px solid rgba(201,168,106,0.7)",
            color: "#FDF4E3",
            fontWeight: 500,
            fontSize: "0.95rem",
            textDecoration: "none",
            background: "rgba(10,23,40,0.9)",
            display: "inline-block"
          }}
        >
          Initiate Institutional Contact
        </a>
      </section>

      <section style={{ marginBottom: "2.4rem" }}>
        <h1
          style={{
            fontSize: "2.4rem",
            marginBottom: "0.75rem",
            color: "#F9FAFB"
          }}
        >
          Crownstone Vaults — Services
        </h1>
        <p
          style={{
            maxWidth: "46rem",
            fontSize: "0.98rem",
            lineHeight: 1.6,
            color: "#9CA3AF"
          }}
        >
          Crownstone Vaults structures its institutional services across four placeholder tiers:
          Silver, Gold, Platinum, and Crown. Each tier reflects a distinct level of access,
          preservation, compliance, and infrastructure capability within the vault system.
        </p>
      </section>

      <section>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1.8rem"
          }}
        >
          {services.map((service, index) => {
            const style = tierStyles[service.tier];

            return (
              <div
                key={index}
                style={{
                  padding: "1.6rem 1.5rem",
                  borderRadius: "0.9rem",
                  border: style.border,
                  background: style.background,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.45)"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: "0.9rem"
                  }}
                >
                  <h2
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 500,
                      color: "#F9FAFB"
                    }}
                  >
                    {service.title}
                  </h2>
                  <span
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 500,
                      padding: "0.25rem 0.6rem",
                      borderRadius: "999px",
                      border: "1px solid rgba(148,163,184,0.6)",
                      color: style.labelColor
                    }}
                  >
                    {service.tier} Tier
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.55,
                    color: "#9CA3AF"
                  }}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
