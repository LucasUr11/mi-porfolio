import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setStatus("sending");

        emailjs.sendForm(
            "service_c91vc58",
            "template_xlwkqbh",
            formRef.current,
            "NvHYpuhxVW_cBob1j"
        )
        .then(() => {
            setStatus("success");
            formRef.current?.reset();
            setTimeout(() => setStatus("idle"), 5000);
        })
        .catch(() => {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        });
    };

    return (
        <section className="relative group max-w-md mx-auto z-10 bg-zinc-950/50 backdrop-blur-xl p-[1.5px] rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-linear-to-r from-blue-400 via-purple-500 to-blue-400 bg-size[200%_auto] animate-gradient-x"></div>

            <div className="relative bg-zinc-950 p-8 rounded-[22px] z-10 text-left">
                <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-linear-to-r from-white to-gray-500">
                    Hablemos de tu proyecto
                </h2>

                <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
                    <div>
                        <label className="block text-xs font-semibold text-gray-400 uppercase mb-2" htmlFor="from_name">Nombre</label>
                        <input id="from_name" name="from_name" required className="w-full bg-white/5 border border-white/10 p-3 rounded-xl text-white outline-none focus:border-purple-500/50 transition-all" type="text" />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-400 uppercase mb-2" htmlFor="reply_to">Email</label>
                        <input id="reply_to" name="reply_to" required className="w-full bg-white/5 border border-white/10 p-3 rounded-xl text-white outline-none focus:border-blue-500/50 transition-all" type="email" />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-400 uppercase mb-2" htmlFor="message">Mensaje</label>
                        <textarea id="message" name="message" required className="w-full bg-white/5 border border-white/10 p-3 rounded-xl text-white outline-none focus:border-purple-500/50 transition-all resize-none" rows={4}></textarea>
                    </div>

                    <motion.button
                        disabled={status === "sending"}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className={`w-full py-4 font-bold rounded-xl transition-all duration-300 ${
                            status === "success" ? "bg-green-500 text-white" : "bg-linear-to-r from-blue-400 to-purple-500 text-white"
                        }`}
                    >
                        {status === "idle" && "Enviar Mensaje"}
                        {status === "sending" && "Enviando..."}
                        {status === "success" && "¡Mensaje Enviado!"}
                        {status === "error" && "Error, intenta de nuevo"}
                    </motion.button>
                </form>

                {/* Feedback sutil debajo del botón */}
                <AnimatePresence>
                    {status === "success" && (
                        <motion.p 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="text-green-400 text-xs text-center mt-4"
                        >
                            Te responderé lo antes posible.
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}