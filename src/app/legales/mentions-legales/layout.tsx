import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mentions légales",
    description: "Consultez les mentions légales du site Finavia.",
};

export default function MentionsLegalesLayout({ children }: { children: React.ReactNode }) {
    return children;
}
