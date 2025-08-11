let num1 = 34;
let num2 = 45;
let operator = "+";

let result = operator === "+" ? num1 + num2 :
             operator === "-" ? num1 - num2 :
             operator === "*" ? num1 * num2 :
             operator === "/" ? (num2 !== 0 ? num1 / num2 : "Error: Division by zero") :
             operator === "%" ? (num2 !== 0 ? num1 % num2 : "Error: Modulo by zero") :
             "Error: Invalid Operator";

console.log("Result:", result);
