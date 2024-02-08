/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {return number1 + number2}

function addNumbers () {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subNumbers = function (number1, number2) {return number1 - number2
}

const subtractNumbers = function() {
    let subNumber1 = Number(document.querySelector('#subtract1').value);
    let subNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subNumbers(subNumber1, subNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (num1, num2) => num1 * num2;

const multiplyNumbers = () => document.querySelector('#product').value = multiply(Number(document.querySelector('#factor1').value), Number(document.querySelector('#factor2').value));

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (num1, num2) => num1 / num2;

const divideNumbers = () => document.querySelector('#quotient').value = divide(Number(document.querySelector('#dividend').value), Number(document.querySelector('#divisor').value));

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
function getTotal() {
    const subtotal = document.getElementById("#subtotal");
    const memeber = document.getElementById('#member').checked;
    if (member) {
        let total = subtotal * 0.8;
    } else { let total = subtotal; }
    return `${total}`
}
GetTotalDue.addEventListener("click", getTotal );

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById('array').innerHTML = numbers;

/* Output Odds Only Array */
let oddArray = numbers.filter(number => number % 2 !== 0);
document.getElementById('odds').textHTML = oddArray

/* Output Evens Only Array */
document.getElementById('evens').textHTML = numbers.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.getElementById('sumOfArray') = numbers.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.getElementById('multiplied') = numbers.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
document.getElementById('sumOfMultiplied') = numbers.map(number => number * 2).reduce((sum, number) => sum + number );