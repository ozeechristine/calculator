const numberList = Array.from(document.querySelectorAll('.number'));
const plusSign = document.querySelector('.plus');
const minusSign = document.querySelector('.minus');
const divideSign = document.querySelector('.divide');
const multiplySign = document.querySelector('.multiply');
const equalSign = document.querySelector('.equal-sign');
const screen = document.querySelector('.screen');
let clearDisplay = false;
let selectedNumber;
let firstNumber = '';
let nextNumber = '';
//console.log(numberList, plusSign, minusSign, multiplySign, equalSign, divideSign)

numberList.forEach(item => {
    item.addEventListener('click', () => {
        if (clearDisplay) {
            selectedNumber = parseInt(item.textContent);
            screen.textContent = selectedNumber.toString();
            clearDisplay = false;
        } else {
            selectedNumber =  parseInt(item.textContent);
            screen.textContent += selectedNumber.toString();
        }

        
    })
})

plusSign.addEventListener('click', () => {
    clearDisplay = true;
})