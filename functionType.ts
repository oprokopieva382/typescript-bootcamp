/*
? Function type in TypeScript
NOTES: 
- the global type is denoted by Function in JS,
- it describes properties like bind, apply, call and other
 */

function printCarDetails(callback: Function) {
  callback(2021, "BMW");
}

printCarDetails((model: number, make: string) => {
  console.log("Car model is " + model);
  console.log("Car company is " + make);
});
