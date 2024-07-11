//1: Using forEach loop
var friendName = ["Alice", "Bob", "Charlie", "David"];
var message = "Hey, how are you doing today?, ";
// Print personalized messages using forEach
friendName.forEach(function (name) {
    console.log("".concat(message).concat(name, "?"));
});
//2: Using individual console.log statements
console.log("hello ".concat(friendName[0], ", Hey, how are you doing today?"));
console.log("hello ".concat(friendName[1], ", Hey, how are you doing today?"));
console.log("hello ".concat(friendName[2], ", Hey, how are you doing today?"));
console.log("hello ".concat(friendName[3], ", Hey, how are you doing today?"));
