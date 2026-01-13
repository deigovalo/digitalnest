"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const team = [
    {
        name: "Lizandro",
        role: "CEO & Fundador",
        image: "/dev1.png",
        bio: "Líder visionario experto en arquitectura de software y estrategia digital.",
        imagePosition: "object-center"
    },
    {
        name: "Ronald",
        role: "Desarrollador Frontend",
        image: "/dev2.png",
        bio: "Especialista en crear interfaces de usuario modernas, intuitivas y responsivas.",
        imagePosition: "object-center"
    },
    {
        name: "Diego",
        role: "Desarrollador Backend",
        image: "/dev3.png",
        bio: "Ingeniero de sistemas enfocado en escalabilidad, seguridad y optimización de datos.",
        imagePosition: "object-top"
    },
]

export function Team() {
    return (
        <section className="py-24 bg-background/50 relative overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold mb-4 text-foreground"
                    >
                        Conoce a nuestro equipo
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-muted-foreground text-lg max-w-2xl mx-auto"
                    >
                        Las mentes brillantes detrás de cada solución digital.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-card border border-border/50 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/10 group-hover:border-primary/30 transition-colors">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className={`object-cover ${member.imagePosition}`}
                                />
                            </div>
                            <div className="text-center">
                                <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                                <p className="text-primary font-medium mb-3">{member.role}</p>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {member.bio}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
