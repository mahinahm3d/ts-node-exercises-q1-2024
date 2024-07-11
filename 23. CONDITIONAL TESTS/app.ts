// This file assumes a 'tsconfig.json' file exists in the project root directory.
// The 'tsconfig.json' file is configured to:
//   - Target the 'es2016' ECMAScript version (compiler option: 'target: "es2016"')
//   - Use the 'es2016' library for type definitions (compiler option: 'lib: ["es2016"]')
// This configuration enables the use of methods like 'startsWith' and 'includes' on strings
// without encountering errors.

// Thw TypeScript code starts here...


let number = 10;
let text = "hello";
let condition = true;

// Test 1: Check if number is greater than 5
console.log("Is number > 5? I predict True.");
console.log(number > 5);  // True

// Test 2: Check if text is equal to "hello"
console.log("Is text == 'hello'? I predict True.");
console.log(text == 'hello');  // True

// Test 3: Check if number is less than or equal to 5
console.log("Is number <= 5? I predict False.");
console.log(number <= 5);  // False

// Test 4: Check if text is not equal to "world"
console.log("Is text != 'world'? I predict True.");
console.log(text != 'world');  // True

// Test 5: Check if condition is true
console.log("Is condition true? I predict True.");
console.log(condition);  // True

// Test 6: Check if number is equal to 15
console.log("Is number == 15? I predict False.");
console.log(number == 15);  // False

// Test 7: Check if text starts with 'he'
console.log("Does text start with 'he'? I predict True.");
console.log(text.startsWith('he'));  // True

// Test 8: Check if condition is false
console.log("Is condition false? I predict False.");
console.log(!condition);  // False

// Test 9: Check if number is not equal to 10
console.log("Is number != 10? I predict False.");
console.log(number != 10);  // False

// Test 10: Check if text includes 'world'
console.log("Does text include 'world'? I predict False.");
console.log(text.includes('world'));  // False
