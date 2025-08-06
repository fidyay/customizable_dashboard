export const appColors = {
  red: "red-600",
  orange: "orange-600",
  yellow: "yellow-600",
  green: "green-600",
  blue: "blue-800",
  purple: "purple-800",
  pink: "pink-700",
  gray: "gray-600",
} as const;

export const appColorsArr = Object.keys(appColors) as Array<
  keyof typeof appColors
>;
