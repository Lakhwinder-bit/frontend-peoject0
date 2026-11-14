 export const formatAIResponse = (text) => {
  if (!text) return "";

  return text
    // Remove Markdown bold and italic
    .replace(/\*\*\*(.*?)\*\*\*/g, "$1")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/__(.*?)__/g, "$1")
    .replace(/_(.*?)_/g, "$1")

    // Remove unwanted escaped characters
    .replace(/\\([*_`])/g, "$1")

    // Remove extra spaces
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
};