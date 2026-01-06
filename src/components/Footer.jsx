import React from "react";

// Footer
const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Diaa Elkhouly. Crafted with React.js &
          passion❤️.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
