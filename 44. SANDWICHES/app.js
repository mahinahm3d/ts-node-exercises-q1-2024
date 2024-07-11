// Define the make_sandwich function
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items:");
    items.forEach(function (item) {
        console.log("- " + item);
    });
    console.log("Sandwich complete!\n");
}
// Call the make_sandwich function with different numbers of arguments
make_sandwich('Ham', 'Cheese');
make_sandwich('Turkey', 'Lettuce', 'Tomato');
make_sandwich('Peanut Butter', 'Jelly', 'Banana', 'Honey');
