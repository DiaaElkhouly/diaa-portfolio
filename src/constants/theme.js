/**
 * Theme Constants
 * Centralized theme configuration for the portfolio
 * Contains all color values, gradients, and helper functions
 */

// Theme modes
export const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

// Color palette
export const COLORS = {
  // Primary colors
  primary: {
    indigo: "#6366f1",
    purple: "#8b5cf6",
    pink: "#ec4899",
  },
  // Secondary colors
  secondary: {
    cyan: "#06b6d4",
    blue: "#3b82f6",
    amber: "#fbbf24",
  },
};

// Dark Mode Colors
export const DARK_COLORS = {
  bgPrimary: "#0a0a0f",
  bgSecondary: "#121218",
  bgTertiary: "#1e293b",
  bgCard: "rgba(31, 41, 55, 0.5)",
  bgCardHover: "rgba(31, 41, 55, 0.8)",
  textPrimary: "#ffffff",
  textSecondary: "#e5e7eb",
  textMuted: "#9ca3af",
  borderColor: "rgba(55, 65, 81, 0.7)",
  accentPrimary: "#6366f1",
  accentSecondary: "#8b5cf6",
  accentPink: "#ec4899",
  glassBg: "rgba(10, 10, 15, 0.8)",
  glassBorder: "rgba(255, 255, 255, 0.1)",
  shadowColor: "rgba(0, 0, 0, 0.4)",
};

// Light Mode Colors
export const LIGHT_COLORS = {
  bgPrimary: "#f8fafc",
  bgSecondary: "#f1f5f9",
  bgTertiary: "#ffffff",
  bgCard: "rgba(255, 255, 255, 0.8)",
  bgCardHover: "rgba(255, 255, 255, 1)",
  textPrimary: "#0f172a",
  textSecondary: "#334155",
  textMuted: "#64748b",
  borderColor: "rgba(203, 213, 225, 0.8)",
  accentPrimary: "#4f46e5",
  accentSecondary: "#7c3aed",
  accentPink: "#db2777",
  glassBg: "rgba(255, 255, 255, 0.7)",
  glassBorder: "rgba(0, 0, 0, 0.1)",
  shadowColor: "rgba(0, 0, 0, 0.1)",
};

// Gradient definitions
export const GRADIENTS = {
  primary: "linear-gradient(135deg, #6366f1, #8b5cf6)",
  primaryLight: "linear-gradient(135deg, #4f46e5, #6366f1)",
  pink: "linear-gradient(135deg, #ec4899, #8b5cf6)",
  purple: "linear-gradient(135deg, #8b5cf6, #ec4899)",
  accent: "linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)",
  hero: {
    dark: "linear-gradient(135deg, #0a0a0f 0%, #1e1b4b 50%, #0f172a 100%)",
    light: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 50%, #f0f9ff 100%)",
  },
  card: {
    dark: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)",
    light: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #db2777 100%)",
  },
};

// Section backgrounds
export const SECTION_BG = {
  dark: "#0f172a",
  light: "#f8fafc",
};

// Badge colors for tech stack
export const BADGE_COLORS = [
  {
    bg: "rgba(219, 39, 119, 0.2)",
    color: "#f9a8d4",
    border: "rgba(219, 39, 119, 0.3)",
    darkText: "#be185d",
  },
  {
    bg: "rgba(99, 102, 241, 0.2)",
    color: "#c7d2fe",
    border: "rgba(99, 102, 241, 0.3)",
    darkText: "#4f46e5",
  },
  {
    bg: "rgba(168, 85, 247, 0.2)",
    color: "#e9d5ff",
    border: "rgba(168, 85, 247, 0.3)",
    darkText: "#7c3aed",
  },
  {
    bg: "rgba(59, 130, 246, 0.2)",
    color: "#bfdbfe",
    border: "rgba(59, 130, 246, 0.3)",
    darkText: "#2563eb",
  },
  {
    bg: "rgba(6, 182, 212, 0.2)",
    color: "#a5f3fc",
    border: "rgba(6, 182, 212, 0.3)",
    darkText: "#0891b2",
  },
  {
    bg: "rgba(251, 191, 36, 0.2)",
    color: "#fef3c7",
    border: "rgba(251, 191, 36, 0.3)",
    darkText: "#d97706",
  },
  {
    bg: "rgba(34, 197, 94, 0.2)",
    color: "#bbf7d0",
    border: "rgba(34, 197, 94, 0.3)",
    darkText: "#16a34a",
  },
  {
    bg: "rgba(139, 92, 246, 0.2)",
    color: "#ddd6fe",
    border: "rgba(139, 92, 246, 0.3)",
    darkText: "#7c3aed",
  },
];

// Social media colors
export const SOCIAL_COLORS = {
  linkedin: "#0A66C2",
  github: "#ffffff",
  whatsapp: "#25D366",
  gmail: "#EA4335",
};

// Animation durations
export const ANIMATION = {
  fast: "0.15s",
  normal: "0.3s",
  slow: "0.5s",
};

// Spacing scale
export const SPACING = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
  "3xl": "4rem",
};

// Border radius
export const RADIUS = {
  sm: "0.25rem",
  md: "0.5rem",
  lg: "1rem",
  xl: "1.5rem",
  "2xl": "2rem",
  full: "9999px",
};

// Breakpoints (for reference)
export const BREAKPOINTS = {
  xs: "480px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

/**
 * Get theme colors based on dark mode state
 * @param {boolean} isDark - Whether dark mode is active
 * @returns {object} Theme colors object
 */
export const getThemeColors = (isDark) => {
  return isDark ? DARK_COLORS : LIGHT_COLORS;
};

/**
 * Get CSS variable value for a theme property
 * @param {string} prop - Property name
 * @param {boolean} isDark - Whether dark mode is active
 * @returns {string} CSS variable string
 */
export const getThemeVar = (prop, isDark = true) => {
  const varMap = {
    bgPrimary: isDark ? "#0a0a0f" : "#f8fafc",
    bgSecondary: isDark ? "#121218" : "#f1f5f9",
    bgCard: isDark ? "rgba(31, 41, 55, 0.5)" : "rgba(255, 255, 255, 0.8)",
    textPrimary: isDark ? "#ffffff" : "#0f172a",
    textSecondary: isDark ? "#e5e7eb" : "#334155",
    accentPrimary: isDark ? "#6366f1" : "#4f46e5",
  };
  return varMap[prop] || prop;
};

export default {
  THEME,
  COLORS,
  DARK_COLORS,
  LIGHT_COLORS,
  GRADIENTS,
  SECTION_BG,
  BADGE_COLORS,
  SOCIAL_COLORS,
  ANIMATION,
  SPACING,
  RADIUS,
  BREAKPOINTS,
  getThemeColors,
  getThemeVar,
};
