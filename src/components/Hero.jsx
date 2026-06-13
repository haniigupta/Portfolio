import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profileImg from "../assets/profile.jpeg";
import Tilt from "react-parallax-tilt";
import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-left">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Hello, I'm
                </motion.p>

                <motion.h1
                    initial={{ y: 60 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Hani Gupta
                </motion.h1>

                <TypeAnimation
                    sequence={[
                        "MERN Stack Developer",
                        2000,
                        "Open Source Contributor",
                        2000,
                        "AI Enthusiast",
                        2000,
                        "DSA Practitioner",
                        2000,
                    ]}
                    wrapper="h2"
                    repeat={Infinity}
                    className="typing"
                />

                <p className="hero-description">
                    Passionate MERN Stack Developer focused on building scalable web applications, integrating Generative AI solutions, contributing to open-source ecosystems, and strengthening problem-solving through Data Structures and Algorithms.
                </p>

                <div className="hero-buttons">
                    <a href="#projects">Projects</a>

                    <a href="#contact">Contact</a>

                    <a
  href="/resume.pdf"
  target="_blank"
  rel="noreferrer"
>
  Resume
</a>
                </div>
                <div className="social-icons">
                    <a href="https://github.com/haniigupta">
                        <FaGithub />
                    </a>

                    <a href="https://www.linkedin.com/in/hani-gupta-3916b931b/">
                        <FaLinkedin />
                    </a>

                    <a href="https://leetcode.com/u/haniguptaa_/">
                        <SiLeetcode />
                    </a>
                </div>

            </div>

            <div className="hero-right">
                <Tilt
                    tiltMaxAngleX={15}
                    tiltMaxAngleY={15}
                    glareEnable={true}
                    glareMaxOpacity={0.3}
                >
                    <motion.div
                        className="profile-card"
                        animate={{
                            y: [0, -15, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                        }}
                    >
                        <img
                            src={profileImg}
                            alt="Hani Gupta"
                            className="profile-image"
                        />
                    </motion.div>

                </Tilt>
            </div>
        </section>
    );
}

export default Hero;