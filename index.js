var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceNumber = "dice" + randomNumber1 + ".png";

var randamImageSource = "images/" + randomDiceNumber ;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randamImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceNumber2 = "dice" + randomNumber2 + ".png";

var randamImageSource2 = "images/" + randomDiceNumber2 ;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randamImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerText = "player 1 is win";
}else if(randomNumber1 < randomNumber2 ){
    document.querySelector("h1").innerText = "player 2 is win";
}else{
    document.querySelector("h1").innerText = "Draw";
}