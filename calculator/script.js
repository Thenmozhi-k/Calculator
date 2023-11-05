
let display = document.getElementById('display');
let currentValue = '';
let historyLogVisible = false;
let historyLog = [];

function appendToDisplay(value) {
    currentValue += value;
    display.value = currentValue;
}

function clearDisplay() {
    currentValue = '';
    display.value = '';
}

function calculateResult() {
    try {
        const result = eval(currentValue);
        display.value = result;
        addToHistory(`Calculated: ${currentValue} = ${result}`);
        currentValue = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateLog() {
    const result = Math.log(parseFloat(currentValue));
    display.value = result;
    addToHistory(`Log: log(${currentValue}) = ${result}`);
    currentValue = result.toString();
}

function calculateSin() {
    const result = Math.sin(parseFloat(currentValue));
    display.value = result;
    addToHistory(`Sin: sin(${currentValue}) = ${result}`);
    currentValue = result.toString();
}

function calculateCos() {
    const result = Math.cos(parseFloat(currentValue));
    display.value = result;
    addToHistory(`Cos: cos(${currentValue}) = ${result}`);
    currentValue = result.toString();
}

function calculateTan() {
    const result = Math.tan(parseFloat(currentValue));
    display.value = result;
    addToHistory(`Tan: tan(${currentValue}) = ${result}`);
    currentValue = result.toString();
}

function addToHistory(log) {
    historyLog.push(log);
    if (historyLogVisible) {
        const historyLogElement = document.getElementById('historyLog');
        historyLogElement.innerHTML = historyLog.map(entry => `<div>${entry}</div>`).join('');
    }
}

function calculateSqrt() {
    const result = Math.sqrt(parseFloat(currentValue));
    display.value = result;
    addToHistory(`√: ${result}`);
}


function calculatePower() {
    try {
        currentValue = Math.pow(parseFloat(currentValue), 2); 
        display.value = currentValue;
        addToHistory(`^2: ${currentValue}`);
    } catch (error) {
        display.value = 'Error';
    }
}

function showHistory() {
    const historyLogElement = document.getElementById('historyLog');
    if (!historyLogVisible) {
        historyLogElement.style.display = 'block';
        historyLogVisible = true;
        historyLogElement.innerHTML = historyLog.map(entry => `<div>${entry}</div>`).join('');
    } else {
        historyLogElement.style.display = 'none';
        historyLogVisible = false;
    }
}
