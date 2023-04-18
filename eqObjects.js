const eqArrays = require('./eqArrays');

/**
 * @param {object} object1 - First object to be compared
 * @param {object} object2 - Second object to be compared
 * */

const eqObjects = function(object1, object2) {                 //This function compared two objects and their values
  const keys1 = Object.keys(object1);                          //Create arrays of keys for the objects
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {                         //Compare the length of the arrays in the objects
    return false;
  }
  for (const key of keys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    if (Array.isArray(value1) && Array.isArray(value2)) {       //This if statement checks if both values are arrays using Array.isArray()
      if (!eqArrays(value1, value2)) {                          //Invoke the eqArrays function to compare the values now
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;