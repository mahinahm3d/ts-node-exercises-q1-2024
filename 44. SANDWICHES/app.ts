// Define the make_sandwich function
function make_sandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    items.forEach(item => {
        console.log("- " + item);
    });
    console.log("Sandwich complete!\n");
}

// Call the make_sandwich function with different numbers of arguments
make_sandwich('Ham', 'Cheese');
make_sandwich('Turkey', 'Lettuce', 'Tomato');
make_sandwich('Peanut Butter', 'Jelly', 'Banana', 'Honey');
