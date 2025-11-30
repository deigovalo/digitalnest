"use client"

import { motion } from "framer-motion"
import { Layout, Palette, ShoppingCart, Server } from "lucide-react"

const services = [
    {
        icon: Layout,
        title: "Landing Page",
        description: "Páginas de aterrizaje optimizadas para convertir visitantes en clientes. Diseño atractivo y carga rápida.",
    },
    {
        icon: Palette,
        title: "Diseño Web",
        description: "Interfaces modernas y responsivas que reflejan la identidad de tu marca y mejoran la experiencia de usuario.",
    },
    {
        icon: ShoppingCart,
        title: "Tienda Virtual",
        description: "E-commerce robustos y seguros para vender tus productos online las 24 horas del día.",
    },
    {
        icon: Server,
        title: "Hosting y Dominio",
        description: "Soluciones integrales de alojamiento y gestión de dominios para que no tengas que preocuparte por nada.",
    },
]

export function Services() {
    return (
        <section id="services" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Por Qué Elegirnos</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Ofrecemos soluciones digitales completas adaptadas a las necesidades de tu negocio.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-card p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-colors group"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                <service.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                            <p className="text-muted-foreground text-sm">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
