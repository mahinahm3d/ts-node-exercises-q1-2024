// Guest List (continued from Exercise 15)
var guests = ["Fyodor Dostoevsky", "Tatsuhiko Shibusawa", "Chūya Nakahara"]; // Updated list from Exercise 15
// Inform about the bigger dinner table
console.log("Good news! We found a bigger dinner table!");
// Add new guests
guests.unshift("Atsushi Nakajima"); // Add at the beginning
guests.splice(Math.ceil(guests.length / 2), 0, "Kyōka Izumi "); // Add in the middle
guests.push("Ryūnosuke Akutagawa"); // Add at the end
// Print new invitations
console.log("\nUpdated Invitations:");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to dinner with us tonight. Looking forward to meeting you!"));
});
