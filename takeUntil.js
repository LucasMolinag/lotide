const takeUntil = function(array, callback) {
  const result = [];
  for (let value of array) {
    if (!callback(value)) {
      result.push(value);
    } else {
      break;
    }
  }
  return result;
};

module.exports = takeUntil;
