const eqObjects = require(`./eqObjects`);                           //Use eqObjects to check if the objects are equal
const util = require('util');                                       //Import the util module to use the inspect function

/**
 * @param {object} actual - First object to be compared
 * @param {object} expected - Second object to be compared
 * */

const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${util.inspect(actual)} === ${util.inspect(expected)}`); //util.inspect() converts objects to strings to display in the console
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${util.inspect(actual)} !== ${util.inspect(expected)}`); //util.inspect() converts objects to strings to display in the console
  }
};

module.exports = assertObjectsEqual;