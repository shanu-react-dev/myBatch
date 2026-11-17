console.log("Hello I am external JavaScript");

//! Ways to declare JS Variables
//? We can declare JS variables in 3 or four ways using keywords var, let and const or without any keyword also.
// var a = "Amarjeet";
// console.log(a);
// console.log(typeof a);
// let b = "Kumar";
// console.log(b);
// console.log(a + " " + b);
// const c = "Singh";
// console.log(a + " " + b + " " + c);
// var isMarried = false
// console.log(isMarried)
// console.log(typeof isMarried)
// let numberOfKids = null // intentionally absence of the value
// console.log(numberOfKids)
// console.log(typeof null)
// let girlfriend = undefined
// console.log(girlfriend)
// console.log(typeof undefined)
// let assets // absence of the value
// console.log(assets)

//! Difference between var let and const
// var username // declaration
// console.log(username) // undefined
// username = "Shanu" // initialization
// console.log(username)//Shanu
// var password = "Shanu123" // declaration and initialization
// console.log(password)

// var username // redeclaration
// console.log(username)
// username = "Sundari" // re-initialization
// console.log(username)

// var username = "Raghav" // Re-declaration and Re-initialization
// console.log(username)

let username;
console.log(username); // undefined (Absence of the value)
username = "Shanu";
console.log(username);
let age = 20;
console.log(age);
// let username; // Cannot redeclare block-scoped variable 'username'. //! redeclaration is not possible
username = "Sundari";
console.log(username);

// let username = "Shiva";
// console.log(username); //Uncaught SyntaxError: Identifier 'username' has already been declared

// const gender; //Missing initializer in const declaration
// console.log(gender);
const gender = "female";
console.log(gender);
// gender = "Female"; //Assignment to constant variable.
// const gender //Cannot redeclare block-scoped variable 'gender'.

//! Variables created using var keyword generally have global scope but variables created using let and const will have block scope.
