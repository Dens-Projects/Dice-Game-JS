// var imageArray = [];
// imageArray.src= "./images/dice1.png";
var randomImage = Math.floor((Math.random()*6)+1);
var randomImage2 = Math.floor((Math.random()*6)+1);
var player1 = document.querySelector(".img1");
var player2 = document.querySelector(".img2");
var refreshBtn = document.getElementById("btnRefresh");

player1.setAttribute("src", "images/dice" + randomImage + ".png");
player2.setAttribute("src", "images/dice" + randomImage2 + ".png");

if(randomImage > randomImage2){
    document.querySelector("h1").textContent = "Player 1 won!"

}else if(randomImage === randomImage2){
    
    document.querySelector("h1").textContent = "Pareggio"
}
else{
    document.querySelector("h1").textContent = "Player 2 won!"
}

function handleClick() {
  window.location.reload();
}

refreshBtn.addEventListener("click", handleClick);
