/**
 * @param {array} array - Array to flatten
 * */

const flatten = function(array) {       //Fatten nested arrays into a single-level array
  let flattenedArray = [];
  for (let item of array) {
    if (Array.isArray(item)) {          //Array.isArray will loop through each element to define if it's an array
      flattenedArray.push(...item);     //the "..." spreads the element and adds them to the flattenedArray
    } else {
      flattenedArray.push(item);
    }
  }
  return flattenedArray;
};

module.exports = flatten;