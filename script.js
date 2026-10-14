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
  if (num2 === 0) {
    return "Cannot Divide by Zero";
  }
  return num / num2;
}

let firstNumber = "";
let secondNumber = "";
const operator = "";

function operate(operator, num, num2) {
  switch (operator) {
    case "+":
      return add(num, num2);
    case "-":
      return subtract(num, num2);
    case "*":
      return multiply(num, num2);
    case "/":
      return divide(num, num2);

    default:
      return "invalid";
  }
}

const btnNumber = document.querySelectorAll("button");
const total = document.querySelector(".total");
const total2 = document.querySelector(".total2");
const opir = document.querySelector(".operatory");
let palit = false;
let operation;

btnNumber.forEach((btn) => {
  btn.addEventListener("click", () => {
    switch (btn.textContent) {
      case "+":
        opir.textContent = "+";

        palit = true;
        operation = "+";
        break;

      case "-":
        opir.textContent = "-";

        palit = true;
        operation = "-";
        break;

      case "*":
        opir.textContent = "*";

        palit = true;
        operation = "*";
        break;

      case "/":
        opir.textContent = "/";

        palit = true;
        operation = "/";
        break;

      case "=":
        total.textContent = operate(
          operation,
          Number(firstNumber),
          Number(secondNumber),
        );
        firstNumber = total.textContent;
        secondNumber = "";
        total2.textContent = "";

        opir.textContent = "OPERA";
        palit = false;
        break;

      case "C":
        palit = false;
        firstNumber = "";
        secondNumber = "";
        opir.textContent = "OPERA";
        total.textContent = firstNumber;
        total2.textContent = secondNumber;
        break;

      default:
        if (palit === false) {
          firstNumber = firstNumber.toString() + btn.textContent;
          total.textContent = firstNumber;
        } else {
          secondNumber += Number(btn.textContent);
          total2.textContent = secondNumber;
        }
        return;
    }
  });
});
