import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Detectamos el scroll para cambiar el estado del fondo.-
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Inicio", href: "/" },
        { name: "Proyectos", href: "/#projects" },
        { name: "Sobre mi", href: "/#about" },
        { name: "Contacto", href: "/#contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
                ? "py-4 bg-black/60 backdrop-blur-md border-b border-white/5"
                : "py-6 bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-blue-500"
                >
                    LU.
                </motion.div>

                {/* Desktop Menu - Visible solo en md en adelante */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[0.063em] bg-purple-400 transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </div>

                {/* Botón CV y Hamburguesa */}
                <div className="flex items-center gap-4">
                    <a
                        href="./Lucas_Urquiza-CV.pdf"
                        download="Lucas_Urquiza-CV.pdf"
                        className="inline-block no-underline"
                    >
                        <button
                            className="relative group cursor-pointer flex items-center justify-between bg-zinc-950 text-xs px-5 py-2 rounded-full text-white tracking-wider shadow-2xl transition-all duration-500 hover:scale-105 active:scale-95 font-medium w-[12em] overflow-hidden p-[1.5px]"
                        >
                            {/* Fondos animados.- */}
                            <span className="absolute inset-0 bg-linear-to-r from-blue-400 to-purple-500"></span>
                            <span className="absolute inset-[1.5px] bg-zinc-950 rounded-full z-0 transition-all duration-500 group-hover:bg-zinc-900"></span>
                            <span className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-linear-to-r from-blue-400 to-purple-500 blur-md z-0"></span>

                            {/* Contenido del botón.- */}
                            <span className="relative z-10 flex justify-between items-center w-full">
                                Descargar CV
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2.5"
                                    stroke="currentColor"
                                    className="w-4 h-4 animate-bounce text-blue-400 group-hover:text-purple-400 transition-colors duration-500"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                                    ></path>
                                </svg>
                            </span>
                        </button>
                    </a>

                    {/* Botón Hamburguesa - Visible solo en móvil */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden flex flex-col gap-1.5 z-50 p-2 cursor-pointer"
                    >
                        <div className={`w-6 h-0.5 bg-white transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></div>
                        <div className={`w-6 h-0.5 bg-white transition-all ${isOpen ? "opacity-0" : ""}`}></div>
                        <div className={`w-6 h-0.5 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
                    </button>
                </div>
            </div>

            {/* Menú Desplegable Móvil */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-zinc-900 border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg text-gray-300 hover:text-purple-400 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}