const flatten = function(array) {
  let flattenedArray = [];
  for (let item of array) {
    if (Array.isArray(item)) {
      flattenedArray.push(...item);
    } else {
      flattenedArray.push(item);
    }
  }
  return flattenedArray;
};

module.exports = flatten;