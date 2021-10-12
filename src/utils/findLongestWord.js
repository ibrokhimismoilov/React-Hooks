export function findLongestWord(data) {
  console.log("render findLongestWord()");
  if (!data) {
    return null;
  }

  let longestWord = "";
  data
    .toString()
    .split(" ")
    .forEach((w) => {
      if (w.length >= longestWord.length) {
        longestWord = w;
      }
    });

  return longestWord;
}
