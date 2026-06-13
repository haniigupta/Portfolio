import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="navbar"
    >
      <h2 className="logo">Hani Gupta</h2>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#opensource">Open Source</a>
        <a href="#contact">Contact</a>
      </div>
    </motion.nav>
  );
}

export default Navbar;