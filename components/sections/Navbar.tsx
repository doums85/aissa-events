
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
    onBookCall?: () => void;
}

export function Navbar({ onBookCall }: NavbarProps) {
    const [activeSection, setActiveSection] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Active section detection
            const sections = ["about", "services", "portfolio", "testimonials", "contact"];
            const scrollPosition = window.scrollY + 200; // Offset for better detection

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(`#${sectionId}`);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Trigger once on mount
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleBookCall = () => {
        setIsMobileMenuOpen(false);
        onBookCall?.();
    };

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/90 backdrop-blur-md py-4 shadow-sm border-b border-stone-200/50"
                    : "bg-transparent py-6"
            )}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
                <Link href="/" className="font-pinyon text-4xl font-bold tracking-wide text-stone-900 relative z-50">
                    Aïssa Events
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {[
                        { label: "À propos", href: "#about" },
                        { label: "Services", href: "#services" },
                        { label: "Portfolio", href: "#portfolio" },
                        { label: "Témoignages", href: "#testimonials" },
                        { label: "Contact", href: "#contact" },
                    ].map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={cn(
                                "text-xs font-medium uppercase tracking-widest transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-px after:bg-[#D4AF37] after:scale-x-0 after:transition-transform after:duration-300 hover:text-[#D4AF37]",
                                activeSection === item.href ? "text-[#D4AF37] after:scale-x-100" : "text-stone-600 hover:after:scale-x-50"
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Button variant="gold" size="sm" className="rounded-full px-6" onClick={onBookCall}>
                        Réserver un appel
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden relative z-50 p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className="h-6 w-6 text-stone-900" />
                    ) : (
                        <Menu className="h-6 w-6 text-stone-900" />
                    )}
                </button>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute inset-0 h-screen bg-[#FDFBF7] flex flex-col items-center justify-center gap-8 md:hidden"
                        >
                            {[
                                { label: "À propos", href: "#about" },
                                { label: "Services", href: "#services" },
                                { label: "Portfolio", href: "#portfolio" },
                                { label: "Témoignages", href: "#testimonials" },
                                { label: "Contact", href: "#contact" },
                            ].map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={cn(
                                        "text-2xl font-serif transition-colors",
                                        activeSection === item.href ? "text-[#D4AF37]" : "text-stone-900"
                                    )}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Button variant="gold" size="lg" className="rounded-full mt-4" onClick={handleBookCall}>
                                Réserver un appel
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
