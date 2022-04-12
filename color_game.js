var colors = generateRandomColors(numberofsquares);
var numberofsquares = 6;
var squares = document.querySelectorAll(".square");
var pickedcolor = pickColor();
var colordisplay = document.getElementById("colordisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");


easy.addEventListener("click", function(){
    easy.classList.add("select");
    hard.classList.remove("select");
    numberofsquares = 3;
    colors = generateRandomColors(numberofsquares);
    pickedcolor = pickColor();
    colordisplay.textContent = pickedcolor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
});

hard.addEventListener("click", function(){
    easy.classList.remove("select");
    hard.classList.add("select");
    numberofsquares = 6;
    colors = generateRandomColors(numberofsquares);
    pickedcolor = pickColor();
    colordisplay.textContent = pickedcolor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
        
    }
});

resetButton.addEventListener("click", function(){
    colors = generateRandomColors(numberofsquares);
    pickedcolor = pickColor();
    colordisplay.textContent = pickedcolor;
    this.textContent = "New Colors"
    messageDisplay.textContent = "";
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.background = "steelblue";
})

colordisplay.textContent = pickedcolor;

for(var i = 0; i < squares.length; i++)
{
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        console.log(clickedColor, pickedcolor);
        if(clickedColor === pickedcolor){
            messageDisplay.textContent = "Correct";
            resetButton.textContent = "Let's Play Again !"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else{
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again"
        }
        
    })
}

function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = []
    for(var i = 0; i < num; i++){
        arr.push(randomColor())
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}