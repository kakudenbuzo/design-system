const { tokens } = require('@company/tokens')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './stories/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Semantic color mappings using CSS variables
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        
        // Direct token mappings for full color scales
        blue: {
          50: tokens.colors.default.primary[50],
          100: tokens.colors.default.primary[100],
          200: tokens.colors.default.primary[200],
          300: tokens.colors.default.primary[300],
          400: tokens.colors.default.primary[400],
          500: tokens.colors.default.primary[500],
          600: tokens.colors.default.primary[600],
          700: tokens.colors.default.primary[700],
          800: tokens.colors.default.primary[800],
          900: tokens.colors.default.primary[900],
          950: tokens.colors.default.primary[950],
        },
        slate: {
          50: tokens.colors.default.secondary[50],
          100: tokens.colors.default.secondary[100],
          200: tokens.colors.default.secondary[200],
          300: tokens.colors.default.secondary[300],
          400: tokens.colors.default.secondary[400],
          500: tokens.colors.default.secondary[500],
          600: tokens.colors.default.secondary[600],
          700: tokens.colors.default.secondary[700],
          800: tokens.colors.default.secondary[800],
          900: tokens.colors.default.secondary[900],
          950: tokens.colors.default.secondary[950],
        },
      },
      fontFamily: {
        sans: tokens.typography.fontFamily.sans,
        serif: tokens.typography.fontFamily.serif,
        mono: tokens.typography.fontFamily.mono,
      },
      fontSize: Object.fromEntries(
        Object.entries(tokens.typography.fontSize).map(([key, value]) => [
          key,
          [value.value, { lineHeight: value.lineHeight }],
        ])
      ),
      fontWeight: tokens.typography.fontWeight,
      letterSpacing: tokens.typography.letterSpacing,
      lineHeight: tokens.typography.lineHeight,
      spacing: tokens.layout.spacing,
      borderRadius: tokens.layout.borderRadius,
      borderWidth: tokens.layout.borderWidth,
      boxShadow: tokens.layout.boxShadow,
      zIndex: tokens.layout.zIndex,
      transitionDuration: tokens.motion.duration,
      transitionTimingFunction: tokens.motion.easing,
    },
  },
  plugins: [],
}