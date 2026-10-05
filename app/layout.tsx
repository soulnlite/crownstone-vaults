import Sidebar from "./Sidebar";

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
        <Sidebar />

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
