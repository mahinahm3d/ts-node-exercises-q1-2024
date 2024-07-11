// Define an array of animals sharing a common characteristic
var animals = ['dog', 'cat', 'rabbit'];
// Print each animal using a for loop
console.log("Printing animal names:");
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
// Modify the for loop to print statements about each animal
console.log("\nPrinting animal statements:");
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    console.log("A ".concat(animal, " would make a great pet."));
}
// Print a concluding statement about the common characteristic
console.log("\nAny of these animals would make a great pet!");
