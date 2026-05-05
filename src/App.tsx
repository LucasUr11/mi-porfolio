import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Form from "./components/Form";
import ProjectsProcess from "./components/ProjectsProcess";
import GlobalBackground from "./components/GlobalBackground";
import ScrollToTop from "./components/ScrollToTop";

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
            <Form />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;