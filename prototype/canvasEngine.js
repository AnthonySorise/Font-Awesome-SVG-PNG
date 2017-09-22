$(document).ready(initialize);

var game = null;

var img = new Image();

var playerX = -25;
var playerY = -25;

var canvas = null;
var ctx = null;

/*
    Main Canvas Setup Function
 */
function initialize() {

    canvas = document.getElementById('mainScreen');
    ctx = canvas.getContext('2d');

    img.src = "chevron-up.svg";

    draw();
}

function draw(){

    $('canvas').attr({
        'width':"600px",
        'height':"600px"
    });

    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,600,600);

    ctx.translate(300, 300);


    img.onload = function(){
        ctx.drawImage(img, playerX, playerY, 50, 50);
    };

    game = ctx;
}

/*
    Input Functions
 */

$(document).on("keydown", function(event){
    var key = event.key;
    console.log("Pressed: "+key);

    switch(key){
        case 'ArrowUp':
            game.clearRect(-300,-300,canvas.width, canvas.height);
            ctx.fillRect(-300,-300,600,600);
            playerY-=5;
            ctx.drawImage(img, playerX, playerY, 50, 50);
            break;
        case 'ArrowDown':
            game.clearRect(-300,-300,canvas.width, canvas.height);
            ctx.fillRect(-300,-300,600,600);
            playerY+=5;
            ctx.drawImage(img, playerX, playerY, 50, 50);
            break;
        case 'ArrowLeft':
            game.clearRect(-300,-300,canvas.width, canvas.height);
            ctx.fillRect(-300,-300,600,600);
            playerX-=5;
            ctx.drawImage(img, playerX, playerY, 50, 50);
            break;
        case 'ArrowRight':
            game.clearRect(-300,-300,canvas.width, canvas.height);
            ctx.fillRect(-300,-300,600,600);
            playerX+=5;
            ctx.drawImage(img, playerX, playerY, 50, 50);
            break;
        default:
    }
});