/**
 * @param {object} object1 - Key to be searched
 * @param {object} callback - Function that will set the conditions of the key
 * */

const findKey = function(object, callback) {        //Find the key of an object that matches the condition of the callback function
  for (let key in object) {
    if (callback(object[key])) {                    //Callback executes here to loop through the values and find the desired key
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;