var num1 = Math.floor(Math.random() * 6) + 1;
var num2 = Math.floor(Math.random() * 6) + 1;
var randomimage1 ="dice" + num1 + ".png";

var randomimage2 ="dice" + num2 + ".png";
dice1();
dice2();

decider(num1,num2);






function dice1(){

if (num1 === 1) {
    document.querySelector(".img1").setAttribute("src", randomimage1);
}
else if (num1 === 2) {
    document.querySelector(".img1").setAttribute("src", randomimage1);
}
else if (num1 === 3) {
    document.querySelector(".img1").setAttribute("src", randomimage1);
}
else if (num1 === 4) {
    document.querySelector(".img1").setAttribute("src", randomimage1);
}
else if (num1 === 5) {
    document.querySelector(".img1").setAttribute("src", randomimage1);
}
else if (num1 === 6) {
    document.querySelector(".img1").setAttribute("src", randomimage1);
}
}

function dice2(){
    if (num2 === 1) {
        document.querySelector(".img2").setAttribute("src", randomimage2);
    }
    else if (num2 === 2) {
        document.querySelector(".img2").setAttribute("src", randomimage2);
    }
    else if (num2 === 3) {
        document.querySelector(".img2").setAttribute("src", randomimage2);
    }
    else if (num2 === 4) {
        document.querySelector(".img2").setAttribute("src", randomimage2);
    }
    else if (num2 === 5) {
        document.querySelector(".img2").setAttribute("src", randomimage2);
    }
    else if (num2 === 6) {
        document.querySelector(".img2").setAttribute("src", randomimage2);
    }
}

function decider(d1,d2)
{
    if(d1>d2)
    {
        document.querySelector("h1").textContent="PLAYER 1 WINS! 😀";
    }
    else if(d1<d2)
    {
        document.querySelector("h1").textContent="PLAYER 2 WINS! 😀";
    }
    else{
        document.querySelector("h1").textContent="OH NOO! Its a draw Refresh again to Reroll.. 😢";
    }
}
