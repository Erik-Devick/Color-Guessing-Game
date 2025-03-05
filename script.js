function getRandomColor() {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);

    document.querySelector(".randColorDisplay").style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    document.querySelector(".yourColor").style.backgroundColor = `rgb(${100}, ${100}, ${100})`;
}

function updateColor() {
    var r = document.getElementById("redSlider").value;
    var g = document.getElementById("greenSlider").value;
    var b = document.getElementById("blueSlider").value;
    
    document.querySelector(".yourColor").style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
document.getElementById("redSlider").addEventListener("input", updateColor)
document.getElementById("greenSlider").addEventListener("input", updateColor)
document.getElementById("blueSlider").addEventListener("input", updateColor)

function checkGuess() {
    var randomColor = document.querySelector(".randColorDisplay").style.backgroundColor;
    var rgbValues = randomColor.match(/\d+/g).map(Number);
    console.log(rgbValues)

    var randomRed = rgbValues[0];
    var randomGreen = rgbValues[1];
    var randomBlue = rgbValues[2];

    var Rguess = document.getElementById("redSlider").value;
    var Gguess = document.getElementById("greenSlider").value;
    var Bguess = document.getElementById("blueSlider").value;

    var distance = Math.sqrt((randomRed-Rguess)**2+(randomGreen-Gguess)**2+(randomBlue-Bguess)**2);
    var maxDistance = Math.sqrt(195075);
    var similarity = (1-(distance/maxDistance))*100;

    return [similarity, randomRed, randomGreen, randomBlue, Rguess, Gguess, Bguess];
}

function playAgain() {
    location.reload();
}

const openPopup = document.getElementById('openPopup');
const closePopup = document.getElementById('closePopup');
const popup = document.getElementById('popup');
const accuracy = document.getElementById('accuracy');
const redComparison = document.getElementById('redComparison');
const greenComparison = document.getElementById('greenComparison');
const blueComparison = document.getElementById('blueComparison');

openPopup.addEventListener('click', () => {
    popup.style.display = 'flex';
    accuracy.textContent = `Accuracy: ${checkGuess()[0].toFixed(2)}%`;
    redComparison.textContent = `Red acutal: ${checkGuess()[1]} vs. Your guess: ${checkGuess()[4]}`;
    greenComparison.textContent = `Green actual: ${checkGuess()[2]} vs. Your guess: ${checkGuess()[5]}`;
    blueComparison.textContent = `Blue actual: ${checkGuess()[3]} vs. Your guess: ${checkGuess()[6]}`;
});

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});



