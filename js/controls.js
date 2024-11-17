/*-------------------------------
Booleans to store whether a specific button is pressed or not
 --------------------------------*/
var w = false;
var a = false;
var s = false;
var d = false;
var up = false;
var left = false;
var down = false;
var right = false;
var enter = false;

/*---Key Press Code-----------*/

document.addEventListener(`keydown`, press);
function press(e)
{
    console.log(e.keyCode)
    if(e.keyCode == 87){w = true}
    if(e.keyCode == 83){s = true;}
    if(e.keyCode == 65){a = true;}
    if(e.keyCode == 68){d = true;}
    if(e.keyCode == 38){up = true;}
    if(e.keyCode == 40){down = true;}
    if(e.keyCode == 37){left = true;}
    if(e.keyCode == 39){right = true;}
    if(e.keyCode == 13){enter = true;}
}


/*---Key Release Code-----------*/
document.addEventListener(`keyup`, release);
function release(e)
{
    if(e.keyCode == 87){w = false;}
    if(e.keyCode == 83){s = false;}
    if(e.keyCode == 65){a = false;}
    if(e.keyCode == 68){d = false;}
    if(e.keyCode == 38){up = false;}
    if(e.keyCode == 40){down = false;}
    if(e.keyCode == 37){left = false;}
    if(e.keyCode == 39){right = false;}
    if(e.keyCode == 13){enter = false;}
}