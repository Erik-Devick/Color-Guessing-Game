function getRandomColor() {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);

    document.querySelector(".randColorDisplay").style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}