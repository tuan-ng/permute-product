# PERMUTATION AND PRODUCT

Recently while writing a Javascript program I figured out I needed to be able
to compute all the permutations of the elements of a given array, for example

```
// array is [1, 2]
[ [ 1, 2 ], [ 2, 1 ] ]
// array  is [1, 2, 3]
 [
  [ 1, 2, 3 ],
  [ 2, 1, 3 ],
  [ 2, 3, 1 ],
  [ 1, 3, 2 ],
  [ 3, 1, 2 ],
  [ 3, 2, 1 ]
]
// array is [1, 2, 3, 4 ]
[
  [ 1, 2, 3, 4 ], [ 2, 1, 3, 4 ],
  [ 2, 3, 1, 4 ], [ 2, 3, 4, 1 ],
  [ 1, 3, 2, 4 ], [ 3, 1, 2, 4 ],
  [ 3, 2, 1, 4 ], [ 3, 2, 4, 1 ],
  [ 1, 3, 4, 2 ], [ 3, 1, 4, 2 ],
  [ 3, 4, 1, 2 ], [ 3, 4, 2, 1 ],
  [ 1, 2, 4, 3 ], [ 2, 1, 4, 3 ],
  [ 2, 4, 1, 3 ], [ 2, 4, 3, 1 ],
  [ 1, 4, 2, 3 ], [ 4, 1, 2, 3 ],
  [ 4, 2, 1, 3 ], [ 4, 2, 3, 1 ],
  [ 1, 4, 3, 2 ], [ 4, 1, 3, 2 ],
  [ 4, 3, 1, 2 ], [ 4, 3, 2, 1 ]
]
```

and so on. Taking permutations can be understood as a recursive process and I
wrote a little function, called `permute`.

I also needed to take products, e.g.

```
// an array of arrays [[1], [2, 3]]
[ [ 1, 2 ], [ 1, 3 ] ]
// an array of  arrays [[1, 2], [3, 4]]
[ [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ] ]
```

This also can be understood as a recursive process, and I wrote a little
function called `product`.

Some simple tests of these functions using **Set** are shown in the test file.
