
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
    if (!document.getElementById("resultDisplay").innerHTML.includes(".")) {
        document.getElementById("resultDisplay").innerHTML += "."; 
     }}
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
    if (!document.getElementById("resultDisplay").innerHTML.includes("x")) {
        document.getElementById("resultDisplay").innerHTML += "x"; 
     }}
function subtract() {
    if (!document.getElementById("resultDisplay").innerHTML.includes("-")) {
        document.getElementById("resultDisplay").innerHTML += " - "; 
     }}
function add() {
    if (!document.getElementById("resultDisplay").innerHTML.includes("+")) {
        document.getElementById("resultDisplay").innerHTML += " + "; 
     }}
function equals() {
    let calculation = document.getElementById("resultDisplay").innerHTML;
    document.getElementById("resultDisplay").innerHTML = eval(calculation);
}

