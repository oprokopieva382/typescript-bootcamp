"use strict";
function printPlaneDetails(plane, listCountries) {
    console.log("Plane manufacturer is " + plane.make.toUpperCase());
    console.log("Plane was launched in " + plane.model);
    if (plane.isJet) {
        console.log("Plane is a Jet");
    }
    else {
        console.log("Plane is not a Jet");
    }
    console.log("The plane flies in the below countries");
    console.log("----------------------");
    listCountries(["UA", "US", "UK"]);
}
printPlaneDetails({ make: "Delta AirLine", model: 2021, isJet: false }, function (countries) {
    countries.forEach(function (country) {
        console.log(country);
    });
});
