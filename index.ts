/*
? Example 1
? Creating own literal type with Unions
NOTES:
- The type boolean itself is actually just an alias for the union true | false.
 */

//Let's create own literal type that can take few strings
let car: "Tesla" | "BMW" | "Audi" = "Tesla";

// OK
car = "Audi"

//! Error - Type '"Ford"' is not assignable to type '"Tesla" | "BMW" | "Audi"'.
//car = "Ford"
