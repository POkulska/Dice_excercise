
let randomNumber1 = Math.floor((Math.random() * 6) + 1);
let randomNumber2 = Math.floor((Math.random() * 6) + 1);

let randomImageSource1 = "images/dice"+randomNumber1+".png" ;
let randomImageSource2 = "images/dice"+randomNumber2+".png" ;

//way one
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1);
//way two
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if (randomNumber1>randomNumber2) {
    document.querySelector(".container h1").innerHTML="🚩Player 1 Wins!";
} else if(randomNumber1===randomNumber2) {
    document.querySelector(".container h1").innerHTML="Draw!";

} else {
    document.querySelector(".container h1").innerHTML="Play 2 Wins!🚩";

}


/*
var player1dice = document.querySelector(".img1");
var player2dice = document.querySelector(".img2");
var winner = document.querySelector(".container h1");




function shuffleDices() {
    player1dice.setAttribute("src", "images/dice" + randomNumber1 + ".png");
    player2dice.setAttribute("src", "images/dice" + randomNumber2 + ".png");

    if (randomNumber1>randomNumber2) {
        winner.innerHTML="🚩Player 1 Wins!";
    } else if (randomNumber1===randomNumber2) {
        winner.innerHTML="Draw!";   
    }         else {
        winner.innerHTML="Player 2 Wins!<img src='images/winner_icon.png'>";
    }
}

document.onload = shuffleDices();
document.onload = chooseWinner();

*/

