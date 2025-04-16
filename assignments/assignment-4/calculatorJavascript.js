let memoryX = 0;
let xLength;
let lastInput;
let resetCounter = 0;
const safePattern = /^[0-9+\-*/%.() ]+$/;
function inputNum(x) {
    if (memoryX == 0 || memoryX == "Undefined" ) { //If it's the first time inputting number, set global x to = input
        document.getElementById("resultDisplay").innerHTML = x;
        memoryX = x;
    }
    else if (resetCounter > 0) { //I wanted to have a way to overwrite the displayed value if = operator was used. Doesn't require AC.
        document.getElementById("resultDisplay").innerHTML = x;
        memoryX = x;
        resetCounter--;
    }
    else if (lastInput == "*-1") {
        document.getElementById("resultDisplay").innerHTML = ("(" + memoryX + ")x" + x);
        memoryX += ("*" + x);
    }
    else { //Else, append input as a string to take advantage of type coercion
        updateDisplay(x);
        memoryX += x.toString();
    }
    document.getElementById("valueOfResetCounter").innerHTML = lastInput;
    displayX(x);
  }

function AC() {
    document.getElementById("resultDisplay").innerHTML = 0;
    memoryX = 0;
    resetCounter = 0;
    displayX("AC");
}

function addDecimal() {
    if (!document.getElementById("resultDisplay").innerHTML.includes(".")) {
        document.getElementById("resultDisplay").innerHTML += ".";
        memoryX += "."; 
     }
     displayX(".");   
}

function negate() {
    document.getElementById("resultDisplay").innerHTML *= -1;
    memoryX += " *-1 ";
    displayX("*-1");
}

function percentage() {
    updateDisplay("%");
    memoryX += " /100 ";
    displayX("/100");
}

function operator(operator) { //Includes *, /, +, - but not = and % since I their functions were more unique on IOS calculator
if (memoryX.toString().charAt(xLength - 2) != lastInput) {
    if (operator == "*") {
        updateDisplay("x");
    }
    else if (operator == "/") {
        updateDisplay("÷");
    }
    else {
        updateDisplay(operator);
    }
    memoryX += (" " + operator + " ");
 }
 if (resetCounter > 0) {
    resetCounter = 0;
 }
 displayX(operator);
}

function equals() {
    if (!memoryX.includes("/ 0")) {
        memoryX = secureEval(memoryX);
    }
    else {
        memoryX = "Undefined";
    }

    document.getElementById("resultDisplay").innerHTML = memoryX; 
    if (resetCounter < 1 && memoryX != 0 && memoryX != "Undefined") {
        resetCounter++;
    }
}

function displayX(x) {
    updateLastInput(x);
    xLength = memoryX.toString().length;
    document.getElementById("operationDisplay").innerHTML = memoryX;
}

function updateDisplay(x) {
    document.getElementById("resultDisplay").innerHTML += x;
}

function updateLastInput(x) {
    lastInput = x;
}

function secureEval(expression) {
    if (!safePattern.test(expression)) {
      throw new Error("Invalid characters in expression.");
    }
    try {
      return Function('"use strict"; return (' + expression + ')')();
    } catch (e) {
      throw new Error("Error evaluating expression.");
    }
  }

