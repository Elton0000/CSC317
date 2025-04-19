let memoryX = 0;
let memoryXLength;
let cosmeticXLength;

let lastInput; // just whatever was last inputted numeric/operator
let lastOperator;
let lastNumeral;
let lastTwoInputs = 0; // operator then integer

let status = "not negated";
let resetCounter = 0;
const operatorRegex = /\/|\*|\-|\+/;
const numeralRegex = /1|2|3|4|5|6|7|8|9|0/;
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
    lastInput = ""
    lastTwoInputs = 0;
    lastNumeral = "";
    cosmeticXLength = 0;
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
    else if (lastInput == "-" && memoryX == "-") {
        if (operator != "-") {
            AC();
        }
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

function secureEval(expression) { //borrowed functions
    if (!safePattern.test(expression)) {
      throw new Error("Invalid characters in expression.");
    }
    try {
      return Function('"use strict"; return (' + expression + ')')();
    } catch (e) {
      throw new Error("Error evaluating expression.");
    }
  }

  function flashButton(id) {
    const button = $(id);
    if (!button) return;
  
    button.classList.add("pressed");
    setTimeout(() => {
      button.classList.remove("pressed");
    }, 100);
  }
  console.log(/1|2|3|4/.test(4));
  document.addEventListener("keydown", function(event) {

    const key = event.key;
  
     //todo define keyMap
     document.getElementById("value1").innerHTML = key;
    // Perform calculator logic
  
    if ("0123456789+-*/.%".includes(key)) {

      // todo
      switch (key) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9": {inputNum(key); break;}
        case "+":
        case "-":
        case "*":
        case "/": {operator(key); break;}
        case "%": {percentage(); break;}
        case ".": {addDecimal(); break;}
        default: ;
      }
    } else if (key === "Enter") {
  
      event.preventDefault(); // this prevents the form from being submitted
  
      // todo
      equals();
    } else if (key === "Escape") {
  
      // todo
      AC();
    } else if (key === "Backspace") {
  
       // todo
       if (memoryXLength <= 1) {
        memoryX = 0;
       }
       else {
        memoryX = memoryX.slice(0,memoryXLength - 1);
       }
       document.getElementById("resultDisplay").innerHTML = memoryX;
       displayX("Backspace");
    }
  
    // Apply visual feedback
  
    const btnId = keyMap[key]; // keyMap needs to be defined above
  
    if (btnId) {
  
      flashButton(btnId); // flashButton needs to be defined. I gave you this already.
  
    }
  
  });
