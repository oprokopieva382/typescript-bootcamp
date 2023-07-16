/*? Type Assertion (the "as" keyword)
NOTES:
- we can assert certain types when TS can't understand what type can be assigned
 */

const myCanvas = document.getElementById("my-canvas") as HTMLCanvasElement

/*? Non-null Assertion Operator (postfix !) 
NOTES:
- when we access null type, TS complains in strict mode
- to prevent it we can use ! operator
 */

function printCarDetails(model: number | null) {
  //! Error - 'model' is possibly 'null'
  //console.log(`My car is ${model.toString()}`);
  //*OK
  console.log(`My car is ${model!.toString()}`);
}
printCarDetails;(2021)