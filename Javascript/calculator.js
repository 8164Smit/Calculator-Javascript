let num1 = 34;
let num2 = 45;
let operator = "+";

let result = operator == "+" ? num1 + num2 :
             operator == "-" ? num1 - num2 :
             operator == "*" ? num1 * num2 :
             operator == "/" ? num1 / num2 :
             operator == "%" ? num1 % num2 :
             "Invalid Operator";

console.log("Result : ", result);