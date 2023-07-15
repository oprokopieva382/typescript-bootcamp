/*
? Interfaces VS Type aliases | "Renaming primitives"
NOTE:
- Type aliases can be used to rename primitives but Interfaces can't
 */

//*Type alias able to rename
type StringPrimitives = string;

//! Error - 'string' only refers to a type, but is being used as a value here.
//interface StringInterface = string

/*
? Interfaces VS Type aliases | "Field addition"
NOTE:
- New fields can be added to the interface
- A type cannot be changed after creation
 */

// Example Type (can't change)
//! Error - Duplicate identifier 'BikeType'
type BikeType = {
  make: string;
};

// type BikeType = {
//   model: number
// }

//Example Interface
interface BikeInterface {
  make: string;
}

interface BikeInterface {
  model: number;
}

/*
? Interfaces VS Type aliases | "Extensibility"
NOTE:
- we can extend the Interface but we can't extend type
- instead we can use intersections(&) to achieve the same
 */

//Interface Example
interface CarInterface {
  make: string;
  model: number;
}

interface MustangInterface extends CarInterface {
  drift: boolean;
}

const myCar1: MustangInterface = {
  make: "Ford",
  model: 2010,
  drift: true,
};

//Type alias example
type CarType = {
  make: string,
  model: number
}

type MustangType = CarType & {
  drift: boolean
}

const myCar2: MustangType = {
  make: "Ford",
  model: 2010,
  drift: true,
};