const findKeyByValue = function(theme, showName) {

  for (const key in theme) {
    if (showName === theme[key]) {
      return (key);
    }
  }
  return 'No Matches';
};

module.exports = findKeyByValue;
