import React from "react";
import {
  Code2,
  Palette,
  Database,
  Globe,
  Smartphone,
  Zap,
  GitBranch,
  Box,
  Terminal,
} from "lucide-react";

// Skills Section - Professional Redesign
const SkillsSection = ({ darkMode }) => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: "React.js", level: 95, color: "#61dafb" },
        { name: "Next.js", level: 88, color: "#ffffff" },
        { name: "JavaScript", level: 92, color: "#f7df1e" },
        { name: "TypeScript", level: 85, color: "#3178c6" },
        { name: "HTML/CSS", level: 95, color: "#e34c26" },
      ],
    },
    {
      title: "Styling & UI",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: "Tailwind CSS", level: 90, color: "#06b6d4" },
        { name: "shadcn/ui", level: 88, color: "#000000" },
        { name: "Framer Motion", level: 82, color: "#0055ff" },
        { name: "GSAP", level: 78, color: "#88ce02" },
      ],
    },
    {
      title: "3D & Graphics",
      icon: <Box className="w-6 h-6" />,
      skills: [
        { name: "Three.js", level: 80, color: "#000000" },
        { name: "React Three Fiber", level: 78, color: "#000000" },
        { name: "WebGL", level: 72, color: "#990000" },
      ],
    },
    {
      title: "Tools & Others",
      icon: <GitBranch className="w-6 h-6" />,
      skills: [
        { name: "Git & GitHub", level: 88, color: "#f05032" },
        { name: "Vite", level: 90, color: "#646cff" },
        { name: "npm/Yarn", level: 85, color: "#cb3837" },
        { name: "VS Code", level: 95, color: "#007acc" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 transition-colors duration-300 relative overflow-hidden"
      style={{
        backgroundColor: darkMode ? "#0f172a" : "#f8fafc",
      }}
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
            style={{ color: darkMode ? "#f8fafc" : "#1e293b" }}
          >
            Skills & Technologies
          </h2>
          <div
            className="w-16 sm:w-20 h-1 mx-auto rounded-full mb-4"
            style={{ background: "linear-gradient(90deg, #6366f1, #ec4899)" }}
          />
          <p
            className="text-sm sm:text-base"
            style={{ color: darkMode ? "#94a3b8" : "#64748b" }}
          >
            My technical expertise and proficiency levels
          </p>
        </div>

        {/* Skills Grid by Category */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:scale-[1.01]"
              style={{
                background: darkMode
                  ? "linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9))"
                  : "linear-gradient(135deg, #ffffff, #f1f5f9)",
                border: `1px solid ${darkMode ? "rgba(99, 102, 241, 0.2)" : "rgba(99, 102, 241, 0.1)"}`,
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div
                  className="p-2.5 sm:p-3 rounded-xl"
                  style={{
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    color: "#ffffff",
                  }}
                >
                  {category.icon}
                </div>
                <h3
                  className="text-lg sm:text-xl font-bold"
                  style={{ color: darkMode ? "#f8fafc" : "#1e293b" }}
                >
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full"
                          style={{ backgroundColor: skill.color }}
                        />
                        <span
                          className="text-xs sm:text-sm font-medium"
                          style={{ color: darkMode ? "#cbd5e1" : "#475569" }}
                        >
                          {skill.name}
                        </span>
                      </div>
                      <span
                        className="text-xs sm:text-sm font-bold"
                        style={{ color: "#6366f1" }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className="h-1.5 sm:h-2 rounded-full overflow-hidden"
                      style={{
                        background: darkMode
                          ? "rgba(75, 85, 99, 0.4)"
                          : "rgba(203, 213, 225, 0.5)",
                      }}
                    >
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: `${skill.level}%`,
                          background:
                            "linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)",
                          boxShadow: "0 0 10px rgba(99, 102, 241, 0.5)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-8 sm:mt-12">
          <p
            className="text-center text-xs sm:text-sm mb-4"
            style={{ color: darkMode ? "#94a3b8" : "#64748b" }}
          >
            Also proficient in
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {[
              "REST APIs",
              "Responsive Design",
              "SEO",
              "Performance",
              "Accessibility",
              "CI/CD",
              "Figma",
              "Webpack",
            ].map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all hover:scale-105"
                style={{
                  background: darkMode
                    ? "rgba(99, 102, 241, 0.1)"
                    : "rgba(99, 102, 241, 0.08)",
                  color: darkMode ? "#a5b4fc" : "#6366f1",
                  border: `1px solid ${darkMode ? "rgba(99, 102, 241, 0.2)" : "rgba(99, 102, 241, 0.15)"}`,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
