// arr is a flat array, e.g. [1, 2, 3]
const permute = arr => {
  if (arr.length == 0) return [[]];
  return permute(arr.slice(1))
    .map(s => {
      const x = [];
      for (let i = 0; i <= s.length; i++) {
        let t = s.slice();
        t.splice(i, 0, arr[0]);
        x.push(t);
      }
      return x;
    })
    .flat();
};

// a is an array of arrays, e.g. [[1, 2], [3, 4]]
const product = a => {
  if (a.length == 0) return [[]];
  return a[0].map(x => product(a.slice(1)).map(y => [x, ...y])).flat();
};

module.exports = { permute, product };
