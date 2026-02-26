const Card = ({ children, darkMode, className = "", style = {}, ...props }) => {
  const baseStyles = {
    background: darkMode
      ? "linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9))"
      : "linear-gradient(135deg, #ffffff, #f1f5f9)",
    border: `1px solid ${darkMode ? "rgba(99, 102, 241, 0.2)" : "rgba(99, 102, 241, 0.1)"}`,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
    borderRadius: "1rem",
    padding: "1.5rem",
  };

  return (
    <div className={className} style={{ ...baseStyles, ...style }} {...props}>
      {children}
    </div>
  );
};

export default Card;
