"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, MapPin, Phone, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Basic validation
        if (!formState.name || !formState.email || !formState.message) {
            setStatus("error")
            return
        }

        setStatus("loading")

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formState),
            })

            const data = await response.json()

            if (response.ok) {
                setStatus("success")
                setFormState({ name: "", email: "", message: "" })
                // Reset status after a few seconds
                setTimeout(() => setStatus("idle"), 5000)
            } else {
                console.error("Failed to send email:", data.error)
                setStatus("error")
                // Optionally show specific error message to user
            }
        } catch (error) {
            console.error("Error submitting form:", error)
            setStatus("error")
        }
    }

    return (
        <section id="contact" className="py-24 bg-background relative overflow-hidden">
            {/* Background Elements */}


            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Hablemos de tu <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                próximo proyecto
                            </span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-12 max-w-md">
                            Estamos listos para llevar tus ideas al siguiente nivel. Contáctanos y comencemos a construir algo extraordinario.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-600">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Email</h3>
                                    <p className="text-muted-foreground">digitalnezt@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-600">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Teléfono</h3>
                                    <p className="text-muted-foreground">+51 974 488 606</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-600">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Ubicación</h3>
                                    <p className="text-muted-foreground">Lima, Perú</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-card border border-border/50 p-8 rounded-3xl shadow-lg backdrop-blur-sm"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">
                                    Nombre Completo
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="John Doe"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">
                                    Correo Electrónico
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Cuéntanos sobre tu proyecto..."
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all resize-none"
                                />
                            </div>

                            {status === "error" && (
                                <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-3 rounded-lg text-sm">
                                    <AlertCircle className="w-4 h-4" />
                                    <span>Por favor, rellena todos los campos.</span>
                                </div>
                            )}

                            {status === "success" && (
                                <div className="flex items-center gap-2 text-green-500 bg-green-500/10 p-3 rounded-lg text-sm">
                                    <CheckCircle className="w-4 h-4" />
                                    <span>¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.</span>
                                </div>
                            )}

                            <Button
                                type="submit"
                                disabled={status === "loading" || status === "success"}
                                className="w-full h-12 text-base font-medium group disabled:opacity-70"
                            >
                                {status === "loading" ? "Enviando..." : "Enviar Mensaje"}
                                {status !== "loading" && <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
