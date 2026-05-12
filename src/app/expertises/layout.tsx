import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Expertises finance, digitalisation et IA",
    description: "Audit, structuration finance, digitalisation, automatisation, pilotage financier et opérations stratégiques pour PME et ETI.",
};

export default function ExpertisesLayout({ children }: { children: React.ReactNode }) {
    return children;
}
