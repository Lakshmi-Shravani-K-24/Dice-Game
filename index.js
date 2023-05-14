function rng(){
var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1);
return randomNumber1+1;
}

var rn=rng();
console.log("random number is"+ rn);

if(rn===1)
document.querySelector("img").setAttribute("src", "./images/dice1.png");
else if(rn===2)
document.querySelector("img").setAttribute("src", "./images/dice2.png");
else if(rn==3)
document.querySelector("img").setAttribute("src", "./images/dice3.png");
else if(rn==4)
document.querySelector("img").setAttribute("src", "./images/dice4.png");
else if(rn==5)
document.querySelector("img").setAttribute("src", "./images/dice5.png");
else
document.querySelector("img").setAttribute("src", "./images/dice6.png");



var rn1=rng();
console.log("random number is "+rn1);
if(rn1===1)
document.querySelectorAll("img")[1].setAttribute("src", "./images/dice1.png");
else if(rn1===2)
document.querySelectorAll("img")[1].setAttribute("src", "./images/dice2.png");
else if(rn1==3)
document.querySelectorAll("img")[1].setAttribute("src", "./images/dice3.png");
else if(rn1==4)
document.querySelectorAll("img")[1].setAttribute("src", "./images/dice4.png");
else if(rn1==5)
document.querySelectorAll("img")[1].setAttribute("src", "./images/dice5.png");
else
document.querySelectorAll("img")[1].setAttribute("src", "./images/dice6.png");

if(rn> rn1)
document.querySelector("h1").textContent=" 🚩 Player 1 wins";
else if(rn1>rn)
document.querySelector("h1").textContent="Player 2 wins 🚩 ";
else
document.querySelector("h1").textContent="Draw!";
