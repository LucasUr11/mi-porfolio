import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section
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
    </section>
  );
}