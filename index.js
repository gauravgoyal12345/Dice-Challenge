let randomNumber1 = Math.ceil(Math.random()*6);
let image = "dice" + randomNumber1 + ".png";
let imagesource = "images/" + image;
let image1 = document.getElementsByTagName("img")[0];
image1.setAttribute("src", imagesource);

let randomNumber2 = Math.ceil(Math.random()*6);
let imagesource2 = "images/" + "dice" + randomNumber2 + ".png";
let image2 = document.getElementsByTagName("img")[1];
image2.setAttribute("src", imagesource2);


if(randomNumber1>randomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML = "Player 1 wins!";
}
else if(randomNumber1<randomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 wins!";
}
else{
    document.getElementsByTagName("h1")[0].innerHTML = "It's a tie.";
}
