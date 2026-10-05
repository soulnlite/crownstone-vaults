export const metadata = {
  title: "Crownstone Vaults Limited",
  description: "Institutional vault and secure storage services",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Arial, sans-serif",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1.5rem 2.5rem",
            borderBottom: "1px solid #ddd",
          }}
        >
          <div style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
            Crownstone Vaults Limited
          </div>

          <nav style={{ display: "flex", gap: "2rem" }}>
            <a href="/" style={{ textDecoration: "none", color: "black" }}>Home</a>
            <a href="/about" style={{ textDecoration: "none", color: "black" }}>About</a>
            <a href="/services" style={{ textDecoration: "none", color: "black" }}>Services</a>
            <a href="/governance" style={{ textDecoration: "none", color: "black" }}>Governance</a>
            <a href="/compliance" style={{ textDecoration: "none", color: "black" }}>Compliance</a>
            <a href="/accreditation" style={{ textDecoration: "none", color: "black" }}>Accreditation</a>
            <a href="/risk" style={{ textDecoration: "none", color: "black" }}>Risk Management</a>
            <a href="/preservation" style={{ textDecoration: "none", color: "black" }}>Preservation</a>
            <a href="/infrastructure" style={{ textDecoration: "none", color: "black" }}>Infrastructure</a>
            <a href="/contact" style={{ textDecoration: "none", color: "black" }}>Contact</a>
          </nav>
        </header>

        <div
          style={{
            flex: 1,
            padding: "2rem",
            maxWidth: "900px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          {children}
        </div>

        <footer
          style={{
            marginTop: "3rem",
            padding: "2rem",
            borderTop: "1px solid #ddd",
            textAlign: "center",
            fontSize: "0.9rem",
            color: "#555",
          }}
        >
          © {new Date().getFullYear()} Crownstone Vaults Limited — All Rights Reserved
        </footer>
      </body>
    </html>
  );
}
