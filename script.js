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

let first2Number = 3;
let second2Number = 5;
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
const opera = document.querySelectorAll(".opera");

let numbers = "";
let firstNumber = null;
let operatorGuide = 0;

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    switch (value) {
      case "+":
      case "-":
      case "*":
      case "/":
        firstNumber = Number(numbers || total.textContent);
        operatorGuide = value;
        numbers = "";

        opera.forEach((op) => {
          op.style.backgroundColor = "WHITE";
        });

        button.style.backgroundColor = "RED";
        return;

      case "=": {
        const secondNumber = Number(numbers);
        let result;

        switch (operatorGuide) {
          case "+":
            result = firstNumber + secondNumber;
            break;
          case "-":
            result = firstNumber - secondNumber;
            break;
          case "*":
            result = firstNumber * secondNumber;
            break;
          case "/":
            result = firstNumber / secondNumber;
            break;

          default:
            return;
        }

        total.textContent = result;
        numbers = String(result);
        firstNumber = null;
        operatorGuide = "";

        opera.forEach((op) => {
          op.style.backgroundColor = "WHITE";
        });

        return;
      }

      case "CLR":
        numbers = "";
        firstNumber = null;
        operatorGuide = "";
        total.textContent = 0;

        opera.forEach((op) => {
          op.style.backgroundColor = "WHITE";
        });

        return;

      default:
        numbers += value;
        total.textContent = numbers;
    }
  });
});
