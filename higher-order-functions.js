'use strict';

// ! Higher Order Functions (HOF) Syntax

// Callback function, passed as a parameter in the higher order function
function callbackFunction() {
  console.log('I am  a callback function');
}

// higher order function (HOF)
function higherOrderFunction(func) {
  console.log('I am higher order function');
  func();
}

higherOrderFunction(callbackFunction);
// The output will be:
// I am higher order function
// I am  a callback function

// ! The .map() Method
const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];

// add a string after each final participant
const announcements = finalParticipants.map(member => {
  return member + ' joined the contest.';
})

console.log(announcements);
// The output will be:
// [
//   'Taylor joined the contest.',
//   'Donald joined the contest.',
//   'Don joined the contest.',
//   'Natasha joined the contest.',
//   'Bobby joined the contest.'
// ]
