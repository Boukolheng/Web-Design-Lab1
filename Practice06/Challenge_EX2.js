function reverseArray(array) {
  let reversed = [];

  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }

  return reversed;
}

console.log(reverseArray([14, 15, 16, 20]));
console.log(reverseArray([5, 4, 3, 2, 1]));
console.log(reverseArray([]));
