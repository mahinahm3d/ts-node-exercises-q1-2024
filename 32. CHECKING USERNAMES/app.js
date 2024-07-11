// Define current_users and new_users arrays
var current_users = ['alice', 'bob', 'charlie', 'david', 'emma'];
var new_users = ['charlie', 'emily', 'john', 'Alice', 'emma'];
// Convert all usernames in current_users to lowercase for case insensitive comparison
var current_users_lower = current_users.map(function (username) { return username.toLowerCase(); });
// Loop through new_users to check for uniqueness
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    // Convert new_user to lowercase for case insensitive comparison
    var new_user_lower = new_user.toLowerCase();
    // Check if new_user_lower is in current_users_lower
    if (current_users_lower.includes(new_user_lower)) {
        console.log("Sorry, the username '".concat(new_user, "' is already taken. Please choose a different username."));
    }
    else {
        console.log("Congratulations, the username '".concat(new_user, "' is available!"));
    }
}
