/*
? Interfaces in TypeScript
NOTES: 
- interfaces are yet another way to name Object types
 */

interface Car {
  make: string;
  model: string | number;
  sedan: boolean;

  accelerate: () => void;
  decelerate(): void;
}
function printCarDetails(carObj: Car) {
  console.log(`Car car is  ${carObj.make}`);
  console.log(`My car was launched in ${carObj.model}`);
}

printCarDetails({
  make: "Tesla",
  model: 2021,
  sedan: false,
  accelerate: () => {
    console.log("accelerated the car");
  },
  decelerate: () => {
    console.log("decelerate the car");
  },
});
