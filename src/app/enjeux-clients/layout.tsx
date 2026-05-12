import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Enjeux finance des PME et ETI",
    description: "Identifiez les enjeux financiers prioritaires de votre entreprise : fiabilité des données, clôture, cash, reporting, outils et pilotage.",
};

export default function EnjeuxClientsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
