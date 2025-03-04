function getRandomColor() {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);

    document.getElementsByClassName("randColorDisplay").backgraundColor = "rgb(r, g, b)";
}