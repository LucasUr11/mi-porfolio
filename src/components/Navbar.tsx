import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    // Detectamos el scroll para cambiar el estado del fondo
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
        { name: "Proyectos", href: "/#projects" }, // Esto requiere un pequeño ajuste si quieres volver desde otra página
        { name: "Sobre mi", href: "/#about" },
        { name: "Contacto", href: "/contacto" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
                ? "py-4 bg-black/40 backdrop-blur-md border-b border-white/5"
                : "py-6 bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">

                {/* Logo con degradado coherente a tu Hero */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-blue-500"
                >
                    LU.
                </motion.div>

                {/* Links de Navegación */}
                <div className="flex gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors relative group"
                        >
                            {link.name}
                            {/* Línea animada al hacer hover */}
                            <span className="absolute -bottom-1 left-0 w-0 h-[0.063em] bg-purple-400 transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </div>

                {/* Botón de CV o Acción Rápida (Opcional) */}
                <a
                    href="./Lucas_Urquiza-CV.pdf" // El archivo debe estar en la carpeta 'public'
                    download="Lucas_Urquiza-CV.pdf" // Nombre con el que se guardará en la PC del usuario
                    className="inline-block no-underline"
                >
                    <button
                        className="relative group cursor-pointer flex items-center justify-between bg-zinc-950 text-xs px-5 py-2 rounded-full text-white tracking-wider shadow-2xl transition-all duration-500 hover:scale-105 active:scale-95 font-medium w-[12em] overflow-hidden p-[1.5px]"
                    >
                        {/* Capa del borde degradado */}
                        <span className="absolute inset-0 bg-linear-to-r from-blue-400 to-purple-500"></span>

                        {/* Fondo interno que se aclara en hover */}
                        <span className="absolute inset-[1.5px] bg-zinc-950 rounded-full z-0 transition-all duration-500 group-hover:bg-zinc-900"></span>

                        {/* Brillo interno sutil al pasar el mouse */}
                        <span className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-linear-to-r from-blue-400 to-purple-500 blur-md z-0"></span>

                        {/* Contenido del botón */}
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
            </div>
        </nav>
    );
}