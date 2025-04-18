let memoryX = 0;
let memoryXLength;
let cosmeticXLength;
let lastInput;
let lastTwoInputs; // operator then integer
let lastOperator;
let status = "not negated";
let lastRecord;
let resetCounter = 0;
let operatorRegex = /\/|\*|\-|\+/;
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
    else if (lastInput == "%") {
        document.getElementById("resultDisplay").innerHTML += x;
        memoryX += ("*" + x);
    }
    else { //Else, append input as a string to take advantage of type coercion
        memoryX += x.toString();
        updateDisplay(x);
    }
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
        lastTwoInputs[1] += ".";
     }
    //  else if () {

    //  }
     displayX(".");   
}

function negate() { // should apply a status of being negated, this is removed on the next integer input
    if (!operatorRegex.test(lastInput)) {
        document.getElementById("resultDisplay").innerHTML += "*-1";
        memoryX += "*-1";
    }
    else {
            //inital negate reverse works, more than 2 times deletes resultDisplay
            memoryX = memoryX.toString().slice(0,memoryXLength - 3);
            document.getElementById("resultDisplay").innerHTML = document.getElementById("resultDisplay").innerHTML.slice(0,memoryXLength - 3);
    }
    displayX("*-1");
}

function percentage() {
    if (!operatorRegex.test(lastInput)) {
        updateDisplay("%");
    }
    else {
        mendDisplay("%")
    }
    memoryX += " /100 ";
    displayX("%");
}

function operator(operator) { //Includes *, /, +, - but not = and % since I their functions were more unique on IOS calculator
    let insertedSymbol = operator; //comestic, does not affect functionality
    if (operator == "*") {
        insertedSymbol = "x";
    }
    else if (operator == "/") {
        insertedSymbol = "÷";
    }

    if (memoryX == 0 && operator == "-") {
        memoryX = "-";
        mendDisplay("-");
    }
    else if (operatorRegex.test(lastInput) && lastInput != "*-1") { //cannot enter same 2 operators in a row
        memoryX = memoryX.toString().slice(0,memoryXLength - 1) + operator;
        mendDisplay(insertedSymbol);
    }
    else { //entering an operator in sequence overlays the first one with the entered value
        updateDisplay(insertedSymbol);
        memoryX += operator;
    }
            

    if (resetCounter > 0) {
        resetCounter = 0;
    }
    displayX(operator);
    
}

function equals() {
    if (!memoryX.toString().includes("/0")) {
        if (resetCounter < 1) {
            getLastTwoInputs();
            memoryX = secureEval(memoryX);
        }
        else { //Enters here if repeatedly pushing enter button
            document.getElementById("operationDisplay").innerHTML = (memoryX + lastTwoInputs);
            memoryX = secureEval(memoryX + lastTwoInputs);
        }   
    }
    else {
        memoryX = "Undefined";
    }
    
    document.getElementById("resultDisplay").innerHTML = memoryX; 
    if (resetCounter < 1 && memoryX != "Undefined") {
        resetCounter++;
    }
    lastInput = "=";
}

function displayX(x) {
    updateLastInput(x);
    memoryXLength = memoryX.toString().length;
    cosmeticXLength = document.getElementById("resultDisplay").innerHTML.length;
    document.getElementById("operationDisplay").innerHTML = document.getElementById("resultDisplay").innerHTML;
}

function updateDisplay(x) {
    document.getElementById("resultDisplay").innerHTML += x;
}

function updateLastInput(x) {
    lastInput = x;
    if (operatorRegex.test(x)) {
        lastOperator = x;
    }
}

function getLastTwoInputs () {
    lastTwoInputs = memoryX.slice(memoryX.toString().lastIndexOf(lastOperator),memoryXLength);
}

function mendDisplay(x) {
    document.getElementById("resultDisplay").innerHTML = (document.getElementById("resultDisplay").innerHTML.slice(0,cosmeticXLength - 1) + x);
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



