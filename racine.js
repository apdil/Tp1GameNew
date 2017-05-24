        
        let playerOne = document.querySelector("#playerOne");
        let playerTwo = document.querySelector("#playerTwo");
        
        let data = [];

        let perso1 = new Object();
        perso1.life = 100;
        perso1.power = 20;
        perso1.armure = 1;
        perso1.mana = 0;

        let perso2 = new Object();
        perso2.life = 100;
        perso2.power = 17;
        perso2.armure = 3;
        perso2.mana = 0;
        perso2.name = "Titan";
        perso2.chemin = playerTwo;
        perso2.stop = "ninjaboy"; // class
        perso2.attack = "ninjaboyattack";
        perso2.run = "ninjaboyrun";
        perso2.img = "imgNinjaB";

        let perso3 = new Object();
        perso3.life = 100;
        perso3.power = 13;
        perso3.armure = 5;
        perso3.mana = 0;

        let perso4 = new Object();
        perso4.life = 100;
        perso4.power = 10;
        perso4.armure = 8;
        perso4.mana = 0;
        perso4.name = "Titania";
        perso4.chemin = playerOne;
        perso4.stop = "ninjagirl"; // class
        perso4.attack = "ninjagirlattack";
        perso4.run = "ninjagirlrun";
        perso4.img = "imgNinjaG";

        data.push(perso1); // data[0]
        data.push(perso2); // data[1]
        data.push(perso3); // data[2]
        data.push(perso4); // data[3]


        joueur1 = data[3];
        joueur2 = data[1];

        playerOne.classList = joueur1.stop; // play.js
        playerTwo.classList = joueur2.stop + " scaleX"; // play.js
                
        document.querySelector("#namePlayerL").textContent = joueur1.name;// play.js
        document.querySelector("#namePlayerR").textContent = joueur2.name;// play.js

        document.querySelector("#imgPersoL").classList += " " + joueur1.img;// img caract perso plays.js
        document.querySelector("#imgPersoR").classList += " " + joueur2.img;// img caract perso plays.js

        function coufaible(attacker, victim){
            let damageLife = attacker.power - victim.armure;
            victim.life -= damageLife;
            attacker.mana += attacker.power;
        }
        function potion(perso){
            if(perso.life === 100 && perso.power > perso.mana){
                let reste = 100 - perso.life;
                return perso.mana - perso.life;
            }
            if(perso.mana !== 0){ // augmenter life
                perso.life += perso.power;
            }
            if(perso.life <= 100 && perso.mana !== 0){ // diminuer mana
                perso.mana -= perso.power;
            }
        }
        function hpMoove(id, playerlife){ 
            if(playerlife.life < 0){
                document.querySelector(id).style.width = 0 + "%";
                playerlife.life = 0;
            } else if(playerlife.life > 100){
                document.querySelector(id).style.width = 100 + "%";
                playerlife.life = 100;
            }
            else{
                document.querySelector(id).style.width = playerlife.life + "%";
            }
        }
        function manaMoove(id, playerlife){ 
            if(playerlife.mana <= 0){
                document.querySelector(id).style.width = 0 + "%";
                playerlife.mana = 0;
            } else if(playerlife.mana >= 100){
                document.querySelector(id).style.width = 100 + "%";
                playerlife.mana = 100;
            }
            else{
                document.querySelector(id).style.width = playerlife.mana + "%";
            }
        }
        function animend(cheminClass, oldclass, newclass) {
            document.body.querySelector(cheminClass).addEventListener("animationend", function(){
                oldclass.classList = newclass;
            });
        }
        function textIn(chemin, commentaire, keys){
            document.querySelector(chemin).textContent = commentaire + keys;

        }
