"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

const projects = [
    {
        title: "Landing Page Corporativa",
        category: "Landing Page",
        description: "Diseño minimalista y de alto rendimiento para empresa de consultoría.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
        title: "E-commerce de Moda",
        category: "Página Web",
        description: "Tienda online completa con pasarela de pagos y panel de administración.",
        image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2370&auto=format&fit=crop",
        tags: ["React", "Node.js", "Stripe"],
    },
    {
        title: "Dashboard Administrativo",
        category: "Aplicación Web",
        description: "Panel de control intuitivo para la gestión de datos y análisis en tiempo real.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2370&auto=format&fit=crop",
        tags: ["Next.js", "TypeScript", "Recharts"],
    },
    {
        title: "Plataforma Educativa",
        category: "Sistema Web",
        description: "Solución integral para la gestión académica y aprendizaje en línea.",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2367&auto=format&fit=crop",
        tags: ["Vue.js", "Firebase", "Tailwind"],
    },
]

export function Portfolio() {
    const targetRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
    })

    // Adjusted for 4 projects + intro + outro
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-69%"])

    return (
        <section ref={targetRef} id="portfolio" className="relative h-[300vh] bg-background">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-8 px-4 md:px-20">
                    {/* Intro Card */}
                    <div className="flex h-[70vh] w-[80vw] md:w-[40vw] shrink-0 flex-col justify-center p-8">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">Nuestro Portafolio</h2>
                        <p className="text-xl text-muted-foreground">
                            Explora nuestros proyectos más recientes. Desliza para ver más.
                        </p>
                    </div>

                    {/* Project Cards */}
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="group relative h-[70vh] w-[85vw] md:w-[60vw] shrink-0 overflow-hidden rounded-3xl border border-border/50 bg-card"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 flex flex-col justify-end text-white">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-primary/20 backdrop-blur-md rounded-full border border-primary/30 text-primary-foreground">
                                        {project.category}
                                    </span>
                                    <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-gray-200 mb-6 max-w-lg">{project.description}</p>

                                    <div className="flex items-center justify-between">
                                        <div className="flex gap-2">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-xs px-2 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex gap-4">
                                            <Link
                                                href="#"
                                                className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-primary hover:text-primary-foreground transition-colors border border-white/20"
                                                aria-label={`Ver demo en vivo de ${project.title}`}
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </Link>
                                            <Link
                                                href="#"
                                                className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-primary hover:text-primary-foreground transition-colors border border-white/20"
                                                aria-label={`Ver código en GitHub de ${project.title}`}
                                            >
                                                <Github className="w-5 h-5" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Testimonials Intro Card */}
                    <div className="flex h-[70vh] w-[80vw] md:w-[30vw] shrink-0 flex-col justify-center p-8">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            ¿Quieres saber qué <br />
                            <span className="text-primary">opinan de nosotros?</span>
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Nuestros clientes son nuestra mejor carta de presentación.
                        </p>
                        <div className="flex items-center gap-2 text-primary font-medium animate-bounce">
                            <span>Sigue bajando</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M12 5v14" />
                                <path d="m19 12-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
