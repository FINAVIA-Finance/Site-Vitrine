"use client";

import { useState, useEffect } from "react";

const COOKIE_NAME = "finavia_cookie_consent";
const COOKIE_DURATION_DAYS = 365;

function setCookie(name: string, value: string, days: number) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getCookie(COOKIE_NAME);
    if (!consent) {
      // Légère temporisation pour ne pas bloquer le rendu initial
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setCookie(COOKIE_NAME, "accepted", COOKIE_DURATION_DAYS);
    setVisible(false);
    // 👉 Si tu ajoutes Google Analytics plus tard, active-le ici :
    // window.gtag?.('consent', 'update', { analytics_storage: 'granted' })
  };

  const handleDecline = () => {
    setCookie(COOKIE_NAME, "declined", COOKIE_DURATION_DAYS);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      {/* Overlay léger pour attirer l'attention */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.15)",
          zIndex: 9998,
          animation: "fadeIn 0.3s ease",
        }}
        aria-hidden="true"
      />

      {/* Bannière */}
      <div
        role="dialog"
        aria-label="Gestion des cookies"
        aria-live="polite"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          background: "#ffffff",
          borderTop: "1px solid #e5e5e5",
          boxShadow: "0 -4px 24px rgba(0, 0, 0, 0.10)",
          padding: "20px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
          flexWrap: "wrap",
          animation: "slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Texte */}
        <p
          style={{
            margin: 0,
            fontSize: "14px",
            color: "#444444",
            lineHeight: "1.6",
            flex: "1 1 300px",
            fontFamily: "inherit",
          }}
        >
          Nous utilisons des cookies nécessaires au bon fonctionnement du site.{" "}
          <a
            href="/legales/cookies"
            style={{
              color: "#111111",
              fontWeight: 600,
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            En savoir plus
          </a>
        </p>

        {/* Boutons — taille et style identiques (exigence CNIL) */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexShrink: 0,
            flexWrap: "wrap",
          }}
        >
          {/* Refuser — toujours AUSSI visible que Accepter (CNIL) */}
          <button
            onClick={handleDecline}
            style={{
              padding: "10px 24px",
              fontSize: "14px",
              fontWeight: 600,
              borderRadius: "6px",
              border: "1.5px solid #111111",
              background: "transparent",
              color: "#111111",
              cursor: "pointer",
              transition: "background 0.2s, color 0.2s",
              fontFamily: "inherit",
              minWidth: "120px",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.background = "#f5f5f5";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.background = "transparent";
            }}
          >
            Refuser
          </button>

          {/* Accepter */}
          <button
            onClick={handleAccept}
            style={{
              padding: "10px 24px",
              fontSize: "14px",
              fontWeight: 600,
              borderRadius: "6px",
              border: "1.5px solid #111111",
              background: "#111111",
              color: "#ffffff",
              cursor: "pointer",
              transition: "background 0.2s",
              fontFamily: "inherit",
              minWidth: "120px",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.background = "#333333";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.background = "#111111";
            }}
          >
            Accepter
          </button>
        </div>
      </div>

      {/* Animations CSS */}
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);   opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </>
  );
}
