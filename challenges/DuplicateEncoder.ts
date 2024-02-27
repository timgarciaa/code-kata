function duplicateEncode(word: string) {
  const chars = word.toLowerCase().split("");

  console.log("chars: ", chars);

  const mapping: any = {};

  chars.forEach((char: string) => {
    if (mapping[char]) {
      mapping[char] = mapping[char] + 1;
    } else {
      mapping[char] = 1;
    }
  });

  console.log("mapping: ", mapping);

  const arrOutput: any[] = [];

  chars.forEach((char: string) => {
    if (mapping[char] === 1) {
      arrOutput.push("(");
    } else {
      arrOutput.push(")");
    }
  });

  console.log("arrOutput: ", arrOutput);

  return arrOutput.join("");
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
