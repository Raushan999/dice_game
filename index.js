// var randomNumber = Math.random();
// var randomNumber = Math.floor(randomNumber*6)+1;
// var picture = new Array("images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png");
// // document.setAttribute("src","images/picture[randomNumber]");
// document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber+".png");

var randomNumber1 = randomNumber();
var randomNumber2 = randomNumber();
function randomNumber() {
  var randomNum = Math.random();
  var randomNum = Math.floor(randomNum * 6)+1;

  return randomNum;
}
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");
if(randomNumber1 === randomNumber2)
{
  // document.querySelector("h1").setAttribute()
  document.getElementById("h1_id").innerHTML = "draw!";
}
else if (randomNumber1 < randomNumber2){
  document.querySelector("#h1_id").innerHTML = "player 2 wins";
}
else if (randomNumber1 > randomNumber2)
{
  document.querySelector("#h1_id").innerHTML = "player 1 wins";
}
