import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import ProjectModal from "./ProjectModal"
import FadeIn from "./FadeIn"

import nexus1 from "../assets/projects/NEXUS/nexus-1.png"
import nexus2 from "../assets/projects/NEXUS/nexus-2.png"
import nexus3 from "../assets/projects/NEXUS/nexus-3.png"

import abogado1 from "../assets/projects/ABOGADO/abogado-1.png"
import abogado2 from "../assets/projects/ABOGADO/abogado-2.png"
import abogado3 from "../assets/projects/ABOGADO/abogado-3.png"
import abogado4 from "../assets/projects/ABOGADO/abogado-4.png"
import abogado5 from "../assets/projects/ABOGADO/abogado-5.png"

import C3_1 from "../assets/projects/C3/C3-1.png"
import C3_2 from "../assets/projects/C3/C3-2.png"
import C3_3 from "../assets/projects/C3/C3-3.png"
import C3_4 from "../assets/projects/C3/C3-4.png"

import opalo1 from "../assets/projects/OPALO/opalo-1.png"
import opalo2 from "../assets/projects/OPALO/opalo-2.png"
import opalo3 from "../assets/projects/OPALO/opalo-3.png"
import opalo4 from "../assets/projects/OPALO/opalo-4.png"

import psicologo1 from "../assets/projects/PSICOLOGO/psicologo-1.png"
import psicologo2 from "../assets/projects/PSICOLOGO/psicologo-2.png"
import psicologo3 from "../assets/projects/PSICOLOGO/psicologo-3.png"
import psicologo4 from "../assets/projects/PSICOLOGO/psicologo-4.png"

import stockmaster1 from "../assets/projects/STOCKMASTER/StockMater-1.png"
import stockmaster2 from "../assets/projects/STOCKMASTER/StockMater-2.png"
import stockmaster3 from "../assets/projects/STOCKMASTER/StockMater-3.png"

type Project = {
    title: string
    description: string
    tech: string[]
    longDescription: string;
    process: string;
    github: string;
    demo: string;
    images: string[];
}

const projects: Project[] = [
    {
        title: "Nexus PC - E-commerce UI",
        description: "Tienda online moderna acerca de componentes de PC - En Proceso.",
        tech: ["React", "Tailwind", "TypeScript"],
        longDescription: "Una interfaz de usuario moderna para una tienda online, construida con React y Tailwind CSS.",
        process: "El proyecto se está desarrollando utilizando React para la estructura y Tailwind CSS para el diseño, con TypeScript para garantizar un código robusto y mantenible. El enfoque se centra en crear una experiencia de usuario fluida y atractiva, con animaciones suaves y un diseño responsivo que se adapta a todos los dispositivos.",
        github: "https://github.com/LucasUr11/Nexus-PC",
        demo: "#",
        images: [nexus1, nexus2, nexus3]
    },
    {
        title: "StockMaster",
        description: "Aplicación de gestión de inventarios para pequeñas empresas.",
        tech: ["React", "TypeScript", "Tailwind CSS"],
        longDescription: "StockMaster es una aplicación de gestión de inventarios diseñada para pequeñas empresas. Permite a los usuarios rastrear sus productos, gestionar el stock y generar informes detallados sobre las ventas y el rendimiento del inventario. La aplicación se construyó utilizando React para la interfaz de usuario, TypeScript para garantizar un código seguro y mantenible, y Tailwind CSS para un diseño moderno y responsivo.",
        process: "El desarrollo de StockMaster se centró en crear una experiencia de usuario intuitiva y eficiente. Se implementaron características clave como la adición y edición de productos, la gestión de categorías, y la generación de informes personalizados. El proyecto se estructuró utilizando componentes reutilizables y un enfoque modular para facilitar futuras expansiones y mejoras.",
        github: "https://github.com/LucasUr11/Stock-Master",
        demo: "#",
        images: [stockmaster1, stockmaster2, stockmaster3]
    },
    {
        title: "Ópalo Creaciones",
        description: "Solución integral de comercio electrónico diseñada para la gestión y venta de productos artesanales.",
        tech: ["JavaScript", "React", "Tailwind CSS"],
        longDescription: "El proyecto abarca desde una interfaz de usuario intuitiva y optimizada para la conversión, hasta un panel de administración robusto que permite el control de inventario, procesamiento de pedidos y actualización de catálogo en tiempo real.",
        process: "El desarrollo de Ópalo Creaciones se centró en crear una experiencia de compra fluida y atractiva para los clientes, al mismo tiempo que proporcionaba a los administradores una herramienta eficiente para gestionar su tienda online. Se implementaron características clave como la navegación intuitiva, el proceso de pago seguro y un sistema de gestión de productos fácil de usar. El proyecto se estructuró utilizando componentes reutilizables y un enfoque modular para facilitar futuras expansiones y mejoras.",
        github: "https://github.com/LucasUr11/opalo_creaciones",
        demo: "https://opalo-creaciones.vercel.app/",
        images: [opalo1, opalo2, opalo3, opalo4]
    },
    {
        title: "Landing Page para un Psicologo.",
        description: "Landing page creada para un psicólogo, destacando sus servicios y experiencia.",
        tech: ["React", "Tailwind", "TypeScript"],
        longDescription: "Una landing page profesional para un psicólogo, diseñada para resaltar sus servicios y experiencia. La página presenta una estructura clara y atractiva, con secciones dedicadas a la biografía del psicólogo, los servicios ofrecidos, y articulos relacionados con la psicología. El diseño se centra en transmitir confianza y profesionalismo, utilizando una paleta de colores calmada y tipografía legible.",
        process: "El desarrollo de esta landing page se llevó a cabo utilizando React para la estructura y Tailwind CSS para el diseño, con TypeScript para garantizar un código robusto y mantenible. El enfoque se centró en crear una experiencia de usuario fluida y atractiva, con animaciones suaves y un diseño responsivo que se adapta a todos los dispositivos.",
        github: "https://github.com/LucasUr11/proyecto-psicologo",
        demo: "#",
        images: [psicologo1, psicologo2, psicologo3, psicologo4]
    },
    {
        title: "Landing Page para un Abogado.",
        description: "Landing page creada para un abogado, destacando sus servicios legales y experiencia.",
        tech: ["React", "Tailwind", "TypeScript"],
        longDescription: "Una landing page profesional para un abogado, diseñada para resaltar sus servicios y experiencia. La página presenta una estructura clara y atractiva, con secciones dedicadas a la biografía del abogado, los servicios ofrecidos, y articulos relacionados con el derecho. El diseño se centra en transmitir confianza y profesionalismo, utilizando una paleta de colores calmada y tipografía legible.",
        process: "El desarrollo de esta landing page se llevó a cabo utilizando React para la estructura y Tailwind CSS para el diseño, con TypeScript para garantizar un código robusto y mantenible. El enfoque se centró en crear una experiencia de usuario fluida y atractiva, con animaciones suaves y un diseño responsivo que se adapta a todos los dispositivos.",
        github: "https://github.com/LucasUr11/Proyecto-Abogado",
        demo: "#",
        images: [abogado1, abogado2, abogado3, abogado4, abogado5]
    },
    {
        title: "C3-Content-Command-Center",
        description: "Landing page creada para llevar un control de los contenidos de un canal.",
        tech: ["React", "Tailwind", "TypeScript"],
        longDescription: "Es una plataforma integral de gestión de contenidos diseñada para optimizar el flujo de trabajo de creadores. Permite centralizar todo el ciclo de vida de la producción audiovisual: desde la incubación de ideas y redacción de guiones hasta la planificación en calendario y el análisis de métricas.",
        process: "El desarrollo de C3 se llevó a cabo utilizando React para la estructura y Tailwind CSS para el diseño, con TypeScript para garantizar un código robusto y mantenible. El enfoque se centró en crear una experiencia de usuario fluida y atractiva, con animaciones suaves y un diseño responsivo que se adapta a todos los dispositivos.",
        github: "https://github.com/LucasUr11/C3-Content-Command-Center",
        demo: "#",
        images: [C3_1, C3_2, C3_3, C3_4]
    }

]

const Projects = () => {

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);


    return (

        <section
            id="projects"
            className="relative py-24 bg-black"
        >

            {/* Glow suave de fondo */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(168,85,247,0.12),transparent_60%)] pointer-events-none"></div>

            <FadeIn>
                <div className="flex flex-col items-center text-center mb-16 relative z-10">
                    <h2 className="text-4xl h-14 md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-blue-500">
                        Proyectos
                    </h2>

                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                        className="h-1 bg-linear-to-r from-purple-400 to-blue-500 rounded-full"
                        style={{ originX: 0.5 }}
                    ></motion.div>
                </div>
            </FadeIn>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">

                {projects.map((project) => (
                    <FadeIn key={project.title}>
                        <motion.div
                            onClick={() => setSelectedProject(project)}
                            whileHover="hover"
                            initial="rest"
                            animate="rest"
                            className="relative overflow-hidden rounded-3xl group aspect-video cursor-pointer shadow-2xl border border-white/5"
                        >

                            {/* Imagen */}
                            <motion.img
                                src={project.images[0]}
                                alt={project.title}
                                loading="lazy"
                                variants={{
                                    rest: { scale: 1, filter: "blur(0px)" },
                                    hover: { scale: 1.05, filter: "blur(2px)" }
                                }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay */}
                            <motion.div
                                variants={{
                                    rest: { opacity: 0, y: 20 },
                                    hover: { opacity: 1, y: 0 }
                                }}
                                transition={{ duration: 0.4, ease: "backOut" }}
                                className="absolute inset-0 bg-black/60 backdrop-blur-md flex flex-col justify-center items-center text-center p-8 text-white"
                            >

                                <h3 className="text-2xl font-bold mb-3 text-white">
                                    {project.title}
                                </h3>

                                <p className="text-gray-200 text-sm mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech tags */}
                                <div className="flex flex-wrap justify-center gap-2 mb-8">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-[10px] uppercase tracking-widest border border-white/20 px-3 py-1 rounded-md bg-white/10"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-6">

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-semibold hover:text-purple-400 transition-colors border-b border-purple-500/0 hover:border-purple-500"
                                    >
                                        GitHub
                                    </a>

                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-semibold hover:text-blue-400 transition-colors border-b border-blue-500/0 hover:border-blue-500"
                                    >
                                        Live Demo
                                    </a>

                                </div>

                            </motion.div>

                        </motion.div>
                    </FadeIn>
                ))}

            </div>

            {/* Renderizado del Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>

        </section>
    )
}

export default Projects