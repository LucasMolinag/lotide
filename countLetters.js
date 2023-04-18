/**
 * @param {string} actual - Any sentence
 * */

const countLetters = function(sentence) {       //Count how many times each letter is used in the sentence
  const counts = {};
  for (const letter of sentence) {              //This loop will count how many times each letter appears
    if (letter !== " ") {
      if (counts[letter]) {
        counts[letter]++;
      } else {
        counts[letter] = 1;
      }
    }
  }
  return counts;
};

module.exports = countLetters;