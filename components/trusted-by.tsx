"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const companies = [
    { name: "Empresa 1", logo: "/empresa-1.png", url: "https://somosoriva.com" },
]

export function TrustedBy() {
    return (
        <section className="py-10 bg-background overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12"
                >
                    Ellos confían en nosotros
                </motion.h2>

                <div className="flex justify-center items-center gap-10 flex-wrap">
                    {companies.map((company, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative w-64 h-32 grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
                        >
                            <Link href={company.url} target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={company.logo}
                                    alt={company.name}
                                    fill
                                    className="object-contain cursor-pointer"
                                />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
