// Define an array of animals sharing a common characteristic
let animals = ['dog', 'cat', 'rabbit'];

// Print each animal using a for loop
console.log("Printing animal names:");
for (let animal of animals) {
    console.log(animal);
}

// Modify the for loop to print statements about each animal
console.log("\nPrinting animal statements:");
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}

// Print a concluding statement about the common characteristic
console.log("\nAny of these animals would make a great pet!");
