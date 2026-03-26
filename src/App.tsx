import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Form from "./components/Form";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main className="bg-black">
            <Hero />
            <Projects />
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