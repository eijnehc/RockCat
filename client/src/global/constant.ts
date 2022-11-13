export const COLORS = {
  white: 'hsl(0deg 0% 100%)',
  black: 'hsl(0deg 0% 0%)',
  offblack: 'hsl(231deg 13% 10%)',
  gray: {
    50: 'hsl(40deg 12% 95%)',
    100: 'hsl(210deg 25% 88%)',
    300: 'hsl(210deg 14% 80%)',
    500: 'hsl(210deg 8% 50%)',
    700: 'hsl(210deg 10% 40%)',
    900: 'hsl(210deg 15% 20%)',
  },
  primary: {
    medium: 'hsl(333deg 100% 50%)',
    dark: 'hsl(333deg 90% 47%)',
  },
  secondary: {
    medium: 'hsl(278deg 87% 72%)',
    dark: 'hsl(278deg 63% 48%)',
  },
  info: 'hsl(223deg 77% 63%)',
  success: 'hsl(160deg 80% 45%)',
  easy: 'hsl(167deg 85% 51%)',
  danger: 'hsl(347deg 77% 50%)',
  warning: 'hsl(30deg 100% 50%)',
}

export const WEIGHTS = {
  normal: 400,
  medium: 550,
  bold: 700,
}

export const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
}

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
  tabletOnly: `
      (min-width: ${BREAKPOINTS.tabletMin / 16}rem) and
      (max-width: ${(BREAKPOINTS.laptopMin - 1) / 16}rem)`,
}
