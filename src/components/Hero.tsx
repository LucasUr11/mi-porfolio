import { motion } from "framer-motion"
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen flex items-center justify-center bg-linear-to-b from-black via-gray-900 to-black text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl w-full"
      >
        <div className="flex flex-col items-center gap-10">

          {/* Títulos */}
          <div className="flex flex-col gap-3">
            <span className="text-5xl md:text-7xl text-transparent font-bold bg-clip-text bg-linear-to-r from-purple-400 to-blue-500 leading-tight">
              Web Designer
            </span>
            <p className="text-5xl md:text-6xl font-bold">Lucas Urquiza</p>
          </div>

          {/* Tarjeta de descripción */}
          <div className="backdrop-blur-md">
            <p className="text-gray-400 text-lg md:text-xl px-8 py-6 max-w-2xl leading-relaxed">
              Diseñador Web apasionado por crear interfaces modernas,
              rápidas, atractivas y efectivas.
            </p>
          </div>

          {/* Contenedor de Botones */}
          <div className="flex flex-wrap justify-center gap-6 mt-2">

            {/* Botón Proyectos */}
            <div className="relative group">

              <button
                className="relative inline-flex items-center justify-center p-px font-semibold text-white bg-neutral-900 shadow-2xl rounded-2xl shadow-purple-900/20 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-purple-500/40 cursor-pointer overflow-hidden"
              >
                {/* Borde degradado Purple to Blue */}
                <span
                  className="absolute inset-0 rounded-2xl bg-linear-to-r from-purple-400 to-blue-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                ></span>

                <a href="#projects"
                  className="relative z-10 flex items-center gap-3 px-7 py-4 bg-neutral-950 rounded-[14px] transition-all duration-500 group-hover:text-purple-300 whitespace-nowrap">
                  <span>Proyectos</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-7 h-7 shrink-0 transition-transform duration-500 group-hover:translate-x-1"
                  >
                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                  </svg>
                </a>
              </button>

            </div>

            {/* Botón Contacto */}
            <div className="relative group">

              <Link
                to="/contacto"
                className="group relative inline-flex items-center justify-center p-px font-semibold text-white bg-neutral-900 shadow-2xl rounded-2xl shadow-purple-900/20 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-purple-500/40 cursor-pointer overflow-hidden"
              >
                {/* Capa de degradado que aparece en hover */}
                <span
                  className="absolute inset-0 rounded-2xl bg-linear-to-r from-purple-400 to-blue-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                ></span>

                {/* Contenido interno */}
                <span className="relative z-10 flex items-center gap-3 px-7 py-4 bg-neutral-950 rounded-[15px] transition-all duration-500 group-hover:bg-neutral-950/80 group-hover:text-purple-300 whitespace-nowrap">
                  <span>Contactame</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-7 h-7 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </span>
              </Link>

            </div>

          </div>

        </div>
      </motion.div>
    </div>
  )
}

export default Hero