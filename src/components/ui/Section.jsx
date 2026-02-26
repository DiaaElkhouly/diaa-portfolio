const Section = ({
  children,
  id,
  darkMode,
  className = "",
  style = {},
  ...props
}) => {
  const sectionStyle = {
    backgroundColor: darkMode ? "#0f172a" : "#f8fafc",
    ...style,
  };

  return (
    <section
      id={id}
      className={`py-10 sm:py-14 md:py-20 px-2 sm:px-4 transition-colors duration-300 ${className}`}
      style={sectionStyle}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
