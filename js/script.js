var vaisseau1 = new ObjectConstruct("images/vaisseau1.png", (document.body.clientWidth / 2) - 37, 550);
var userMissile = new ObjectConstruct("images/missile.png", 0, 0);
var ennemyMissile2 = new ObjectConstruct("images/missile2.png", 0, 20);

userMissile.display = "none";
ennemyMissile2.display = "none";

function shootByBoard(event) {
    //tir missile
    if(event.keyCode == 32) {
        if(userMissile.display == "none") {
            userMissile.display = "block";
            userMissile.left = vaisseau1.left + (vaisseau1._node.width - userMissile._node.width) / 2;
            userMissile.top = vaisseau1.top;
            userMissile.startAnimation(shootMissile, 10);
        }
    }

    //deplacements
    if(event.keyCode == 37 ) { /*deplacement a gauche*/
        vaisseau1.left -= 10;
    } 
    else if(event.keyCode == 39 ){ /*deplacement a droite*/
        vaisseau1.left += 10;
    }
    else if(event.keyCode == 38 ){ /*deplacement en haut*/
        vaisseau1.top -= 10;
    }
    else if(event.keyCode == 40 ){ /*deplacement en bas*/
        vaisseau1.top += 10;
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
        userMissile.startAnimation(shootMissile, 20);
    }
}

function shootMissile(missile) {
    userMissile.top -= 10;
    if(userMissile.top < -25) {
        userMissile.stopAnimation();
        userMissile.display = "none";
    }
}

/**
 * Momo code
 */
//Creation des ennemies
// var ennemi1 = new Strite('images/ennemie1.png',50,50);
// var ennemi1 = new Strite('images/ennemie1.png',350,50);
// var ennemi1 = new Strite('images/ennemie1.png',650,50);
// var ennemi1 = new Strite('images/ennemie1.png',950,50);
// var ennemi1 = new Strite('images/ennemie1.png',1250,50);
setTimeout(function(){
    var ennemi1 = new ObjectConstruct('images/ennemie1.png',50,50);
      ennemi1.style.transition = '2s';
  },2000)
  setTimeout(function(){
    var ennemi1 = new ObjectConstruct('images/ennemie1.png',950,50);
      ennemi1.style.transition = '2s';
  },2050)
  setTimeout(function(){
    var ennemi1 = new ObjectConstruct('images/ennemie1.png',400,100);
      ennemi1.style.transition = '2s';
  },2000)
  setTimeout(function(){
    var ennemi1 = new ObjectConstruct('images/ennemie1.png',350,70);
      ennemi1.style.transition = '5s';
  },3000)
  setTimeout(function(){
    var ennemi1 = new ObjectConstruct('images/ennemie1.png',250,80);
      ennemi1.style.transition = '5s';
  },3100)
  setTimeout(function(){
    var ennemi1 = new ObjectConstruct('images/ennemie1.png',650,30);
      ennemi1.style.transition = '7s';
  },4000)
  setTimeout(function(){
    var ennemi1 = new ObjectConstruct('images/ennemie1.png',700,20);
      ennemi1.style.transition = '7s';
  },4000)