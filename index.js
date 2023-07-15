"use strict";
function printCarDetails(carObj) {
    console.log("My car was launch in  ".concat(carObj.model));
    console.log("My car manufacture is  ".concat(carObj.make.toLocaleUpperCase()));
}
printCarDetails({ make: "Tesla", model: 2021 });
