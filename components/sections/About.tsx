
"use client";

import { Section } from "@/components/ui/Section";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

import { motion } from "framer-motion";

export function About() {
    const reasons = [
        {
            title: "Approche Personnalisée",
            description: "Nous adaptons chaque détail pour refléter votre histoire unique et votre personnalité."
        },
        {
            title: "Créativité Inégalée",
            description: "De la conception à l'exécution, nous donnons vie à des idées fraîches et innovantes."
        },
        {
            title: "Exécution Parfaite",
            description: "Notre équipe expérimentée veille à ce que chaque élément logistique soit géré avec précision."
        }
    ];

    return (
        <Section id="about" className="bg-stone-50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <div className="order-2 lg:order-1 space-y-8">
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[#D4AF37] uppercase tracking-widest text-sm font-semibold">Pourquoi Choisir Aïssa Events</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight">
                            Des expériences qui inspirent et ravissent.
                        </h2>
                        <p className="text-stone-600 leading-relaxed text-lg">
                            L'organisation d'un événement devrait être aussi agréable que la célébration elle-même.
                            Chez Aïssa Events, nous gérons la complexité pour que vous puissiez vous concentrer sur vos souvenirs.
                            Avec des années d'expertise dans le marché du luxe, nous avons cultivé des partenariats
                            avec les meilleurs prestataires pour garantir l'excellence.
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={index}
                                className="flex gap-4 items-start"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <CheckCircle2 className="w-6 h-6 text-[#D4AF37] shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-serif text-xl text-stone-900 mb-1">{reason.title}</h3>
                                    <p className="text-stone-600">{reason.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Image Grid */}
                <motion.div
                    className="order-1 lg:order-2 grid grid-cols-2 gap-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="space-y-4 pt-12">
                        <div className="relative h-64 md:h-80 w-full rounded-sm overflow-hidden transform transition-transform hover:scale-105 duration-500">
                            <Image
                                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800"
                                alt="Elegant table setting"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative h-48 md:h-64 w-full rounded-sm overflow-hidden transform transition-transform hover:scale-105 duration-500">
                            <Image
                                src="https://images.unsplash.com/photo-1507915977619-6ccfe8003ae6?q=80&w=800"
                                alt="Wedding flowers"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="relative h-48 md:h-64 w-full rounded-sm overflow-hidden transform transition-transform hover:scale-105 duration-500">
                            <Image
                                src="https://images.unsplash.com/photo-1520342868574-5fa3804e551c?q=80&w=800"
                                alt="Bride smiling"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative h-64 md:h-80 w-full rounded-sm overflow-hidden transform transition-transform hover:scale-105 duration-500">
                            <Image
                                src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800"
                                alt="Wedding reception"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
