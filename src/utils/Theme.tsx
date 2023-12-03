export enum Theme {
  dark = "dark",
  light = "light",
}

export const themeBgColors = {
  dark: "#292929",
  light: "#fff",
};

export const themeTextColors = {
  dark: "#fff",
  light: "#292929",
};

export function getInverseThemeColor(theme: Theme) {
  switch (theme) {
    case Theme.dark:
      return themeBgColors.light;
    case Theme.light:
      return themeBgColors.dark;
    default:
      return themeBgColors.light; // default to lightInverse if theme is not recognized
  }
}

export function getInverseThemeTextColor(theme: Theme) {
  switch (theme) {
    case Theme.dark:
      return themeTextColors.light;
    case Theme.light:
      return themeTextColors.dark;
    default:
      return themeTextColors.light; // default to lightInverse if theme is not recognized
  }
}
