export default function HomePage() {
  return (
    <main
      style={{
        padding: "2rem",
        maxWidth: "900px",
        margin: "0 auto",
        lineHeight: 1.6,
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          marginBottom: "4rem",
          padding: "2rem 0",
        }}
      >
        <h1 style={{ marginBottom: "1rem", fontSize: "2rem" }}>
          Crownstone Vaults Limited
        </h1>
        <p style={{ fontSize: "1.1rem" }}>
          Secure institutional vaulting and preservation services for valuables,
          documents, and critical records — delivered with confidentiality,
          governance, and operational integrity.
        </p>
      </section>

      {/* Mission */}
      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ marginBottom: "0.5rem" }}>Our Mission</h2>
        <p>
          To deliver uncompromising security, confidentiality, and reliability
          through professionally managed vaulting services designed for
          individuals, families, and institutions.
        </p>
      </section>

      {/* Core Services */}
      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ marginBottom: "0.5rem" }}>Core Services</h2>
        <p>
          We offer secure vaulting, document preservation, controlled-access
          storage, and institutional-grade protection for sensitive materials.
        </p>
      </section>

      {/* Institutional Assurance */}
      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ marginBottom: "0.5rem" }}>Institutional Assurance</h2>
        <p>
          Crownstone Vaults operates with strict governance, compliance
          oversight, and operational transparency to ensure trust at every
          level.
        </p>
      </section>
    </main>
  );
}
