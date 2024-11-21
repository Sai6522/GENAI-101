// script.js
const facts = [
    "The Earth rotates at a speed of 1,040 mph.",
    "Water is the only substance that exists naturally in solid, liquid, and gas states on Earth.",
    "Honey never spoils! Archaeologists found 3,000-year-old honey in Egyptian tombs that was still edible.",
    "The speed of light is approximately 186,282 miles per second.",
    "Octopuses have three hearts and blue blood.",
    "Bananas are berries, but strawberries are not.",
    "A day on Venus is longer than a year on Venus.",
    "Your fingerprints are uniquely yours—even identical twins don't share them.",
    "Sharks existed before trees were even a thing!"
];

const factDisplay = document.getElementById('fact-display');
const generateBtn = document.getElementById('generate-btn');

generateBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts.length);

    // Add dynamic animation
    factDisplay.style.opacity = 0;
    setTimeout(() => {
        factDisplay.textContent = facts[randomIndex];
        factDisplay.style.opacity = 1;
        factDisplay.style.transform = "scale(1.05)";
        setTimeout(() => {
            factDisplay.style.transform = "scale(1)";
        }, 300);
    }, 300);
});
