const findKeyByValue = function(theme, showName) {

  for (const key in theme) {
    if (showName === theme[key]){
      return (key)
    } 
  }
  return('No Matches')
}

//const bestTVShowsByGenre = { 
//  sci_fi: "The Expanse",
//  comedy: "Brooklyn Nine-Nine",
//  drama:  "The Wire"
//};

module.exports = findKeyByValue;
