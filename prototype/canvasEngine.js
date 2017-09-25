$(document).ready(initialize);

var game = null;

var img = new Image();

var playerX = 0;
var playerY = 0;

var canvas = null;
var ctx = null;

var keys = [];

var faster = 0;
var slower = 0;
var baseSpeed = 3;
var velY = 0;
var velX = 0;
var friction = 0.7;

/*
    Main Canvas Setup Function
 */
function initialize() {

    canvas = document.getElementById('mainScreen');
    ctx = canvas.getContext('2d');

    ctx.fillStyle = 'white';

    ctx.fillRect(0,0,600,600);

    ctx.translate(300, 300);

    img.onload = function(){
        ctx.drawImage(img, playerX, playerY, 50, 50);
    };

    img.src = "chevron-up.svg";
    $('canvas').attr({
        'width':"600px",
        'height':"600px"
    });

    requestAnimationFrame(draw);

}

function draw(){

    // ctx.fillRect(-300,-300,600,600);

    if(keys[16]){
        faster = 2;
        friction = 0.85;
    }
    else{
        faster = 0;
        friction = 0.7;
    }

    if(keys[88]){
        slower = -2;
    }
    else{
        slower = 0;
    }

    if(keys[38]){
        playerY-=baseSpeed+faster+slower;
    }

    if(keys[40]){
        playerY+=baseSpeed+faster+slower;
    }

    if(keys[39]){
        playerX+=baseSpeed+faster+slower
    }

    if(keys[37]){
        playerX-=baseSpeed+faster+slower;
    }

    playerY *= friction;
    velY += playerY;

    playerX *= friction;
    velX += playerX;

    ctx.clearRect(0,0, 600, 600);

    ctx.fillStyle = 'white';

    ctx.fillRect(0,0,600,600);

    ctx.drawImage(img, velX, velY, 50, 50);

    game = ctx;

    requestAnimationFrame(draw);
}

/*
    Input Functions
 */

// $(document).on("keydown", function(event){
//     var key = event.key;
//     console.log("Pressed: "+key);
//
//     // switch(key){
//     //     case 'ArrowUp':
//     //         playerY-=3;
//     //         break;
//     //     case 'ArrowDown':
//     //         playerY+=3;
//     //         break;
//     //     case 'ArrowLeft':
//     //         playerX-=3;
//     //         break;
//     //     case 'ArrowRight':
//     //         playerX+=3;
//     //         break;
//     //     default:
//     // }
//
//
// });

$(document).on("keydown", function (e) {
    keys[e.keyCode] = true;
});

$(document).on("keyup", function (e) {
    keys[e.keyCode] = false;
});
