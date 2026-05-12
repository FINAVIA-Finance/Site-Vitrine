import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Notre méthode de transformation finance",
    description: "Une méthode terrain pour diagnostiquer, cadrer, déployer et accompagner la transformation digitale de la fonction finance.",
};

export default function MethodeLayout({ children }: { children: React.ReactNode }) {
    return children;
}
