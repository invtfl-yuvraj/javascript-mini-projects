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

let password = "";
let passwordLength = 6;

function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
}

async function copyContent(){
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMessage.innerText = "Copied";
        copyMessage.classList.add("bg-green-400", "text-green-950", "after:bg-green-400");
    }
    catch(e) {
        copyMessage.innerText = "Failed";
        copyMessage.classList.add("bg-red-300", "text-red-950", "after:bg-red-300");
    }

    copyMessage.classList.remove("hidden");

    setTimeout(()=>{
        copyMessage.classList.add("hidden");
    }, 2000);

}

function selectCheckbox(checkboxType){
    if(checkboxType.id == "uppercase"){
        return checkUppercase ; 
    }
    else if (checkboxType.id == "lowercase"){
        return checkLowercase;
    }
    else if (checkboxType.id == "numeric"){
        return checkNumbers;
    }
    else if (checkboxType.id == "symbol"){
        return checkSymbols;
    }
}

function checkBoxStatus(){
    allCheckBox.forEach((checkbox) => {
        if (checkbox.checked){
            console.log("here");
            console.log(selectCheckbox(checkbox));
            selectedCheckBox.classList.remove("bg-white");
            selectedCheckBox.classList.add("bg-yellow-300");
            }
            
        });
        // else {
        //     if (!e.target.classList.includes("bg-white")){
        //         e.target.classList.add("bg-white");
        //     };
        // }
}

allCheckBox.forEach((checkbox) =>{
    checkbox.addEventListener('change', checkBoxStatus);
});


inputSlider.addEventListener("input", (e)=> {
    passwordLength = e.target.value;
    handleSlider();
});
handleSlider();