/**
 * @param {string} sentence - Any sentence
 * */

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {       //Loops through each letter in "sentence" and pushes or updates the counters in the created "results" array
    const letter = sentence[i];
    if (letter !== " ") {
      if (!results[letter]) {
        results[letter] = [i];
      } else {
        results[letter].push(i);
      }
    }
  }

  return results;
};

module.exports = letterPositions;