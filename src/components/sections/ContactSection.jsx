import { useState } from "react";
import { Send, Clock } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { contactInfo, socialLinks, whatsappNumber } from "../../data/contact";

// Icon components
const GmailIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const TelephoneIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const GithubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const WhatsappIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const ArrowDownDashIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 5v14M19 12l-7 7-7-7" />
  </svg>
);

// Contact Section
const ContactSection = () => {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setIsSubmitting(true);
      const whatsappMessage = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
      const whatsappUrl = `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, "_blank");
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
      }, 1000);
    } else {
      alert("Please fill in all fields.");
    }
  };

  const socialIcons = {
    LinkedIn: <LinkedinIcon className="w-6 h-6" />,
    GitHub: <GithubIcon className="w-6 h-6" />,
    WhatsApp: <WhatsappIcon className="w-6 h-6" />,
  };

  const contactIcons = {
    Email: <GmailIcon className="w-5 h-5" />,
    Phone: <TelephoneIcon className="w-5 h-5" />,
    "Response Time": <Clock className="w-5 h-5" />,
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 transition-colors duration-300 relative overflow-hidden"
      style={{
        backgroundColor: darkMode ? "#0f172a" : "#f8fafc",
      }}
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div
          className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -top-40 -left-40 w-80 h-80 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
            style={{ color: darkMode ? "#f8fafc" : "#1e293b" }}
          >
            Get In Touch
          </h2>
          <div
            className="w-16 sm:w-20 h-1 mx-auto rounded-full mb-4"
            style={{ background: "linear-gradient(90deg, #6366f1, #ec4899)" }}
          />
          <p
            className="text-sm sm:text-base"
            style={{ color: darkMode ? "#94a3b8" : "#64748b" }}
          >
            Let's create something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Form */}
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
            <h3
              className="text-lg sm:text-xl font-bold mb-4 sm:mb-6"
              style={{ color: darkMode ? "#f8fafc" : "#1e293b" }}
            >
              Send a Message
            </h3>

            <div className="space-y-4 sm:space-y-5">
              <div>
                <label
                  className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
                  style={{ color: darkMode ? "#cbd5e1" : "#475569" }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base transition-all focus:outline-none focus:ring-2"
                  style={{
                    background: darkMode ? "rgba(15, 23, 42, 0.6)" : "#ffffff",
                    color: darkMode ? "#f8fafc" : "#1e293b",
                    border: `1px solid ${darkMode ? "rgba(99, 102, 241, 0.3)" : "rgba(99, 102, 241, 0.2)"}`,
                  }}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
                  style={{ color: darkMode ? "#cbd5e1" : "#475569" }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base transition-all focus:outline-none focus:ring-2"
                  style={{
                    background: darkMode ? "rgba(15, 23, 42, 0.6)" : "#ffffff",
                    color: darkMode ? "#f8fafc" : "#1e293b",
                    border: `1px solid ${darkMode ? "rgba(99, 102, 241, 0.3)" : "rgba(99, 102, 241, 0.2)"}`,
                  }}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2"
                  style={{ color: darkMode ? "#cbd5e1" : "#475569" }}
                >
                  Your Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows="4"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base transition-all focus:outline-none focus:ring-2 resize-none"
                  style={{
                    background: darkMode ? "rgba(15, 23, 42, 0.6)" : "#ffffff",
                    color: darkMode ? "#f8fafc" : "#1e293b",
                    border: `1px solid ${darkMode ? "rgba(99, 102, 241, 0.3)" : "rgba(99, 102, 241, 0.2)"}`,
                  }}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-xl transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-70"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  color: "#ffffff",
                  boxShadow: "0 4px 15px rgba(99, 102, 241, 0.4)",
                }}
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </div>

          {/* Contact Info Side */}
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Contact Details Card */}
            <div
              className="rounded-2xl p-5 sm:p-6 transition-all duration-300"
              style={{
                background: darkMode
                  ? "linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9))"
                  : "linear-gradient(135deg, #ffffff, #f1f5f9)",
                border: `1px solid ${darkMode ? "rgba(99, 102, 241, 0.2)" : "rgba(99, 102, 241, 0.1)"}`,
              }}
            >
              <h3
                className="text-lg sm:text-xl font-bold mb-4 sm:mb-6"
                style={{ color: darkMode ? "#f8fafc" : "#1e293b" }}
              >
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href || "#"}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl transition-all hover:scale-[1.01]"
                    style={{
                      background: darkMode
                        ? "rgba(99, 102, 241, 0.1)"
                        : "rgba(99, 102, 241, 0.05)",
                    }}
                  >
                    <div
                      className="p-2 sm:p-2.5 rounded-lg"
                      style={{
                        background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                        color: "#ffffff",
                      }}
                    >
                      {contactIcons[item.label]}
                    </div>
                    <div>
                      <div
                        className="text-xs"
                        style={{ color: darkMode ? "#94a3b8" : "#64748b" }}
                      >
                        {item.label}
                      </div>
                      <div
                        className="text-sm sm:text-base font-medium"
                        style={{ color: darkMode ? "#f8fafc" : "#1e293b" }}
                      >
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div
              className="rounded-2xl p-5 sm:p-6 transition-all duration-300"
              style={{
                background: darkMode
                  ? "linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9))"
                  : "linear-gradient(135deg, #ffffff, #f1f5f9)",
                border: `1px solid ${darkMode ? "rgba(99, 102, 241, 0.2)" : "rgba(99, 102, 241, 0.1)"}`,
              }}
            >
              <h3
                className="text-lg sm:text-xl font-bold mb-4 sm:mb-6"
                style={{ color: darkMode ? "#f8fafc" : "#1e293b" }}
              >
                Follow Me
              </h3>

              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 sm:p-4 rounded-xl transition-all hover:scale-105"
                    style={{
                      background: darkMode
                        ? "rgba(255, 255, 255, 0.05)"
                        : "rgba(0, 0, 0, 0.03)",
                      border: `1px solid ${darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)"}`,
                      color: darkMode ? "#f8fafc" : "#1e293b",
                    }}
                  >
                    {socialIcons[social.name]}
                    <span className="text-xs sm:text-sm font-medium hidden sm:inline">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>

              {/* Resume Download */}
              <a
                href="./resume.pdf"
                download="Diaa-Resume.pdf"
                className="w-full flex items-center justify-center gap-2 mt-4 sm:mt-6 px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold transition-all hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
                  color: "#ffffff",
                  boxShadow: "0 4px 15px rgba(139, 92, 246, 0.3)",
                }}
              >
                <ArrowDownDashIcon className="w-5 h-5" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
