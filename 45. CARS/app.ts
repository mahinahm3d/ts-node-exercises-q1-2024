// Define the carInfo function
function carInfo(manufacturer: string, modelName: string, options: { [key: string]: any }): { manufacturer: string, modelName: string, [key: string]: any } {
    let car: { manufacturer: string, modelName: string, [key: string]: any } = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    // Add optional properties to the car Object
    for (let key in options) {
        car[key] = options[key];
    }

    return car;
}

// Call the carInfo function with required and optional parameters
let myCar = carInfo('Toyota', 'Camry', { color: 'silver', year: 2023 });

// Print the returned Object to verify all information was stored correctly
console.log(myCar);
