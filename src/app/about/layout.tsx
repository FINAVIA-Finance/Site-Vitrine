import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Transformer et moderniser votre direction financière",
    description: "Découvrez Finavia, cabinet de conseil dédié à la structuration, la digitalisation et l'automatisation des directions financières des PME et ETI.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children;
}
