import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import useMousePosition from "./hooks/useMousePosition";
import { Header, Footer } from "./components/layout";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import SkillsSection from "./components/sections/SkillsSection";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";

function Portfolio() {
  const mousePosition = useMousePosition();

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <Header />
      <HeroSection mousePosition={mousePosition} />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
      <Footer />

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

function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}

export default App;
