function add(num1, num2) {
    return num1 + num2;
  }
  
  function subtract(num1, num2) {
    return num1 - num2;
  }
  
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  function divide(num1, num2) {
    if(num2===0){
        return "Nice try, but I won't let you break my code.";
    }
    return num1 / num2;
  }
  
  function operate(operator, operand1, operand2) {
    if (operator === "+") {
      return add(operand1, operand2);
    } else if (operator === "-") {
      return subtract(operand1, operand2);
    } else if (operator === "x") {
      return multiply(operand1, operand2);
    } else if (operator === "÷") {
      return divide(operand1, operand2);
    }
  }
  
  let displayBox = document.querySelector(".display");
  let numberDisplay = document.querySelectorAll(".numbers");
  let operatorSelect = document.querySelectorAll(".operators");
  
  let operands = [];
  let operators = [];
  
  numberDisplay.forEach(element => {
    element.addEventListener("click", () => {
      displayBox.textContent += element.textContent;
    });
  });
  
  operatorSelect.forEach(element => {
    element.addEventListener("click", () => {
      operators.push(element.textContent);
      operands.push(parseFloat(displayBox.textContent));
      displayBox.textContent = "";
    });
  });
  
  let equal = document.querySelector(".equals");
  equal.addEventListener("click", () => {
    operands.push(parseFloat(displayBox.textContent));
  
    while (operators.includes("x") || operators.includes("÷")) {
      let index = operators.findIndex(op => op === "x" || op === "÷");
      let operator = operators.splice(index, 1)[0];
      let operand1 = operands.splice(index, 1)[0];
      let operand2 = operands.splice(index, 1)[0];
      let result = operate(operator, operand1, operand2);
      operands.splice(index, 0, result);
    }
  
    while (operators.length > 0) {
      let operator = operators.shift();
      let operand1 = operands.shift();
      let operand2 = operands.shift();
      let result = operate(operator, operand1, operand2);
      operands.unshift(result);
    }
  
    displayBox.textContent = operands[0];
    operands.length = 0;
    operators.length = 0;
  });

let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
    displayBox.textContent = "";
    operands.length = 0;
    operators.length = 0;
  });

