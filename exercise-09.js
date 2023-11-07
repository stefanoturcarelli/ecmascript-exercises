'use strict';
/**
 * Write a program that gets the average of a group of numbers and finds the
 * numbers above the average. Use array functional methods (filter(), map(),
 * reducer(), etc.) instead of 'for' loops.
 */

const numbers = [
  4, 7, 24, 9, 17, 34, 6, 22, 19, 13, 5, 40, 3, 28, 39, 11, 1, 37, 25, 36,
];

// Get the average
const reducer = (accumulator, element) => accumulator + element;
let average = numbers.reduce(reducer, 0) / numbers.length; // 0 -> start from 0
// Get numbers over the average
const condition = (number) => number > average;
let aboveAverage = numbers.filter(condition).sort().join(', ');
console.log(`Average: ${average}\n Numbers over ${average}: ${aboveAverage}`);
