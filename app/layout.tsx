export const metadata = {
  title: "Crownstone Vaults Limited",
  description: "Institutional vault and secure storage services",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
<body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
  <header style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    borderBottom: "1px solid #ddd"
  }}>
    <div style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
      Crownstone Vaults Limited
    </div>

    <nav style={{ display: "flex", gap: "1.5rem" }}>
      <a href="/" style={{ textDecoration: "none", color: "black" }}>Home</a>
      <a href="/about" style={{ textDecoration: "none", color: "black" }}>About</a>
      <a href="/services" style={{ textDecoration: "none", color: "black" }}>Services</a>
      <a href="/governance" style={{ textDecoration: "none", color: "black" }}>Governance</a>
      <a href="/contact" style={{ textDecoration: "none", color: "black" }}>Contact</a>
    </nav>
  </header>

  {children}
</body>

    </html>
  );
}
