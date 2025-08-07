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

export const appHoverBgColors = {
  red: "hover:bg-red-500",
  orange: "hover:bg-orange-500",
  yellow: "hover:bg-yellow-500",
  green: "hover:bg-green-500",
  blue: "hover:bg-blue-700",
  purple: "hover:bg-purple-700",
  pink: "hover:bg-pink-600",
  gray: "hover:bg-gray-500",
} as const;

export const appColorsArr = Object.keys(appBgColors) as Array<
  keyof typeof appBgColors
>;

export const MAX_TOTAL_HYPERLINKS = 9;
