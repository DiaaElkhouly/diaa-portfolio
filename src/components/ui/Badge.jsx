const Badge = ({
  children,
  darkMode,
  className = "",
  style = {},
  ...props
}) => {
  const baseStyles = {
    display: "inline-block",
    padding: "0.375rem 0.75rem",
    borderRadius: "9999px",
    fontSize: "0.875rem",
    fontWeight: "500",
    background: darkMode
      ? "rgba(99, 102, 241, 0.15)"
      : "rgba(99, 102, 241, 0.1)",
    color: darkMode ? "#a5b4fc" : "#6366f1",
    border: `1px solid ${darkMode ? "rgba(99, 102, 241, 0.3)" : "rgba(99, 102, 241, 0.2)"}`,
  };

  return (
    <span className={className} style={{ ...baseStyles, ...style }} {...props}>
      {children}
    </span>
  );
};

export default Badge;
