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
          flexDirection: "row",
        }}
      >
        {/* Sidebar Navigation */}
        <aside
          style={{
            width: "260px",
            minHeight: "100vh",
            borderRight: "1px solid #ddd",
            padding: "2rem 1.5rem",
            boxSizing: "border-box",
            position: "fixed",
            left: 0,
            top: 0,
            background: "#fafafa",
          }}
        >
          <div style={{ fontSize: "1.4rem", fontWeight: "bold", marginBottom: "2rem" }}>
            Crownstone Vaults Limited
          </div>

          <nav style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <a href="/" style={{ textDecoration: "none", color: "black" }}>Home</a>
            <a href="/about" style={{ textDecoration: "none", color: "black" }}>About</a>
            <a href="/services" style={{ textDecoration: "none", color: "black" }}>Services</a>
            <a href="/governance" style={{ textDecoration: "none", color: "black" }}>Governance</a>
            <a href="/compliance" style={{ textDecoration: "none", color: "black" }}>Compliance</a>
            <a href="/accreditation" style={{ textDecoration: "none", color: "black" }}>Accreditation</a>
            <a href="/risk" style={{ textDecoration: "none", color: "black" }}>Risk Management</a>
            <a href="/preservation" style={{ textDecoration: "none", color: "black" }}>Preservation</a>
            <a href="/infrastructure" style={{ textDecoration: "none", color: "black" }}>Infrastructure</a>
            <a href="/onboarding" style={{ textDecoration: "none", color: "black" }}>Onboarding</a>
            <a href="/legal" style={{ textDecoration: "none", color: "black" }}>Legal</a>
            <a href="/terms" style={{ textDecoration: "none", color: "black" }}>Terms</a>
            <a href="/contact" style={{ textDecoration: "none", color: "black" }}>Contact</a>
          </nav>
        </aside>

        {/* Main Content Area */}
        <div
          style={{
            marginLeft: "260px",
            flex: 1,
            padding: "2rem",
            maxWidth: "900px",
            boxSizing: "border-box",
          }}
        >
          {children}

          <footer
            style={{
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid #ddd",
              textAlign: "center",
              fontSize: "0.9rem",
              color: "#555",
            }}
          >
            © {new Date().getFullYear()} Crownstone Vaults Limited — All Rights Reserved
          </footer>
        </div>
      </body>
    </html>
  );
}
