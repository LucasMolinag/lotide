const eqArrays = require(`./eqArrays`);                              //Use eqArrays to check if the arrays are equal

/**
 * @param {array} actual - Actual array to be compared
 * @param {array} expected - Expected result array to compare to
 * */


const assertArraysEqual = function(actual, expected) {               //This function takes in both arrays, runs them throguh eqArrays to compare and logs the result according to if it failed or passed
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;