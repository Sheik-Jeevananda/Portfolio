import React from "react";
import Background from "./components/layout/Background";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import DSA from "./components/sections/DSA";
import Contact from "./components/sections/Contact";

const App: React.FC = () => (
  <div className="relative bg-[#050a14] text-white font-body overflow-x-hidden">
    <Background />
    <Navbar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <DSA />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
