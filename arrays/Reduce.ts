const fruits = ["apple", "orange", "banana"];

const result = fruits.reduce((current, next) => current + " " + next, "test ");

console.log(result);
// test apple orange banana
