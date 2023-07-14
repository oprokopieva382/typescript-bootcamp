/*
? Union types in TypeScript
NOTES: 
- it is a type formed from two or more types, we refer to each of this types as the union's members
- use the pipe | operator to combine types
 */

function printCarModel(model: number | string) {
  console.log("My car model is " + model);
}
//No Error
printCarModel(2009);

//No Error
printCarModel("2009");

/*
? Work with Union types in TypeScript
 */

//Example 1: when members don't support common operations
function printCarModelV2(model: string | number) {
  //! Error - Property 'toUpperCase' does not exist on type 'string | number'.
  //console.log("My car model is " + model.toUpperCase());

  //* Fix - needs narrow the Union with code
  if(typeof model === "string") {
     console.log("My car model is " + model.toUpperCase());
  } else {
     console.log("My next car model is " + model++);
  }
}

//No Error
printCarModelV2(2009)
//No Error
printCarModelV2("2009")

//Example 2: when members support common operations

function sliceTheImport(x: string[] | string) {

    //* No error because both string and array have slice method
    return x.slice(0,3)
}