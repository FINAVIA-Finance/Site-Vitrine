"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FileText, Shield, FileCheck, Cookie, Lock } from 'lucide-react';

const sections = [
    { 
        id: 'mentions-legales', 
        label: 'Mentions Légales',
        icon: FileText,
        href: '/legales/mentions-legales'
    },
    { 
        id: 'confidentialite', 
        label: 'Politique de Confidentialité',
        icon: Shield,
        href: '/legales/confidentialite'
    },
    { 
        id: 'conditions', 
        label: "Conditions d'Utilisation",
        icon: FileCheck,
        href: '/legales/conditions'
    },
    { 
        id: 'cookies', 
        label: 'Politique Cookies',
        icon: Cookie,
        href: '/legales/cookies'
    },
    { 
        id: 'rgpd', 
        label: 'RGPD',
        icon: Lock,
        href: '/legales/rgpd'
    },
];

const LegalPage = () => {
    const pathname = usePathname();

    return (
        <main className="min-h-screen bg-white pt-32 pb-20 font-sans">
            <div className="max-w-5xl mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-bold text-[#07036e] mb-12 text-center">
                    Informations Légales
                </h1>

                {/* Navigation Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {sections.map((section) => {
                        const Icon = section.icon;
                        const isActive = pathname === section.href;
                        return (
                            <Link
                                key={section.id}
                                href={section.href}
                                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all flex items-center gap-2 ${
                                    isActive
                                        ? 'bg-[#07036e] text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                <Icon size={18} />
                                {section.label}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </main>
    );
};

export default LegalPage;
