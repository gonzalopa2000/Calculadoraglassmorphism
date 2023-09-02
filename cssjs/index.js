let currentResult = "";
let memory = 0;

function appendToResult(value) {
  currentResult += value;
  document.getElementById("result").value = currentResult;
}

function clearResult() {
  currentResult = "";
  document.getElementById("result").value = currentResult;
}

function calculateResult() {
  try {
    currentResult = eval(currentResult);
    document.getElementById("result").value = currentResult;
  } catch (error) {
    currentResult = "Error";
    document.getElementById("result").value = currentResult;
  }
}

function backspace() {
  currentResult = currentResult.slice(0, -1);
  document.getElementById("result").value = currentResult;
}

function addToMemory() {
  memory += parseFloat(currentResult);
}

function subtractFromMemory() {
  memory -= parseFloat(currentResult);
}

function recallMemory() {
  currentResult = memory.toString();
  document.getElementById("result").value = currentResult;
}

function clearMemory() {
  memory = 0;
}

function calculatePercentage() {
  currentResult = (parseFloat(currentResult) / 100).toString();
  document.getElementById("result").value = currentResult;
}