import { useState } from "react";
import { Box, ExternalLink, Github } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { projects } from "../../data/projects";

// Project Card Component
const ProjectCard = ({ project, darkMode }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: darkMode ? "#1e293b" : "#ffffff",
        border: `1px solid ${darkMode ? "rgba(99, 102, 241, 0.3)" : "rgba(99, 102, 241, 0.2)"}`,
        boxShadow: isHovered
          ? "0 25px 50px -12px rgba(99, 102, 241, 0.25)"
          : "0 4px 20px rgba(0, 0, 0, 0.08)",
      }}
    >
      {/* Project Image Area */}
      <div
        className="relative h-28 sm:h-32 md:h-40 flex items-center justify-center overflow-hidden"
        style={{
          background: darkMode
            ? "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)"
            : "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #db2777 100%)",
        }}
      >
        <Box className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white/90 group-hover:scale-110 transition-transform duration-500" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        {/* Floating Action Buttons */}
        <div className="absolute bottom-2 left-2 right-2 flex justify-center gap-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.liveHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 text-white text-[11px] sm:text-xs font-medium transition-all hover:scale-105"
          >
            <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span className="hidden xs:inline">Live Demo</span>
            <span className="xs:hidden">Demo</span>
          </a>
          <a
            href={project.codeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 text-white text-[11px] sm:text-xs font-medium transition-all hover:scale-105"
          >
            <Github className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span className="hidden xs:inline">Source</span>
            <span className="xs:hidden">Code</span>
          </a>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-3 sm:p-4">
        <h3
          className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-1.5 truncate"
          style={{ color: darkMode ? "#f8fafc" : "#1e293b" }}
        >
          {project.title}
        </h3>
        <p
          className="text-[11px] sm:text-xs md:text-sm mb-2 sm:mb-3 line-clamp-2"
          style={{ color: darkMode ? "#94a3b8" : "#64748b" }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-md text-[10px] sm:text-xs font-medium"
              style={{
                background: darkMode
                  ? "rgba(99, 102, 241, 0.2)"
                  : "rgba(99, 102, 241, 0.1)",
                color: darkMode ? "#818cf8" : "#6366f1",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Projects Section
const ProjectsSection = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="projects"
      className="py-10 sm:py-14 md:py-20 px-2 sm:px-4 transition-colors duration-300"
      style={{
        backgroundColor: darkMode ? "#0f172a" : "#f8fafc",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3"
            style={{ color: darkMode ? "#f8fafc" : "#1e293b" }}
          >
            Featured Projects
          </h2>
          <p
            className="text-sm sm:text-base"
            style={{ color: darkMode ? "#94a3b8" : "#64748b" }}
          >
            Showcasing my latest work and creative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
