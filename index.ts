/*
? Type Aliases in TypeScript
NOTES: 
- Aliases are names given to common types
- used for reusing common types
 */

//Primitive type alias
type ModelNumber =  number

function printCarModel(model: ModelNumber) {
  console.log(model);
}

printCarModel(2021)

//Union type alias
type Model =  number | string

//Object type alias
type Car = {
    make: string,
    model: number,
    sedan: boolean
}
function printCarDetails(myCar: Car) {
  console.log(`My car is ${myCar.make}`);
  console.log(`My car was launched in  ${myCar.model}`);

  if (myCar.sedan) {
    console.log(`My car is sedan`);
  } else {
    console.log(`My car is  not a sedan`);
  }
}

printCarDetails({ model: 2021, make: "Honda", sedan:true });