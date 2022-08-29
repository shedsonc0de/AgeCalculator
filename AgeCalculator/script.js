const barTop = document.querySelector(".bar-top");
const barMiddle = document.querySelector(".bar-middle");
const barBottom = document.querySelector(".bar-bottom");
const menu = document.querySelector('.hamburger-menu');

const menuContainer = document.querySelector('.menu-container');

const sideBar = document.querySelector('.side-bar');

const btn = document.querySelector('.btn');
const dayInput = document.querySelector('#day');
const mounthInput = document.querySelector('#mounth');
const yearInput = document.querySelector('#year');

const nameInput = document.querySelector('#name');

const output = document.querySelector('.result');

const inputContainer = document.querySelector('.calculator-container');
const resultContainer = document.querySelector('.result-container');

const tenBelow = [
    'you are just ',
    "i can't belive you are just ",
    "i'm way older than you, you are just ",
    "lol... you are just ",
    'my first son is older than you, you are just '
];

const teens = [
    'you are still a teenager. ',
    'dream big you are still ',
    'you are just ',
    'hahaha you are still a small child. ',
    'my last born is older than you, you are just '
];

const num1 = [11,12,13,14,17,18,19,20,16,15];
const num2 = [21,22,23,24,27,28,29,20,26,25];

btn.addEventListener('click', () => {
    btn.innerHTML = 'Check Age Again';

    resultContainer.style.display = 'flex'
    inputContainer.style.display = 'none'

    resultContainer.classList.toggle('flex');
    inputContainer.classList.toggle('none');

    const yearInputValue = yearInput.value;
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const age = year - yearInputValue;

    if (age <= 10) {
        output.innerHTML =  nameInput.value + ', ' + tenBelow[Math.floor(Math.random() * tenBelow.length)] + age + ' years old';
    } else if (age <= 20) {
        for (let i = 0; i < num1.length; i++) {
            if (age === num1[i]) {
                output.innerHTML = nameInput.value + ', ' + teens[Math.floor(Math.random() * teens.length)] + age + ' years old';
            };
        };
    } else if (age <= 30) {
        for (let i = 0; i < num2.length; i++) {
            if (age === num2[i]) {
                output.innerHTML = nameInput.value + ', ' + teens[Math.floor(Math.random() * teens.length)] + age + ' years old';
            };
        };
    };
});


menu.addEventListener('click', event => {
	barTop.classList.toggle('bar-top-animate');
	barMiddle.classList.toggle('bar-middle-animate');
	barBottom.classList.toggle('bar-bottom-animate');

    sideBar.classList.toggle('move-side-bar');
})