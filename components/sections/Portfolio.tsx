
"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Project {
    id: number;
    src: string;
    title: string;
    category: string;
    description: string;
    details: string;
    date: string;
    location: string;
}

export function Portfolio() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const projects: Project[] = [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800",
            title: "Mariage de Sarah & Thomas",
            category: "Mariage",
            description: "Une cérémonie romantique au coucher du soleil surplombant la vallée.",
            details: "Une célébration intime de l'amour tenue au Château de Varennes. Nous avons mis l'accent sur une palette de couleurs douces et romantiques avec une abondance de roses et de bougies pour créer une atmosphère magique. La soirée s'est terminée par un feu d'artifice qui a émerveillé les invités.",
            date: "Juin 2024",
            location: "Provence, France"
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800",
            title: "Gala des Noces d'Or",
            category: "Soirée Privée",
            description: "Célébration de 50 ans d'amour avec élégance et accents dorés.",
            details: "Un dîner de gala sophistiqué marquant une étape dorée. Le décor comprenait de la verrerie personnalisée bordée d'or, des nappes en velours et un quartet de jazz jouant des classiques de l'époque du couple. Chaque détail a été soigné pour honorer leur parcours ensemble.",
            date: "Septembre 2023",
            location: "New York, USA"
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=800",
            title: "Afterparty Sommet Tech",
            category: "Entreprise",
            description: "Une expérience moderne éclairée aux néons pour les leaders de l'industrie.",
            details: "Nous avons transformé un entrepôt industriel brut en un salon futuriste. Des stations de nourriture interactives, des installations LED et un bar à mixologie ont fourni un environnement de réseautage à la fois professionnel et énergique.",
            date: "Novembre 2023",
            location: "Berlin, Allemagne"
        },
        {
            id: 4,
            src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800",
            title: "Réception au Domaine",
            category: "Mariage",
            description: "Dîner en plein air sous les étoiles.",
            details: "Une réception digne d'un conte de fées dans les jardins soignés d'un domaine historique. De longues tables de banquet étaient ornées de fleurs sauvages et de guirlandes lumineuses scintillantes au-dessus, créant une expérience de dîner intime et familial.",
            date: "Mai 2024",
            location: "Toscane, Italie"
        },
        {
            id: 5,
            src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800",
            title: "Vœux Bohèmes sur la Plage",
            category: "Mariage",
            description: "Luxe décontracté sur les rivages sablonneux.",
            details: "Un mariage bohème chic avec une ambiance de luxe pieds nus. Des toiles de fond en macramé, des accents de bois flotté et une réception feu de joie ont rendu ce mariage à destination inoubliable pour le couple et leurs amis les plus proches.",
            date: "Août 2023",
            location: "Tulum, Mexique"
        },
        {
            id: 6,
            src: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=800",
            title: "Bal de Charité Émeraude",
            category: "Entreprise",
            description: "Une soirée de générosité dans une grande salle de bal.",
            details: "Le bal de charité annuel avait pour thème 'Élégance Émeraude'. Nous avons utilisé un éclairage vert dramatique, des lustres en cristal et des installations de verdure luxuriante pour créer un cadre opulent encourageant la générosité et la célébration.",
            date: "Décembre 2023",
            location: "Londres, RU"
        },
    ];

    return (
        <Section id="portfolio" className="bg-[#121212] text-white">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[#D4AF37] uppercase tracking-widest text-sm font-semibold block mb-3">Notre Travail</span>
                    <h2 className="font-serif text-4xl text-white">Projets à la Une</h2>
                </motion.div>
                <motion.p
                    className="max-w-md text-stone-400 mt-4 md:mt-0"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Une sélection de nos événements les plus récents et mémorables. Chacun conçu avec passion et précision.
                </motion.p>
            </div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                    hidden: { opacity: 0 },
                    show: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.1
                        }
                    }
                }}
            >
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        className="relative group overflow-hidden rounded-sm aspect-4/3 cursor-pointer"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            show: { opacity: 1, y: 0 }
                        }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setSelectedProject(project)}
                        layoutId={`project-${project.id}`}
                    >
                        <Image
                            src={project.src}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                            <span className="text-[#D4AF37] text-sm font-medium uppercase tracking-wider mb-2">{project.category}</span>
                            <h3 className="font-serif text-2xl mb-4">{project.title}</h3>
                            <span className="font-serif text-sm border border-white/30 px-6 py-2 hover:bg-white hover:text-black transition-colors">Voir Détails</span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            layoutId={`project-${selectedProject.id}`}
                            className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row max-h-[90vh]"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="w-full md:w-1/2 relative h-64 md:h-auto">
                                <Image
                                    src={selectedProject.src}
                                    alt={selectedProject.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="w-full md:w-1/2 p-8 md:p-12 bg-white flex flex-col overflow-y-auto">
                                <span className="text-[#D4AF37] text-sm font-bold uppercase tracking-widest mb-2">
                                    {selectedProject.category}
                                </span>
                                <h3 className="font-serif text-3xl md:text-4xl text-stone-900 mb-2">
                                    {selectedProject.title}
                                </h3>
                                <div className="flex items-center gap-4 text-stone-500 text-sm mb-6 pb-6 border-b border-stone-100">
                                    <span>{selectedProject.date}</span>
                                    <span className="w-1 h-1 bg-stone-300 rounded-full" />
                                    <span>{selectedProject.location}</span>
                                </div>

                                <p className="text-stone-600 leading-relaxed mb-6">
                                    {selectedProject.details}
                                </p>

                                <div className="mt-auto pt-6">
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="text-stone-900 font-medium hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-wide"
                                    >
                                        Fermer Projet
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </Section>
    );
}
