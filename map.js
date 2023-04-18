/**
 * @param {array} array - Any array with the value to be mapped
 * @param {object} callback - Condition to map the selected value
 * */

const map = function(array, callback) {
  const results = [];
  for (let item of array) {                   //Iterates through the entered array and pushes the item to the results array
    results.push(callback(item));
  }
  return results;
};

module.exports = map;