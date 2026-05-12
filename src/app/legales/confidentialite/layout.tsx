import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Politique de confidentialité",
    description: "Consultez la politique de confidentialité de Finavia et les informations relatives à la protection des données personnelles.",
};

export default function ConfidentialiteLayout({ children }: { children: React.ReactNode }) {
    return children;
}
