import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import OpenSource from "./components/OpenSource";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Leetcode from "./components/Leetcode";
import Stats from "./components/Stats";
import Education from "./components/Education";
import Particles from "./components/Particles";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Particles />
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Projects />
      <OpenSource />
      <Leetcode />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;