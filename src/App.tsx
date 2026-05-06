import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ContactForm from "./components/sections/Form";
import ProjectsProcess from "./pages/ProjectsProcess";
import GlobalBackground from "./components/shared/GlobalBackground";
import ScrollToTop from "./components/layout/ScrollToTop";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main className="relative min-h-screen w-full">
            <GlobalBackground />

            <Hero />
            <Projects />
            <ProjectsProcess />
            <About />
            <Contact />
          </main>
        } />

        {/* Ruta de Contacto */}
        <Route path="/contacto" element={
          <div className="min-h-screen bg-black flex items-center justify-center p-6">
            <ContactForm />
          </div>
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;