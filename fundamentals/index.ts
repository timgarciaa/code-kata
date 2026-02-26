
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

betterThanAverage([6, 7, 8, 5, 5, 6, 4, 6], 7);