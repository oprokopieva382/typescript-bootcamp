/*
? Literal types
NOTES:
- we can create a very specific type that can take only allowed values
- we can create a mix and match of literal type & Non literal types
 */

type Bike = "BMW" | "Honda" | 2023;

let bike: Bike = "BMW";
