var player1dice = document.querySelector(".img1");
var player2dice = document.querySelector(".img2");
var winner = document.querySelector(".container h1");


var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);



function shuffleDices() {
    player1dice.setAttribute("src", "images/dice" + randomNumber1 + ".png");
    player2dice.setAttribute("src", "images/dice" + randomNumber2 + ".png");

    if (randomNumber1>randomNumber2) {
        winner.innerHTML="<img src='images/winner_icon.png'>Player 1 Wins!";
    } else if (randomNumber1===randomNumber2) {
        winner.innerHTML="Draw!";   
    }         else {
        winner.innerHTML="Player 2 Wins!<img src='images/winner_icon.png'>";
    }
}

document.onload = shuffleDices();
document.onload = chooseWinner();



