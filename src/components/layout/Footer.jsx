import { Code2, Heart, Linkedin, Github, Mail } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { footerLinks, personalInfo } from "../../data/contact";

const Footer = () => {
  const { darkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/diaa-elkhouly-42abb4339/",
      label: "LinkedIn",
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/DiaaElkhouly",
      label: "GitHub",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:diaaelkhouly8@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer
      className="py-10 sm:py-14 px-4 transition-colors duration-300 relative overflow-hidden"
      style={{
        background: darkMode
          ? "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)"
          : "linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)",
        borderTop: `1px solid ${darkMode ? "rgba(99, 102, 241, 0.2)" : "rgba(99, 102, 241, 0.1)"}`,
      }}
    >
      {/* Background Decoration */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(99, 102, 241, 0.3) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10">
          {/* Brand & Description */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="p-2 rounded-lg"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                }}
              >
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span
                className="text-xl font-bold"
                style={{ color: darkMode ? "#f8fafc" : "#1e293b" }}
              >
                {personalInfo.name}
              </span>
            </div>
            <p
              className="text-sm sm:text-base mb-6 max-w-md"
              style={{ color: darkMode ? "#94a3b8" : "#64748b" }}
            >
              {personalInfo.description}
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl transition-all hover:scale-110"
                  style={{
                    background: darkMode
                      ? "rgba(99, 102, 241, 0.15)"
                      : "rgba(99, 102, 241, 0.1)",
                    color: darkMode ? "#a5b4fc" : "#6366f1",
                    border: `1px solid ${darkMode ? "rgba(99, 102, 241, 0.3)" : "rgba(99, 102, 241, 0.2)"}`,
                  }}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-base sm:text-lg font-bold mb-4"
              style={{ color: darkMode ? "#f8fafc" : "#1e293b" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-purple-500"
                    style={{ color: darkMode ? "#94a3b8" : "#64748b" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-base sm:text-lg font-bold mb-4"
              style={{ color: darkMode ? "#f8fafc" : "#1e293b" }}
            >
              Contact
            </h4>
            <ul
              className="space-y-2.5"
              style={{ color: darkMode ? "#94a3b8" : "#64748b" }}
            >
              <li className="text-sm">{personalInfo.email}</li>
              <li className="text-sm">{personalInfo.phone}</li>
              <li className="text-sm">{personalInfo.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-6 sm:pt-8 border-t"
          style={{
            borderColor: darkMode
              ? "rgba(99, 102, 241, 0.2)"
              : "rgba(99, 102, 241, 0.1)",
          }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p
              className="text-xs sm:text-sm text-center sm:text-left"
              style={{ color: darkMode ? "#64748b" : "#94a3b8" }}
            >
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p
              className="text-xs sm:text-sm flex items-center gap-1.5"
              style={{ color: darkMode ? "#64748b" : "#94a3b8" }}
            >
              Crafted with
              <span className="text-red-500">
                <Heart className="w-4 h-4 fill-current" />
              </span>
              and
              <span style={{ color: "#6366f1", fontWeight: "600" }}>
                React.js
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
