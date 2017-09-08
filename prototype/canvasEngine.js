/*
    Main Canvas Setup Function
 */
function initialize() {
    var canvas = document.getElementById('mainScreen');
    var ctx = canvas.getContext('2d');

    var img = new Image();
    img.onload = function(){
        ctx.drawImage(img, 0, 0, 100, 100);
    }

    img.src = "chevron-up.svg";

    //ctx.fillRect(25,25,100,100);
}

/*
$("body").on("keydown", function(event){

    console.log("Pressed");

    $("#player").position(
        my: "center",
        of:  "#player"

    );
});*/

/*
    Input Functions
 */

$(document).on("keydown", function(event){
    var key = event.which;
    console.log("Pressed");
});