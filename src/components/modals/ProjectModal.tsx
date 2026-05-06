import { motion } from "framer-motion";
import ImageCarousel from "../../store/ImageCarousel";
import { useEffect } from "react";

// Define esto fuera de tu componente para poder reutilizarlo
interface Project {
    title: string;
    images: string[];
    process: string;
    longDescription: string;
    tech: string[];
    demo: string;
    github: string;
}

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {

    useEffect(() => {

        // Evitamos el scroll del fondo mientras el modal está abierto.-
        document.body.style.overflow = 'hidden';
        
        // Función para cerrar el modal al presionar "Esc".-
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleEsc);
        };

    }, [onClose]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
        >
            <motion.div
                layoutId={project.title}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                onClick={e => e.stopPropagation()}
                className="bg-zinc-900 border border-white/10 rounded-3xl w-4xl max-h-[90vh] overflow-y-auto p-8 relative"
            >
                {/* Botón Cerrar */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-zinc-500 cursor-pointer hover:text-white transition-colors"
                >
                    ✕
                </button>

                {/* Imagen del Proyecto */}
                <div className="mb-8">
                    <ImageCarousel images={project.images} />
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-left">
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
                        
                        <h3 className="text-purple-400 font-semibold mb-2">El Proceso</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">{project.process}</p>

                        <h3 className="text-blue-400 font-semibold mb-2">Sobre el Proyecto</h3>
                        <p className="text-gray-400 leading-relaxed">{project.longDescription}</p>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="text-white font-bold mb-3">Tecnologías</h4>
                            <div className="flex flex-wrap gap-2">
                                {/* 't' ahora se reconoce automáticamente como string gracias a la interfaz */}
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-zinc-400"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Botones de Acción */}
                        <div className="flex flex-col gap-3 pt-4">
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-purple-600 text-white text-center py-3 rounded-xl font-bold hover:bg-purple-500 transition-colors"
                            >
                                Ver Demo Live
                            </a>
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-white/10 text-white text-center py-3 rounded-xl font-bold hover:bg-white/5 transition-colors"
                            >
                                Código en GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}