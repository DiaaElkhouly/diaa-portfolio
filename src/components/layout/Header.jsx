import { useState, useEffect } from "react";
import { Menu, X, Code, Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import useActiveSection from "../../hooks/useActiveSection";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--glass-bg)] backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
      style={{
        borderBottom: isScrolled ? "1px solid var(--glass-border)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Code
              className="w-7 h-7 sm:w-8 sm:h-8"
              style={{ color: "var(--accent-primary)" }}
            />
            <span
              className="ml-2 text-lg sm:text-xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              Diaa Elkhouly
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-x-8 lg:gap-x-10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:opacity-80"
                style={{
                  color:
                    activeSection === item.href.substring(1)
                      ? "var(--accent-primary)"
                      : "var(--text-secondary)",
                }}
              >
                {item.name}
              </a>
            ))}

            {/* Creative Animated Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="relative w-14 h-8 rounded-full transition-all duration-300 hover:scale-110"
              style={{
                background: darkMode
                  ? "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)"
                  : "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
                boxShadow: darkMode
                  ? "0 4px 15px rgba(99, 102, 241, 0.3)"
                  : "0 4px 15px rgba(251, 191, 36, 0.3)",
              }}
            >
              {/* Toggle Circle */}
              <div
                className={`absolute top-1 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 ${
                  darkMode ? "left-1" : "left-7"
                }`}
                style={{
                  background: darkMode
                    ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
                    : "linear-gradient(135deg, #fbbf24, #f59e0b)",
                  boxShadow: darkMode
                    ? "0 2px 8px rgba(99, 102, 241, 0.5)"
                    : "0 2px 8px rgba(251, 191, 36, 0.5)",
                }}
              >
                {darkMode ? (
                  <Moon className="w-3.5 h-3.5 text-white" />
                ) : (
                  <Sun className="w-3.5 h-3.5 text-amber-800" />
                )}
              </div>

              {/* Stars for dark mode */}
              {darkMode && (
                <>
                  <span className="absolute top-1.5 left-4 text-xs opacity-60">
                    ✦
                  </span>
                  <span className="absolute top-2 right-3 text-xs opacity-40">
                    ✦
                  </span>
                </>
              )}

              {/* Sun rays for light mode */}
              {!darkMode && (
                <>
                  <span className="absolute top-0.5 right-1 text-xs text-amber-600">
                    ⋆
                  </span>
                  <span className="absolute bottom-0.5 left-2 text-xs text-amber-600">
                    ⋆
                  </span>
                </>
              )}
            </button>
          </div>

          {/* Mobile Right Side - Theme Toggle + Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 md:hidden">
            {/* Mobile Theme Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className="p-2.5 sm:p-2 rounded-xl transition-all duration-300 hover:scale-110"
              style={{
                background: darkMode
                  ? "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)"
                  : "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
                boxShadow: darkMode
                  ? "0 2px 10px rgba(99, 102, 241, 0.3)"
                  : "0 2px 10px rgba(251, 191, 36, 0.3)",
              }}
            >
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center"
                style={{
                  background: darkMode
                    ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
                    : "linear-gradient(135deg, #fbbf24, #f59e0b)",
                }}
              >
                {darkMode ? (
                  <Moon className="w-3 h-3 text-white" />
                ) : (
                  <Sun className="w-3 h-3 text-amber-800" />
                )}
              </div>
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 sm:p-2 rounded-xl transition-colors"
              style={{
                background: "var(--bg-card)",
                color: "var(--text-primary)",
              }}
            >
              {isOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="md:hidden py-4 space-y-2 rounded-xl mt-2 mb-4"
            style={{
              background: "var(--glass-bg)",
              backdropFilter: "blur(12px)",
              border: "1px solid var(--glass-border)",
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg transition-colors font-medium"
                style={{
                  color:
                    activeSection === item.href.substring(1)
                      ? "var(--accent-primary)"
                      : "var(--text-secondary)",
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
