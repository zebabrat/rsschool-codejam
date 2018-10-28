function recursion(tree) {
  const resultArr = [];

  function binaryTree(obj, n) {
    if (resultArr[n]) {
      resultArr[n] = resultArr.concat([obj.value]);
    } else {
      resultArr[n] = [obj.value];
    }
    if (obj.left) binaryTree(obj.left, n + 1);
    if (obj.right) binaryTree(obj.right, n + 1);
  }
  binaryTree(tree, 0);
  return resultArr;
}
const tree = {
  value: 100,
  left: {
    value: 90,
    left: { value: 70 },
    right: { value: 99 },
  },
  right: { value: 120, left: { value: 110 }, right: { value: 130 } },
};
recursion(tree);
