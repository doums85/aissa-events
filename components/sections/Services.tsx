
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Sparkles, Cake, Briefcase, PartyPopper } from "lucide-react";

import { motion } from "framer-motion";

export function Services() {
    const services = [
        {
            icon: Sparkles,
            title: "Mariages",
            description: "Des cérémonies intimes aux grandes célébrations, nous concevons des mariages qui capturent votre histoire d'amour unique."
        },
        {
            icon: Cake,
            title: "Anniversaires",
            description: "Célébrez une autre année de vie avec une fête sur mesure adaptée à votre style et vos préférences."
        },
        {
            icon: Briefcase,
            title: "Événements d'Entreprise",
            description: "Planification d'événements professionnels pour lancements de produits, galas envoûtants et retraites d'entreprise."
        },
        {
            icon: PartyPopper,
            title: "Soirées Privées",
            description: "Rassemblements exclusifs, dîners et célébrations planifiés avec discrétion et élégance."
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                stiffness: 50
            }
        }
    };

    return (
        <Section id="services" className="bg-white">
            <motion.div
                className="text-center max-w-3xl mx-auto mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <span className="text-[#D4AF37] uppercase tracking-widest text-sm font-semibold block mb-3">Notre Expertise</span>
                <h2 className="font-serif text-4xl mb-6 text-stone-900">Services Sur Mesure pour Chaque Occasion</h2>
                <p className="text-stone-600">
                    Nous offrons une gamme complète de services de planification et de design d'événements. Que vous ayez besoin d'une planification complète
                    ou d'une assistance sur des éléments spécifiques, nous sommes là pour vous aider.
                </p>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                {services.map((service, index) => (
                    <motion.div key={index} variants={item}>
                        <Card className="h-full p-8 border-none shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center group bg-[#FAFAF9]">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#D4AF37] transition-colors duration-300 shadow-sm">
                                <service.icon className="w-8 h-8 text-[#D4AF37] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="font-serif text-xl mb-4 text-stone-900">{service.title}</h3>
                            <p className="text-stone-600 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
}
