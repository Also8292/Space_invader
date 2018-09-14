
var vaisseau1;
var userMissile;
var ennemie1;
var ennemie2;
var ennemie3;
var ennemie4;
var ennemie5;
var ennemie6;
var ennemie7;
var ennemie8;
var ennemie9;
var ennemie10;

//accueil start game
function startGame() {

    vaisseau1 = new ObjectConstruct("images/vaisseau1.png", (document.body.clientWidth / 2) - 37, 550);
    userMissile = new ObjectConstruct("images/missile.png", 0, 0);

    userMissile.display = "none";


    //Creation des ennemies
    ennemie1 = new ObjectConstruct("images/ennemie1.png", 50, 30);
    ennemie2 = new ObjectConstruct("images/ennemie1.png", 350, 30);
    ennemie3 = new ObjectConstruct("images/ennemie1.png", 650, 30);
    ennemie4 = new ObjectConstruct("images/ennemie1.png", 950, 30);
    ennemie5 = new ObjectConstruct("images/ennemie1.png", 1250, 30);
    ennemie6 = new ObjectConstruct("images/ennemie1.png", 110, 150);
    ennemie7 = new ObjectConstruct("images/ennemie1.png", 400, 150);
    ennemie8 = new ObjectConstruct("images/ennemie1.png", 700, 150);
    ennemie9 = new ObjectConstruct("images/ennemie1.png", 900, 150);
    ennemie10 = new ObjectConstruct("images/ennemie1.png", 1200, 150);


    for (var i = 1; i <= 10; i++) {
        window["ennemie" + i].startAnimation(moveEnnemiToRight, 20);
    }

    document.querySelector('#accueil').style.display = "none";
    document.querySelector('#score').style.display = "block";
    document.querySelector('#score2').innerHTML = 0;
    
}

//stop 
function stopGame() {
    for(var i = 1 ; i <= 10 ; i++) {
        var alien = window["ennemie" + i];
        alien.stopAnimation();
        vaisseau1.stopAnimation();
    }
    document.querySelector('#gameover').style.display = "block";

}

//victoire
function victoiry() {
    vaisseau1.stopAnimation();
    vaisseau1.display == "none";
    document.querySelector('#victoire').style.display = "block";
}

//evenement du clavier

function boardEvent(event) {
    //jouer en appuyant sur la touche entrée
    if(event.keyCode == 13) {
        
        startGame();
    }

    //tir missile
    if(event.keyCode == 32) {
        if(userMissile.display == "none") {
            userMissile.display = "block";
            userMissile.left = vaisseau1.left + (vaisseau1._node.width - userMissile._node.width) / 2;
            userMissile.top = vaisseau1.top;
            userMissile.startAnimation(shootMissile, 2);

            var tir;
            tir = new sound("audios/tir_missile.mp3");
            tir.play();
            /*
            var status = 0;

            for(var i = 1 ; i <= 10 ; i++) {
                var alien = window["ennemie" + i];
                if(alien.display == "none") {
                   status += 1;
                   
                }
            }
            if(status == 10) {
                victoiry();
            }
            */
        }
    }
    

    //deplacements
    if(event.keyCode == 37 ) { /*deplacement a gauche*/
        vaisseau1.left -= 10;
        collisionWithAlien();
    } 
    else if(event.keyCode == 39 ){ /*deplacement a droite*/
        vaisseau1.left += 10;
        collisionWithAlien();
    }
    else if(event.keyCode == 38 ){ /*deplacement en haut*/
        vaisseau1.top -= 10;
        collisionWithAlien();
    }
    else if(event.keyCode == 40 ){ /*deplacement en bas*/
        vaisseau1.top += 10;
        collisionWithAlien();
    }

    /* pour la delimitaion du vaisseau par rapport la surface du jeux*/
    if(vaisseau1.left < 0) { //delimitation par rapport a la borne gauche
        vaisseau1.left = 0;
    }

    if(vaisseau1.left > document.body.clientWidth - vaisseau1._node.width) { //delimitation par rapport a la borne droite
        vaisseau1.left = document.body.clientWidth - vaisseau1._node.width;
    }

    if(vaisseau1.top < 0) { //delimitation par rapport a la borne superieur
        vaisseau1.top = 0;
    }

    if(vaisseau1.top > document.body.clientHeight - vaisseau1._node.height) { //delimitation par rapport a la borne inferieur
        vaisseau1.top = document.body.clientHeight - vaisseau1._node.height;
    }
}

function shootByMouse(event) {
    if(userMissile.display == "none") {
        userMissile.display = "block";
        userMissile.left = vaisseau1.left + (vaisseau1._node.width - userMissile._node.width) / 2;
        userMissile.top = vaisseau1.top;
        userMissile.startAnimation(shootMissile, 2);

        var explosionSound;

        explosionSound = new sound("audios/tir_missile.mp3");

        explosionSound.play();
    }
}

var score = 0;

function shootMissile() {
    userMissile.top -= 10;
    if(userMissile.top < -25) {
        userMissile.stopAnimation();
        userMissile.display = "none";
    }

    for(var i = 1 ; i <= 10 ; i++) {
        var alien = window["ennemie" + i];
        if(alien.display == "none") continue;

        if(collision(userMissile, alien)) {
            var x = alien.left - alien._node.width;
            var y = alien.top - alien._node.height;
            
            explosion(x, y);

            score += 10;

            document.querySelector('#score2').innerHTML = score;

            var explosionSound;

            explosionSound = new sound("audios/explosion_sound.mp3");

            explosionSound.play();

            userMissile.stopAnimation();
            alien.stopAnimation();
            alien.display = "none";
            userMissile.display = "none";

            if(score == 100) {
                victoiry();
            }
            
        }
    } 
}

/*function shootAlienMissile() {

    var alienMissile;

    for(var i = 1 ; i <= 10 ; i++) {
        var alien = window["ennemie" + i];

        var x = alien.left + (alien._node.width / 2);
        var y = alien.top + (alien._node.height / 2);
        
        alienMissile = new ObjectConstruct("images/missile2.png", x, y);
        setInterval(function() {alienMissile.startAnimation(function() {alienMissile.top += 10;}, 10);}, 3000);

    }
}*/


//Collision entre vaisseau et alien
function collisionWithAlien() {
    for(var i = 1 ; i <= 10 ; i++) {
        var alien = window["ennemie" + i];
        if(alien.display == "none") continue;
        if(collision(vaisseau1, alien)) {
            var x = alien.left - alien._node.width;
            var y = alien.top - alien._node.height;

            explosion(x, y);

            vaisseau1.display = "none";
            alien.display = "none";

            var explosionSound;

            explosionSound = new sound("audios/explosion_sound.mp3");

            explosionSound.play();

            stopGame();
        }
    } 
}

// collision entre corps1(vaisseau ou missile) et alien
function collision(corps1, alien) {

    if((corps1.top + corps1._node.height) < alien.top || corps1.top > (alien.top + alien._node.height) || (corps1.left + corps1._node.width) < alien.left || corps1.left > (alien.left + alien._node.width)) {
        return false;
    }
    else {
        return true;
    }
}

//deplacement des ennemies vers la droite
function moveEnnemiToRight(ennemi){
    ennemi.left += 3;

    if(ennemi.top < (document.body.clientHeight - ennemi._node.height)) {
        if (ennemi.left > document.body.clientWidth - ennemi._node.width) {
            ennemi.top += 50;
            ennemi.startAnimation( moveEnnemiToLeft, 20 );
        }
    }
    else {
        stopGame();
    }
}
  //deplacement des ennemies vers la gauche
function moveEnnemiToLeft(ennemi){
ennemi.left -= 3;
    if(ennemi.top < (document.body.clientHeight - ennemi._node.height)) {
        if (ennemi.left <= 0) {
            ennemi.top += 50;
            ennemi.startAnimation( moveEnnemiToRight, 20 );
        }
    }
    else {
        stopGame();
    }
}

//Explosion 
function explosion(x, y) {
    var explosion = new ObjectConstruct("images/explosion.gif", x, y);

    setTimeout(function() {explosion.display = "none";}, 500);
}


//sound
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}