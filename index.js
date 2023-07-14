"use strict";
function printCarDetails(carObj) {
    console.log("Car car is  ".concat(carObj.make));
    console.log("My car was launched in ".concat(carObj.model));
}
printCarDetails({
    make: "Tesla",
    model: 2021,
    sedan: false,
    accelerate: function () {
        console.log("accelerated the car");
    },
    decelerate: function () {
        console.log("decelerate the car");
    },
});
