export const normalize = (text: string): string => {
  text = text.replace(/\n/g, " ").trim();

  return text;
};
