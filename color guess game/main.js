var allBoxes = document.querySelectorAll(".box");
var randomSelectedButton;

function getRandomColor() {
    var red = Math.round(Math.random() * 256);
    var green = Math.round(Math.random() * 256);
    var blue = Math.round(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
}

function setRandomButtonBackgroundToH1() {
    var randIndex = Math.round(Math.random() * (allBoxes.length - 1));
    randomSelectedButton = allBoxes[randIndex];
    var h1 = document.querySelector("h1");
    h1.textContent = randomSelectedButton.style.backgroundColor;
}

var counter = 1;

for (var i = 0; i < allBoxes.length; i++) {
    allBoxes[i].style.backgroundColor = getRandomColor();
    allBoxes[i].addEventListener("click", function () {
        if (this.style.backgroundColor == randomSelectedButton.style.backgroundColor) {
            alert(`success: ${counter} tries needed`);
            counter = 1;
            location.reload();
        } else {
            console.log("failed");
            counter++;
            this.style.display = "none";
        }
    });
}

setRandomButtonBackgroundToH1();