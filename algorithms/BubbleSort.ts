function bubbleSort(arr: number[]) {
  for (let i = 0; i < arr.length; ++i) {
    console.log(i);
    for (let j = 0; j < arr.length - 1 - i; ++j) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

const arr: number[] = [5, 4, 3, 2, 1];
console.log(bubbleSort(arr));

const arr2: number[] = [5, 4, 3, 2, 1, 9, 10];
console.log(bubbleSort(arr2));
