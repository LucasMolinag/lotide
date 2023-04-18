/**
 * @param {array} source - Any array
 * @param {array} itemsToRemove - Array that will list the items not to be pushed to new array
 * */

const without = function(source, itemsToRemove) {             //Creates a new array without the "itemsToRemove"
  let resultArray = [];                         
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {                      //Conditional that pushes values not included in "itemsToRemove" to new array
      resultArray.push(item);
    }
  }
  return resultArray;
};

module.exports = without;