import { motion } from "framer-motion";
import {
  FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaGithub
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { Link } from "react-router-dom";  

// 1. Integramos TODOS tus iconos para eliminar los warnings
const techs = [
  { icon: <FaReact />, name: "React" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <FaJsSquare />, name: "JavaScript" },
  { icon: <SiTailwindcss />, name: "Tailwind" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },
];

// 2. Traemos tu metodología de Workflow.tsx
const steps = [
  { num: "01", title: "Analizar", desc: "Entiendo el problema y los objetivos." },
  { num: "02", title: "Planificar", desc: "Defino estructura, componentes y arquitectura." },
  { num: "03", title: "Desarrollar", desc: "Construyo interfaces modernas y responsivas." },
  { num: "04", title: "Optimizar", desc: "Mejoro rendimiento y accesibilidad." },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Título con animación de entrada */}
        <div className="overflow-hidden mb-16">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }} // Ease de salida suave
            className="text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-blue-500"
          >
            Sobre mí

          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "250px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="h-1 bg-linear-to-r from-purple-400 to-blue-500 mt-4"
            style={{ originX: 0 }} // Establece el inicio en la izquierda
          ></motion.div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* BLOQUE PRINCIPAL: Bio + Workflow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 p-10 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm"
          >
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              Soy <span className="text-purple-400 font-semibold">Lucas</span>, Web Designer enfocado en crear experiencias digitales que combinen estética y funcionalidad. Transformo ideas complejas en código limpio y eficiente.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step) => (
                <div key={step.num} className="group">
                  <span className="text-purple-500 text-xs font-mono font-bold block mb-2 opacity-50 group-hover:opacity-100 transition-opacity">
                    // {step.num}
                  </span>
                  <h4 className="font-bold text-sm uppercase tracking-widest mb-2">{step.title}</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <Link
                to="/contacto"
                className="bg-linear-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer mt-12"
              >
                Consultame tus proyectos
              </Link>
            </div>


          </motion.div>

          {/* BLOQUE TECH: Arsenal de tecnologías */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 p-8 rounded-3xl bg-linear-to-br from-blue-950 to-purple-950 border border-purple-800"
          >
            <h3 className="text-xl font-semibold mb-8 text-white">Tecnologías</h3>
            <div className="grid grid-cols-3 gap-y-8 gap-x-4">

              {techs.map((tech, i) => (
                <div key={i} className="flex flex-col items-center group cursor-default">

                  <div className="text-3xl text-cyan-500 group-hover:text-purple-400 group-hover:scale-110 transition-all duration-300">
                    {tech.icon}
                  </div>

                  <span className="text-[10px] text-zinc-500 mt-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {tech.name}
                  </span>

                </div>
              ))}

            </div>

            <div className="mt-12 p-4 rounded-xl bg-purple-500/5 border border-purple-500/10 border-linear-to-r from-purple-400 to-blue-500">
              <p className="text-[11px]  text-center uppercase tracking-tighter">
                Especializado en React & Modern UI
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}