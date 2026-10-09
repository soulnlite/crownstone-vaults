"use client";

import { useState } from "react";

const tiers = ["Silver", "Gold", "Platinum", "Crown"];

const services = {
  Silver: [
    {
      title: "Basic Vault Access",
      description:
        "Entry-level access to Crownstone Vaults’ foundational vault environment."
    },
    {
      title: "Standard Preservation",
      description:
        "Baseline preservation protocols ensuring consistent and reliable containment."
    },
    {
      title: "Foundational Compliance",
      description:
        "Core compliance features aligned with institutional minimums."
    },
    {
      title: "Introductory Infrastructure",
      description:
        "Access to essential infrastructure systems without enhanced features."
    }
  ],

  Gold: [
    {
      title: "Priority Vault Access",
      description: "Enhanced access with prioritized vault operations."
    },
    {
      title: "Enhanced Preservation",
      description:
        "Improved preservation protocols with extended stability measures."
    },
    {
      title: "Extended Compliance",
      description:
        "Broader compliance coverage with additional institutional safeguards."
    },
    {
      title: "Mid-Tier Infrastructure",
      description: "Infrastructure with enhanced throughput and reliability."
    }
  ],

  Platinum: [
    {
      title: "Engineered Vault Access",
      description:
        "Adaptive, engineered vault access with liquid-alloy precision."
    },
    {
      title: "Artifact-Grade Preservation",
      description:
        "High-precision preservation with dynamic alloy behavior."
    },
    {
      title: "Institutional Compliance",
      description:
        "Compliance protocols designed for institutional-grade governance."
    },
    {
      title: "Advanced Infrastructure",
      description:
        "High-capacity infrastructure with engineered throughput."
    }
  ],

  Crown: [
    {
      title: "Executive Vault Access",
      description:
        "Sovereign-level vault access reserved for executive operations."
    },
    {
      title: "Sovereign Preservation",
      description:
        "Highest-grade preservation protocols with governance-level safeguards."
    },
    {
      title: "Governance-Level Compliance",
      description:
        "Compliance designed for governance, oversight, and executive review."
    },
    {
      title: "Top-Tier Infrastructure",
      description:
        "Institutional infrastructure with maximum throughput and authority."
    }
  ]
};

export default function ServicesPage() {
  const [activeTier, setActiveTier] = useState("Silver");

  const accumulatedServices = (() => {
    const order = ["Silver", "Gold", "Platinum", "Crown"];
    const index = order.indexOf(activeTier);
    const tiersToInclude = order.slice(0, index + 1);

    return tiersToInclude.flatMap((tier) => services[tier]);
  })();

  return (
    <div
      style={{
        color: "#E3E6EB",
        padding: "3.5rem 4rem",
        background: "#020617",
        minHeight: "100vh"
      }}
    >
      {/* Top CTA */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "2rem" }}>
        <a
          href="/subscription"
          style={{
            padding: "0.75rem 1.4rem",
            borderRadius: "6px",
            border: "1px solid rgba(201,168,106,0.7)",
            background: "rgba(10,23,40,0.9)",
            color: "#FDF4E3",
            fontWeight: 500,
            fontSize: "0.9rem",
            textDecoration: "none"
          }}
        >
          Proceed to Subscription
        </a>
      </div>

      {/* Title */}
      <h1
        style={{
          fontSize: "2.4rem",
          marginBottom: "1.2rem",
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
          color: "#9CA3AF",
          marginBottom: "2.5rem"
        }}
      >
        Select a tier to view its institutional services. Higher tiers include all services from
        previous tiers, reflecting hierarchical progression and expanded vault capability.
      </p>

      {/* Segmented Control */}
      <div
        style={{
          display: "flex",
          gap: "0.4rem",
          marginBottom: "2.5rem"
        }}
      >
        {tiers.map((tier) => {
          const isActive = tier === activeTier;

          return (
            <button
              key={tier}
              onClick={() => setActiveTier(tier)}
              style={{
                padding: "0.65rem 1.2rem",
                borderRadius: "6px",
                border: isActive
                  ? "1px solid #D4AF37"
                  : "1px solid rgba(229,228,226,0.4)",
                background: isActive ? "rgba(212,175,55,0.15)" : "rgba(255,255,255,0.03)",
                color: isActive ? "#FDE68A" : "#E5E7EB",
                fontWeight: 500,
                fontSize: "0.9rem",
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
            >
              {tier}
            </button>
          );
        })}
      </div>

      {/* Services Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "1.8rem"
        }}
      >
        {accumulatedServices.map((service, index) => (
          <div
            key={index}
            style={{
              padding: "1.6rem 1.5rem",
              borderRadius: "0.9rem",
              border: "1px solid rgba(148,163,184,0.4)",
              background: "#111827",
              boxShadow: "0 10px 30px rgba(0,0,0,0.45)"
            }}
          >
            <h2
              style={{
                fontSize: "1.05rem",
                fontWeight: 500,
                color: "#F9FAFB",
                marginBottom: "0.6rem"
              }}
            >
              {service.title}
            </h2>

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
        ))}
      </div>

      {/* Bottom CTA */}
      <div style={{ marginTop: "3rem", textAlign: "center" }}>
        <a
          href="/subscription"
          style={{
            padding: "0.85rem 1.7rem",
            borderRadius: "6px",
            border: "1px solid rgba(201,168,106,0.7)",
            background: "rgba(10,23,40,0.9)",
            color: "#FDF4E3",
            fontWeight: 500,
            fontSize: "0.95rem",
            textDecoration: "none"
          }}
        >
          Proceed to Subscription
        </a>
      </div>
    </div>
  );
}
