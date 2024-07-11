// Tests for equality and inequality with strings
var text1 = "apple";
var text2 = "orange";
console.log("Equality and Inequality Tests with Strings:");
console.log("Is text1 equal to \"apple\"? I predict True.");
console.log(text1 == "apple"); // True
console.log("Is text1 not equal to text2? I predict True.");
console.log(text1 != text2); // True
// Tests using the toLowerCase() function
var fruit = "APPLE";
var convertedFruit = fruit.toLowerCase();
console.log("\nTests using the toLowerCase() function:");
console.log("Is convertedFruit equal to \"apple\"? I predict True.");
console.log(convertedFruit == "apple"); // True
// Numerical tests
var num1 = 10;
var num2 = 5;
console.log("\nNumerical Tests:");
console.log("Is num1 greater than num2? I predict True.");
console.log(num1 > num2); // True
console.log("Is num1 less than or equal to num2? I predict False.");
console.log(num1 <= num2); // False
console.log("Is num1 equal to 10? I predict True.");
console.log(num1 == 10); // True
console.log("Is num2 not equal to 5? I predict False.");
console.log(num2 != 5); // False
// Tests using "and" and "or" operators
var x = 8;
var y = 12;
console.log("\nTests using 'and' and 'or' operators:");
console.log("Is x greater than 5 and less than 10? I predict True.");
console.log(x > 5 && x < 10); // True
console.log("Is y greater than 10 or less than 5? I predict False.");
console.log(y > 10 || y < 5); // False
// Test whether an item is in an array
var fruits = ["apple", "banana", "orange"];
console.log("\nTest whether an item is in an array:");
var fruitToCheck = "banana";
console.log("Is ".concat(fruitToCheck, " in the array? I predict True."));
console.log(fruits.includes(fruitToCheck)); // True
// Test whether an item is not in an array
console.log("Is \"grape\" not in the array? I predict True.");
console.log(!fruits.includes("grape")); // True
