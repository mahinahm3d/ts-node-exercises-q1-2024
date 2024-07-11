// Guest List
var guests = ["Osamu Dazai", "Fyodor Dostoevsky", "Tatsuhiko Shibusawa"];
// Print initial invitations
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to dinner with us tonight. Looking forward to meeting you!"));
});
// Name of the guest who can't make it
var unableToAttend = "Osamu Dazai";
console.log("Unfortunately, ".concat(unableToAttend, " can't make it to dinner."));
// Replace the guest and send new invitations
var newGuest = "Chūya Nakahara";
guests[guests.indexOf(unableToAttend)] = newGuest;
// Print updated invitations
console.log("\nUpdated Invitations:");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to dinner with us tonight. Looking forward to meeting you!"));
});
