// Define the make_shirt function with default parameters
function make_shirt(size: string = 'Large', message: string = 'I love TypeScript') {
    console.log(`Shirt size: ${size}, Message: "${message}"`);
}

// Create a large shirt with the default message
make_shirt();

// Create a medium shirt with the default message
make_shirt('Medium');

// Create a small shirt with a custom message
make_shirt('Small', 'Hello, world!');
