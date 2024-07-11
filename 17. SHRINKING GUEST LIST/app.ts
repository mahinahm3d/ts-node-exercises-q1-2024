// Guest List (continued from Exercise 16)
let guests = [
    "Atsushi Nakajima",
    "Fyodor Dostoevsky",
    "Kyōka Izumi",
    "Tatsuhiko Shibusawa",
    "Chūya Nakahara",
    "Ryūnosuke Akutagawa"
];
  
// Inform that only two guests can be invited
console.log("Unfortunately, the new dinner table won't arrive in time. We can only invite two people for dinner.");

// Remove guests until only two names remain
while (guests.length > 2) {
    let removedGuest = guests.pop();  // Remove the last guest
    console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}

// Print invitations to the remaining guests
console.log("\nInvitations to remaining guests:");
guests.forEach(guest => {
    console.log(`Dear ${guest}, you are still invited to dinner with us tonight.`);
});

// Remove the last two names from the list
guests.pop();
guests.pop();

// Print to ensure the list is empty
console.log("\nFinal guest list:", guests);