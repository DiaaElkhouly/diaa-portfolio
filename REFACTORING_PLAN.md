# Portfolio Refactoring Plan

## Current Issues Identified:

1. **Flat component structure** - All components in single `src/components/` folder
2. **Mixed concerns** - Main App logic in `CompletProject.jsx` (misnamed)
3. **No state management** - Dark mode and active section passed via props (prop drilling)
4. **Hardcoded data** - Projects, skills, contact info embedded in components
5. **Inline hooks** - `useMousePosition` defined inside component
6. **No theme constants** - Colors defined inline throughout components
7. **No reusable UI components** - Duplicated patterns (cards, badges, buttons)

## Proposed Professional Architecture:

```
src/
├── components/
│   ├── layout/          # Layout components
│   │   ├── Header.jsx   # Navigation + theme toggle
│   │   └── Footer.jsx   # Footer content
│   ├── sections/        # Page sections
│   │   ├── Hero/
│   │   ├── Projects/
│   │   ├── Skills/
│   │   ├── About/
│   │   └── Contact/
│   ├── ui/             # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Badge.jsx
│   │   └── Section.jsx
│   └── three/          # 3D components
│       ├── DarkModeScene.jsx
│       ├── LightModeScene.jsx
│       └── index.js
├── hooks/              # Custom React hooks
│   ├── useMousePosition.js
│   ├── useTheme.js
│   └── useActiveSection.js
├── context/            # React Context
│   └── ThemeContext.jsx
├── data/               # Static data
│   ├── projects.js
│   ├── skills.js
│   └── contact.js
├── constants/          # App constants
│   ├── theme.js        # Theme colors & CSS variables
│   └── config.js       # App configuration
├── utils/              # Utility functions
│   └── helpers.js
└── styles/             # Global styles
    └── index.css
```

## Benefits:

- **Separation of Concerns** - Each file has single responsibility
- **Reusability** - UI components can be reused across sections
- **Maintainability** - Easy to find and modify specific parts
- **Scalability** - Easy to add new sections or features
- **Testability** - Isolated components easier to test
- **Team Collaboration** - Clear structure for multiple developers

## Implementation Steps:

1. Create directory structure
2. Extract constants and theme values
3. Create ThemeContext for state management
4. Create custom hooks
5. Create UI components
6. Move and refactor sections
7. Update main App component
8. Clean up unused files
