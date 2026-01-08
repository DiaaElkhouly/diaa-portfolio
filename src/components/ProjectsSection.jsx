import React, { useState } from "react";
import { Box } from "lucide-react";
import GithubIcon from "../icons/github-icon";
import ExternalLinkIcon from "../icons/external-link-icon";

// Project Card Component
const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-indigo-500 transition-all duration-300 transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center overflow-hidden">
        <div
          className={`transition-transform duration-500 ${
            isHovered ? "scale-110 rotate-12" : "scale-100"
          }`}
        >
          <Box className="w-20 h-20 text-white" />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="p-3 bg-indigo-600/30 text-indigo-300 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.liveHref}
            className="flex items-center gap-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm transition-colors"
          >
            <ExternalLinkIcon className="w-4 h-4" />
            Live Demo
          </a>
          <a
            href={project.codeHref}
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

// Projects Section
const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Website Template",
      description:
        "modern and scalable E-commerce website template built with Next.js (App Router) and Tailwind CSS, designed to deliver a clean, premium shopping experience with smooth and professional animations.",
      tags: ["Next.js", "Tailwind css", "Framer Motion"],
      liveHref: "https://ecommerce-xi-ivory.vercel.app/",
      codeHref: "https://github.com/DiaaElkhouly/ecommerce",
    },
    {
      title: "3D Product Configurator",
      description:
        "An interactive 3D landing page inspired by modern product showcases. Built to demonstrate 3D concepts applied to the web, smooth animations, and responsive design",
      tags: ["React.js", "Tailwind css", "Three.js", "GSAP"],
      liveHref: "https://diaaelkhouly.github.io/3d-macbook/",
      codeHref: "https://github.com/DiaaElkhouly/3d-macbook",
    },
    {
      title: "Landing Page",
      description:
        "A front-end portfolio highlighting modern UI practices and performance-focused design. Crafting modern interfaces with attention to detail and usability.",
      tags: ["React.js", "Tailwind", "MUI", "React bits"],
      liveHref: "https://diaaelkhouly.github.io/landing-page-demo/",
      codeHref: "https://github.com/DiaaElkhouly/landing-page-demo",
    },
    {
      title: "NEFER",
      description:
        "Product showcase pages designed for cosmetics brands, focusing on clean UI, brand identity, and responsive layouts. Built as part of a team-based university project.",
      tags: ["React", "Tailwind css", "React bits"],
      liveHref: "https://diaaelkhouly.github.io/NEFER/",
      codeHref: "https://github.com/DiaaElkhouly/NEFER",
    },
    {
      title: "Cadenza",
      description:
        "Product showcase pages designed for cosmetics brands, focusing on clean UI, brand identity, and responsive layouts. Built as part of a team-based university project.",
      tags: ["D3.js", "Three.js", "TypeScript"],
      liveHref: "https://diaaelkhouly.github.io/cadenza/",
      codeHref: "https://github.com/DiaaElkhouly/cadenza",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">
            Showcasing my latest 3D web experiences
          </p>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
