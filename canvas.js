
var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

function cleanScreen() {
    pincel.clearRect(0, 0, 600, 300);
}

function drawCircumference(x, y, radio) {
    pincel.fillStyle = "red";
    pincel.beginPath();
    pincel.arc(x, y, radio, 0, 2 * 3.14);
    pincel.fill();
}
function drawLines(xi, yi, xLenght, yLenght) {
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(xi, yi);
    pincel.lineTo(xi + xLenght, yi + yLenght);
    pincel.stroke();
    pincel.fill();
}

//LINES TO PUT DE LETTERS 
function createWordsLine(i) {
    x = 100;
    y = 115;
    xLenght = 10;
    for (var j = 0; j < i; j++) {
        drawLines(x, y, xLenght, 0);
        x += xLenght * 2;
    }
}

//DRAW THE BASE OF HANGEDMAN
function createBaseHanged() {
    pincel.fillStyle = "black";
    drawLines(30, 115, 50, 0);
    drawLines(55, 25, 0, 90);
    drawLines(55, 25, 35, 0);
    drawLines(90, 25, 0, 10);
}

//TYPE CORRECT LETTER
function showOkLetter(i, letter) {
    var x = 100;
    pincel.font = "14px Georgia";
    pincel.fillStyle = "black";
    pincel.fillText(letter, x + (20 * i), 112);
}

//TYPE INCORRECT LETTER
function writeWrongLetter(l, cont) {
    var x = 140;
    pincel.font = "14px Georgia";
    pincel.fillStyle = "black";
    pincel.fillText(l, x + (14 * cont), 70);
}

//FUNCTION TO DRAW WHEN YOU LOOSE
function drawHangedPart(cont) {
    switch (cont) {
        case 1:
            onePart();
            break;
        case 2:
            twoPart();
            break;
        case 3:
            threePart();
            break;
        case 4:
            fourPart();
            break;
        case 5:
            fivePart();
            break;
        case 6:
            sixPart();
            break;
    }
}
//ALL THE PARTS OF HANGED MAN
function onePart() {
    pincel.beginPath();
    pincel.arc(90, 45, 10, 0, 2 * Math.PI);
    pincel.stroke();
}
function twoPart() {
    pincel.moveTo(90, 55);
    pincel.lineTo(90, 85);
    pincel.stroke();
}
function threePart() {
    pincel.moveTo(90, 85);
    pincel.lineTo(80, 95);
    pincel.stroke();
}
function fourPart() {
    pincel.moveTo(90, 85);
    pincel.lineTo(100, 95);
    pincel.stroke();
}
function fivePart() {
    pincel.moveTo(90, 60);
    pincel.lineTo(80, 70);
    pincel.stroke();
}
function sixPart() {
    pincel.moveTo(90, 60);
    pincel.lineTo(100, 70);
    pincel.stroke();
}

//MESSAGE IF YOU LOST
function showLooseMessage(word) {
    word = word.join('');
    let msg = "YOU LOST!";
    let correct = "THE WORD WAS " + word;
    Xi = 200;
    Yi = 43;
    pincel.font = "14px Georgia";
    pincel.fillStyle = "#E10B0B";
    pincel.fillText(msg, Xi, Yi);
    pincel.font = "10px Georgia";
    pincel.fillText(correct, 100, 130);
}

//MESSAGE IF YOU WIN
function showWinnerMessage(word) {
    let msg = "YOU WIN!";
    Xi = 200;
    Yi = 43;
    pincel.font = "14px Georgia";
    pincel.fillStyle = "darkgreen";
    pincel.fillText(msg, Xi, Yi);

}
function showBtnReset() { //SHOW THE REFRESH BUTTON and ADD EVENTLISTENER FOR THE BUTTON TO RELOAD THE PAGE
    var botones = document.querySelector("#game");
    const btnRefresh = document.createElement('button');
    btnRefresh.type = 'button';
    btnRefresh.innerText = 'Refresh';
    botones.appendChild(btnRefresh);
    btnRefresh.addEventListener('click',()=>{
        location.reload();
    });
}