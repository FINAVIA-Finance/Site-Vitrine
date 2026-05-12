import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Protection des données RGPD",
    description: "Consultez les informations RGPD de Finavia relatives à la protection et au traitement des données personnelles.",
};

export default function RgpdLayout({ children }: { children: React.ReactNode }) {
    return children;
}
