// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const counts = {}; 
  
  for( const item of allItems) {
    if (itemsToCount[item]) {
      if (counts[item]) {
        counts[item]++;
      } else {
        counts[item] = 1;
      }
  }
}

  return counts;
};