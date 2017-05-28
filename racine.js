        document.addEventListener("mousemove", function(){});
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
        perso2.chemin = "";
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
        perso3.chemin = "";
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
        perso4.chemin = "";
        perso4.stop = "ninjagirl"; // class
        perso4.attack = "ninjagirlattack";
        perso4.run = "ninjagirlrun";
        perso4.img = "imgNinjaG";

        let perso5 = new Object();
        perso5.life = 100;
        perso5.power = 16;
        perso5.armure = 9;
        perso5.mana = 0;
        perso5.name = "Thai";
        perso5.chemin = playerTwo;
        perso5.stop = "thai"; // class
        perso5.attack = "thaiattack";
        perso5.run = "thairun";
        perso5.img = "imgThai";

        let perso6 = new Object();
        perso6.life = 100;
        perso6.power = 17;
        perso6.armure = 3;
        perso6.mana = 0;
        perso6.name = "";
        perso6.chemin = "";
        perso6.stop = ""; // class
        perso6.attack = "";
        perso6.run = "";
        perso6.img = "";

        let perso7 = new Object();
        perso7.life = 100;
        perso7.power = 13;
        perso7.armure = 5;
        perso7.mana = 0;
        perso7.name = "";
        perso7.chemin = "";
        perso7.stop = ""; // class
        perso7.attack = "";
        perso7.run = "";
        perso7.img = "";

        let perso8 = new Object();
        perso8.life = 100;
        perso8.power = 10;
        perso8.armure = 8;
        perso8.mana = 0;
        perso8.name = "";
        perso8.chemin = "";
        perso8.stop = ""; // class
        perso8.attack = "";
        perso8.run = "";
        perso8.img = "";
        
        data.push(perso1, perso2, perso3, perso4, perso5, perso6, perso7, perso8);

        let joueur1 = data[0];
        let joueur2 = data[1];
        