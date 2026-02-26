import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Sparkles, RoundedBox } from "@react-three/drei";

import { useTheme } from "../../context/ThemeContext";
import { techStack } from "../../data/skills";
import { personalInfo } from "../../data/contact";
import ShinyText from "../ShinyText";

// Generate particles positions outside component
const particlesCount = 800;
const positions = new Float32Array(particlesCount * 3);
for (let i = 0; i < particlesCount * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 50;
}

// React Three Fiber Scene Component - Dark Mode
const DarkModeScene = ({ mousePosition }) => {
  const cubeRef = useRef();
  const particlesRef = useRef();
  const torusRef = useRef();
  const icosahedronRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.003;
      cubeRef.current.rotation.y += 0.003;
      cubeRef.current.position.y = Math.sin(time * 0.8) * 0.3;
    }

    if (torusRef.current) {
      torusRef.current.rotation.x += 0.002;
      torusRef.current.rotation.y += 0.005;
    }

    if (icosahedronRef.current) {
      icosahedronRef.current.rotation.x -= 0.002;
      icosahedronRef.current.rotation.z += 0.003;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0003;
    }
  });

  useFrame(() => {
    if (cubeRef.current && mousePosition) {
      const x = (mousePosition.x / window.innerWidth) * 2 - 1;
      const y = -(mousePosition.y / window.innerHeight) * 2 + 1;
      cubeRef.current.rotation.y = x * 0.3;
      cubeRef.current.rotation.x = y * 0.3;
    }
  });

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 7]} intensity={1.2} color="#8b5cf6" />
      <spotLight
        position={[0, 8, 8]}
        angle={0.35}
        penumbra={0.7}
        intensity={2}
        color="#f472b6"
      />
      <pointLight position={[-5, 5, 5]} intensity={0.5} color="#06b6d4" />

      {/* Main Cube */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5}>
        <mesh ref={cubeRef} position={[0, 0, 0]} castShadow>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial
            color="#6366f1"
            metalness={0.8}
            roughness={0.1}
            emissive="#8b5cf6"
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>

      {/* Torus around cube */}
      <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.3}>
        <mesh
          ref={torusRef}
          position={[2.5, 0, 0]}
          rotation={[Math.PI / 4, 0, 0]}
        >
          <torusGeometry args={[0.8, 0.15, 16, 100]} />
          <meshStandardMaterial
            color="#ec4899"
            metalness={0.9}
            roughness={0.1}
            emissive="#ec4899"
            emissiveIntensity={0.15}
          />
        </mesh>
      </Float>

      {/* Icosahedron */}
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={0.4}>
        <mesh ref={icosahedronRef} position={[-2.5, 1, 0]}>
          <icosahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial
            color="#06b6d4"
            metalness={0.9}
            roughness={0.1}
            emissive="#06b6d4"
            emissiveIntensity={0.15}
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
        <pointsMaterial size={0.06} color="#8b5cf6" transparent opacity={0.6} />
      </points>

      <Sparkles count={200} scale={10} size={2} speed={0.4} color="#f472b6" />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </>
  );
};

// Light Mode Scene - Geometric Shapes with Gradient
const LightModeScene = ({ mousePosition }) => {
  const groupRef = useRef();
  const circle1Ref = useRef();
  const circle2Ref = useRef();
  const circle3Ref = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(time * 0.2) * 0.1;
    }

    if (circle1Ref.current) {
      circle1Ref.current.scale.setScalar(1 + Math.sin(time * 1.5) * 0.05);
    }
    if (circle2Ref.current) {
      circle2Ref.current.scale.setScalar(1 + Math.sin(time * 1.2 + 1) * 0.05);
    }
    if (circle3Ref.current) {
      circle3Ref.current.scale.setScalar(1 + Math.sin(time * 1.8 + 2) * 0.05);
    }
  });

  // Gentle mouse parallax
  useFrame(() => {
    if (groupRef.current && mousePosition) {
      const x = (mousePosition.x / window.innerWidth - 0.5) * 0.5;
      const y = (mousePosition.y / window.innerHeight - 0.5) * 0.5;
      groupRef.current.rotation.x = y * 0.1;
      groupRef.current.rotation.y = x * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.5}
        color="#6366f1"
      />
      <pointLight position={[-5, 5, 5]} intensity={0.8} color="#ec4899" />
      <pointLight position={[5, -5, 5]} intensity={0.6} color="#06b6d4" />

      <group ref={groupRef}>
        {/* Central floating card using RoundedBox from drei */}
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
          <RoundedBox
            args={[2.5, 3.2, 0.1]}
            radius={0.15}
            smoothness={4}
            position={[0, 0, 0]}
            rotation={[0.2, 0.5, 0]}
          >
            <meshStandardMaterial
              color="#ffffff"
              metalness={0.1}
              roughness={0.8}
              transparent
              opacity={0.9}
            />
          </RoundedBox>
        </Float>

        {/* Decorative circles behind */}
        <mesh ref={circle1Ref} position={[-2, 1.5, -2]}>
          <circleGeometry args={[0.8, 64]} />
          <meshBasicMaterial color="#6366f1" transparent opacity={0.2} />
        </mesh>

        <mesh ref={circle2Ref} position={[2.5, -1, -1.5]}>
          <circleGeometry args={[1.2, 64]} />
          <meshBasicMaterial color="#ec4899" transparent opacity={0.15} />
        </mesh>

        <mesh ref={circle3Ref} position={[-1.5, -2, -2.5]}>
          <circleGeometry args={[0.6, 64]} />
          <meshBasicMaterial color="#06b6d4" transparent opacity={0.2} />
        </mesh>

        {/* Floating geometric shapes */}
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.4}>
          <mesh position={[2.8, 1.5, -1]} rotation={[0, 0, Math.PI / 4]}>
            <boxGeometry args={[0.4, 0.4, 0.1]} />
            <meshStandardMaterial
              color="#6366f1"
              metalness={0.5}
              roughness={0.3}
            />
          </mesh>
        </Float>

        <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.5}>
          <mesh position={[-2.5, -1.5, -0.5]}>
            <octahedronGeometry args={[0.35]} />
            <meshStandardMaterial
              color="#ec4899"
              metalness={0.5}
              roughness={0.3}
            />
          </mesh>
        </Float>

        <Float speed={1.3} rotationIntensity={0.4} floatIntensity={0.3}>
          <mesh position={[1.8, -2, -1.5]}>
            <tetrahedronGeometry args={[0.4]} />
            <meshStandardMaterial
              color="#06b6d4"
              metalness={0.5}
              roughness={0.3}
            />
          </mesh>
        </Float>
      </group>

      <Sparkles
        count={100}
        scale={15}
        size={1.5}
        speed={0.3}
        color="#6366f1"
        opacity={0.3}
      />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </>
  );
};

// Hero Section
const HeroSection = ({ mousePosition }) => {
  const { darkMode } = useTheme();

  const bgGradient = darkMode
    ? "linear-gradient(135deg, #0a0a0f 0%, #1e1b4b 50%, #0f172a 100%)"
    : "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 50%, #f0f9ff 100%)";

  const textColor = darkMode ? "#ffffff" : "#0f172a";
  const subtitleColor = darkMode ? "#a5b4fc" : "#4f46e5";
  const descColor = darkMode ? "#d1d5db" : "#475569";

  const badgeStyles = [
    {
      bg: "rgba(219, 39, 119, 0.2)",
      color: darkMode ? "#f9a8d4" : "#be185d",
      border: "rgba(219, 39, 119, 0.3)",
    },
    {
      bg: "rgba(99, 102, 241, 0.2)",
      color: darkMode ? "#c7d2fe" : "#4f46e5",
      border: "rgba(99, 102, 241, 0.3)",
    },
    {
      bg: "rgba(168, 85, 247, 0.2)",
      color: darkMode ? "#e9d5ff" : "#7c3aed",
      border: "rgba(168, 85, 247, 0.3)",
    },
    {
      bg: "rgba(59, 130, 246, 0.2)",
      color: darkMode ? "#bfdbfe" : "#2563eb",
      border: "rgba(59, 130, 246, 0.3)",
    },
    {
      bg: "rgba(6, 182, 212, 0.2)",
      color: darkMode ? "#a5f3fc" : "#0891b2",
      border: "rgba(6, 182, 212, 0.3)",
    },
    {
      bg: "rgba(236, 72, 153, 0.2)",
      color: darkMode ? "#fbcfe8" : "#db2777",
      border: "rgba(236, 72, 153, 0.3)",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: bgGradient }}
    >
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
          {darkMode ? (
            <DarkModeScene mousePosition={mousePosition} />
          ) : (
            <LightModeScene mousePosition={mousePosition} />
          )}
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4 pt-5  sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <ShinyText
            text={personalInfo.name}
            className="min-h-full pt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold pb-4 sm:mb-6"
            speed={2}
            delay={0.5}
            color={darkMode ? "#cccccc" : "#1e293b"}
            spread={80}
            yoyo
            style={{
              color: textColor,
              textShadow: darkMode
                ? "0 0 30px rgba(139, 92, 246, 0.5)"
                : "none",
            }}
          />

          <p
            className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 font-medium"
            style={{ color: subtitleColor }}
          >
            {personalInfo.title}
          </p>

          <p
            className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto"
            style={{ color: descColor }}
          >
            Building immersive web experiences with React, modern UI, and 3D
            interactions that captivate users.
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-8 sm:mb-10">
            {techStack.map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 sm:px-6 sm:py-2 backdrop-blur-md rounded-full border text-sm sm:text-base font-medium shadow-sm"
                style={{
                  background: badgeStyles[index].bg,
                  color: badgeStyles[index].color,
                  borderColor: badgeStyles[index].border,
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 sm:px-10 py-3.5 font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              style={{
                background: darkMode
                  ? "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"
                  : "linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)",
                color: "#ffffff",
                boxShadow: darkMode
                  ? "0 10px 40px -10px rgba(99, 102, 241, 0.5)"
                  : "0 10px 40px -10px rgba(79, 70, 229, 0.4)",
              }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 sm:px-10 py-3.5 font-semibold rounded-xl transition-all transform hover:scale-105"
              style={{
                border: `2px solid ${darkMode ? "rgba(139, 92, 246, 0.5)" : "rgba(79, 70, 229, 0.5)"}`,
                color: darkMode ? "#ffffff" : "#4f46e5",
                background: darkMode
                  ? "rgba(139, 92, 246, 0.1)"
                  : "rgba(79, 70, 229, 0.05)",
              }}
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div
            className="w-8 h-12 rounded-full flex items-start justify-center pt-2"
            style={{
              background: darkMode
                ? "rgba(255, 255, 255, 0.08)"
                : "rgba(79, 70, 229, 0.08)",
              border: `1.5px solid ${darkMode ? "rgba(255, 255, 255, 0.15)" : "rgba(79, 70, 229, 0.15)"}`,
              backdropFilter: "blur(4px)",
              boxShadow: darkMode
                ? "0 4px 12px rgba(0, 0, 0, 0.15)"
                : "0 4px 12px rgba(79, 70, 229, 0.08)",
            }}
          >
            <div
              className="w-1 h-2 rounded-full animate-pulse"
              style={{
                background: darkMode
                  ? "rgba(165, 180, 252, 0.9)"
                  : "rgba(79, 70, 229, 0.9)",
                boxShadow: darkMode
                  ? "0 0 8px rgba(165, 180, 252, 0.4)"
                  : "0 0 8px rgba(79, 70, 229, 0.4)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
