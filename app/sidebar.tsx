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
            background: "#0D1B2A",
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
          borderRight: "1px solid rgba(255,255,255,0.08)",
          padding: "2.5rem 1.8rem",
          boxSizing: "border-box",
          position: "fixed",
          left: 0,
          top: 0,
          background:
            "linear-gradient(180deg, #0A1A2F 0%, #11243D 45%, #0B1623 100%)",
          color: "white",
          transform: open ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.25s ease-out, box-shadow 0.25s ease-out",
          boxShadow: "0 0 40px rgba(0,0,0,0.55)",
          zIndex: 1002,
        }}
      >
        {/* Brand Title */}
        <div
          style={{
            fontSize: "1.7rem",
            fontFamily: "Merriweather, serif",
            fontWeight: 700,
            marginBottom: "2.8rem",
            letterSpacing: "0.06em",
            color: "#FDF4E3",
          }}
        >
          Crownstone Vaults
          <div
            style={{
              marginTop: "0.4rem",
              height: "2px",
              width: "60%",
              background:
                "linear-gradient(90deg, #C9A86A 0%, rgba(201,168,106,0.2) 70%, transparent 100%)",
            }}
          ></div>
        </div>

        {/* Navigation */}
        <nav style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
          {links.map((link) => {
            const active = isActive(link.href);

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => isMobile && setOpen(false)}
                style={{
                  textDecoration: "none",
                  fontSize: "0.98rem",
                  fontWeight: 500,
                  color: active ? "#FDF4E3" : "#E3E6EB",
                  padding: "0.55rem 0.2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.7rem",
                  borderRadius: "999px",
                  background: active
                    ? "rgba(201,168,106,0.12)"
                    : "transparent",
                  transition:
                    "color 0.22s ease, transform 0.22s ease, background 0.22s ease, box-shadow 0.22s ease",
                  boxShadow: active
                    ? "0 0 12px rgba(201,168,106,0.35)"
                    : "none",
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = "translateX(6px)";
                    e.currentTarget.style.background =
                      active
                        ? "rgba(201,168,106,0.18)"
                        : "rgba(255,255,255,0.06)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = "translateX(0px)";
                    e.currentTarget.style.background = active
                      ? "rgba(201,168,106,0.12)"
                      : "transparent";
                  }
                }}
              >
                {/* Gold Accent Bar */}
                <div
                  style={{
                    width: "5px",
                    height: "100%",
                    borderRadius: "999px",
                    background: active
                      ? "linear-gradient(180deg, #F3D39A 0%, #C9A86A 50%, #9C7C45 100%)"
                      : "rgba(255,255,255,0.08)",
                    opacity: active ? 1 : 0.6,
                    transition: "background 0.22s ease, opacity 0.22s ease",
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
