"use client";

import { useState } from "react";

type Tier = "Silver" | "Gold" | "Platinum" | "Crown";

const tierOrder: Tier[] = ["Silver", "Gold", "Platinum", "Crown"];

const services: Record<Tier, { title: string; description: string }[]> = {
  Silver: [
    {
      title: "Basic Vault Access",
      description:
        "Entry-level access to Crownstone Vaults foundational vault environment.",
    },
    {
      title: "Standard Preservation",
      description:
        "Baseline preservation protocols ensuring consistent and reliable containment.",
    },
    {
      title: "Foundational Compliance",
      description:
        "Core compliance features aligned with institutional minimums.",
    },
  ],

  Gold: [
    {
      title: "Enhanced Vault Access",
      description:
        "Priority access to enhanced vault configurations and operational windows.",
    },
    {
      title: "Reinforced Preservation",
      description:
        "Strengthened preservation measures for more demanding institutional requirements.",
    },
    {
      title: "Expanded Compliance Envelope",
      description:
        "Broader compliance tooling aligned with elevated governance expectations.",
    },
  ],

  Platinum: [
    {
      title: "Strategic Vault Architecture",
      description:
        "Architected vault structures tailored to complex institutional mandates.",
    },
    {
      title: "Advanced Preservation Regimes",
      description:
        "High-intensity preservation protocols for long-horizon containment.",
    },
    {
      title: "Institutional-Grade Compliance",
      description:
        "Deep compliance instrumentation for multi-layered oversight environments.",
    },
  ],

  Crown: [
    {
      title: "Crownstone Signature Vault",
      description:
        "Flagship vault configuration reserved for the most sensitive institutional payloads.",
    },
    {
      title: "Continuity-Oriented Preservation",
      description:
        "Preservation regimes engineered around continuity, succession, and intergenerational mandates.",
    },
    {
      title: "Crown-Level Governance Alignment",
      description:
        "Governance scaffolding tuned to crown-level, sovereign, or supra-institutional oversight.",
    },
  ],
};

export default function ServicesPage() {
  const [selectedTier, setSelectedTier] = useState<Tier>("Silver");

  const accumulatedServices = (() => {
    const index = tierOrder.indexOf(selectedTier);
    const tiersToInclude = tierOrder.slice(0, index + 1);
    return tiersToInclude.flatMap((tier) => services[tier]);
  })();

  return (
    <main
      style={{
        maxWidth: "960px",
        margin: "0 auto",
        padding: "3rem 1.5rem 4rem",
        color: "#FDF4E3",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* Header */}
      <section style={{ marginBottom: "2.5rem", textAlign: "center" }}>
        <h1
          style={{
            fontSize: "2.1rem",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
            color: "rgba(201,168,106,0.92)",
          }}
        >
          Crownstone Vaults Services
        </h1>

        <p
          style={{
            maxWidth: "640px",
            margin: "0 auto",
            fontSize: "0.98rem",
            lineHeight: 1.6,
            color: "rgba(253,244,227,0.82)",
          }}
        >
          Service tiers are structured to accumulate. Selecting a higher tier
          preserves all foundational capabilities while introducing additional
          layers of preservation, governance, and institutional alignment.
        </p>
      </section>

      {/* Tier Selector */}
      <section
        style={{
          marginBottom: "2.5rem",
          padding: "1rem",
          borderRadius: "10px",
          border: "1px solid rgba(201,168,106,0.35)",
          background:
            "linear-gradient(135deg, rgba(10,21,38,0.92), rgba(7,16,31,0.96))",
        }}
      >
        <div style={{ marginBottom: "0.75rem", textAlign: "center" }}>
          <span
            style={{
              fontSize: "0.9rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgba(201,168,106,0.92)",
            }}
          >
            Select service tier
          </span>
        </div>

        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {tierOrder.map((tier) => {
            const isActive = tier === selectedTier;

            return (
              <button
                key={tier}
                type="button"
                onClick={() => setSelectedTier(tier)}
                style={{
                  padding: "0.55rem 1.1rem",
                  borderRadius: "999px",
                  border: isActive
                    ? "1px solid rgba(201,168,106,0.85)"
                    : "1px solid rgba(201,168,106,0.35)",
                  background: isActive
                    ? "linear-gradient(135deg, #C9A86A 0%, #E8C98A 40%, #8A6F3F 100%)"
                    : "rgba(10,23,40,0.9)",
                  color: isActive ? "#0A1728" : "#FDF4E3",
                  fontSize: "0.85rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition:
                    "background 0.18s ease, border-color 0.18s ease, color 0.18s ease",
                }}
              >
                {tier}
              </button>
            );
          })}
        </div>

        <div
          style={{
            marginTop: "0.75rem",
            textAlign: "center",
            fontSize: "0.85rem",
            color: "rgba(253,244,227,0.82)",
          }}
        >
          Currently viewing:{" "}
          <span style={{ color: "rgba(201,168,106,0.92)", fontWeight: 500 }}>
            {selectedTier} tier (includes all prior tiers)
          </span>
        </div>
      </section>

      {/* Services Grid */}
      <section>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {accumulatedServices.map((service, index) => (
            <article
              key={`${service.title}-${index}`}
              style={{
                borderRadius: "10px",
                border: "1px solid rgba(201,168,106,0.35)",
                background:
                  "linear-gradient(135deg, rgba(10,21,38,0.92), rgba(7,16,31,0.96))",
                padding: "1.1rem 1rem",
              }}
            >
              <h2
                style={{
                  fontSize: "1rem",
                  marginBottom: "0.45rem",
                  color: "rgba(201,168,106,0.92)",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                {service.title}
              </h2>

              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                  color: "rgba(253,244,227,0.82)",
                }}
              >
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA — EXACT SIGNATURE BUTTON */}
      <section style={{ marginTop: "3rem", textAlign: "center" }}>
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
              href="/onboarding"
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
              Subscribe
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
