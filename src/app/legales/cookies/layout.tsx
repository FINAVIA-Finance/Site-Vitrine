import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Politique de cookies",
    description: "Consultez la politique de cookies du site Finavia.",
};

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
    return children;
}
