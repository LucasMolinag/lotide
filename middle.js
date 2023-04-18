/**
 * @param {array} array - Any array
 * */

const middle = function(array) {
  const middleIndex = Math.floor(array.length / 2);             //This equation finds the middle point of the array and rounds it

  if (array.length === 1 || array.length === 2) {               //Condition for arrays that are too short
    return [];
  } else if (array.length % 2 === 0) {                          //Condition for even arrays
    return [array[middleIndex - 1], array[middleIndex]];        //This ensures we return the two middle numbers when the array is even
  } else {
    return [array[middleIndex]];
  }
};

module.exports = middle;