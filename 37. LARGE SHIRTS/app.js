// Define the make_shirt function with default parameters
function make_shirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("Shirt size: ".concat(size, ", Message: \"").concat(message, "\""));
}
// Create a large shirt with the default message
make_shirt();
// Create a medium shirt with the default message
make_shirt('Medium');
// Create a small shirt with a custom message
make_shirt('Small', 'Hello, world!');
