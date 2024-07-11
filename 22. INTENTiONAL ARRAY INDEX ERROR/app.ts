// Intentional Error (Array Index Error)
let fruits = ["Apple", "Banana", "Orange"];

// Try to access an index that doesn't exist
// This will cause an error since index 3 doesn't exist in a 3-element array
console.log(fruits[3]);  // Produces an error (IndexError: Index out of bounds)

// Correcting the error to prevent program termination
// Normally, you would handle this with error-checking before accessing an index
if (fruits.length > 3) {
    console.log(fruits[3]);  // Correct way to access if index exists
} else {
    console.log("Index does not exist.");
}
