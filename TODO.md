# Portfolio Refactoring TODO

## Phase 1: Foundation

- [ ] 1.1 Create directory structure (hooks, context, data, constants, utils, styles)
- [ ] 1.2 Create theme constants (`src/constants/theme.js`)
- [ ] 1.3 Create app config (`src/constants/config.js`)
- [ ] 1.4 Create ThemeContext (`src/context/ThemeContext.jsx`)

## Phase 2: Custom Hooks

- [ ] 2.1 Create useMousePosition hook (`src/hooks/useMousePosition.js`)
- [ ] 2.2 Create useTheme hook (`src/hooks/useTheme.js`)
- [ ] 2.3 Create useActiveSection hook (`src/hooks/useActiveSection.js`)

## Phase 3: Data Layer

- [ ] 3.1 Extract projects data (`src/data/projects.js`)
- [ ] 3.2 Extract skills data (`src/data/skills.js`)
- [ ] 3.3 Extract contact data (`src/data/contact.js`)

## Phase 4: UI Components

- [ ] 4.1 Create Button component (`src/components/ui/Button.jsx`)
- [ ] 4.2 Create Card component (`src/components/ui/Card.jsx`)
- [ ] 4.3 Create Badge component (`src/components/ui/Badge.jsx`)
- [ ] 4.4 Create Section wrapper (`src/components/ui/Section.jsx`)

## Phase 5: Layout Components

- [ ] 5.1 Create Header component (`src/components/layout/Header.jsx`)
- [ ] 5.2 Refactor Footer component

## Phase 6: Section Components

- [ ] 6.1 Refactor Hero section
- [ ] 6.2 Refactor Projects section
- [ ] 6.3 Refactor Skills section
- [ ] 6.4 Refactor About section
- [ ] 6.5 Refactor Contact section

## Phase 7: Main App

- [ ] 7.1 Update App.jsx with new architecture
- [ ] 7.2 Update main.jsx entry point
- [ ] 7.3 Clean up old files

## Phase 8: Testing & Polish

- [ ] 8.1 Run build to verify no errors
- [ ] 8.2 Test all functionality
- [ ] 8.3 Final cleanup
