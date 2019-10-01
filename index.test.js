const { permute, product } = require("./index");

test("permute an empty set", () => {
  const a = new Set(permute([]));
  const b = new Set([[]]);
  expect(a).toEqual(b);
});

test("permute a set of one elements", () => {
  const a = new Set(permute([1]));
  const b = new Set([[1]]);
  expect(a).toEqual(b);
});

test("permute a bigger set", () => {
  const x = permute([1, 2, 3]);
  expect(x).toHaveLength(6);

  const a = new Set(x);
  const b = new Set([
    [1, 2, 3],
    [2, 1, 3],
    [2, 3, 1],
    [1, 3, 2],
    [3, 1, 2],
    [3, 2, 1]
  ]);
  expect(a).toEqual(b);
});

test("product that involves an empty set", () => {
  expect(product([[], [1, 2]])).toEqual([]);
});

test("product of a set of one element and a bigger set", () => {
  const x = product([[1], [2, 3]]);
  expect(x).toHaveLength(2);

  const a = new Set(x);
  const b = new Set([[1, 2], [1, 3]]);
  expect(a).toEqual(b);
});

test("product of bigger sets", () => {
  const x = product([[1, 2], [3, 4, 5]]);
  expect(x).toHaveLength(6);

  const a = new Set(x);
  const b = new Set([[1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]]);
  expect(a).toEqual(b);
});
