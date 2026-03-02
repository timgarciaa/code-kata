
// How good are you really?

// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

export function betterThanAverage(classPoints: number[], yourPoints: number) : boolean {

  const average = classPoints.reduce((sum, point) => sum + point, 0) / classPoints.length;

  let average2 = 0;
  for (let i = 0; i < classPoints.length; i++) {
    average2 += classPoints[i];
  }
  average2 /= classPoints.length;

  console.log(`Average using reduce: ${average}`);
  console.log(`Average using for loop: ${average2}`);

  if (yourPoints > average) {
    return true;
  };

  return false;
}

// betterThanAverage([6, 7, 8, 5, 5, 6, 4, 6], 7);

// --------
// Very simple, given a number, find its opposite (additive inverse).

// Examples:

// 1: -1
// 14: -14
// -34: 34

export class Kata {
  static opposite(n: number) {
    return -n;
  }
}

// console.log(Kata.opposite(1)); // -1

// --------
// Counting sheep...
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
  return arrayOfSheep.reduce((sum, sheep) => sheep ? sum + 1: sum, 0);
}

const count =countSheeps([true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]);

  console.log(count);

// ---------------------------

//DNA to RNA Conversion
// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

export function DNAtoRNA(dna: string): string {
  return dna.replace(/T/g, 'U');
}