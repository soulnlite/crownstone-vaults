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
              paddingBottom: "4rem",
            }}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
