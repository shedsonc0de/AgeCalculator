const headerTitle = document.querySelector(".header-title");
const title = document.querySelector(".title");

const barTop = document.querySelector(".bar-top");
const barMiddle = document.querySelector(".bar-middle");
const barBottom = document.querySelector(".bar-bottom");
const menu = document.querySelector('.hamburger-menu');

const menuContainer = document.querySelector('.menu-container');

const sideBar = document.querySelector('.side-bar');

const tryAgainBtn = document.querySelector('#tryAgain');
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

const elder = [
    'start preparing for your marrage, you are now ',
    'my first son is older than you, you are just ',
    'you are just ',
    'if you are ready for marrage just let me know, cause you are now ',
    'you are old another to get a job. ',
    "hahaha:) i'm older than you. ",
]

const num1 = [11,12,13,14,17,18,19,20,16,15];
const num3 = [
    21,22,23,24,27,28,29,20,26,25,
    31,32,33,34,37,38,39,30,36,35,
    41,42,43,44,47,48,49,40,46,45,
    51,52,53,54,57,58,59,50,56,55,
    61,62,63,64,67,68,69,60,66,65,70,
];

btn.addEventListener('click', () => {
    if (nameInput.value === '' || yearInput.value === '') {
        alert('Add your Name and Date of birth')
    } else {
        headerTitle.innerHTML = 'Age Result'
        title.innerHTML = 'Here is your age simplified'
        btn.style.display = 'none';
        tryAgainBtn.style.display = 'block';
        resultContainer.style.display = 'flex';
        inputContainer.style.display = 'none';
        checkAgeRange();  
    }
});

function checkAgeRange() {
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
    } else if (age <= 70) {
        for (let i = 0; i < num3.length; i++) {
            if (age === num3[i]) {
                output.innerHTML = nameInput.value + ', ' + elder[Math.floor(Math.random() * elder.length)] + age + 'years old';
            };
        };
    };
}

tryAgainBtn.addEventListener('click', () => {
    headerTitle.innerHTML = 'Calculate Age'
    title.innerHTML = 'To get your age calculated just enter your birthday'
    btn.style.display = 'block';
    tryAgainBtn.style.display = 'none';
    resultContainer.style.display = 'none';
    inputContainer.style.display = 'flex';
});

menu.addEventListener('click', event => {
	barTop.classList.toggle('bar-top-animate');
	barMiddle.classList.toggle('bar-middle-animate');
	barBottom.classList.toggle('bar-bottom-animate');

    sideBar.classList.toggle('move-side-bar');
});

//My name is shedrack
//TikTok @shedsonc0de
//Instagram @shedsoncode
//Twitter @shedsoncode