function add(num, num2 = num) {
  return num + num2;
}
function subtract(num, num2 = num) {
  return num - num2;
}
function multiply(num, num2 = num) {
  return num * num2;
}
function divide(num, num2 = num) {
  return num / num2;
}

const firstNumber = 3;
const secondNumber = 5;
const operator = multiply(firstNumber, secondNumber);

function operate(operator, num, num2) {
  switch (operator) {
    case "addition":
      return add(num, num2);
    case "subtraction":
      return subtract(num, num2);
    case "multiplication":
      return multiply(num, num2);
    case "division":
      return divide(num, num2);

    default:
      return "please pick from the following blablba";
  }
}
