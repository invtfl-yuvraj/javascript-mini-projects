const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyMessage = document.querySelector("[data-copyMessage]");
const copyButton = document.querySelector("[data-copy]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const inputSlider = document.querySelector("[data-lengthSlider]");
const checkUppercase = document.querySelector("#uppercase");
const checkLowercase = document.querySelector("#lowercase");
const checkNumbers = document.querySelector("#numeric");
const checkSymbols = document.querySelector("#symbol");
const indicator = document.querySelector("[data-indicator]");
const generateButton = document.querySelector("#generate-btn");
const allCheckBox = document.querySelectorAll("input[type=checkbox]")

let symbols = "!@#$%^&*()-+/{}[]_?~':;|<>,.";

let password = "";
let passwordLength = 6;

let checkCount = 0;


// updating and displaying password length
function handleSlider() {
    if(passwordLength < checkCount){
        passwordLength = checkCount;
    }
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;

}
handleSlider(); // setting default length


// funtion to copy content to clipboard
async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMessage.innerText = "Copied";
        copyMessage.classList.add("bg-green-400", "text-green-950", "after:bg-green-400");
    }
    catch (e) {
        copyMessage.innerText = "Failed";
        copyMessage.classList.add("bg-red-300", "text-red-950", "after:bg-red-300");
    }

    copyMessage.classList.remove("hidden");

    setTimeout(() => {
        copyMessage.classList.add("hidden");
    }, 2000);

}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomNumber() {
    return getRandomInteger(0, 9);
}

function generateRandomUpperCase() {
    return String.fromCharCode(getRandomInteger(65, 91));
}

function generateRandomLowerCase() {
    return String.fromCharCode(getRandomInteger(97, 123))
}

function generateRandomSymbol() {
    const randNum = getRandomInteger(0, symbols.length);
    return symbols[randNum];
}



inputSlider.addEventListener("input", (e) => {
    passwordLength = e.target.value;
    handleSlider();
});