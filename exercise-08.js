'use strict';

/**
 * Write a function with one parameter that checks if an email address contains
 * an '@' and ends with either '.com' or '.ca'. Test your function with 3 or 4
 * different emails (without '@', with '.org', etc.).
 */

// const input = 'hello@stefanoturcarelli.com';
// const input = 'hello@stefanoturcarelli.ca';
// const input = 'hellostefanoturcarelli.com';
// const input = 'hellostefanoturcarelli.ca';
// const input = '     hellostefanoturcarelli.com    ';
// const input = '    hellostefanoturcarelli.ca    ';

// Function to validate @ symbol
// function containsAt(email) {
//   let trimmedEmail = email.trim();
//   if (!trimmedEmail.includes('@')) {
//     console.log(`Please enter a valid email (@ missing)`);
//   }
//   return trimmedEmail;
// }

// function containsValidTld(email) {
//   let lowercaseEmail = containsAt(email.toLowerCase());
//   if (lowercaseEmail.endsWith('.com') || lowercaseEmail.endsWith('.ca')) {
//     console.log(`Your email ${input.trim().toLowerCase()} is correct`);
//   } else {
//     console.log(`Please enter a .com or .ca email address`);
//   }
// }

// containsValidTld(input);

// * Another approach
// Function to validate input, return email

function validate(userEmail) {
  let email = userEmail.trim().toLowerCase();
  if (email.length > 0) {
    if (
      email.includes('@') &&
      (email.endsWith('.com') || email.endsWith('.ca'))
    ) {
      return `${email} is valid`;
    }
  }
  return `X ${email} is not valid`;
}

console.log(validate('hello@email.com'));
console.log(validate('hello@email.ca'));
console.log(validate('      hello@email.com    '));
console.log(validate('     hello@email.ca     '));
console.log(validate('hello@email.org'));
console.log(validate('     hello@email.org    '));
