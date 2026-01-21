"use client";

import { Linkedin } from 'lucide-react';
import Link from 'next/link';
import FloatingStars from '@/components/ui/FloatingStars';
import { NAVIGATION_LINKS, EXPERTISE_LINKS, LEGAL_LINKS } from '@/lib/data';


const Footer = () => {
    return (
        <footer id="contact-footer" className="bg-[#07036e] text-white pt-16 pb-12 relative overflow-hidden">
            <FloatingStars />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 pt-8 border-t border-white/10">

                    {/* Column 1: Navigation */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-white">Navigation</h3>
                        <ul className="space-y-3">
                            {NAVIGATION_LINKS.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-white/80 hover:text-[#e51990] transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2: Expertises */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-white">Nos Expertises</h3>
                        <ul className="space-y-3">
                            {EXPERTISE_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-white/80 hover:text-[#e51990] transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-white">Ressources</h3>
                        <ul className="space-y-3">
                            <li><Link href="/legales/mentions-legales" className="text-white/80 hover:text-[#e51990] transition-colors text-sm">Mentions légales</Link></li>
                            <li><Link href="/legales/confidentialite" className="text-white/80 hover:text-[#e51990] transition-colors text-sm">Politique de confidentialité</Link></li>
                            <li><Link href="/legales/conditions" className="text-white/80 hover:text-[#e51990] transition-colors text-sm">Conditions d'utilisation</Link></li>
                            <li><Link href="/legales/cookies" className="text-white/80 hover:text-[#e51990] transition-colors text-sm">Politique cookies</Link></li>
                            <li><Link href="/legales/rgpd" className="text-white/80 hover:text-[#e51990] transition-colors text-sm">RGPD</Link></li>
                            <li><Link href="/expertises" className="text-white/80 hover:text-[#e51990] transition-colors text-sm">Toutes nos expertises</Link></li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/company/finavia-sas"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-white/80 hover:text-[#e51990] transition-colors text-sm"
                                >
                                    <Linkedin size={16} /> LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/60 border-t border-white/5 pt-8">
                    <p>Finavia © {new Date().getFullYear()}. Tous droits réservés.</p>
                    <div className="flex flex-wrap justify-center gap-6">
                        {LEGAL_LINKS.map((link) => (
                            <Link key={link.name} href={link.href} className="hover:text-white transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
