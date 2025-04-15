let memoryX = 0;
let resetCounter = 0;
let regex = /[^+\-*/%.() ]+$/;
function inputNum(x) {
    if (document.getElementById("resultDisplay").innerHTML == 0) {
        document.getElementById("resultDisplay").innerHTML = x;
        memoryX = x;
        document.getElementById("valueOfResetCounter").innerHTML = 11;
    }
    // else if ((memoryX.toString.includes("*") || memoryX.toString.includes("+") || memoryX.toString.includes("-") || memoryX.toString.includes("/")) && resetCounter != 0) {
    //     document.getElementById("resultDisplay").innerHTML += x;
    //     memoryX += x.toString();
    //     resetCounter--;
    //     document.getElementById("valueOfResetCounter").innerHTML = 22;
    // }
    else if (resetCounter != 0) {
        document.getElementById("resultDisplay").innerHTML = x;
        memoryX = x;
        resetCounter--;
        document.getElementById("valueOfResetCounter").innerHTML = 33;

    }
    else {
        document.getElementById("resultDisplay").innerHTML += x;
        memoryX += x.toString();
        document.getElementById("valueOfResetCounter").innerHTML = 44;
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
    document.getElementById("resultDisplay").innerHTML += "%";
    memoryX += " /100 ";
    displayX();
}

function operator(operator) {
    if (!document.getElementById("operationDisplay").innerHTML.includes(operator)) {
        if (operator == "*") {
            document.getElementById("resultDisplay").innerHTML += " x "; 
        }
        else if (operator == "/") {
            document.getElementById("resultDisplay").innerHTML += " ÷ "; 
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

