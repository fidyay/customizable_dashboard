export const capitalize = (str: string) => {
  const firstLetter = str[0];

  return firstLetter.toUpperCase() + str.slice(1);
};
