function sum(a, b) {
  return a + b;
}

function make(...args) {
  const arr = [...args];
  return function auxiliary(...arg) {
    if (typeof arg[0] !== 'function') {
      arr.push(...arg);
      return auxiliary;
    }
    return arr.reduce(sum);
  };
}
make(15)(34, 21, 666)(41)(sum);
