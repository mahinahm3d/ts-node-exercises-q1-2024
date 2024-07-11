// Define the show_magicians function
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Define the make_great function
function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    magicians.forEach(magician => {
        great_magicians.push(`${magician} the Great`);
    });
    return great_magicians;
}

// Create an array of magician names
let magician_names: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];

// Call make_great to modify the magician_names array
let great_magicians: string[] = make_great(magician_names);

// Show the modified list of magicians
show_magicians(great_magicians);
