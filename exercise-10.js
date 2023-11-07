'use strict';

/**
 * Write a function that converts a decimal number to binary
 * 8 -> 1000
 * 15 -> 1111
 * 145 -> 1001001
 * 255 -> 11111111 (8 bits)
 */

function toBinary(decimal) {
  let binary = [];
  let bit = 0;
  while (decimal > 0) {
    bit = decimal % 2;
    decimal = Math.trunc(decimal / 2);
    binary.unshift(bit);
  }
  return binary.join('');
}

console.log(toBinary(8));
console.log(toBinary(15));
console.log(toBinary(145));
console.log(toBinary(255));
console.log(toBinary(355));

console.log();

let a = 8;
let b = 15;
let c = 145;
let d = 255;
let e = 300;
console.log(a.toString(2));
console.log(b.toString(2));
console.log(c.toString(2));
console.log(d.toString(2));
console.log(e.toString(2));
