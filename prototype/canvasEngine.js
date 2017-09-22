$(document).ready(initialize);

var game = null;

var action = [0,0,0,0];

var img = new Image();

/*
    Main Canvas Setup Function
 */
function initialize() {

    img.src = "chevron-up.svg";

}

function draw(){
    var ctx = document.getElementById('mainScreen').getContext('2d');

    $('canvas').attr({
        'width':"600px",
        'height':"600px"
    });

    ctx.translate(300, 300);

    game = ctx;

    img.onload = function(){
        ctx.drawImage(img, 0, 0, 50, 50);
    };

}

/*
    Input Functions
 */

$(document).on("keydown", function(event){
    var key = event.which;
    console.log("Pressed: "+key);

    switch(key){
        case 38:
            game.save();
            game.translate(0, 5);
            game.restore();
            break;
        case 40:
            game.save();
            game.translate(0,-5);
            game.restore();
            break;
        case 37:
            game.save();
            game.translate(-5,0);
            game.restore();
            break;
        case 39:
            game.save();
            game.translate(5, 0);
            game.restore();
            break;
        default:
    }
});