"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
    {
        name: "Carlos Rodríguez",
        role: "CEO, TechStart",
        content: "DigitalNest transformó completamente nuestra presencia en línea. Su atención al detalle y diseño innovador superaron nuestras expectativas.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2340&auto=format&fit=crop",
    },
    {
        name: "Ana Martínez",
        role: "Directora de Marketing, CreativeFlow",
        content: "El equipo es increíblemente talentoso. Entendieron nuestra visión desde el primer día y la llevaron al siguiente nivel.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2340&auto=format&fit=crop",
    },
    {
        name: "Miguel Ángel",
        role: "Fundador, EcoSolutions",
        content: "Profesionalismo puro. La plataforma que desarrollaron para nosotros ha mejorado nuestra eficiencia operativa en un 200%.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2340&auto=format&fit=crop",
    },
]

export function Testimonials() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card border border-border/50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                "{testimonial.content}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
