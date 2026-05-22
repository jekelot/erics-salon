"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 1.8s
    const fadeTimer = setTimeout(() => setFadeOut(true), 1800);
    // Remove from DOM after fade completes
    const removeTimer = setTimeout(() => setVisible(false), 2500);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#0d0f14",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.7s cubic-bezier(0.4,0,0.2,1)",
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      {/* Animated glow ring */}
      <div
        style={{
          position: "absolute",
          width: 340,
          height: 340,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(204,17,17,0.18) 0%, rgba(204,17,17,0) 70%)",
          animation: "splashPulse 2s ease-in-out infinite",
        }}
      />

      {/* Logo */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          animation: "splashFadeUp 0.9s cubic-bezier(0.2,0.8,0.2,1) both",
          animationDelay: "0.1s",
        }}
      >
        <Image
          src="/logo-transparent.png"
          alt="Eric's Salon"
          width={320}
          height={120}
          priority
          style={{
            width: "clamp(220px, 55vw, 320px)",
            height: "auto",
            filter: "drop-shadow(0 8px 32px rgba(204,17,17,0.4))",
          }}
        />
      </div>

      {/* Tagline */}
      <p
        style={{
          marginTop: 28,
          color: "rgba(248,244,236,0.5)",
          fontSize: "0.65rem",
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          fontFamily: "system-ui, sans-serif",
          fontWeight: 600,
          animation: "splashFadeUp 0.9s cubic-bezier(0.2,0.8,0.2,1) both",
          animationDelay: "0.3s",
        }}
      >
        Hair · Nails · Beauty
      </p>

      {/* Loading bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: 3,
          background: "#cc1111",
          animation: "splashBar 1.8s cubic-bezier(0.4,0,0.2,1) forwards",
        }}
      />

      <style>{`
        @keyframes splashPulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.08); opacity: 1; }
        }
        @keyframes splashFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes splashBar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
