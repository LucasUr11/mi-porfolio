import { motion } from "framer-motion"


const techStack = ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js", "Python", "PostgreSQL"];

const TechCarousel = () => {
  return (
    <div className="flex w-full overflow-hidden mask-[linear-to-r(from-transparent_via-black_to-transparent)]">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 0
        }}
        className="flex flex-nowrap gap-12 items-center whitespace-nowrap px-6"
      >
        {/* Renderizamos DOS bloques idénticos dentro de otro contenedor */}
        <div className="flex flex-nowrap gap-12 items-center">
          {techStack.map((tech, index) => (
            <span key={`first-${index}`} className="text-gray-400 text-2xl font-bold opacity-50 hover:opacity-100 transition-opacity cursor-default">
              {tech}
            </span>
          ))}
        </div>

        {/* Segundo bloque igual que el primero.- */}
        <div className="flex flex-nowrap gap-12 items-center">
          {techStack.map((tech, index) => (
            <span key={`second-${index}`} className="text-gray-400 text-2xl font-bold opacity-50 hover:opacity-100 transition-opacity cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
export default TechCarousel