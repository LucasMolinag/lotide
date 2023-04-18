/**
 * @param {array} arr1 - First string to be compared
 * @param {array} arr2 - Second string to be compared
 * */

const eqArrays = function(arr1, arr2) {               //Compare both entered arrays
  for (let i = 0; i < arr1.length; i++) {             //This loop will compare each value inside both arrays
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

module.exports = eqArrays;