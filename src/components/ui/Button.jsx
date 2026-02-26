const Button = ({
  children,
  onClick,
  disabled = false,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles = `
    px-8 py-3.5 font-semibold rounded-xl transition-all transform 
    hover:scale-105 active:scale-95 disabled:opacity-70
  `;

  const variants = {
    primary: {
      background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
      color: "#ffffff",
      boxShadow: "0 10px 40px -10px rgba(99, 102, 241, 0.5)",
    },
    secondary: {
      border: "2px solid rgba(139, 92, 246, 0.5)",
      background: "rgba(139, 92, 246, 0.1)",
      color: "#ffffff",
    },
    outline: {
      border: "2px solid rgba(139, 92, 246, 0.5)",
      background: "transparent",
      color: "#8b5cf6",
    },
    gradient: {
      background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
      color: "#ffffff",
      boxShadow: "0 4px 15px rgba(139, 92, 246, 0.3)",
    },
  };

  const style = variants[variant] || variants.primary;

  return (
    <button
      className={`${baseStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
