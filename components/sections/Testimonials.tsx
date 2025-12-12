"use client";

import { useState, useEffect } from "react";
import { Section } from "@/components/ui/Section";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
    {
        id: 1,
        quote: "Du début à la fin, tout le processus était un rêve. L'équipe d'Aïssa Events a compris notre vision immédiatement et l'a exécutée mieux que nous n'aurions pu l'imaginer. Vraiment magique !",
        author: "Jennifer et David",
        role: "Mariage en Provence",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
    },
    {
        id: 2,
        quote: "Une attention aux détails incroyable. Chaque invité a été époustouflé par la décoration et l'ambiance. C'était plus qu'une fête, c'était une œuvre d'art.",
        author: "Sarah et Thomas",
        role: "Gala d'Entreprise",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
    },
    {
        id: 3,
        quote: "Merci d'avoir rendu nos noces d'or si spéciales. L'élégance et le raffinement étaient au rendez-vous. Un souvenir gravé à jamais.",
        author: "Marie et Pierre",
        role: "Anniversaire de Mariage",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200"
    }
];

export function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 6000);
        return () => clearInterval(timer);
    }, [current]);

    const nextSlide = () => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
            scale: 0.95
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0,
            scale: 0.95
        })
    };

    return (
        <Section id="testimonials" className="bg-[#FAF9F6] overflow-hidden">
            <div className="text-center max-w-6xl mx-auto px-4">
                <span className="text-[#D4AF37] uppercase tracking-widest text-sm font-semibold block mb-3">Témoignages</span>
                <h2 className="font-serif text-4xl mb-16 text-stone-900">Mots d'Amour</h2>

                <div className="relative min-h-[400px] flex items-center justify-center mt-28">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 md:-left-12 z-20 p-3 rounded-full hover:bg-stone-200/50 text-stone-400 hover:text-[#D4AF37] transition-all hidden md:block"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 md:-right-12 z-20 p-3 rounded-full hover:bg-stone-200/50 text-stone-400 hover:text-[#D4AF37] transition-all hidden md:block"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>

                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={current}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="absolute w-full max-w-4xl"
                        >
                            <div className="relative bg-white p-8 md:p-16 shadow-xl rounded-2xl border border-stone-100 flex flex-col items-center text-center">
                                {/* Decorative Quote Icon */}
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#D4AF37] p-4 rounded-full shadow-lg">
                                    <Quote className="w-6 h-6 text-white fill-current" />
                                </div>

                                <p className="font-serif text-xl md:text-3xl italic text-stone-800 leading-relaxed mb-10 mt-6 relative z-10">
                                    "{testimonials[current].quote}"
                                </p>

                                <div className="flex flex-col items-center gap-4">
                                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#D4AF37] p-1">
                                        <div className="relative w-full h-full rounded-full overflow-hidden">
                                            <Image
                                                src={testimonials[current].image}
                                                alt={testimonials[current].author}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-stone-900 uppercase tracking-wide text-sm mb-1">
                                            {testimonials[current].author}
                                        </h4>
                                        <span className="text-[#D4AF37] font-medium text-sm font-serif italic">
                                            {testimonials[current].role}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Dots indicator */}
                <div className="flex justify-center gap-3 ">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > current ? 1 : -1);
                                setCurrent(index);
                            }}
                            className={cn(
                                "w-3 h-3 rounded-full transition-all duration-300",
                                current === index ? "bg-[#D4AF37] w-8" : "bg-stone-300 hover:bg-[#D4AF37]/50"
                            )}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
}
