const without = function(source, itemsToRemove) {
  let resultArray = []
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
        resultArray.push(item);
    }
  }
  return resultArray;
}

module.exports = without;