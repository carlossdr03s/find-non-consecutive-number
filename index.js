function firstNonConsecutive(arr) {
  if (arr.length <= 1) {
    return null;
  }

  for (let i = 0; i < arr.length; i++) {
    const firstNumber = arr[i];
    const secondNumber = arr[i + 1] === undefined ? arr[arr.length -1] : arr[i + 1];

    if (firstNumber + 1 !== secondNumber) {
      return firstNumber + 1;
    }
  }

  return arr;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 5, 7]));
 

module.exports = firstNonConsecutive;
 