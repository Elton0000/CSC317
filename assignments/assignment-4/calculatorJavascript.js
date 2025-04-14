
function inputNum(x) {
    if (document.getElementById("resultDisplay").innerHTML == 0) {
        document.getElementById("resultDisplay").innerHTML = x;
    }
    else {
        document.getElementById("resultDisplay").innerHTML += x;
    }
  }
function AC() {
    document.getElementById("resultDisplay").innerHTML = 0;
}
function addDecimal() {
    document.getElementById("resultDisplay").innerHTML += ".";
}
function negate() {
    document.getElementById("resultDisplay").innerHTML *= -1;
}
function percentage() {
    document.getElementById("resultDisplay").innerHTML /= 100;
}
function divide() {
    if (!document.getElementById("resultDisplay").innerHTML.includes("÷")) {
       document.getElementById("resultDisplay").innerHTML += "÷"; 
    }
}
function multiply() {
    document.getElementById("resultDisplay").innerHTML += "x";
}
function subtract() {
    document.getElementById("resultDisplay").innerHTML += "-";
}
function add() {
    document.getElementById("resultDisplay").innerHTML += "+";
}
function equals() {
    let calculation = document.getElementById("resultDisplay");
    document.getElementById("resultDisplay").innerHTML = eval(calculation);
}


