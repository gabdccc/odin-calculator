function add(num, num2) {
  return num + num2;
}
function subtract(num, num2) {
  return num - num2;
}
function multiply(num, num2) {
  return num * num2;
}
function divide(num, num2) {
  if (num2 === 0) {
    return "Cannot Divide by Zero";
  }
  return num / num2;
}

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
      return;
  }
}

function testing() {
  let resulta = operate(operation, Number(firstNumber), Number(secondNumber));

  if (typeof resulta === "number" && Number.isFinite(resulta)) {
    resulta = Number(resulta.toPrecision(10));
  }

  total.textContent = resulta;
  firstNumber = String(resulta);

  total2.textContent = "";
  secondNumber = "";
  sample = false;
}

const btnNumber = document.querySelectorAll("button");
const total = document.querySelector(".total");
const total2 = document.querySelector(".total2");
const opir = document.querySelector(".operatory");
let firstNumber = "";
let secondNumber = "";
let oldSecondNumber = "";
let palit = false;
let operation;
let sample = false;
let pastResulta = false;

btnNumber.forEach((btn) => {
  btn.addEventListener("click", () => {
    switch (btn.textContent) {
      case "+":
        if (sample === true && secondNumber !== "") {
          testing();
        }

        opir.textContent = "+";

        palit = true;
        operation = "+";
        sample = true;
        break;

      case "-":
        if (sample === true && secondNumber !== "") {
          testing();
        }

        opir.textContent = "-";

        palit = true;
        operation = "-";
        sample = true;
        break;

      case "*":
        if (sample === true && secondNumber !== "") {
          testing();
        }

        opir.textContent = "*";

        palit = true;
        operation = "*";
        sample = true;
        break;

      case "/":
        if (sample === true && secondNumber !== "") {
          testing();
        }

        opir.textContent = "/";

        palit = true;
        operation = "/";
        sample = true;
        break;

      case "=":
        if (sample === true) {
          if (secondNumber === "") {
            secondNumber = firstNumber;
          } else {
            oldSecondNumber = secondNumber;
          }

          testing();
          sample = false;
          pastResulta = true;
        } else if (oldSecondNumber !== "") {
          secondNumber = oldSecondNumber;
          testing();
          pastResulta = true;
        }

        opir.textContent = "OPERA";
        palit = false;
        break;

      case "C":
        palit = false;
        firstNumber = "";
        secondNumber = "";
        oldSecondNumber = "";
        operation = undefined;
        sample = false;
        pastResulta = false;

        opir.textContent = "OPERA";
        total.textContent = "";
        total2.textContent = "";
        break;

      default:
        if (palit === false) {
          if (pastResulta === true) {
            firstNumber = "";
            oldSecondNumber = "";
            pastResulta = false;
          }

          firstNumber += btn.textContent;
          total.textContent = firstNumber;
        } else {
          secondNumber += btn.textContent;
          total2.textContent = secondNumber;
        }

        return;
    }
  });
});
