"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

interface HeroProps {
    onBookCall?: () => void;
}

export function Hero({ onBookCall }: HeroProps) {
    return (
        <section className="relative w-full min-h-screen pt-32 pb-16 px-6 bg-[#FAFAF9] overflow-hidden flex flex-col justify-center">
            <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 text-left">

                {/* Left Image - Couple */}
                <motion.div
                    className="lg:col-span-5 relative h-[600px] lg:h-[750px] hidden lg:block"
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <motion.div
                        className="absolute left-0 top-0 w-full h-full rounded-[40px] overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200"
                            alt="Wedding emotional moment"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </motion.div>

                {/* Center Text Content */}
                <div className="lg:col-span-4 z-20 flex flex-col items-start pl-8 lg:pl-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.h1
                            className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-[#C5A02F] mb-6"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            Créer des <br />
                            Moments <br />
                            Inoubliables
                        </motion.h1>
                        <motion.p
                            className="text-stone-700 mb-10 max-w-sm text-lg leading-relaxed font-medium"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            Sublimez vos occasions spéciales avec un design impeccable et une exécution sans faille.
                        </motion.p>

                        <motion.div
                            onClick={onBookCall}
                            className="cursor-pointer group relative inline-flex items-center justify-start mt-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="w-16 h-16 bg-[#E0D8C3]/80 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D4AF37]/20" />
                            <span className="absolute left-6 text-xl font-medium text-stone-900 group-hover:underline decoration-1 underline-offset-4 whitespace-nowrap">
                                Réserver un appel
                            </span>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Right Image Group */}
                <div className="lg:col-span-3 hidden lg:flex flex-col gap-6 h-full justify-center pt-12">
                    {/* Top Right Image */}
                    <motion.div
                        className="relative w-full h-64 rounded-[30px] overflow-hidden self-end translate-x-8"
                        initial={{ opacity: 0, x: 50, y: -20 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        whileHover={{ scale: 1.05, rotate: -2 }}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800"
                            alt="Wedding reception"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Bottom Right Image */}
                    <motion.div
                        className="relative w-full h-80 rounded-[30px] overflow-hidden -translate-x-4"
                        initial={{ opacity: 0, x: 50, y: 20 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800"
                            alt="Wedding detail"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>

                {/* Mobile View - Fallback */}
                <motion.div
                    className="lg:hidden col-span-1 flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="font-serif text-5xl leading-tight text-[#C5A02F] mb-6">
                        Créer des <br />
                        Moments <br />
                        Inoubliables
                    </h1>
                    <div className="w-full h-[400px] relative rounded-2xl overflow-hidden shadow-lg mb-8">
                        <Image
                            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800"
                            alt="Wedding moment"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <Button variant="gold" size="lg" className="rounded-full px-10" onClick={onBookCall}>
                        Réserver un appel
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
