export const shortenDescription = (description, maxWords) => {
  if (!description) return ""; // Handle case where description is undefined or null

  const words = description.split(" ");
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(" ") + "...";
  }
  return description;
};
