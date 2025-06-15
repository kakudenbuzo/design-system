export type ColorScale = {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
  950: string
}

export type SemanticColors = {
  primary: string
  secondary: string
  tertiary: string
  inverse?: string
}

export type BorderColors = {
  primary: string
  secondary: string
  focus: string
}

export type ThemeColors = {
  primary: ColorScale
  secondary: ColorScale
  accent: ColorScale
  neutral: ColorScale
  success: ColorScale
  warning: ColorScale
  error: ColorScale
  background: SemanticColors
  foreground: SemanticColors
  border: BorderColors
}

export type Colors = {
  default: ThemeColors
  boxing: ThemeColors
}

export type FontSize = {
  value: string
  lineHeight: string
}

export type Typography = {
  fontFamily: {
    sans: string[]
    serif: string[]
    mono: string[]
  }
  fontSize: Record<string, FontSize>
  fontWeight: Record<string, string>
  letterSpacing: Record<string, string>
  lineHeight: Record<string, string>
}

export type Layout = {
  spacing: Record<string, string>
  borderRadius: Record<string, string>
  borderWidth: Record<string, string>
  boxShadow: Record<string, string>
  zIndex: Record<string, string>
}

export type Motion = {
  duration: Record<string, string>
  easing: Record<string, string>
}

export type DesignTokens = {
  colors: Colors
  typography: Typography
  layout: Layout
  motion: Motion
}

export type Theme = 'default' | 'boxing'