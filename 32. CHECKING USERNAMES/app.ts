// Define current_users and new_users arrays
let current_users: string[] = ['alice', 'bob', 'charlie', 'david', 'emma'];
let new_users: string[] = ['charlie', 'emily', 'john', 'Alice', 'emma'];

// Convert all usernames in current_users to lowercase for case insensitive comparison
let current_users_lower = current_users.map(username => username.toLowerCase());

// Loop through new_users to check for uniqueness
for (let new_user of new_users) {
    // Convert new_user to lowercase for case insensitive comparison
    let new_user_lower = new_user.toLowerCase();

    // Check if new_user_lower is in current_users_lower
    if (current_users_lower.includes(new_user_lower)) {
        console.log(`Sorry, the username '${new_user}' is already taken. Please choose a different username.`);
    } else {
        console.log(`Congratulations, the username '${new_user}' is available!`);
    }
}
