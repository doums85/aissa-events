
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

import { motion } from "framer-motion";

export function Contact() {
    return (
        <Section id="contact" className="bg-stone-900 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[#D4AF37] uppercase tracking-widest text-sm font-semibold block mb-3">Contactez-nous</span>
                    <h2 className="font-serif text-4xl md:text-5xl mb-6">Créons Quelque Chose <br />de Magnifique</h2>
                    <p className="text-stone-400 text-lg mb-8 leading-relaxed">
                        Prêt à commencer la planification de votre événement de rêve ? Remplissez le formulaire ci-dessous ou contactez-nous directement.
                        Nous serions ravis d'entendre votre histoire.
                    </p>
                    <div className="space-y-4 text-stone-300">
                        <p>hello@aissaevents.com</p>
                        <p>+33 6 61 94 88 59</p>
                        <p>35 boulevard de Beaubourg, 77184 Émerainville</p>
                        <p>Paris | Dakar</p>
                    </div>
                </motion.div>

                <motion.div
                    className="bg-stone-800 p-8 md:p-12 rounded-sm border border-stone-700"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-stone-300">Nom</label>
                                <input type="text" className="w-full bg-stone-900 border-stone-700 text-white p-3 rounded-sm focus:ring-1 focus:ring-[#D4AF37] outline-none border" placeholder="Votre Nom" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-stone-300">Email</label>
                                <input type="email" className="w-full bg-stone-900 border-stone-700 text-white p-3 rounded-sm focus:ring-1 focus:ring-[#D4AF37] outline-none border" placeholder="Votre Email" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-stone-300">Type d'Événement</label>
                            <select className="w-full bg-stone-900 border-stone-700 text-white p-3 rounded-sm focus:ring-1 focus:ring-[#D4AF37] outline-none border">
                                <option>Mariage</option>
                                <option>Anniversaire</option>
                                <option>Entreprise</option>
                                <option>Autre</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-stone-300">Message</label>
                            <textarea rows={4} className="w-full bg-stone-900 border-stone-700 text-white p-3 rounded-sm focus:ring-1 focus:ring-[#D4AF37] outline-none border" placeholder="Parlez-nous de votre événement..."></textarea>
                        </div>
                        <Button variant="gold" className="w-full">Envoyer le Message</Button>
                    </form>
                </motion.div>
            </div>
        </Section>
    );
}
