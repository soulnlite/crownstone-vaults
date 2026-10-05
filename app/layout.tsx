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
          fontFamily: "Inter, Arial, sans-serif",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "row",
          background: "#F5F6F7",
        }}
      >
        {/* Sidebar */}
        <aside
          style={{
            width: "260px",
            minHeight: "100vh",
            borderRight: "1px solid #444",
            padding: "2.5rem 1.8rem",
            boxSizing: "border-box",
            position: "fixed",
            left: 0,
            top: 0,
            background: "#2E3442",
            color: "white",
          }}
        >
          <div
            style={{
              fontSize: "1.6rem",
              fontFamily: "Merriweather, serif",
              fontWeight: 700,
              marginBottom: "2.5rem",
            }}
          >
            Crownstone Vaults Limited
          </div>

          <nav style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Services", "/services"],
              ["Governance", "/governance"],
              ["Compliance", "/compliance"],
              ["Accreditation", "/accreditation"],
              ["Risk Management", "/risk"],
              ["Preservation", "/preservation"],
              ["Infrastructure", "/infrastructure"],
              ["Onboarding", "/onboarding"],
              ["Legal", "/legal"],
              ["Terms", "/terms"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                style={{
                  textDecoration: "none",
                  color: "#F5F6F7",
                  fontSize: "1rem",
                  fontWeight: 500,
                }}
              >
                {label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <div
          style={{
            marginLeft: "260px",
            flex: 1,
            padding: "3rem",
            maxWidth: "900px",
            boxSizing: "border-box",
          }}
        >
          {children}

          <footer
            style={{
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "2px solid #C9A86A",
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
