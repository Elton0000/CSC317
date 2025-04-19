let memoryX = 0;
let memoryXLength;
let cosmeticXLength;

let lastInput; // just whatever was last inputted numeric/operator
let lastOperator;
let lastNumeral;
let lastTwoInputs = 0; // operator then integer

let status = "not negated";
let resetCounter = 0;
let operatorRegex = /\/|\*|\-|\+/;
const safePattern = /^[0-9+\-*/%.() ]+$/;

function inputNum(x) {
    
    if (memoryX === 0 || memoryX == "Undefined" ) { //If it's the first time inputting number, set global x to = input
        document.getElementById("resultDisplay").innerHTML = x;
        memoryX = x;
    }
    else if (resetCounter > 0 && lastInput != ".") { //I wanted to have a way to overwrite the displayed value if = operator was used. Doesn't require AC.
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
    document.getElementById("operationDisplay").innerHTML = "";
    memoryX = 0;
    lastTwoInputs = 0;
    lastNumeral = "";
    resetCounter = 0;
    displayX("AC");
}

function addDecimal() {
    if (lastInput == "=") { //Makes it so function does not append a decimal after equals button is pressed
        memoryX = "0.";
        document.getElementById("resultDisplay").innerHTML = memoryX;
    }
    else if (!/\./.test(lastNumeral)) { // allows for 2+ numeric values including decimals to be operated upon
        document.getElementById("resultDisplay").innerHTML += ".";
        memoryX += ".";
     }
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
        mendDisplay("%");
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
    if (!memoryX.toString().includes("/0")) { //as long as no division by 0, expression can be evaluated
        if (resetCounter < 1) {
            getLastTwoInputs();
            memoryX = secureEval(memoryX);
        }
        else { //Enters here if repeatedly pushing enter button

            let symbol = lastTwoInputs; //symbol is purely visual, does not deal with calculations
            if (/\*/.test(symbol)) { //For visual clarity of users
                symbol = symbol.replace("*","x");
            }
            else if (/\//.test(symbol)) {
                symbol = symbol.replace("/","÷")
            }
            document.getElementById("operationDisplay").innerHTML = (memoryX + symbol); //affects purely the listing of operations done
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
    displayX("=");
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
    lastNumeral += x;
    getLastTwoInputs();
    if (operatorRegex.test(x)) {
        lastOperator = x;
        lastNumeral = "";
    }
}

function getLastTwoInputs () { //records last operator + last numeric value
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



