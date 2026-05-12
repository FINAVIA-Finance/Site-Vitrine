import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Conditions générales d'utilisation",
    description: "Consultez les conditions générales d'utilisation du site Finavia.",
};

export default function ConditionsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
