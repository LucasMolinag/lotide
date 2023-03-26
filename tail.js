const assertEqual = function(actual, expected) {

  if(actual === expected) {
  console.log(`Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`)
  }
}

const tail = function(arr) {
  if (arr.length === 0) {
    return []; // Return an empty array if the input array is empty
  }
  return arr.slice(1); // Return a new array with all items after the first one
}

assertEqual(tail([1, 2, 3] === [1, 2, 3])) // => false
assertEqual(tail([1, 2, 3] == [1, 2, 3])) // => false

