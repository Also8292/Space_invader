var vaisseau1 = new Strite("images/vaisseau1.png", (document.body.clientWidth / 2) - 37, 550);
var userMissile = new Strite("images/missile.png", 0, 0);
var ennemyMissile2 = new Strite("images/missile2.png", 0, 20);

userMissile.display = "none";
ennemyMissile2.display = "none";

function shoot(event) {
    if(event.keyCode == 32) {
        //console.log('TIR');
        userMissile.display = "block";
        userMissile.left = vaisseau1.left + (vaisseau1._node.width - userMissile._node.width) / 2;
        userMissile.top = vaisseau1.top - vaisseau1._node.height;
    }
}