
// script.js
const resultElement = document.getElementById("result");
const generateButton = document.getElementById("generateButton");

function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    resultElement.textContent = `Generated random number: ${randomNumber}`;
}

generateButton.addEventListener("click", generateRandomNumber);
