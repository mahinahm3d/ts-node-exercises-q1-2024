// Your Own Array
var favoriteTransportation = [
    "Ducati Panigale V4",
    "McLaren Artura",
    "Boeing airplane",
    "Aston Martin DBS Superleggera",
    "Indian FTR 1200 S"
];
// Print statements about each item using forEach loop
favoriteTransportation.forEach(function (item) {
    console.log("I would like to own a ".concat(item, "."));
});
// Print statements about each item using individual console.log statements
console.log("I would like to own a ".concat(favoriteTransportation[0], ".")); // Ducati Panigale V4
console.log("I would like to own a ".concat(favoriteTransportation[1], ".")); // McLaren Artura
console.log("I would like to own a ".concat(favoriteTransportation[2], ".")); // Boeing airplane
console.log("I would like to own a ".concat(favoriteTransportation[3], ".")); // Aston Martin DBS Superleggera
console.log("I would like to own a ".concat(favoriteTransportation[4], ".")); // Indian FTR 1200 S
