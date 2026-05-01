import { motion } from "framer-motion"
const techStack = ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js", "Python", "PostgreSQL"];

const TechCarousel = () => {
    return (
    <div className="flex w-full overflow-hidden mask-[linear-to-r(from-transparent_via-black_to-transparent)]">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex flex-nowrap gap-12 items-center whitespace-nowrap"
      >
        {/* Renderizamos la lista dos veces para el efecto infinito */}
        {[...techStack, ...techStack].map((tech, index) => (
          <span key={index} className="text-gray-400 text-2xl font-bold opacity-50 hover:opacity-100 transition-opacity cursor-default">
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default TechCarousel