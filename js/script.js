var vaisseau1 = new ObjectConstruct("images/vaisseau1.png", (document.body.clientWidth / 2) - 37, 550);
var userMissile = new ObjectConstruct("images/missile.png", 0, 0);
var ennemyMissile2 = new ObjectConstruct("images/missile2.png", 0, 20);

userMissile.display = "none";
ennemyMissile2.display = "none";

function shootByBoard(event) {
    if(event.keyCode == 32) {
        if(userMissile.display == "none") {
            userMissile.display = "block";
            userMissile.left = vaisseau1.left + (vaisseau1._node.width - userMissile._node.width) / 2;
            userMissile.top = vaisseau1.top;
            userMissile.startAnimation(shootMissile, 20);
        }
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