/*
? Array types in TypeScript
NOTES: add brackets[]

 */

const cars: string[] = ["Tesla", "BMW", "Audi"];
const LuckyNumber: number[] = [1, 2, 3];
const answer: boolean[] = [true, false];

function printCarModels(models: number[]): number {
  models.forEach((model) => {
    console.log(model);
  });

  let upcomingModel = models[0] + 1;
  return upcomingModel;
}

let upcomingModel = printCarModels([2023, 2022, 2021]);
console.log("next upcoming model is " + upcomingModel);
