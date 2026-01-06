import React, { useState } from "react";
import { Mail, Github, Linkedin, Download } from "lucide-react";
// icons
import GmailIcon from "../icons/gmail-icon";
import GithubIcon from "../icons/github-icon";
import LinkedinIcon from "../icons/linkedin-icon";
import ArrowBigDownDashIcon from "../icons/arrow-big-down-dash-icon";
import WhatsappIcon from "../icons/whatsapp-icon";
import TelephoneIcon from "../icons/telephone-icon";

// Contact Section
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      const whatsappMessage = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
      const whatsappUrl = `https://wa.me/+201201449924?text=${encodeURIComponent(
        whatsappMessage
      )}`;
      window.open(whatsappUrl, "_blank");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg">
            Let's create something amazing together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700">
              <div className="flex items-center gap-3 mb-2">
                <GmailIcon className="w-6 h-6 text-indigo-400" />
                <div>
                  <div className="text-gray-400 text-sm">Email</div>
                  <div className="text-white">diaaelkhouly8@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <TelephoneIcon className="w-6 h-6 text-indigo-400" />
                <div>
                  <div className="text-gray-400 text-sm">Phone</div>
                  <div className="text-white">+201201449924</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-xl border border-gray-700">
              <h3 className="text-white font-bold mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/diaa-elkhouly-42abb4339/"
                  className="p-1 bg-gray-700 hover:bg-indigo-600 rounded-lg transition-colors"
                >
                  <LinkedinIcon className="w-10 h-10 text-white" />
                </a>
                <a
                  href="https://github.com/DiaaElkhouly"
                  className="p-1 bg-gray-700 hover:bg-indigo-600 rounded-lg transition-colors"
                >
                  <GithubIcon className="w-10 h-10 text-white" />
                </a>
                <a
                  href="https://wa.me/+201201449924?text=Hi!"
                  className="p-1 bg-gray-700 hover:bg-indigo-600 rounded-lg transition-colors"
                >
                  <WhatsappIcon className="w-10 h-10 text-white" />
                </a>
              </div>
            </div>
            <a
              href="/public/resume.pdf" // path inside public folder
              download="Diaa-Resume.pdf"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
            >
              <ArrowBigDownDashIcon className="w-6 h-6" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
