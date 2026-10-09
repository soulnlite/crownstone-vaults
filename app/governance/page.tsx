"use client";

import { useState } from "react";

export default function GovernancePage() {
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
            color: "rgba(201,168,106,0.92)", // GOLD HEADER TONE
          }}
        >
          Governance Framework
        </h1>

        <p
          style={{
            maxWidth: "640px",
            margin: "0 auto",
            fontSize: "0.98rem",
            lineHeight: 1.6,
            color: "rgba(253,244,227,0.82)", // PARCHMENT BODY TONE
          }}
        >
          Crownstone Vaults governance architecture ensures institutional
          alignment, oversight continuity, and structured operational discipline
          across all vault tiers and preservation mandates.
        </p>
      </section>

      {/* Governance Sections */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.25rem",
        }}
      >
        <article
          style={{
            borderRadius: "10px",
            border: "1px solid rgba(201,168,106,0.35)",
            background:
              "radial-gradient(circle at top left, rgba(201,168,106,0.12), rgba(10,23,40,0.96))",
            padding: "1.1rem 1rem",
          }}
        >
          <h2
            style={{
              fontSize: "1rem",
              marginBottom: "0.45rem",
              color: "rgba(201,168,106,0.92)", // GOLD HEADER TONE
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Oversight Structure
          </h2>

          <p
            style={{
              fontSize: "0.9rem",
              lineHeight: 1.6,
              color: "rgba(253,244,227,0.82)", // PARCHMENT BODY TONE
            }}
          >
            Multi‑layered oversight mechanisms ensure operational integrity,
            regulatory alignment, and governance continuity across all vault
            environments.
          </p>
        </article>

        <article
          style={{
            borderRadius: "10px",
            border: "1px solid rgba(201,168,106,0.35)",
            background:
              "radial-gradient(circle at top left, rgba(201,168,106,0.12), rgba(10,23,40,0.96))",
            padding: "1.1rem 1rem",
          }}
        >
          <h2
            style={{
              fontSize: "1rem",
              marginBottom: "0.45rem",
              color: "rgba(201,168,106,0.92)", // GOLD HEADER TONE
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Governance Protocols
          </h2>

          <p
            style={{
              fontSize: "0.9rem",
              lineHeight: 1.6,
              color: "rgba(253,244,227,0.82)", // PARCHMENT BODY TONE
            }}
          >
            Protocols define operational boundaries, escalation pathways, and
            institutional safeguards that govern all vault interactions.
          </p>
        </article>

        <article
          style={{
            borderRadius: "10px",
            border: "1px solid rgba(201,168,106,0.35)",
            background:
              "radial-gradient(circle at top left, rgba(201,168,106,0.12), rgba(10,23,40,0.96))",
            padding: "1.1rem 1rem",
          }}
        >
          <h2
            style={{
              fontSize: "1rem",
              marginBottom: "0.45rem",
              color: "rgba(201,168,106,0.92)", // GOLD HEADER TONE
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Institutional Alignment
          </h2>

          <p
            style={{
              fontSize: "0.9rem",
              lineHeight: 1.6,
              color: "rgba(253,244,227,0.82)", // PARCHMENT BODY TONE
            }}
          >
            Governance alignment ensures that Crownstone Vaults operates within
            institutional expectations, long‑horizon mandates, and regulatory
            frameworks.
          </p>
        </article>
      </section>

      {/* CTA */}
      <section style={{ marginTop: "3rem", textAlign: "center" }}>
        <a
          href="/services"
          style={{
            display: "inline-block",
            padding: "0.85rem 1.7rem",
            borderRadius: "6px",
            border: "1px solid rgba(201,168,106,0.7)",
            background: "rgba(10,23,40,0.9)",
            color: "rgba(253,244,227,0.82)", // PARCHMENT BODY TONE
            fontWeight: 500,
            fontSize: "0.95rem",
            textDecoration: "none",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          Return to Services
        </a>
      </section>
    </main>
  );
}
