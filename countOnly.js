/**
 * @param {array} allItems - First string to be compared
 * @param {object} expected - Second string to be compared
 * */

const countOnly = function(allItems, itemsToCount) {        //Counts ItemsToCount object inside of the allItems array
  const counts = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (counts[item]) {
        counts[item]++;
      } else {
        counts[item] = 1;
      }
    }
  }
  return counts;                                            //Returns an object containing the counts
};

module.exports = countOnly;