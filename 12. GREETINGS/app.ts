//1: Using forEach loop
let friendName = ["Alice", "Bob", "Charlie", "David"];
let message = "Hey, how are you doing today?, ";

// Print personalized messages using forEach
friendName.forEach(name => {
    console.log(`${message}${name}?`);
});

//2: Using individual console.log statements
console.log(`hello ${friendName[0]}, Hey, how are you doing today?`);
console.log(`hello ${friendName[1]}, Hey, how are you doing today?`);
console.log(`hello ${friendName[2]}, Hey, how are you doing today?`);
console.log(`hello ${friendName[3]}, Hey, how are you doing today?`);
