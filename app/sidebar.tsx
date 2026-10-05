"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Governance", href: "/governance" },
  { label: "Compliance", href: "/compliance" },
  { label: "Accreditation", href: "/accreditation" },
  { label: "Risk Management", href: "/risk" },
  { label: "Preservation", href: "/preservation" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Onboarding", href: "/onboarding" },
  { label: "Legal", href: "/legal" },
  { label: "Terms", href: "/terms" },
  { label: "Contact", href: "/contact" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 900);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isMobile) setOpen(false);
    else setOpen(true);
  }, [isMobile]);

  return (
    <>
      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          onClick={() => setOpen(true)}
          style={{
            position: "fixed",
            top: "1rem",
            left: "1rem",
            zIndex: 1001,
            padding: "0.6rem 1rem",
            borderRadius: "999px",
            border: "1px solid #C9A86A",
            background: "#2E3442",
            color: "#F5F6F7",
            fontSize: "0.9rem",
            cursor: "pointer",
          }}
        >
          Menu
        </button>
      )}

      {/* Overlay (mobile only) */}
      {isMobile && open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.45)",
            zIndex: 1000,
          }}
        ></div>
      )}

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
          transform: open ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.25s ease-out",
          zIndex: 1002,
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
          {links.map((link) => {
            const active = isActive(link.href);

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => isMobile && setOpen(false)}
                style={{
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: active ? "#C9A86A" : "#F5F6F7",
                  padding: "0.4rem 0",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  transition: "color 0.25s ease, transform 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) e.currentTarget.style.transform = "translateX(0px)";
                }}
              >
                <div
                  style={{
                    width: "4px",
                    height: "100%",
                    background: active ? "#C9A86A" : "transparent",
                    transition: "background 0.25s ease",
                  }}
                ></div>

                {link.label}
              </a>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
