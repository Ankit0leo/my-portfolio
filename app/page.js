"use client";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
    </>
  );
}
