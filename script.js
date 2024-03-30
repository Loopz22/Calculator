const soundAdd = new Audio('sound.mp3');
const soundSubtract = new Audio('sound.mp3');
const soundMultiply = new Audio('sound.mp3');
const soundDivide = new Audio('sound.mp3');
const soundEquals = new Audio('sound.mp3');
const soundClear = new Audio('sound.mp3');
const soundDelete = new Audio('sound.mp3');
const soundDigit = new Audio('sound.mp3');

function playSound(operation) {
    switch (operation) {
        case '+':
            soundAdd.play();
            break;
        case '-':
            soundSubtract.play();
            break;
        case '*':
            soundMultiply.play();
            break;
        case '/':
            soundDivide.play();
            break;
        case '=':
            soundEquals.play();
            break;
        case 'C':
            soundClear.play();
            break;
        case 'DEL':
            soundDelete.play();
            break;
        default:
            soundDigit.play();
    }
}


function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
    playSound(value);
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
    playSound('C');
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
    playSound('DEL');
}

function calculate() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
        playSound('=');
    } catch (error) {
        displayValue = '';
        updateDisplay();
        playSound('C');
        alert('Erro na expressão!');
    }
}
