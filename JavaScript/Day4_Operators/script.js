//! Assignment Operator
let a = 10;
let b = 5;

// a = a + b;

// console.log(a);

// a += b;
// console.log(a);
// b += a;
// console.log(b);
// console.log(a);

// a -= b;
// console.log(a); // 5
// b -= a; // 5 - 5
// console.log(b);

// a *= b;
// console.log(a);
// b *= 9;
// console.log(b);

// a /= b;
// console.log(a);

// b /= a;
// console.log(b);

// a %= b;
// console.log(a);
// b %= a;
// console.log(b); //NaN

// a **= b;
// console.log(a);

// b %= a;
// console.log(b);
a = 7;
b = 8;
// a *= b - 5;
let expr = a + b - (b - a) * 3; //
console.log(expr);

expr = 5 * b - (2 - a + b) * 3; // 5 * 8 - (2- 7 + 8) * 3 => 40 -
console.log(expr);
