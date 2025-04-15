let memoryX = 0;
let resetCounter = 0;
let regex = /[^+\-*/%.() ]+$/;
function inputNum(x) {
    document.getElementById("valueOfResetCounter").innerHTML = resetCounter;
    if (document.getElementById("resultDisplay").innerHTML == 0) { //If it's the first time inputting number, set global x to = input
        document.getElementById("resultDisplay").innerHTML = x;
        memoryX = x;
    }
    else if (resetCounter != 0 && memoryX != 0) { //Allowing calculations to be made a stored value after = operator is used
        document.getElementById("resultDisplay").innerHTML += x;
        memoryX += x.toString();
        resetCounter--;
    }
    else if (resetCounter != 0) { //I wanted to have a way to overwrite the displayed value if = operator was used. Doesn't require AC.
        document.getElementById("resultDisplay").innerHTML = x;
        memoryX = x;
        resetCounter--;
    }
    else { //Else, append input as a string to take advantage of type coercion
        document.getElementById("resultDisplay").innerHTML += x;
        memoryX += x.toString();
    }
    displayX();
  }

function AC() {
    document.getElementById("resultDisplay").innerHTML = 0;
    memoryX = 0;
    resetCounter = 0;
    displayX();
}

function addDecimal() {
    if (!document.getElementById("resultDisplay").innerHTML.includes(".")) {
        document.getElementById("resultDisplay").innerHTML += ".";
        memoryX += "."; 
     }
     displayX();   
}

function negate() {
    document.getElementById("resultDisplay").innerHTML *= -1;
    memoryX += " *-1 ";
    displayX();
}

function percentage() {
    document.getElementById("resultDisplay").innerHTML /= "100";
    memoryX += " /100 ";
    displayX();
}

function operator(operator) { //Includes *, /, +, - but not = and % since I their functions were more unique on IOS calculator
    if (!document.getElementById("operationDisplay").innerHTML.includes(operator)) {
        if (operator == "*") {
            document.getElementById("resultDisplay").innerHTML += " x "; 
        }
        else if (operator == "/") {
            document.getElementById("resultDisplay").innerHTML += " ÷ "; 
        }
        else if (operator == "/100") {
            document.getElementById("resultDisplay").innerHTML += " % "; 
        }
        else {
            document.getElementById("resultDisplay").innerHTML += (" " + operator + " ");
        }
        memoryX += (" " + operator + " ");
     }
     displayX();
}

function equals() {
    memoryX = eval(memoryX)
    document.getElementById("resultDisplay").innerHTML = memoryX; 
    displayX();
    resetCounter++;
}

function displayX() {
    document.getElementById("operationDisplay").innerHTML = memoryX;
}

