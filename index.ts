/*
? Special type | "any"
NOTES:
- TS also has a special type , any, that can use whenever you don't want a particular value to cause typechecking errors
- "any" is a bit unsafe to use
 */

let car: any = "BMW";
let model: number = 2021;
car = model;
car = "Tesla";
car = 2022;

let city: boolean = car;

//Example
let carT: any = {
  make: "Honda",
  model: 2022,
  sedan: false,
};

/*
We can do whatever with this type
TS will not throw any error
*/

//We can modify
carT.accelerate = () => {
  console.log("burrp");
};

//We can assign different type
carT = "BMW";

//Even assigning it to wrong type will not cause error
const myCar: number = carT