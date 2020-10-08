var numSq=6;
var colors=[];
var pickedColor;
var h1 = document.querySelector("h1")
var squares = document.querySelectorAll(".square")
var colordisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var resetButton = document.querySelector("#reset")
var bgColor = document.body.style.backgroundColor;
var modeBtn = document.querySelectorAll(".mode")

init();

resetButton.addEventListener("click", function () {
    reset();
})

function init(){
    setupModeBtn(); 
    setupSq();   
    reset();
}

function reset() {    
    colors = generateRandomColors(numSq);    
    pickedColor = pickColor();
    colordisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }        
    }    
}

function setupModeBtn(){
    for (var i = 0; i < modeBtn.length; i++) {        
        modeBtn[i].addEventListener("click", function () {    
            for (var i = 0; i < modeBtn.length; i++) {
                modeBtn[i].classList.remove("selected");
            }
            this.classList.add("selected");        
            this.textContent === "Easy" ? numSq = 3 : numSq = 6;
            reset();            
        });
    }
}

function setupSq(){
    for (var i = 0; i < squares.length; i++) {             
        squares[i].addEventListener("click", function () {    
            var clickedColor = this.style.backgroundColor;    
            if (clickedColor == pickedColor) {
                changeColor(pickedColor)
                h1.style.backgroundColor = pickedColor;
                messageDisplay.textContent = "Correct!"
                resetButton.textContent = "Play Again ?"
            } else {
                this.style.backgroundColor = document.body.style.backgroundColor;
                messageDisplay.textContent = "Try Again"
            }
        })
    }
}

function changeColor(pickedColor) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = pickedColor;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = []

    for (var i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
