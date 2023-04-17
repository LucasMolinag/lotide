# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @lucasmolinag/lotide`

**Require it:**

`const _ = require('@lucasmolinag/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: The assertArraysEqual function takes in two arrays and uses the eqArrays function to check if they are equal. If they are, it prints a success message to the console. If they are not, it prints a failure message to the console.
* `assertEqual(actual, expected)`:  The assertEqual function takes in two values and checks if they are equal. If they are, it prints a success message to the console. If they are not, it prints a failure message to the console.
* `assertObjectEqual(actual, expected)`: The assertObjectsEqual function takes in two objects and uses the eqObjects function to check if they are equal. If they are, it prints a success message to the console. If they are not, it prints a failure message to the console.
* `countLetters(sentence)`: The countLetters function takes in a string and returns an object that contains the counts of each letter in the string.
* `countOnly(allItems, itemsToCount)`: The countOnly function takes in an array of items (allItems) and an object (itemsToCount) that specifies which items to count. It returns an object that contains the counts of each item that was specified in the itemsToCount object.
* `eqArrays(arr1, arr2)`: The eqArrays function compares two arrays and returns true if they are equal and false otherwise.
* `eqObjects(object1, object2)`: The eqObjects function compares two objects to see if they are equal by checking if they have the same keys and values.
* `findKey(object, callback)`: The findKey function takes in an object and a callback function, and returns the first key for which the callback function returns a truthy value.
* `findKeyByValue(object, callback)`: The findKey function takes in an object and a callback function, and returns the first key for which the callback function returns a truthy value.
* `flatten(array)`: The flatten function takes in an array and returns a new array with all the elements from the input array flattened into a single level. If an element of the input array is itself an array, its elements are included in the output array as well.
* `head(array)`: The head function takes an array as input and returns the first element of the array.
* `letterPositions(sentence)`: The letterPositions function takes a string as an input and returns an object that has keys corresponding to each letter in the string and values that are arrays of the positions where that letter occurs in the string.
* `map(array, callback)`: This is a higher-order function called map that takes in an array and a callback function as arguments. It then applies the callback function to each element in the array and returns a new array with the transformed values.
* `middle(array)`: The middle function returns the middle element(s) of an array. If the array has an even number of elements, it returns an array with the two middle elements. If the array has an odd number of elements, it returns an array with the middle element. If the array has one or two elements, it returns an empty array.
* `tail(array)`: The tail function returns a new array with all the elements of the input array except for the first one.
* `takeUntil(array, callback)`: This function takes an array and a callback function as input, and returns a new array that includes all elements of the input array until the callback returns a truthy value.
* `without(source, itemsToRemove)`: This function takes in two arrays: source and itemsToRemove. It returns a new array with all the elements from the source array, except for those that are also in the itemsToRemove array.