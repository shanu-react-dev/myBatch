//! Operators
//? 1 Arithmetic Operators
// let num1 = 10;
// let num2 = 20;

// let result = num1 + num2;
// console.log(result);

// let val1 = true;
// let val2 = false;

// result = val1 + val2; // Implicit coversion => 1 + 0
// console.log(result);

// let val3 = "";
// let val4 = 10;

// result = val3 + val4;
// console.log(result);
// console.log(typeof result);

// let val5 = true;
// let val6 = "Shanu";

// result = val5 + val6;
// console.log(result);

// let val7 = undefined;
// let val8 = 18;

// result = val7 + val8;
// console.log(result);
// console.log(typeof result); //! NaN is always a number

// let val9 = undefined;
// let val10 = true;
// result = val9 + val10;
// console.log(result);

// let val11 = undefined;
// let val12 = "Shanu";

// result = val11 + val12;
// console.log(result);

//! Truthy and falsy values
// console.log(Boolean(false));
// console.log(Boolean(0));
// console.log(Boolean(10));
// console.log(Boolean(""));
// console.log(Boolean("asg "));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));

// console.log(typeof null);
// console.log(typeof typeof null);

//! subtraction
let a = 10;
let b = "10";
console.log(a - b); // 10 - 10 = 0
b = "10a";
console.log(a - b);
let num1 = null;
let num2 = 10;
console.log(num2 - num1); // 10
console.log(Number(null));

//! multiplication
let num3 = 10;
let num4 = 5;
console.log(num3 * num4); //50

//! modulus
console.log(num4 % num3);
//! division
console.log(num4 / num3);
let num5 = 0;
let num6 = 9;
console.log(num5 / num6);
console.log(num6 / num5);
console.log(typeof (num6 / num5));

//! Exponential
let num7 = 9;
let num8 = 2;
console.log(num7 ** num8);
