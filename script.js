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
    var similarity = (1-(distance/maxDistance))*100

    alert(`${similarity.toFixed(2)}% correct`)
    location.reload();
}