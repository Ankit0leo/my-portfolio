"use client";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
