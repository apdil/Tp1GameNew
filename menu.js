
console.log("left : " + document.getElementById("choix1").offsetLeft);
console.log("top : " + document.getElementById("choix1").offsetTop);

tabchoice = [];

let place1 = new Object();
    place1.left = document.getElementById("choix1").offsetLeft;
    place1.top = document.getElementById("choix1").offsetTop;
let place2 = new Object();
    place2.left = document.getElementById("choix2").offsetLeft;
    place2.top = document.getElementById("choix2").offsetTop;
let place3 = new Object();
    place3.left = document.getElementById("choix3").offsetLeft;
    place3.top = document.getElementById("choix3").offsetTop;
let place4 = new Object();
    place4.left = document.getElementById("choix4").offsetLeft;
    place4.top = document.getElementById("choix4").offsetTop;
let place5 = new Object();
    place5.left = document.getElementById("choix5").offsetLeft;
    place5.top = document.getElementById("choix5").offsetTop;
let place6 = new Object();
    place6.left = document.getElementById("choix6").offsetLeft;
    place6.top = document.getElementById("choix6").offsetTop;
let place7 = new Object();
    place7.left = document.getElementById("choix7").offsetLeft;
    place7.top = document.getElementById("choix7").offsetTop;
let place8 = new Object();
    place8.left = document.getElementById("choix8").offsetLeft;
    place8.top = document.getElementById("choix8").offsetTop;

tabchoice.push(place1, place2, place3, place4, place5, place6, place7, place8);
choosePlayer1 = document.getElementById("choosePlayer1");

    function mooveSquare(player, nombre){
        player.style.left = tabchoice[nombre].left + "px";
        player.style.top = tabchoice[nombre].top + "px";
    }

let i = 0;
mooveSquare(choosePlayer1, i);

document.addEventListener("keydown", function(e){
    let entre = e.keyCode;
    switch(entre){
        case 39 : // fleche droite
            if(i < 7){
                i++;
                mooveSquare(choosePlayer1, i);
                console.log(i);
            } else {
                return null;
            }

        break;
        case 37 : // fleche gauche
            if(i > 0){
                i--;
                mooveSquare(choosePlayer1, i);
                console.log(i);
            } else {
                return null;
            }
        break;
        case 40 : // bas
            if(i <= 7){
                i = i + 4;
            if(i > 7) {
                i = i - 4;
            }
                mooveSquare(choosePlayer1, i);
                console.log(i);
            }
        break;
        case 38 : // haut
            if(i <= 7){
                i = i - 4;
            if(i < 0) {
                i = i + 4;
            }
                mooveSquare(choosePlayer1, i);
                console.log(i);
            }
    }
});