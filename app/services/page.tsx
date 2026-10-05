export default function ServicesPage() {
  return (
    <main
      style={{
        padding: "2rem",
        maxWidth: "900px",
        margin: "0 auto",
        lineHeight: 1.6,
      }}
    >
      <section style={{ marginBottom: "3rem" }}>
        <h1 style={{ marginBottom: "1rem" }}>Our Services</h1>
        <p>
          Crownstone Vaults Limited offers secure vaulting, document
          preservation, controlled-access storage, and institutional-grade
          protection for sensitive materials.
        </p>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ marginBottom: "0.5rem" }}>Secure Vaulting</h2>
        <p>
          Our vaulting facilities are designed to safeguard valuables and
          sensitive materials with strict access controls and environmental
          protections.
        </p>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ marginBottom: "0.5rem" }}>Document Preservation</h2>
        <p>
          We provide long-term preservation solutions for critical documents,
          ensuring they remain protected and accessible when needed.
        </p>
      </section>
    </main>
  );
}
