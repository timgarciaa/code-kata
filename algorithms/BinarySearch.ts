const haystack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(haystack: number[], needle: number): boolean {
  let lo = 0;
  let hi = haystack.length;

  do {
    const m = Math.floor(lo + (hi - lo) / 2);
    const v = haystack[m];
    if (v === needle) {
      return true;
    } else if (v > needle) {
      hi = m;
    } else {
      lo = m + 1;
    }
  } while (lo < hi);

  return false;
}

console.log(binarySearch(haystack, 3));
console.log(binarySearch(haystack, 11));
