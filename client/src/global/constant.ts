export const COLORS = {
  white: 'hsl(0deg 0% 100%)',
  offblack: 'hsl(24deg 5% 6%)',
  gray: {
    100: 'hsl(40deg 12% 95%)',
    300: 'hsl(35deg 8% 80%)',
    500: 'hsl(30deg 4% 60%)',
    700: 'hsl(28deg 5% 40%)',
    900: 'hsl(24deg 6% 16%)',
  },
  primary: {
    300: 'hsl(221deg 83% 53%)',
    500: 'hsl(221deg 83% 53% / 0.3)',
    900: 'hsl(221deg 63% 40%)',
  },
  secondary: {
    300: 'hsl(262deg 83% 58%)',
    500: 'hsl(262deg 83% 58% / 0.3)',
  },
  success: {
    300: 'hsl(142deg 76% 36%)',
    500: 'hsl(142deg 76% 36% / 0.3)',
  },
  danger: {
    300: 'hsl(347deg 77% 50%)',
    500: 'hsl(347deg 77% 50% / 0.3)',
  },
  warning: {
    300: 'hsl(41deg 96% 40%)',
    500: 'hsl(41deg 96% 40% / 0.3)',
  },
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
