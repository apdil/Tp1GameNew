            
            textIn("#caractLifeL", "Life : ", joueur1.life);
            textIn("#caractLifeR", "Life : ", joueur2.life);
            textIn("#caractManaL", "Mana : ", joueur1.mana);
            textIn("#caractManaR", "Mana : ", joueur2.mana);
            textIn("#caractPowerL", "Power : ", joueur1.power);
            textIn("#caractPowerR", "Power : ", joueur2.power);
            textIn("#caractArmureL", "Armor : ", joueur1.armure);
            textIn("#caractArmureR", "Armor : ", joueur2.armure);
            
            let player1Moove = 25; // indice pour marginleft placement joueur
            let player2Moove = 75;

        document.addEventListener("keydown", function(e){
            let entre = e.keyCode;
            //console.log("left : " + document.getElementById("playerOne").offsetLeft + "  right : " + document.getElementById("playerOne").offsetTop);

            switch(entre){
                case 39 : // fleche droite
                    if(player1Moove < 100){
                        player1Moove += 1; 
                        playerOne.style.left = player1Moove + "%";
                    }
                    joueur1.chemin.classList = joueur1.run;
                    animend("." + joueur1.run, joueur1.chemin, joueur1.stop);
                break;
                case 37 : // fleche gauche
                    if(player1Moove > 0){
                        player1Moove -= 1; 
                        playerOne.style.left = player1Moove + "%";
                    }
                    joueur1.chemin.classList = joueur1.run + " scaleX";
                    animend("." + joueur1.run, joueur1.chemin, joueur1.stop + " scaleX");
                break;
                case 88 : // fleche player 2 droite
                    if(player2Moove < 100){
                        player2Moove += 1; 
                        playerTwo.style.left = player2Moove + "%";
                    }
                    joueur2.chemin.classList = joueur2.run;
                    animend("." + joueur2.run, joueur2.chemin, joueur2.stop);
                break;
                case 87 : // fleche player 2 gauche
                    if(player2Moove > 0){
                        player2Moove -= 1; 
                        playerTwo.style.left = player2Moove + "%";
                    }
                    joueur2.chemin.classList = joueur2.run + " scaleX";
                    animend("." + joueur2.run, joueur2.chemin, joueur2.stop + " scaleX");
                break;
                case 69 : // e potion player1
                    potion(joueur1);
                    hpMoove("#inHpL", joueur1);
                    manaMoove("#manaLeft", joueur1);
                    textIn("#caractManaL", "Mana : ", joueur1.mana);
                    textIn("#caractLifeL", "Life : ", joueur1.life);
                break;
                case 80 : // p potion player2
                    potion(joueur2);
                    hpMoove("#inHpR", joueur2);
                    manaMoove("#manaRight", joueur2);
                    textIn("#caractManaR", "Mana : ", joueur2.mana);
                    textIn("#caractLifeR", "Life : ", joueur2.life);
                break;
                case 65 : // only animation attack player 1
                    if(joueur1.stop !== playerOne.className){ // condition pour profile du player lors de l'attaque
                        joueur1.chemin.classList = joueur1.attack + " scaleX";
                        animend("." + joueur1.attack, joueur1.chemin, joueur1.stop + " scaleX");
                    } else {
                        joueur1.chemin.classList = joueur1.attack;
                        animend("." + joueur1.attack, joueur1.chemin, joueur1.stop);
                    }
                    textIn("#caractLifeL", "Life : ", joueur1.life);
                break;
                case 73 : // only animation attack player 2
                    if(joueur2.stop !== playerTwo.className){
                        joueur2.chemin.classList = joueur2.attack + " scaleX";
                        animend("." + joueur2.attack, joueur2.chemin, joueur2.stop + " scaleX");
                    } else {
                        joueur2.chemin.classList = joueur2.attack;
                        animend("." + joueur2.attack, joueur2.chemin, joueur2.stop);
                    }
                    textIn("#caractLifeR", "Life : ", joueur2.life);
            }
            let mooveResult = player2Moove - player1Moove;
            if(mooveResult < 10 && mooveResult > -10){
                switch(entre){
                    case 65 : // a attack player1
                        coufaible(joueur1, joueur2); // attacker , victim
                        hpMoove("#inHpR", joueur2);  // victim
                        manaMoove("#manaLeft", joueur1);
                    break;

                    case 73 : // i attack player2
                        coufaible(joueur2, joueur1);
                        hpMoove("#inHpL", joueur1);
                        manaMoove("#manaRight", joueur2);
                    break;
                    default:
                        return null;
                }

            textIn("#caractLifeL", "Life : ", joueur1.life);
            textIn("#caractLifeR", "Life : ", joueur2.life);
            textIn("#caractManaL", "Mana : ", joueur1.mana);
            textIn("#caractManaR", "Mana : ", joueur2.mana);
            textIn("#caractPowerL", "Power : ", joueur1.power);
            textIn("#caractPowerR", "Power : ", joueur2.power);
            textIn("#caractArmureL", "Armor : ", joueur1.armure);
            textIn("#caractArmureR", "Armor : ", joueur2.armure);
            console.log(player1Moove);
            console.log(player2Moove);
            }
        });
        
