function sumOfOther(arr) {
  const sum = arr.reduce((a, b) => a + b);
  return arr.map(el => sum - el);
}
sumOfOther([2, 3, 4, 1]);
