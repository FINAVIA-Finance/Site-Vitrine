"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Home, FileText } from 'lucide-react';
import FloatingStars from '@/components/ui/FloatingStars';
import { LEGAL_PAGE_CONTENT } from '@/lib/data';

const content = LEGAL_PAGE_CONTENT['mentions-legales'];

export default function MentionsLegalesPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Breadcrumb */}
            <div className="bg-gray-50 border-b border-gray-100 pt-32">
                <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-gray-500 flex items-center gap-2">
                    <Link href="/" className="hover:text-[#07036e] flex items-center gap-1">
                        <Home size={14} /> Accueil
                    </Link>
                    <ChevronRight size={14} />
                    <Link href="/legales" className="hover:text-[#07036e]">
                        Informations Légales
                    </Link>
                    <ChevronRight size={14} />
                    <span className="text-[#e51990] font-medium">{content.title}</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="bg-[#07036e] text-white py-20 px-6 relative overflow-hidden">
                <FloatingStars color="white" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#e51990] rounded-full filter blur-[100px] opacity-20 translate-x-1/3 -translate-y-1/3" />

                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-[#e51990] font-bold text-sm uppercase tracking-wider mb-6">
                            <FileText size={16} /> Document Légal
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                            {content.title}
                        </h1>
                        <p className="text-xl text-white/80 leading-relaxed font-light">
                            {content.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 px-6 relative overflow-hidden">
                <FloatingStars color="pink" />
                <div className="max-w-4xl mx-auto relative z-10 space-y-12">
                    {content.sections.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={section.highlight ? 'bg-[#07036e]/5 p-8 rounded-3xl border border-[#07036e]/10' : ''}
                        >
                            <h2 className="text-2xl font-bold text-[#07036e] mb-6 uppercase tracking-wide">
                                {section.title}
                            </h2>
                            {Array.isArray(section.content) ? (
                                <div className="space-y-4 text-gray-600 leading-relaxed">
                                    {section.content.map((paragraph, pIndex) => (
                                        <p key={pIndex}>{paragraph}</p>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-gray-600 leading-relaxed">
                                    <div className={section.highlight ? 'bg-gray-50 p-6 rounded-2xl border border-gray-100' : ''}>
                                        {section.content.split('\n').map((line, lineIndex) => {
                                            if (line.includes('@')) {
                                                const email = line.match(/[\w.-]+@[\w.-]+/)?.[0];
                                                if (email) {
                                                    return (
                                                        <p key={lineIndex} className="mb-2 last:mb-0">
                                                            {line.replace(email, '').trim()}{' '}
                                                            <a href={`mailto:${email}`} className="text-[#e51990] font-bold hover:underline">
                                                                {email}
                                                            </a>
                                                        </p>
                                                    );
                                                }
                                            }
                                            return <p key={lineIndex} className="mb-2 last:mb-0">{line}</p>;
                                        })}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}

