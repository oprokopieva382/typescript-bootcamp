/**
 * 
 * @param make - The plane manufacturer
 * @param model - The year of launch
 * @param isJet - Describes whether the plane is a jet or not
 * @param countries - List of countries supported
 * 
 * @return void (nothing)
 */

type Model = string | number

interface Plane {
make: string,
model: Model,
isJet: boolean
}

function printPlaneDetails(plane: Plane, listCountries: Function): void {
  console.log("Plane manufacturer is " + plane.make.toUpperCase());
  console.log("Plane was launched in " + plane.model);

  if (plane.isJet) {
    console.log("Plane is a Jet");
  } else {
    console.log("Plane is not a Jet");
  }

  console.log("The plane flies in the below countries");
  console.log("----------------------");
listCountries(["UA", "US", "UK"])
}

printPlaneDetails({make: "Delta AirLine", model: 2021, isJet: false}, (countries: string[])=> {
  countries.forEach(country=> {
    console.log(country)
  })
});