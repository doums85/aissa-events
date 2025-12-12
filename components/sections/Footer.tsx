
import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-stone-900 text-stone-100 py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="space-y-6">
                    <Link href="/" className="font-pinyon text-4xl font-semibold tracking-wide">
                        Aïssa Events
                    </Link>
                    <p className="text-stone-400 max-w-xs leading-relaxed">
                        Création de moments inoubliables avec élégance et précision. Votre événement de rêve, parfaitement orchestré.
                    </p>
                    <div className="flex gap-4">
                        <Link href="https://www.instagram.com/aissa.events/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors"><Instagram className="h-5 w-5" /></Link>
                        <Link href="#" className="hover:text-[#D4AF37] transition-colors"><Facebook className="h-5 w-5" /></Link>
                        <Link href="#" className="hover:text-[#D4AF37] transition-colors"><Twitter className="h-5 w-5" /></Link>
                    </div>
                </div>

                <div>
                    <h4 className="font-serif text-lg mb-6">Explorer</h4>
                    <ul className="space-y-3 text-stone-400">
                        <li><Link href="#about" className="hover:text-stone-100 transition-colors">À Propos</Link></li>
                        <li><Link href="#services" className="hover:text-stone-100 transition-colors">Services</Link></li>
                        <li><Link href="#portfolio" className="hover:text-stone-100 transition-colors">Portfolio</Link></li>
                        <li><Link href="#testimonials" className="hover:text-stone-100 transition-colors">Témoignages</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-serif text-lg mb-6">Contact</h4>
                    <ul className="space-y-3 text-stone-400">
                        <li>hello@aissaevents.com</li>
                        <li>+33 6 61 94 88 59</li>
                        <li>35 boulevard de Beaubourg, 77184 Émerainville</li>
                        <li>Paris | Dakar</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-serif text-lg mb-6">Newsletter</h4>
                    <p className="text-stone-400 mb-4 text-sm">Abonnez-vous pour recevoir de l'inspiration pour votre prochain événement.</p>
                    <form className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Votre email"
                            className="bg-stone-800 border-none rounded-sm px-4 py-2 text-stone-100 w-full focus:ring-1 focus:ring-[#D4AF37] outline-none"
                        />
                        <button className="bg-[#D4AF37] text-white px-4 py-2 rounded-sm hover:bg-[#B5952F] transition-colors">
                            ok
                        </button>
                    </form>
                </div>
            </div>
            <div className="border-t border-stone-800 mt-16 pt-8 text-center text-stone-500 text-sm flex flex-col gap-2">
                <p>&copy; {new Date().getFullYear()} Aïssa Events. Tous droits réservés.</p>
                <p className="text-xs text-stone-600">AISSA EVENTS - SAS au capital variable - SIRET : 947 893 467 00011 - Siège social : 35 boulevard de Beaubourg, 77184 Émerainville</p>
            </div>
        </footer>
    );
}
