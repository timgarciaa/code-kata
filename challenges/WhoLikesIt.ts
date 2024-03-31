function likes(names: string[]) {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (names.length > 3) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

// Clever approach:
function likes2(names: string[]) {
  return {
    0: "no one likes this",
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  }[Math.min(4, names.length)];
}

console.log(likes2([]));
console.log(likes2(["Peter"]));
console.log(likes2(["Jacob", "Alex"]));
console.log(likes2(["Max", "John", "Mark"]));
console.log(likes2(["Alex", "Jacob", "Mark", "Max"]));
console.log(likes2(["Alex", "Jacob", "Mark", "Max", "John"]));
console.log(likes2(["Alex", "Jacob", "Mark", "Max", "John", "Peter"]));
console.log(likes2(["Alex", "Jacob", "Mark", "Max", "John", "Peter", "Paul"]));
