// Generate random number for Player 1
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage1 = "dice" + randomNumber1 + ".png";
let randomImageSrc1 = "images/" + randomDiceImage1;
document.querySelectorAll("img")[0].setAttribute("src", randomImageSrc1);

// Generate random number for Player 2
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage2 = "dice" + randomNumber2 + ".png";
let randomImageSrc2 = "images/" + randomDiceImage2;
document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);


// Determine the winner and update the h1 element
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🏆 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🏆";
} else {
    document.querySelector("h1").textContent = "It's a Draw!";
}