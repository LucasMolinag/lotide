const flatten = function(array) {
  let flattenedArray = []
  for (let item of array) {
    if (Array.isArray(item)) {
      flattenedArray.push(...item);
    } else {
      flattenedArray.push(item);
    }
  }
  return flattenedArray;
}

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]