'use strict';

/**
 * Write a program that validates a Canadian Social Insurance Number (SIN)
 * Make sure to provide feedback to the user
 * - Please enter a valid 9-digit number
 * - SIN contains invalid characters
 * - Your SIN is valid
 *
 * 1. Validate the 9 characters
 */

// JavaScript interview exercises

const SIN = '123456789';

function containsOnlyDigits(input) {
  // The regex checks the whole string, not individual characters
  return /^\d{9}$/.test(input);
}

let input = SIN.trim();

if (input.length === 9) {
  if (containsOnlyDigits(input)) {
    console.log('SIN is valid');
  } else {
    console.log('SIN contains invalid characters');
  }
} else {
  console.log('Please enter a 9-digit number');
}
