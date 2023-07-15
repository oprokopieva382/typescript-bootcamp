/*
? Object in TypeScript
NOTES: 

 */

type Car = {
  make: string;
  model: number;
};

//object as argument
function printCarDetails(carObj: Car) {
  console.log(`My car was launch in  ${carObj.model}`);

  console.log(`My car manufacture is  ${carObj.make.toLocaleUpperCase()}`);
}
printCarDetails({ make: "Tesla", model: 2021 });
