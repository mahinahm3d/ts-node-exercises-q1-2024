// Define the show_magicians function
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Define the make_great function
function make_great(magicians) {
    var great_magicians = [];
    magicians.forEach(function (magician) {
        great_magicians.push("".concat(magician, " the Great"));
    });
    return great_magicians;
}
// Create an array of magician names
var magician_names = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
// Make a copy of magician_names
var magician_names_copy = magician_names.slice();
// Call make_great to modify the magician_names_copy array
var great_magicians = make_great(magician_names_copy);
// Show the original list of magicians
console.log("Original Magicians:");
show_magicians(magician_names);
// Show the modified list of magicians
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
