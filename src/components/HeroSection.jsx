import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Float } from "@react-three/drei";
import { ChevronDown } from "lucide-react";

import ShinyText from "./ShinyText";

// Generate particles positions outside component
const particlesCount = 1000;
const positions = new Float32Array(particlesCount * 3);
for (let i = 0; i < particlesCount * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 50;
}

// React Three Fiber Scene Component
const ThreeScene = ({ mousePosition }) => {
  const cubeRef = useRef();
  const particlesRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Animate cube
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.005;
      cubeRef.current.rotation.y += 0.005;
      cubeRef.current.position.y = Math.sin(time) * 0.3;
    }

    // Animate particles
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0005;
    }
  });

  // Mouse interaction
  useFrame(() => {
    if (cubeRef.current && window.innerWidth && window.innerHeight) {
      const x = (mousePosition.x / window.innerWidth) * 2 - 1;
      const y = -(mousePosition.y / window.innerHeight) * 2 + 1;

      cubeRef.current.rotation.y = x * 0.5;
      cubeRef.current.rotation.x = y * 0.5;
    }
  });

  return (
    <>
      {/* Enhanced Lighting */}
      <ambientLight intensity={0.7} />
      <directionalLight
        position={[5, 10, 7]}
        intensity={1.2}
        color="#8b5cf6"
        castShadow
      />
      <spotLight
        position={[0, 8, 8]}
        angle={0.35}
        penumbra={0.7}
        intensity={2.2}
        color="#f472b6"
        castShadow
      />

      {/* Visible SpotLight Cone - more vibrant */}
      <mesh position={[0, 2, 2]} rotation={[Math.PI / 2.5, Math.PI / 4, 0]}>
        <coneGeometry args={[1.2, 6, 64]} />
        <meshBasicMaterial color="#ccc" transparent opacity={0.18} />
      </mesh>

      {/* Animated Cube with gradient and shine */}
      <Float speed={1.4} rotationIntensity={1.2} floatIntensity={0.7}>
        <mesh ref={cubeRef} position={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[2.2, 2.2, 2.2]} />
          <meshStandardMaterial
            color="#6366f1"
            metalness={0.8}
            roughness={0.1}
            emissive="#8b5cf6"
            emissiveIntensity={0.25}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
      </Float>

      {/* Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.07} color="#8b5cf6" transparent opacity={0.7} />
      </points>

      {/* Stars background */}
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0.2}
        fade
        speed={1}
      />

      {/* Orbit Controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
};

// Hero Section
const HeroSection = ({ mousePosition }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Canvas>
          <ThreeScene mousePosition={mousePosition} />
        </Canvas>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <ShinyText
            text={"Diaa Elkhouly"}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg"
            speed={1.9}
            delay={0.5}
            color="#cccc"
            spread={100}
            yoyo
          />
          <p className="text-lg sm:text-xl md:text-3xl text-indigo-300 mb-3 sm:mb-4">
            Front End Developer
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8">
            Building immersive web experiences with React, modern UI, and 3D
            interactions.
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-center mb-6 sm:mb-8">
            <span className="px-3 py-1 sm:px-6 sm:py-2 bg-pink-600/30 backdrop-blur-sm rounded-full text-white border border-pink-500/50 text-sm sm:text-base">
              Next.js
            </span>
            <span className="px-3 py-1 sm:px-6 sm:py-2 bg-indigo-600/30 backdrop-blur-sm rounded-full text-white border border-indigo-500/50 text-sm sm:text-base">
              React.js
            </span>
            <span className="px-3 py-1 sm:px-4 sm:py-2 bg-purple-600/30 backdrop-blur-sm rounded-full text-white border border-purple-500/50 text-sm sm:text-base">
              JavaScript
            </span>
            <span className="px-3 py-1 sm:px-4 sm:py-2 bg-blue-600/30 backdrop-blur-sm rounded-full text-white border border-blue-500/50 text-sm sm:text-base">
              shadcn/ui
            </span>
            <span className="px-3 py-1 sm:px-4 sm:py-2 bg-pink-600/30 backdrop-blur-sm rounded-full text-white border border-pink-500/50 text-sm sm:text-base">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 sm:px-4 sm:py-2 bg-indigo-600/30 backdrop-blur-sm rounded-full text-white border border-indigo-500/50 text-sm sm:text-base">
              3D Web
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-6 sm:px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 sm:px-8 py-3 bg-transparent border-2 border-indigo-500 hover:bg-indigo-500/20 text-white rounded-lg font-medium transition-all text-center"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
