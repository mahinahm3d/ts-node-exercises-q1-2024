//Manual Accessing with Array Index Methord: Directly access array elements using their index. Suitable for small arrays or specific elements.

let friendNames = ["Alice", "Bob", "Charlie", "David"];
console.log(friendNames[0]);
console.log(friendNames[1]);
console.log(friendNames[2]);
console.log(friendNames[3]);


// The forEach loop Methord: Iterates over all elements and performs an action. Best for executing side effects like logging.

// Names
let names = ["Alice", "Bob", "Charlie", "David"];

// Print each person's name
names.forEach(name => {
    console.log(name); // Output: Alice, Bob, Charlie, David
});
