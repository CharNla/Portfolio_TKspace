// Space Theme Configuration
// Centralized configuration for consistent space theme across components

export const SPACE_COLORS = {
  primary: {
    purple: {
      400: '#a855f7',
      500: '#8b5cf6',
      600: '#7c3aed',
    },
    pink: {
      400: '#f472b6',
      500: '#ec4899',
      600: '#db2777',
    },
    blue: {
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
    },
    cyan: {
      400: '#22d3ee',
      500: '#06b6d4',
      600: '#0891b2',
    },
  },
  background: {
    dark: '#0f172a',
    darker: '#020617',
    card: 'rgba(15, 23, 42, 0.6)',
  },
  text: {
    primary: '#ffffff',
    secondary: '#cbd5e1',
    muted: '#64748b',
  },
} as const;

export const SPACE_GRADIENTS = {
  hero: 'from-purple-600 via-pink-500 to-blue-500',
  button: 'from-purple-600 to-pink-600',
  card: 'from-purple-900/20 via-pink-900/20 to-blue-900/20',
  text: 'from-purple-400 to-pink-400',
  glow: 'from-purple-500 via-pink-500 to-blue-500',
} as const;

export const ANIMATION_DURATIONS = {
  fast: 200,
  normal: 300,
  slow: 500,
  orbital: {
    purple: 30,
    blue: 25,
    pink: 20,
    cyan: 10,
  },
  starfield: {
    twinkle: 3,
    shooting: 8,
    float: 6,
  },
} as const;

export const SPACE_EFFECTS = {
  glowShadows: {
    purple: '0 0 15px rgba(147, 51, 234, 0.6)',
    pink: '0 0 12px rgba(236, 72, 153, 0.6)',
    blue: '0 0 10px rgba(59, 130, 246, 0.6)',
    cyan: '0 0 8px rgba(34, 211, 238, 0.6)',
  },
  backdropBlur: 'backdrop-blur-md',
  borderGlow: 'border border-purple-500/20',
} as const;

export const PORTFOLIO_CONTENT = {
  personal: {
    name: 'Char Nla',
    title: '4th-year Computer Science Student',
    description: 'A passionate 4th-year Computer Science student specializing in full-stack web development and UI/UX design, creating beautiful and functional digital experiences.',
  },
  social: {
    github: '#',
    linkedin: '#',
    instagram: '#',
    facebook: '#',
  },
  skills: {
    expert: ['React', 'TypeScript', 'Node.js'],
    advanced: ['Python', 'JavaScript', 'SQL'],
    intermediate: ['Java', 'C++', 'PHP'],
    beginner: ['Go', 'Rust', 'Swift'],
  },
} as const;