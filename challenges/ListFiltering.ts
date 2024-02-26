function filterList(arr: any) {
  const numbers = [];

  //using loop
  // for (const x of arr) {
  //   if (typeof x === "number") {
  //     numbers.push(x);
  //   }
  // }

  // return numbers;

  //using filter
  return arr.filter((x: any) => typeof x === "number");
}

console.log(filterList([1, 2, "a", "b"]));
