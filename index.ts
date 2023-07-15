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