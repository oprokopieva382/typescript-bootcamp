/*? Impossible  coercions// принуждение
NOTES:
- TS only allows type assertions which convert to a more specific or less specific version of a type
- This rule prevents "impossible" coercions
 */
//Possible but not recommended 
const car1 = ("Ford" as any) as number
const car2 = ("Ford" as unknown) as number

