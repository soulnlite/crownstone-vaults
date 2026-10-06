      {/* HERO SECTION — RESPONSIVE VAULT, NO OVERLAP */}
      <section
        style={{
          marginBottom: "3.5rem",
          padding: "3rem 3rem",
          borderRadius: "22px",
          background:
            "linear-gradient(135deg, rgba(201,168,106,0.18) 0%, rgba(10,23,40,0.9) 35%, #050914 100%)",
          boxShadow: "0 28px 70px rgba(0,0,0,0.7)",
          border: "1px solid rgba(201,168,106,0.35)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* RESPONSIVE VAULT CONTAINER */}
        <div
          style={{
            position: "absolute",
            right: "0",
            top: "0",
            height: "100%",
            width: "40%", // vault stays in right 40% only
            minWidth: "260px", // never shrinks too small
            maxWidth: "420px", // never grows too large
            pointerEvents: "none",
          }}
        >
          {/* Outer vault ring */}
          <div
            style={{
              position: "absolute",
              right: "-60px",
              top: "40px",
              width: "260px",
              height: "260px",
              borderRadius: "50%",
              border: "2px solid rgba(201,168,106,0.35)",
              boxShadow:
                "0 0 40px rgba(201,168,106,0.25), inset 0 0 25px rgba(5,9,20,0.9)",
              background:
                "radial-gradient(circle, rgba(10,23,40,0.85) 0%, rgba(5,9,20,1) 60%)",
              opacity: 0.55,
            }}
          ></div>

          {/* Inner vault ring */}
          <div
            style={{
              position: "absolute",
              right: "-10px",
              top: "100px",
              width: "160px",
              height: "160px",
              borderRadius: "50%",
              border: "1px solid rgba(201,168,106,0.55)",
              boxShadow: "0 0 22px rgba(201,168,106,0.35)",
              opacity: 0.45,
            }}
          ></div>

          {/* Metallic grooves */}
          <div
            style={{
              position: "absolute",
              right: "-60px",
              top: "40px",
              width: "260px",
              height: "260px",
              borderRadius: "50%",
              background:
                "repeating-conic-gradient(rgba(255,255,255,0.05) 0deg, rgba(255,255,255,0.0) 10deg)",
              opacity: 0.15,
            }}
          ></div>
        </div>

        {/* Gold shimmer pulse */}
        <div
          style={{
            position: "absolute",
            top: "-40%",
            left: "-20%",
            width: "140%",
            height: "140%",
            background:
              "radial-gradient(circle, rgba(201,168,106,0.12) 0%, transparent 70%)",
            animation: "pulseGold 6s ease-in-out infinite",
            pointerEvents: "none",
          }}
        ></div>

        <style>{`
          @keyframes pulseGold {
            0% { opacity: 0.25; transform: scale(1); }
            50% { opacity: 0.45; transform: scale(1.05); }
            100% { opacity: 0.25; transform: scale(1); }
          }
        `}</style>

        {/* TEXT ALWAYS ABOVE VAULT */}
        <div style={{ position: "relative", zIndex: 10, maxWidth: "60%" }}>
          <h1
            style={{
              fontFamily: "Merriweather, serif",
              fontSize: "2.8rem",
              marginBottom: "1.2rem",
              letterSpacing: "0.06em",
              color: "#FDF4E3",
              textShadow: "0 0 18px rgba(201,168,106,0.35)",
            }}
          >
            Crownstone Vaults Limited
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: "1.85",
              maxWidth: "760px",
              marginBottom: "2.2rem",
            }}
          >
            A sovereign‑grade preservation authority engineered to safeguard institutional memory,
            regulatory artefacts, and critical records across generations. Our vaulting mandate
            ensures continuity, integrity, and controlled custodial access.
          </p>

          <div style={{ display: "flex", gap: "1.3rem", flexWrap: "wrap" }}>
            <a
              href="/services"
              style={{
                padding: "0.95rem 1.8rem",
                borderRadius: "999px",
                background:
                  "linear-gradient(135deg, #C9A86A 0%, #F3D39A 40%, #9C7C45 100%)",
                color: "#0A1728",
                fontWeight: 600,
                fontSize: "1rem",
                textDecoration: "none",
                boxShadow: "0 12px 32px rgba(201,168,106,0.55)",
              }}
            >
              Institutional Services
            </a>

            <a
              href="/governance"
              style={{
                padding: "0.95rem 1.8rem",
                borderRadius: "999px",
                border: "1px solid rgba(201,168,106,0.6)",
                color: "#FDF4E3",
                fontWeight: 500,
                fontSize: "1rem",
                textDecoration: "none",
                background: "rgba(10,23,40,0.7)",
              }}
            >
              Governance Framework
            </a>
          </div>
        </div>
      </section>
