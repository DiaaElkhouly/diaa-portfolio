import React from "react";
import { Box, Zap } from "lucide-react";
import JavascriptIcon from "../icons/javascript-icon";
import RocketIcon from "../icons/rocket-icon";
import CodeXmlIcon from "../icons/code-xml-icon";
// Skills Section
const SkillsSection = () => {
  const skills = [
    { name: "Next.js", level: 85, icon: <RocketIcon className="w-6 h-6" /> },
    { name: "React.js", level: 95, icon: <RocketIcon className="w-6 h-6" /> },
    {
      name: "JavaScript",
      level: 90,
      icon: <JavascriptIcon className="w-6 h-6" />,
    },
    {
      name: "Tailwind CSS",
      level: 88,
      icon: <CodeXmlIcon className="w-6 h-6" />,
    },
    {
      name: "Git & GitHub",
      level: 85,
      icon: <CodeXmlIcon className="w-6 h-6" />,
    },
    { name: "shadcn/ui", level: 85, icon: <Zap className="w-6 h-6" /> },
    { name: "Three.js", level: 80, icon: <Box className="w-6 h-6" /> },
    { name: "HTML", level: 95, icon: <CodeXmlIcon className="w-6 h-6" /> },
    { name: "CSS", level: 95, icon: <CodeXmlIcon className="w-6 h-6" /> },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg">
            My technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="text-indigo-400">{skill.icon}</div>
                  <span className="text-white font-medium">{skill.name}</span>
                </div>
                <span className="text-indigo-400 font-bold">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
