/*
? Tuple types
NOTES:
- just like Array type, but,
- tuples know exactly how many items it contains
- tuples know which types are at which positions
- tuples don't have representation in Runtime

USES: 
- some APIs return arrays and the items could be have their own meaning. We can use Tuples
 */

type CarDetailsTuple1 = [number, string, boolean];

const myCar: CarDetailsTuple1 = [2023, "Tesla", true];

function printCarDetails(myCar: CarDetailsTuple1) {
  let [model, make, sedan] = myCar;

  //! Error - Tuple type 'CarDetailsTuple' of length '3' has no element at index '3'
  //   let cost = myCar[3];
}

printCarDetails([2023, "Tesla", true]);


/*
? Tuple with Interfaces
NOTES:
- Another way to declare a Tuple type is with interface(with specialized properties)
 */

interface CarDetailsTuple {
    length: 4;
    0: number;
    1: string;
    2: boolean
    3: "UA" | "US"
}

const myCar2: CarDetailsTuple = [2023, "BMW", true, "US"]

/*? Tuple with Optional properties
NOTES:
- Tuple with optional property (only allowed at the end)
 */

type PlaneDetainsTuple = [number, string, boolean?];
const myPlane: PlaneDetainsTuple=[2023, "Delta Airline"]

/*? Readonly Tuple 
 */

type RaceCarTuple = readonly [number, string];
const raceCar: RaceCarTuple = [2023, "BMW"]

//! Error - Cannot assign to '1' because it is a read-only property.
//raceCar[1]= "Tesla"


/*? Array assertion interface
NOTES:
- will make a readonly
 */
let carDetails = [2023, "BMW"] as const

/*? Specifying rest parameters in Tuple
NOTES:
- Tuple with rest parameter elements (must be Array/Tuple)
 */

function printCardetails2(myCar3: [number, string, ...number[]]) {
    console.log(myCar3[3])
}
printCardetails2([2023, "Tesla", 234, 345, 456])