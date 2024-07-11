// Define the carInfo function
function carInfo(manufacturer, modelName, options) {
    var car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    // Add optional properties to the car Object
    for (var key in options) {
        car[key] = options[key];
    }
    return car;
}
// Call the carInfo function with required and optional parameters
var myCar = carInfo('Toyota', 'Camry', { color: 'silver', year: 2023 });
// Print the returned Object to verify all information was stored correctly
console.log(myCar);
