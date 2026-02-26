import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

// Custom Hook for Mouse Position
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

// Get initial theme from localStorage
const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme !== null) {
      return savedTheme === "dark";
    }
  }
  return true; // Default to dark mode
};

// Main App Component
function App() {
  const [darkMode, setDarkMode] = useState(getInitialTheme);
  const [activeSection, setActiveSection] = useState("home");
  const mousePosition = useMousePosition();

  // Set initial theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const isDark = savedTheme !== null ? savedTheme === "dark" : true;
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light",
    );
  }, []);

  // Save theme preference and update document
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("portfolio-theme", newMode ? "dark" : "light");
    document.documentElement.setAttribute(
      "data-theme",
      newMode ? "dark" : "light",
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "skills", "about", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <Navigation
        darkMode={darkMode}
        setDarkMode={toggleDarkMode}
        activeSection={activeSection}
      />
      <HeroSection mousePosition={mousePosition} darkMode={darkMode} />
      <ProjectsSection darkMode={darkMode} />
      <SkillsSection darkMode={darkMode} />
      <AboutSection darkMode={darkMode} />
      <ContactSection darkMode={darkMode} />
      <Footer darkMode={darkMode} />

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        * {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}

export default App;
