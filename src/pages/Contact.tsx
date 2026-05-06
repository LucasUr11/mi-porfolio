import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="text-white pt-20"
    >
      <div className="max-w-6xl mx-auto px-6 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Tienes un proyecto en mente?</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Actualmente estoy disponible para nuevos desafíos y colaboraciones.
            ¡Hablemos sobre cómo puedo ayudarte!
          </p>

          <Link
            to="/contacto"
            className="bg-linear-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer mt-12"
          >
            Enviar Mensaje
          </Link>
        </motion.div>
      </div>

      {/* FOOTER FINAL */}
      <div className="border-t border-zinc-900 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-blue-500">
              Lucas Urquiza
            </span>
            <p className="text-zinc-500 text-xs mt-1">Web Designer & Frontend Developer</p>
          </div>

          <div className="flex gap-6 text-2xl text-zinc-400">
            <a href="https://www.linkedin.com/in/lucas-urquiza-c11/" className="hover:text-purple-400 transition-colors"><FaLinkedin /></a>
            <a href="https://github.com/LucasUr11" className="hover:text-purple-400 transition-colors"><FaGithub /></a>
            <a href="https://www.instagram.com/lucas_urquiza11/" className="hover:text-purple-400 transition-colors"><FaInstagram /></a>
          </div>

          <p className="text-zinc-600 text-[10px] uppercase tracking-widest">
            © 2026 — Hecho con React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}