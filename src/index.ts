export {};

// EXAMPLE 1 - Convert a Number to a String in TypeScript

const num = 100;

// 👇️ const str: string
const str = String(num);

console.log(str); // 👉️ "100"
console.log(typeof str); // 👉️ "string"

// ---------------------------------------------------

// // EXAMPLE 2 - Converting a negative number to a string

// const num = -100;

// const str = String(num);

// console.log(str); // 👉️ "-100"
// console.log(typeof str); // 👉️ "string"

// ---------------------------------------------------

// // EXAMPLE 3 - Converting a floating-point number to a string

// const num = 14.5;

// const str = String(num);
// console.log(str); // 👉️ "14.5"

// ---------------------------------------------------

// // EXAMPLE 4 -  Convert a Number to a String using the `toString()` method

// const num = 100;

// const str = num.toString();

// console.log(str); // 👉️ "100"
// console.log(typeof str); // 👉️ "string"

// ---------------------------------------------------

// // EXAMPLE 5 - Wrap the number in parentheses before calling toString()

// const str = (100).toString();

// console.log(str); // 👉️ "100"
// console.log(typeof str); // 👉️ "string"
