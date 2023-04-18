/**
 * @param {array} array - Any array
 * */

const head = function(array) {        //Returns the first element of an array
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
};

module.exports = head;