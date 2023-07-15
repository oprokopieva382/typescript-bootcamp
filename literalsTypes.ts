/*
? Literal types
NOTES:
- we can create a very specific type that can take only allowed values
- we can create a mix and match of literal type & Non literal types
 */

type Bike = "BMW" | "Honda" | 2023;

let bike: Bike = "BMW";

/*
? Literal Inference
NOTES:
- In the object type, TS will infer a general type for its properties. Not the literals
- we can force this with the "as" keyword for the properties
 */

const car = {
    make: "Honda" as "Honda" | "Tesla",
    model: 2022 as 2023 | boolean
}

