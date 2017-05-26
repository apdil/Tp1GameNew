        
        let playerOne = document.querySelector("#playerOne");
        let playerTwo = document.querySelector("#playerTwo");
        
        let data = [];

        let perso1 = new Object();
        perso1.life = 100;
        perso1.power = 20;
        perso1.armure = 1;
        perso1.mana = 0;
        perso1.name = "Degueeee";
        perso1.chemin = playerOne;
        perso1.stop = "degue"; // class
        perso1.attack = "degueattack";
        perso1.run = "deguerun";
        perso1.img = "imgDegue";

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
        perso3.name = "Maxima";
        perso3.chemin = playerOne;
        perso3.stop = "maxima"; // class
        perso3.attack = "maximattack";
        perso3.run = "maximarun";
        perso3.img = "imgMaxima";

        let perso4 = new Object();
        perso4.life = 100;
        perso4.power = 10;
        perso4.armure = 8;
        perso4.mana = 0;
        perso4.name = "Titania";
        perso4.chemin = playerTwo;
        perso4.stop = "ninjagirl"; // class
        perso4.attack = "ninjagirlattack";
        perso4.run = "ninjagirlrun";
        perso4.img = "imgNinjaG";

        data.push(perso1); // data[0]
        data.push(perso2); // data[1]
        data.push(perso3); // data[2]
        data.push(perso4); // data[3]


        let joueur1 = data[2];
        let joueur2 = data[3];
            
