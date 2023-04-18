/**
 * @param {array} array - Any array
 * */

const tail = function(array) {
  if (array.length === 0) {
    return [];
  }
  return array.slice(1);                //Removes first value of array and returns the rest
};

module.exports = tail;