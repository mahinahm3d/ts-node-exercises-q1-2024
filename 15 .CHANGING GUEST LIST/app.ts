// Guest List
let guests = ["Osamu Dazai", "Fyodor Dostoevsky", "Tatsuhiko Shibusawa"];

// Print initial invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, you are invited to dinner with us tonight. Looking forward to meeting you!`);
});

// Name of the guest who can't make it
let unableToAttend = "Osamu Dazai";
console.log(`Unfortunately, ${unableToAttend} can't make it to dinner.`);

// Replace the guest and send new invitations
let newGuest = "Chūya Nakahara";
guests[guests.indexOf(unableToAttend)] = newGuest;

// Print updated invitations
console.log("\nUpdated Invitations:");
guests.forEach(guest => {
    console.log(`Dear ${guest}, you are invited to dinner with us tonight. Looking forward to meeting you!`);
});
