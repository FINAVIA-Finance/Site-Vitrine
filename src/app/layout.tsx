import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google"; // Import Inter instead of Geist
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {Toaster} from "@/components/ui/toaster";
import CookieBanner from "@/components/cookies/CookieBanner";

const GTM_ID = "GTM-M5J9WQ4R";
const SITE_URL = "https://finavia.fr";

// Set up Inter font
const inter = Inter({
    subsets: ["latin"],
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: "Structurer, digitaliser et automatiser la finance augmentée | Finavia",
        template: "%s | Finavia",
    },
    description: "Finavia accompagne les PME et ETI dans la structuration, la digitalisation et l'automatisation de leur fonction finance avec une approche terrain et IA utile.",
    alternates: {
        canonical: "/",
    },
    icons: {
        icon: "/images/favicon.png",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr" className="scroll-smooth">
        <Script id="google-tag-manager" strategy="beforeInteractive">
            {`
            (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
            `}
        </Script>
        {/* Apply the inter class to the body */}
        <body className={`${inter.className} antialiased min-h-screen bg-white`} suppressHydrationWarning={true}>
        <noscript>
            <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
            />
        </noscript>
        <Navbar />
        <main>{children}</main>
        <Toaster/>
        <Footer/>
        <CookieBanner /> 
        </body>
        </html>
    );
}
