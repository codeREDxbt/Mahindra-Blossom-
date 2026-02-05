/** @type {import('tailwindcss').Config} */
const tokens = require('./tokens.json');

module.exports = {
  content: ["./*.{html,js}", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: tokens.colors.background.primary,
          red: tokens.colors.background.primary,
          faded: tokens.colors.background.primaryFaded,
        },
        foreground: {
          primary: tokens.colors.foreground.primary,
          secondary: tokens.colors.foreground.secondary,
          neutral: tokens.colors.foreground.neutralLight,
          light: tokens.colors.foreground.neutralLight,
        },
        border: {
          light12: tokens.colors.border.neutralLight12,
          light24: tokens.colors.border.neutralLight24,
          dark12: tokens.colors.border.neutralDark12,
        },
        background: {
            faded: tokens.colors.background.primaryFaded,
        }
      },
      fontFamily: {
        sans: [tokens.typography.body2.family, 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        barlow: [tokens.typography.body3.family, 'sans-serif'],
      },
      // ... existing spacing/fontSize overrides if needed
      borderRadius: {
        circular: tokens.radius.circular,
      },
      fontSize: {
        'body1': [tokens.typography.body1.size, {
            lineHeight: tokens.typography.body1.lineHeight,
            fontWeight: '500', // Medium
        }],
        'body2': [tokens.typography.body2.size, {
            lineHeight: tokens.typography.body2.lineHeight,
            fontWeight: '500', // Medium
        }],
        'body3': [tokens.typography.body3.size, {
            lineHeight: tokens.typography.body3.lineHeight,
            fontWeight: '400', // Regular
        }],
        'caption1': [tokens.typography.caption1.size, {
            lineHeight: tokens.typography.caption1.lineHeight,
        }],
        // Keep standard sizes for headers not in tokens
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        'hero': ['56px', '1.2'], // From Figma inspection
      },
      lineHeight: {
        none: tokens.font.lineHeight.none,
        tight: tokens.font.lineHeight.tight,
        snug: tokens.font.lineHeight.snug,
        normal: tokens.font.lineHeight.normal,
        relaxed: tokens.font.lineHeight.relaxed,
      },
      letterSpacing: {
        tight: tokens.font.letterSpacing.tight,
        normal: tokens.font.letterSpacing.normal,
        wide: tokens.font.letterSpacing.wide,
        wider: tokens.font.letterSpacing.wider,
      },
      spacing: {
        ...tokens.space,
      },
      borderRadius: {
        none: tokens.radius.none,
        sm: tokens.radius.sm,
        md: tokens.radius.md,
        lg: tokens.radius.lg,
        xl: tokens.radius.xl,
        full: tokens.radius.full,
        pill: tokens.radius.pill,
      },
      boxShadow: {
        sm: tokens.shadow.sm,
        md: tokens.shadow.md,
        lg: tokens.shadow.lg,
        xl: tokens.shadow.xl,
        '2xl': tokens.shadow['2xl'],
      },
    },
  },
  plugins: [],
}
