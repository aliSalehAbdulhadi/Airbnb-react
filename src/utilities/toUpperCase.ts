export const toUpperCase = (words: string) => {
  const firstLetter = words.slice(0, 1).toLocaleUpperCase();
  return firstLetter + words.slice(1);
};
