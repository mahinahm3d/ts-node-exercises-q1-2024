// Define an array of favorite pizza names
var pizzas = ['Pepperoni', 'Margherita', 'BBQ Chicken'];
// Print each pizza name using a for loop
console.log("Printing pizza names:");
for (var _i = 0, pizzas_1 = pizzas; _i < pizzas_1.length; _i++) {
    var pizza = pizzas_1[_i];
    console.log(pizza);
}
// Modify the for loop to print statements about each pizza
console.log("\nPrinting pizza statements:");
for (var _a = 0, pizzas_2 = pizzas; _a < pizzas_2.length; _a++) {
    var pizza = pizzas_2[_a];
    console.log("I like ".concat(pizza, " pizza."));
}
// Print a concluding statement about loving pizza
console.log("\nI really love pizza!");
