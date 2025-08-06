export const appBgColors = {
  red: "bg-red-600",
  orange: "bg-orange-600",
  yellow: "bg-yellow-600",
  green: "bg-green-600",
  blue: "bg-blue-800",
  purple: "bg-purple-800",
  pink: "bg-pink-700",
  gray: "bg-gray-600",
} as const;

export const appColorsArr = Object.keys(appBgColors) as Array<
  keyof typeof appBgColors
>;
