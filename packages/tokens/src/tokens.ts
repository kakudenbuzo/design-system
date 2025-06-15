import type { DesignTokens, Colors, Typography, Layout, Motion } from './types'

// Import JSON files
import colorsData from '../tokens/colors.json'
import typographyData from '../tokens/typography.json'
import layoutData from '../tokens/layout.json'
import motionData from '../tokens/motion.json'

// Export individual token categories with proper typing
export const colors = colorsData.colors as Colors
export const typography = typographyData.typography as Typography
export const layout = layoutData.layout as Layout
export const motion = motionData.motion as Motion

// Export complete design tokens
export const tokens: DesignTokens = {
  colors,
  typography,
  layout,
  motion,
}

// Export default theme tokens for easier access
export const defaultTheme = {
  colors: colors.default,
  typography,
  layout,
  motion,
}

// Export boxing theme tokens
export const boxingTheme = {
  colors: colors.boxing,
  typography,
  layout,
  motion,
}

// Helper function to get theme-specific tokens
export function getThemeTokens(theme: 'default' | 'boxing' = 'default') {
  return theme === 'boxing' ? boxingTheme : defaultTheme
}