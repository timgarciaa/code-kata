var str = "the quick brown fox jumped the quick brown fox";

function countWords() {
  var strArr = str.split(" ");

  const words: any = {};

  for (const word of strArr) {
    if (words[word]) {
      words[word] = words[word] + 1;
    } else {
      words[word] = 1;
    }
  }

  return words;
}

console.log(countWords());
