import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer>
            <div className="py-10 px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center gap-6">
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
    )
}