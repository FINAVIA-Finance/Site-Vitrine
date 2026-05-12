import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contacter Finavia",
    description: "Prenez contact avec Finavia pour structurer, digitaliser et automatiser votre direction financière.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children;
}
