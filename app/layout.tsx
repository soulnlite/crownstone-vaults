import "./globals.css";
import type { Metadata } from "next";
import Sidebar from "./sidebar";

export const metadata: Metadata = {
  title: "Crownstone Vaults Limited",
  description: "Institutional Vaulting & Preservation Infrastructure",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: "flex", minHeight: "100vh" }}>
          <Sidebar />

          <main
            style={{
              marginLeft: "260px",
              width: "100%",
              overflowY: "auto",
              padding: "2.5rem 3rem",
              boxSizing: "border-box",
              minHeight: "100vh",
            }}
          >
            <div style={{ maxWidth: "900px" }}>
              {children}
            </div>

            <footer
              style={{
                marginTop: "4rem",
                paddingTop: "2rem",
                borderTop: "2px solid #C9A86A",
                color: "#E3E6EB",
                fontSize: "0.9rem",
              }}
            >
              © 2026 Crownstone Vaults Limited — Institutional Preservation Infrastructure
            </footer>
          </main>
        </div>
      </body>
    </html>
  );
}
