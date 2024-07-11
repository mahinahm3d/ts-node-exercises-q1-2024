// This file assumes a 'tsconfig.json' file exists in the project root directory.
// The 'tsconfig.json' file is configured to:
//   - Target the 'es2016' ECMAScript version (compiler option: 'target: "es2016"')
//   - Use the 'es2016' library for type definitions (compiler option: 'lib: ["es2016"]')
// This configuration enables the use of methods like 'startsWith' and 'includes' on strings
// without encountering errors.

// The TypeScript code starts here...


// Tests for equality and inequality with strings
let text1 = "apple";
let text2 = "orange";

console.log("Equality and Inequality Tests with Strings:");
console.log(`Is text1 equal to "apple"? I predict True.`);
console.log(text1 == "apple");  // True

console.log(`Is text1 not equal to text2? I predict True.`);
console.log(text1 != text2);  // True


// Tests using the toLowerCase() function
let fruit = "APPLE";
let convertedFruit = fruit.toLowerCase();

console.log("\nTests using the toLowerCase() function:");
console.log(`Is convertedFruit equal to "apple"? I predict True.`);
console.log(convertedFruit == "apple");  // True


// Numerical tests
let num1 = 10;
let num2 = 5;

console.log("\nNumerical Tests:");
console.log(`Is num1 greater than num2? I predict True.`);
console.log(num1 > num2);  // True

console.log(`Is num1 less than or equal to num2? I predict False.`);
console.log(num1 <= num2);  // False

console.log(`Is num1 equal to 10? I predict True.`);
console.log(num1 == 10);  // True

console.log(`Is num2 not equal to 5? I predict False.`);
console.log(num2 != 5);  // False


// Tests using "and" and "or" operators
let x = 8;
let y = 12;

console.log("\nTests using 'and' and 'or' operators:");
console.log(`Is x greater than 5 and less than 10? I predict True.`);
console.log(x > 5 && x < 10);  // True

console.log(`Is y greater than 10 or less than 5? I predict False.`);
console.log(y > 10 || y < 5);  // False


// Test whether an item is in an array
let fruits = ["apple", "banana", "orange"];

console.log("\nTest whether an item is in an array:");
let fruitToCheck = "banana";
console.log(`Is ${fruitToCheck} in the array? I predict True.`);
console.log(fruits.includes(fruitToCheck));  // True

// Test whether an item is not in an array
console.log(`Is "grape" not in the array? I predict True.`);
console.log(!fruits.includes("grape"));  // True
