"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// --- Datos de navegación ---
const navLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Servicios", href: "#services" },
    { name: "Proyectos", href: "#portfolio" },
    { name: "Contacto", href: "#contact" },
]

// --- Componente de Logo (Auxiliar) ---
const BrandLogo = () => (
    <div className="flex items-center gap-2 font-bold text-xl tracking-tighter text-slate-900 dark:text-white">
        <div className="relative w-8 h-8 flex items-center justify-center">
            <Image
                src="/DIGITALNEST_LOGO.svg"
                alt="DigitalNezt Logo"
                fill
                className="object-contain"
            />
        </div>
        <span>DIGITALNEZT</span>
    </div>
)

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    // Detectar scroll para cambiar el estilo
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            {/* Contenedor principal centrado */}
            <div className="fixed top-0 left-0 right-0 flex justify-center pt-6 px-4 z-50">
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className={`
            w-full max-w-4xl rounded-full border transition-all duration-300
            ${isScrolled
                            ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-xl border-slate-200 dark:border-slate-700 py-3 px-6"
                            : "bg-white dark:bg-slate-900 shadow-md border-transparent py-4 px-8"
                        }
          `}
                >
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <BrandLogo />

                        {/* Menú Desktop */}
                        <div className="hidden md:flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-full">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 hover:text-indigo-600 hover:shadow-sm rounded-full transition-all"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Acciones Derecha (Búsqueda / Botón) */}
                        <div className="hidden md:flex items-center gap-4">

                            <Link
                                href="#contact"
                                className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/30 cursor-pointer block"
                            >
                                Cotizar
                            </Link>
                        </div>

                        {/* Botón Menú Móvil */}
                        <button
                            className="md:hidden p-2 text-slate-600 dark:text-slate-200"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </motion.nav>
            </div>

            {/* Menú Desplegable Móvil */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -20 }}
                        className="fixed top-24 left-4 right-4 p-4 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 z-40 flex flex-col gap-2"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 font-semibold text-slate-900 dark:text-slate-100 hover:text-indigo-600 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            className="mt-2 w-full bg-indigo-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-indigo-500/20 text-center block"
                            onClick={() => setIsOpen(false)}
                        >
                            Cotizar Ahora
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
