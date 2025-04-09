import { add } from "./src/calculator";

const ans1 = add('1,2');

const ans2 = add(`1
  3`);

console.log(ans1)
console.log(ans2)
console.log(add("1,2,3,4"))
console.log(add("1\n2,3"))
console.log(add("//;\n1;2"))
console.log(add("1,-2"))
// console.log(add("1,-2,3,-5"))