// Choose a color for an alien as you
// did in Exercise 25, and write an if-else chain.
var alien_color = "green";
// If the alien's color is green, print a statement that
// the player just earned 5 points for shooting the alien.
if (alien_color == "green") {
    console.log("The player just earned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points.");
}
// Changing the alien's color to red
alien_color = "red";
// Check the alien's color again and print the appropriate statement
if (alien_color == "green") {
    console.log("The player just earned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points.");
}
