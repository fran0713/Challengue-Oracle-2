//palabras de hasta 10 letras
var palabras = ["HOLA", "FRANCO", "ALURA", "PROGRAMAR", "ARGENTINA"];
var tryWrong = 0;

const btnStartGame = document.querySelector("#startGame");
const btnAddWord = document.querySelector("#addWord");

var location;

var secretWord;
let lettersOK = [];
let lettersWrong = [];
let isGameFinished = false;

//WHEN YOU CLICK THIS BUTTON THE GAME STARTS
btnStartGame.addEventListener('click', () => {
    startGame();
});

///WHEN YOU CLICK THIS BUTTON YOU ADD A WORD TO THE GAME
btnAddWord.addEventListener('click',function(event){
    event.preventDefault();
    var btn = document.querySelector("#message");
    let newWord = btn.value.toUpperCase();
    let reg = /^[A-Za-z]+$/;
    if(!newWord.match(reg)){
        alert("ONLY WORDS (NO BLANK SPACES,NO NUMBRES,NO SPECIAL CHARACTERS");
        return;
    }
    palabras.push(newWord);
    alert("THE WORD '"+newWord+"' WAS ADDED");
    console.log(palabras);
    btn.value = '';
});

//FUNCTION TO START ALL GAME
function startGame() {
    cleanScreen();
    secretWord = sortearPalabra().split("");
    console.log(secretWord);
    createBaseHanged();
    createWordsLine(secretWord.length);
    inputFocusOut();
}

//FUNCTION TO RAFFLE A WORD
function sortearPalabra() {
    var totalPalabras = palabras.length;
    var indice = Math.floor(Math.random() * totalPalabras);
    var secretWord = palabras[indice];
    console.log(secretWord);
    return secretWord;
}

//FUNCTION TO ACTIVATE KEYUP
function inputFocusOut() {
    document.addEventListener('keyup', detectKeyPress);
}

//FUNCTION TO DETECT A PRESSED LETTER
function detectKeyPress(e) {
    if (!validateKey(e.keyCode)) {
        return; //go out of the function if you pressed a key that isn´t a letter
    }
    var letterOk = e.key.toUpperCase();

    if (letterInArray(letterOk, lettersOK) || letterInArray(letterOk, lettersWrong)) {
        return; //go out of the function if you have pressed the same key letter
    }
    var state = letterInSecretWord(letterOk);

    if (!state) {
        wrongLetter(letterOk);
        writeWrongLetter(letterOk, tryWrong);
        drawHangedPart(tryWrong);
        checkLoose();
        return;
    }
    checkWin();
}

// FUNCTION TO DETECT IF KEY IS A LETTER WITH KEYCODE
function validateKey(letterCode) {
    if (letterCode >= 65 && letterCode <= 90 || letterCode == 186) {
        return true;
    }
}

//FUNCTION TO ADD WRONG LETTER TO ARRAY-WRONG
function wrongLetter(l) {
    tryWrong += 1;
    lettersWrong.push(l);
}

//FUNCTION TO CHECK IF YOU LOOSE(YOU MIGHT HAVE NO MORE CHANCES)
function checkLoose() {
    if (tryWrong == 6) {
        isGameFinished = true;
        showLooseMessage(secretWord);
        removeKeyUpListener();
        showBtnReset();
    }
}

//FUNCTION TO CHECK WIN, IF THE ARRAY-SECRET IS EQUAL ARRAY-OK
function checkWin() {
    if (secretWord.join('') == lettersOK.join('')) {
        isGameFinished = true;
        showWinnerMessage();
        removeKeyUpListener();
        showBtnReset();
    }
}

//FUNCTION TO VERIFY IF LETTER PUSHED IS CORRECT------> IF IS CORRECT ADD TO ARRAY-OK and DRAW IT
function letterInSecretWord(l) {
    var h = false;
    for (var i = 0; i < secretWord.length; i++) {
        if (secretWord[i] == l) {
            showOkLetter(i, l);
            lettersOK[i] = l;
            h = true;
        }
    }
    return h;

}

//STOP THE KEYUP LISTENER
function removeKeyUpListener() {
    document.removeEventListener('keyup', detectKeyPress);
}

//FUNCTION TO CHECK IF A LETTER HAS BEEN PRESSED 
function letterInArray(l, a) {
    if ((a.indexOf(l) == -1)) {
        return false;
    } else {
        return true;
    }
}

function restartGame() {
    function resetGame() {
        tryWrong = 0;
        secretWord = "";
        lettersOK = [];
        lettersWrong = [];
        isGameFinished = false;
    }
}

//Tengo que crear la funcion para dibujar los espacios.............READY
//Dibujar la base del ahorcado ...................................READY
//continue.......
//funciones para dibujar letras correctas e incorrectas....................READY
//funcion para aparecer boton de resetear...................READY...................................(I could do it ahah)
//en funcion resetear, limpiar espacios, limpiar el dibujo de la persona-.................READY
//hacer lo del keyUp con verificaciones con los keyCode............READY
//funcion para dibujar partes del cuerpo.......................READY
//funcion para dibujar mensaje de perder....................READY
//funcion para dibujar mensaje de ganar....................READY
//funcion para desactivar el keyup........................READY
//funcion para limpiar pantalla.......................READY
//funcion para mostrar letra correcta (ponerla en el array de correct y dibujarla)...............READY


