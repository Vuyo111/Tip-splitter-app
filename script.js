// Select elements
const billInput = document.getElementById('bill');
const tipButtons = document.querySelectorAll('.tip-btn');
const customTipInput = document.getElementById('custom-tip');
const peopleInput = document.getElementById('people');
const tipAmount = document.getElementById('tip-amount');
const totalAmount = document.getElementById('total-amount');
const resetBtn = document.getElementById('reset-btn');
const themeToggle = document.getElementById('theme-toggle');

// Variables
let billValue = 0;
let tipValue = 0;
let peopleValue = 1;

// Event Listeners
billInput.addEventListener('input', setBillValue);
tipButtons.forEach(btn => btn.addEventListener('click', handleTipClick));
customTipInput.addEventListener('input', setCustomTip);
peopleInput.addEventListener('input', setPeopleValue);
resetBtn.addEventListener('click', resetAll);
themeToggle.addEventListener('click', toggleTheme);

// Functions
function setBillValue() {
    billValue = parseFloat(billInput.value);
    if (isNaN(billValue) || billValue <= 0) {
        billValue = 0;
    }
    calculateTip();
}

function handleTipClick(event) {
    tipButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    tipValue = parseInt(event.target.innerText) / 100;
    customTipInput.value = '';
    calculateTip();
}

function setCustomTip() {
    tipButtons.forEach(btn => btn.classList.remove('active'));
    tipValue = parseFloat(customTipInput.value) / 100;
    if (isNaN(tipValue) || tipValue <= 0) {
        tipValue = 0;
    }
    calculateTip();
}

function setPeopleValue() {
    peopleValue = parseInt(peopleInput.value);
    if (isNaN(peopleValue) || peopleValue <= 0) {
        peopleValue = 1;
    }
    calculateTip();
}

function calculateTip() {
    if (peopleValue >= 1) {
        const tipPerPerson = (billValue * tipValue) / peopleValue;
        const totalPerPerson = (billValue / peopleValue) + tipPerPerson;
        tipAmount.innerText = `R${tipPerPerson.toFixed(2)}`;
        totalAmount.innerText = `R${totalPerPerson.toFixed(2)}`;
    }
}

function resetAll() {
    billInput.value = '';
    customTipInput.value = '';
    peopleInput.value = '1';
    tipButtons.forEach(btn => btn.classList.remove('active'));
    tipAmount.innerText = 'R0.00';
    totalAmount.innerText = 'R0.00';
    billValue = 0;
    tipValue = 0;
    peopleValue = 1;
}

// Toggle Dark Mode
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.innerText = '☀️ Light Mode';
    } else {
        themeToggle.innerText = '🌙 Dark Mode';
    }
}