/**
 * @param {object} theme - Object to search for the desired value in
 * @param {string} showName - Balue being searched for
 * */

const findKeyByValue = function(theme, showName) {     //Return the key that matches the entered value (showName) from within the theme (object)
  for (const key in theme) {
    if (showName === theme[key]) {
      return (key);
    }
  }
  return 'No Matches';
};

module.exports = findKeyByValue;
