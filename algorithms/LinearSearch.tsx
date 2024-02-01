const haystack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function linearSearch(haystack: number[], needle: number) {
  for (let i = 0; i < haystack.length; i++) {
    if (needle === haystack[i]) {
      return true;
    }
  }

  return false;
}

console.log(linearSearch(haystack, 3));
console.log(linearSearch(haystack, 11));
