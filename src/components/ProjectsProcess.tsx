import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import ProjectModal from "./ProjectModal"
import FadeIn from "./FadeIn"
import { projectsProcess, type Project } from "../constants/ProjectData";

const ProjectsProcess = () => {

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section className="relative py-12 bg-black">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(168,85,247,0.12),transparent_60%)] pointer-events-none"></div>

            <FadeIn>
                <div className="flex flex-col items-center text-center mb-16 relative z-10">
                    <h4 className="text-2xl h-14 md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-blue-500">
                        Proyectos en Proceso
                    </h4>

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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">

                {projectsProcess.map((project) => (
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
                                className="w-full h-full object-contain p-4"
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

export default ProjectsProcess