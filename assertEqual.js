/**
 * @param {string} actual - First string to be compared
 * @param {string} expected - Second string to be compared
 * */

const assertEqual = function(actual, expected) {                 //This function will compare two strings - it is usually used by other functions as a validation test
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

module.exports = assertEqual;