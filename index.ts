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
const myCar: number = carT;

/*
? Special type | "unknown"
NOTES:
- little safer than "any" type, but similar to any
 */

let a: unknown = document.getElementById("my-element");
//we can do whatever we want with any type
function getLatestCarModelV1(models: any) {
  return models[0];
}
//but we cannot do whatever we want with unknown type
// function getLatestCarModelV2(models: unknown) {
//   return models[0];
// }

/*? Special type | "void"
NOTES:
- In JS a function that doesn't return any value will implicitly return the value undefined
- "void" and "undefined" is not the same thing in TS
 */

//undefined | JS
// void type| TS
function printCarNameV1(): void {
  console.log("BMW");
}

let result = function printCarNameV2(): void {
  console.log("BMW");
};

/*? Special type | "never"
NOTES:
- some function never return a value
- if nothing ar left in union it is type "never"
-if the function terminates itself - "never"
-if the function throw error - "never"

 */

//this function throws an exception
//hence it never returns a value
function crashCar(model: number): never {
  throw new Error("Car crashed");
}

//this function terminates the program
//hence it never returns a value
//sudo code
// import {exit} from "process";
//  function terminate(process: number): never {
//   exit(process)
// }


//"never" is also appears when nothing is left in a union
function printCarDetails(make: string | number) {
  if (typeof make === "string") {
    console.log(make.toLocaleUpperCase());
  } else if (typeof make === "number") {
    console.log(make++);
  } else {
    //here is type of make is "never"
  }
}
