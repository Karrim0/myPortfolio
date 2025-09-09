import { Loader } from "lucide-react";
import AboutMe from "../AboutMe/AboutMe";
import Background from "../Background/Background";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function Home() {
  return (
    <>

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle/>
        {/* background Effects */}
        <Background/>
        {/* Navbar */}
        <Navbar/>
        {/* main content */}
        <main>
          <HeroSection/>
          <AboutMe/>
          <Skills/>
          <Projects/>
          <Contact/>
        </main>
        {/* Footer */}
        <Footer/>
      </div>
    </>
  );
}
