"use client";

import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#07036e] text-white px-6">
      <div className="relative max-w-xl w-full text-center">
        <div className="absolute -inset-24 opacity-30 blur-3xl pointer-events-none"
             style={{ backgroundImage: "linear-gradient(to right, #23135f 15%, #d0006f 100%)" }} />

        <div className="relative bg-white/5 border border-white/10 rounded-3xl px-8 py-10 backdrop-blur-lg shadow-2xl">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-white/60 mb-4">
            Page introuvable
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            Oups, cette page n&apos;existe pas (404)
          </h1>
          <p className="text-white/80 mb-8 leading-relaxed">
            Le lien que vous avez suivi est incorrect, a expiré ou la page a été déplacée.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => window.history.length > 1 ? window.history.back() : (window.location.href = "/")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/40 text-sm font-semibold hover:bg-white hover:text-[#07036e] transition-colors"
            >
              <ArrowLeft size={18} />
              Retour à la page précédente
            </button>

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white shadow-lg hover:opacity-90"
              style={{ backgroundImage: "linear-gradient(to right, #23135f 15%, #d0006f 100%)" }}
            >
              <Home size={18} />
              Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

