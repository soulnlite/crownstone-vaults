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
        <div style={{ display: "flex", height: "100vh" }}>
          <Sidebar />

          <main
            style={{
              marginLeft: "260px",
              width: "100%",
              overflowY: "auto",
              padding: "3rem 3.5rem",
              boxSizing: "border-box",
              background: "#0F1A2E",
            }}
          >
            <div
              style={{
                maxWidth: "900px",
                marginBottom: "4rem",
                color: "#E3E6EB",
                lineHeight: "1.7",
              }}
            >
              {children}
            </div>

            <footer
              style={{
                paddingTop: "2rem",
                borderTop: "2px solid #C9A86A",
                color: "#E3E6EB",
                fontSize: "0.9rem",
                marginBottom: "2rem",
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
