import Image from 'next/image';
import { PARTNERS } from '@/lib/data';

const LogoStrip = () => (
    <>
        {PARTNERS.map((partner, index) => (
            <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 h-14 w-32 flex items-center justify-center transition-all duration-500 opacity-80 hover:opacity-100 hover:scale-105"
            >
                <Image
                    src={partner.url}
                    alt={`${partner.name} logo`}
                    width={128}
                    height={56}
                    className="max-h-full max-w-full w-auto h-auto object-contain"
                />
            </div>
        ))}
    </>
);

const Partners = () => {
    return (
        <section id="partners" className="py-12 bg-gray-50 border-y border-gray-100 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
                <p className="text-gray-500 font-medium text-sm uppercase tracking-wider">Nos partenaires</p>
            </div>

            <div className="overflow-hidden">
                <div className="flex animate-marquee items-center gap-20 w-max">
                    <LogoStrip />
                    <LogoStrip />
                </div>
            </div>
        </section>
    );
};

export default Partners;