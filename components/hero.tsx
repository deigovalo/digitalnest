"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code } from "lucide-react"
import Link from "next/link"


export function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 z-0">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-20">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full"
                >
                    <source src="/hero-bganimado2.mp4" type="video/mp4" />
                </video>

            </div>

            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>

            <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center gap-8">


                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl text-gray-900"
                >
                    Transformamos tus Ideas en <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                        Experiencias Digitales
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-700 max-w-2xl"
                >
                    Desarrollamos soluciones web de alto impacto con las tecnologías más modernas para potenciar tu negocio.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Link
                        href="#contact"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
                    >
                        Empezar Proyecto
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                        href="#portfolio"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-all hover:scale-105"
                    >
                        Ver Portafolio
                        <Code className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
