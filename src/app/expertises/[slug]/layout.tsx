import type { Metadata } from "next";

const EXPERTISE_METADATA: Record<string, { title: string; description: string }> = {
    audit: {
        title: "Audit et diagnostic des processus financiers",
        description: "Audit de la fonction finance, cartographie des flux, identification des risques et plan d'action opérationnel pour PME et ETI.",
    },
    "structuration-finance": {
        title: "Structuration de la fonction finance",
        description: "Structuration des processus, rôles, clôtures, référentiels et contrôles pour bâtir une direction financière fiable et scalable.",
    },
    digitalisation: {
        title: "Digitalisation et automatisation finance",
        description: "Digitalisation, automatisation, facturation électronique, outils finance et IA utile pour gagner en fiabilité et en productivité.",
    },
    "pilotage-financier": {
        title: "Pilotage financier et performance",
        description: "Tableaux de bord, indicateurs, reporting, cash et prévisions pour piloter la performance financière de l'entreprise.",
    },
    "expertises-avancees": {
        title: "Expertises financières et opérations stratégiques",
        description: "Accompagnement finance pour levées de fonds, croissance externe, refinancement et opérations structurantes.",
    },
};

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    return EXPERTISE_METADATA[params.slug] ?? {
        title: "Expertise finance",
        description: "Découvrez les expertises Finavia pour structurer, digitaliser et automatiser la fonction finance.",
    };
}

export default function ExpertiseDetailLayout({ children }: { children: React.ReactNode }) {
    return children;
}
