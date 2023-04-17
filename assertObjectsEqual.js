const eqObjects = require(`./eqObjects`);
const util = require('util');

const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${util.inspect(actual)} === ${util.inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${util.inspect(actual)} !== ${util.inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;