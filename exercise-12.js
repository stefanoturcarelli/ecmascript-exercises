/**
 * Your code must remove commas and white spaces before starting the
 * comparisson, as well as ignore the case of the letters.
 *
 * 'A man, a plan, a canal, Panama' -> amanaplanacatacanalpanama
 *
 * How can I get rid of spaces, commas and change the case of a string?
 * I can use regex that will look for one or more spaces and one or more
 * commas.
 */

let text = 'cat, bat, sat, fat';
let pattern = /.at/g; // regex or regular expression

let matches = text.match(pattern);
console.log(matches);

let blue = 'The blue man has a blue house and a blue car';
let green = blue.replace(/blue/g, 'green');
console.log(green);

// post networking tips on groups

function isPalindrome(string) {
  let input = string.replace(/\s+|,\s+/g, '').toLowerCase(); // look for commas and blank spaces
  let reverse = input.split('').reverse().join('');
  return input === reverse;
}

let strOne = 'A man, a plan, a canal, Panama';
let strTwo = 'Evil is a name of a foeman, as I live';
let strThree = 'A santa at NASA';
let strFour = 'Say hello to my little friend';
let strFive = 'Do geese see god';

console.log(isPalindrome(strOne));
console.log(isPalindrome(strTwo));
console.log(isPalindrome(strThree));
console.log(isPalindrome(strFour));
console.log(isPalindrome(strFive));
console.log(isPalindrome('Mom'));
