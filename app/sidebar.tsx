"use client";

import { useState } from "react";
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

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Toggle button for small screens */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          top: "1rem",
          left: "1rem",
          zIndex: 1000,
          padding: "0.5rem 0.9rem",
          borderRadius: "999px",
          border: "1px solid #C9A86A",
          background: "#2E3442",
          color: "#F5F6F7",
          fontSize: "0.85rem",
          cursor: "pointer",
          display: "none",
        }}
      >
        Menu
      </button>

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
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 500,
                color: isActive(link.href) ? "#C9A86A" : "#F5F6F7",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}
