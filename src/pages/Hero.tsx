import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import TechCarousel from "../components/ui/TechCarousel";

const Hero = () => {

  return (
    <div
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center pt-36 px-4 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl w-full z-20 flex flex-col items-center"
      >
        <div className="flex flex-col items-center w-full">
          {/* Textos.- */}
          <motion.h1
            className="font-heading font-extrabold text-5xl md:text-7xl tracking-tight py-2
             bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-white to-blue-500"
          >
            Web Designer
          </motion.h1>

          <motion.p
            className="font-accent text-2xl md:text-3xl italic font-light text-gray-300 tracking-wide my-2"
          >
            Lucas Urquiza
          </motion.p>

          <motion.div
            className="relative px-6 py-5 my-4 md:px-8 md:py-6 max-w-xl 
             rounded-2xl border border-white/10 
             backdrop-blur-md overflow-hidden group "
          >

            <p className="relative z-10 text-gray-300 text-base md:text-lg leading-relaxed font-light">
              Diseñador Web enfocado en crear interfaces
              <span className="text-white font-medium"> modernas</span>,
              <span className="text-white font-medium"> rápidas</span> y
              visualmente atractivas que generan resultados.
            </p>
          </motion.div>

          {/* Contenedor de Botones.- */}
          <div className="flex flex-wrap justify-center gap-6 mt-2">

            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center p-px font-semibold text-white bg-neutral-900 shadow-2xl rounded-2xl shadow-purple-900/20 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-purple-500/40 cursor-pointer overflow-hidden"
            >
              <span className="absolute inset-0 rounded-2xl bg-linear-to-r from-purple-400 to-blue-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

              <span className="relative z-10 flex items-center gap-3 px-8 py-4 bg-neutral-950 rounded-[14px] transition-all duration-500 group-hover:bg-neutral-950/80 group-hover:text-purple-300 whitespace-nowrap">
                <span>Proyectos</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1">
                  <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                </svg>
              </span>
            </a>

            <Link
              to="/contacto"
              className="group relative inline-flex items-center justify-center p-px font-semibold text-white bg-neutral-900 shadow-2xl rounded-2xl shadow-purple-900/20 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-purple-500/40 cursor-pointer overflow-hidden"
            >
              <span className="absolute inset-0 rounded-2xl bg-linear-to-r from-purple-400 to-blue-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

              <span className="relative z-10 flex items-center gap-3 px-8 py-4 bg-neutral-950 rounded-[14px] transition-all duration-500 group-hover:bg-neutral-950/80 group-hover:text-purple-300 whitespace-nowrap">
                <span>Contactame</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </span>
            </Link>

          </div>

        </div>
      </motion.div>

      <div className="max-w-3/4 mt-24 py-10">
        <TechCarousel />
      </div>

    </div>
  )
}

export default Hero