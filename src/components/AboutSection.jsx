import React from "react";

// About Section
const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-3">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-400 text-lg">
            Passionate about creating immersive web experiences
          </p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I’m a Front-End Developer specialized in building modern,
            responsive, and interactive web applications using React.js. I enjoy
            creating clean user interfaces and immersive experiences, including
            simple 3D websites and animated interactions. I focus on writing
            maintainable code, building reusable components, and delivering
            visually engaging interfaces.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            My journey in web development has been driven by a passion for
            combining creativity with technology. I believe that the future of
            the web is immersive, interactive, and three-dimensional, and I'm
            committed to being at the forefront of this evolution.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="text-center p-4 bg-indigo-600/20 rounded-lg">
              <div className="text-3xl font-bold text-indigo-400 mb-1">40+</div>
              <div className="text-gray-400 text-sm">Projects</div>
            </div>
            <div className="text-center p-4 bg-purple-600/20 rounded-lg">
              <div className="text-3xl font-bold text-purple-400 mb-1">3+</div>
              <div className="text-gray-400 text-sm">Years</div>
            </div>
            <div className="text-center p-4 bg-pink-600/20 rounded-lg">
              <div className="text-3xl font-bold text-pink-400 mb-1">30+</div>
              <div className="text-gray-400 text-sm">Clients</div>
            </div>
            <div className="text-center p-4 bg-blue-600/20 rounded-lg">
              <div className="text-3xl font-bold text-blue-400 mb-1">100%</div>
              <div className="text-gray-400 text-sm">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
