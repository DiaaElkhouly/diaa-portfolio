import { Code, Palette, Zap, Heart } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { aboutSkills } from "../../data/skills";

// About Section
const AboutSection = () => {
  const { darkMode } = useTheme();

  const stats = [
    {
      icon: <Code className="w-5 h-5" />,
      number: "40+",
      label: "Projects",
      color: "#6366f1",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      number: "3+",
      label: "Years",
      color: "#a855f7",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      number: "30+",
      label: "Clients",
      color: "#ec4899",
    },
    {
      icon: <Palette className="w-5 h-5" />,
      number: "100%",
      label: "Satisfaction",
      color: "#3b82f6",
    },
  ];

  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 transition-colors duration-300 relative overflow-hidden"
      style={{
        backgroundColor: darkMode ? "#0f172a" : "#f8fafc",
      }}
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
            style={{ color: darkMode ? "#f8fafc" : "#1e293b" }}
          >
            About Me
          </h2>
          <div
            className="w-16 sm:w-20 h-1 mx-auto rounded-full"
            style={{ background: "linear-gradient(90deg, #6366f1, #ec4899)" }}
          />
          <p
            className="mt-4 text-sm sm:text-base"
            style={{ color: darkMode ? "#94a3b8" : "#64748b" }}
          >
            Passionate about creating immersive web experiences
          </p>
        </div>

        {/* Main Content Card */}
        <div
          className="rounded-2xl p-5 sm:p-6 md:p-8 transition-all duration-300"
          style={{
            background: darkMode
              ? "linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9))"
              : "linear-gradient(135deg, #ffffff, #f1f5f9)",
            border: `1px solid ${darkMode ? "rgba(99, 102, 241, 0.2)" : "rgba(99, 102, 241, 0.1)"}`,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
          }}
        >
          {/* Text Content */}
          <div className="flex flex-col md:flex-row gap-6 md:items-start">
            <div className="flex-1">
              <p
                className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6"
                style={{ color: darkMode ? "#cbd5e1" : "#475569" }}
              >
                I'm a{" "}
                <span style={{ color: "#6366f1", fontWeight: "600" }}>
                  Front-End Developer
                </span>{" "}
                specialized in building modern, responsive, and interactive web
                applications using React.js. I enjoy creating clean user
                interfaces and immersive experiences, including 3D websites and
                animated interactions.
              </p>

              <p
                className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6"
                style={{ color: darkMode ? "#cbd5e1" : "#475569" }}
              >
                My journey in web development has been driven by a passion for
                combining creativity with technology. I believe that the future
                of the web is{" "}
                <span style={{ color: "#ec4899", fontWeight: "600" }}>
                  immersive
                </span>
                ,{" "}
                <span style={{ color: "#a855f7", fontWeight: "600" }}>
                  interactive
                </span>
                , and{" "}
                <span style={{ color: "#3b82f6", fontWeight: "600" }}>
                  three-dimensional
                </span>
                .
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3 mt-6">
                {aboutSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all hover:scale-105"
                    style={{
                      background: darkMode
                        ? "rgba(99, 102, 241, 0.15)"
                        : "rgba(99, 102, 241, 0.1)",
                      color: darkMode ? "#a5b4fc" : "#6366f1",
                      border: `1px solid ${darkMode ? "rgba(99, 102, 241, 0.3)" : "rgba(99, 102, 241, 0.2)"}`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-3 sm:p-4 rounded-xl transition-all duration-300 hover:scale-105"
                style={{
                  background: darkMode
                    ? "rgba(255, 255, 255, 0.05)"
                    : "rgba(0, 0, 0, 0.02)",
                  border: `1px solid ${darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)"}`,
                }}
              >
                <div
                  className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full mb-2 sm:mb-3"
                  style={{
                    background: `${stat.color}20`,
                    color: stat.color,
                  }}
                >
                  {stat.icon}
                </div>
                <div
                  className="text-xl sm:text-2xl md:text-3xl font-bold"
                  style={{ color: stat.color }}
                >
                  {stat.number}
                </div>
                <div
                  className="text-xs sm:text-sm"
                  style={{ color: darkMode ? "#94a3b8" : "#64748b" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          <div
            className="p-4 sm:p-5 rounded-xl transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: darkMode ? "rgba(30, 41, 59, 0.6)" : "#ffffff",
              border: `1px solid ${darkMode ? "rgba(99, 102, 241, 0.15)" : "rgba(99, 102, 241, 0.1)"}`,
            }}
          >
            <h4
              className="font-semibold mb-2 text-sm sm:text-base"
              style={{ color: darkMode ? "#f8fafc" : "#1e293b" }}
            >
              🎯 What I Do
            </h4>
            <p
              className="text-xs sm:text-sm"
              style={{ color: darkMode ? "#94a3b8" : "#64748b" }}
            >
              Build responsive websites, create interactive 3D experiences, and
              develop reusable components.
            </p>
          </div>
          <div
            className="p-4 sm:p-5 rounded-xl transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: darkMode ? "rgba(30, 41, 59, 0.6)" : "#ffffff",
              border: `1px solid ${darkMode ? "rgba(99, 102, 241, 0.15)" : "rgba(99, 102, 241, 0.1)"}`,
            }}
          >
            <h4
              className="font-semibold mb-2 text-sm sm:text-base"
              style={{ color: darkMode ? "#f8fafc" : "#1e293b" }}
            >
              💡 My Approach
            </h4>
            <p
              className="text-xs sm:text-sm"
              style={{ color: darkMode ? "#94a3b8" : "#64748b" }}
            >
              Clean code, performance optimization, and user-centered design for
              lasting impressions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
