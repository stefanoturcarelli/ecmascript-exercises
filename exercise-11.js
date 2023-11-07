'use strict';

/**
 * Write a program that copies and prints all floating point numbers from
 * the following 2D array. Create a new array with the floating numbers.
 */

const multiArr = [
  [3, 4.7, 1.3, 5],
  [9, 5.8, 7, 3.9],
  [6, 2.5, 1, 2.4],
];

console.log(multiArr.flat());
const floatArr = [];

multiArr.flat().forEach((element) => {
  if (!Number.isInteger(element)) {
    floatArr.push();
  }
});

console.log(floatArr);
