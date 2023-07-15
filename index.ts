/*
? Tuple types
NOTES:
- just like Array type, but,
- tuples know exactly how many items it contains
- tuples know which types are at which positions
- tuples don't have representation in Runtime
 */

type CarDetailsTuple = [number, string, boolean];

const myCar: CarDetailsTuple = [2023, "Tesla", true];

function printCarDetails(myCar: CarDetailsTuple) {
  let [model, make, sedan] = myCar;

  //! Error - Tuple type 'CarDetailsTuple' of length '3' has no element at index '3'
  //   let cost = myCar[3];
}

printCarDetails([2023, "Tesla", true]);
