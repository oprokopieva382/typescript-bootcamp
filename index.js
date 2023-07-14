"use strict";
var cars = ["Tesla", "BMW", "Audi"];
var LuckyNumber = [1, 2, 3];
var answer = [true, false];
function printCarModels(models) {
    models.forEach(function (model) {
        console.log(model);
    });
    var upcomingModel = models[0] + 1;
    return upcomingModel;
}
var upcomingModel = printCarModels([2023, 2022, 2021]);
console.log("next upcoming model is " + upcomingModel);
