"use strict";
function printCarDetails(callback) {
    callback(2021, "BMW");
}
printCarDetails(function (model, make) {
    console.log("Car model is " + model);
    console.log("Car company is " + make);
});
