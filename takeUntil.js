/**
 * @param {string} array - Any array
 * @param {object} callback - Condition to stop break the recursion function
 * */


const takeUntil = function(array, callback) {
  const result = [];
  for (let value of array) {                    //Execute result.push until callback condition is reached
    if (!callback(value)) {
      result.push(value);
    } else {
      break;
    }
  }
  return result;
};

module.exports = takeUntil;
