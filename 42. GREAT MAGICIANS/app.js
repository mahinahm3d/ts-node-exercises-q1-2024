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
// Call make_great to modify the magician_names array
var great_magicians = make_great(magician_names);
// Show the modified list of magicians
show_magicians(great_magicians);
