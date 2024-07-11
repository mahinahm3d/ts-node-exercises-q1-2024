// Define the show_magicians function
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Create an array of magician names
var magician_names = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
// Call the show_magicians function with the array
show_magicians(magician_names);
