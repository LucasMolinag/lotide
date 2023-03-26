const assertEqual = function(actual, expected) {

  if(actual === expected) {
  console.log(`Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`)
  }
}

const tail = function(arr) { // not working - arr.slice is not a function
  if (arr.length === 0) {
    return [];
  }
  return arr.slice(1);
}

assertEqual(tail([1, 2, 3]), [1, 2, 3]) // => false
assertEqual(tail([1, 2, 3]), [1, 2, 3]) // => false

