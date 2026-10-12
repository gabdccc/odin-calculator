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

let firstNumber = 3;
let secondNumber = 5;
const operator = "";

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

const numberButtons = document.querySelectorAll("button");
const total = document.querySelector(".total");
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.textContent) {
      case "+":
        total.textContent = "Addition";
        break;
      case "-":
        total.textContent = "Subtraction";
        break;
      case "*":
        total.textContent = "Multiplication";
        break;
      case "/":
        total.textContent = "Division";
        break;
      case "=":
        total.textContent = "Enter";
        break;

      default:
        total.textContent = Number(button.textContent);
        firstNumber = Number(button.textContent);
        break;
    }
  });
});
