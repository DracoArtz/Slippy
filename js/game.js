
var c = document.querySelector(`canvas`)
var ctx = c.getContext(`2d`)
var fps = 1000/60
var timer = setInterval(main, fps)
var score = 0;

var gameScenes = ["start", "game", "gameOver", "gameWin"];
var currentScene = gameScenes[0];

var slippy = document.getElementById("slippy");
var wall = document.getElementById("wall");
var mouseIMG = document.getElementById("mouse");

/*Avatar*/

var avatar = new GameObject();

avatar.color = `#ff0099`;
avatar.vx = 0;
avatar.vy = 0;
avatar.w = 30;
avatar.h = 30;
avatar.x = 15;
avatar.y = 250;

var avatarSpeed = 1;

/*Maze Walls*/

var mazeWall = new GameObject();
mazeWall.x = 524;
mazeWall.y = 31;
mazeWall.w = 553;
mazeWall.h = 61;

var mazeWall1 = new GameObject();
mazeWall1.x = 780;
mazeWall1.y = 253;
mazeWall1.w = 40;
mazeWall1.h = 382;

var mazeWall2 = new GameObject();
mazeWall2.x = 665;
mazeWall2.y = 214;
mazeWall2.w = 36;
mazeWall2.h = 156;

var mazeWall3 = new GameObject();
mazeWall3.x = 538;
mazeWall3.y = 202;
mazeWall3.w = 40;
mazeWall3.h = 40;

var mazeWall4 = new GameObject();
mazeWall4.x = 335;
mazeWall4.y = 203;
mazeWall4.w = 177;
mazeWall4.h = 39;

var mazeWall5 = new GameObject();
mazeWall5.x = 268;
mazeWall5.y = 362;
mazeWall5.w = 42;
mazeWall5.h = 278;

var mazeWall6 = new GameObject();
mazeWall6.x = 545;
mazeWall6.y = 470;
mazeWall6.w = 511;
mazeWall6.h = 57;

var mazeWall7 = new GameObject();
mazeWall7.x = 380;
mazeWall7.y = 333;
mazeWall7.w = 182;
mazeWall7.h = 31;

var mazeWall8 = new GameObject();
mazeWall8.x = 605;
mazeWall8.y = 400;
mazeWall8.w = 30;
mazeWall8.h = 85;

var maze = [];
maze[0] = mazeWall;
maze[1] = mazeWall1;
maze[2] = mazeWall2;
maze[3] = mazeWall3;
maze[4] = mazeWall4;
maze[5] = mazeWall5;
maze[6] = mazeWall6;
maze[7] = mazeWall7;
maze[8] = mazeWall8;

/* Pickups */

var mouse0 = new GameObject();
mouse0.x = 716;
mouse0.y = 224;
mouse0.w = 30;
mouse0.h = 30;

var mouse1 = new GameObject();
mouse1.x = 344;
mouse1.y = 396;
mouse1.w = 30;
mouse1.h = 30;

var mouse2 = new GameObject();
mouse2.x = 344;
mouse2.y = 268;
mouse2.w = 30;
mouse2.h = 30;

var mouse3 = new GameObject();
mouse3.x = 348;
mouse3.y = 118;
mouse3.w = 30;
mouse3.h = 30;

var mouse4 = new GameObject();
mouse4.x = 680;
mouse4.y = 384;
mouse4.w = 30;
mouse4.h = 30;

var pickups = [];
pickups[0] = mouse0;
pickups[1] = mouse1;
pickups[2] = mouse2;
pickups[3] = mouse3;
pickups[4] = mouse4;
    
/*--------------main()------------------------
This is the function that makes the game work
---------------------------------------------*/

function main()
{

    //erases the screen
    ctx.clearRect(0,0,c.width,c.height); 

    switch(currentScene){

        case "start":
            console.log(currentScene);
            ctx.font = "60px Arial";
            ctx.fillStyle = "white";
            ctx.fillText(`Slippy Maze`, c.width/2 -170, c.height/2);
            ctx.fillText(`Press Enter to Play`, c.width/2 -255, c.height/1.5);
            if(enter == true){currentScene = gameScenes[1];}
            break;

        case "game":
            console.log(currentScene);
            game();
            break;

        case "gameOver":
            console.log(currentScene);
            ctx.fillStyle = "white";
            ctx.font = "60px Arial";
            ctx.fillText(`yore losser`, c.width/2, c.height/2);
            ctx.fillText(`Refresh to Restart`, c.width/2 -10, c.height/1.5);
            break;

        case "gameWin":
            console.log(currentScene);
            ctx.fillStyle = "white";
            ctx.font = "60px Arial";
            ctx.fillText(`you're winer`, c.width/2 -150, c.height/2);
            ctx.fillText(`Refresh to Restart`, c.width/2 -10, c.height/1.5);
            break;    
    }

}

function startGame(){
    currentScene = gameScenes[1];
}

function game()
{
    //erases the screen
    ctx.clearRect(0,0,c.width,c.height); 

    //Any changes to numbers
         
    if(a == true || left == true){avatar.vx = -avatarSpeed;}
    if(d == true || right == true){avatar.vx = avatarSpeed;}
    if(w == true || up == true){avatar.vy = -avatarSpeed;}
    if(s == true || down == true){avatar.vy = avatarSpeed;}

    //Any collision detection 

    if(avatar.x < 0 + avatar.w/2){avatar.x = 0 + avatar.w/2;}
    if(avatar.x > c.width + -avatar.w/2){avatar.x = c.width + -avatar.w/2;}
    if(avatar.y < 0 + avatar.h/2){avatar.y = 0 + avatar.h/2;}
    if(avatar.y > c.height + -avatar.h/2){avatar.y = c.height + -avatar.h/2;}

    //draw the pictures
    for(var m = 0; m < maze.length; m++){
        maze[m].renderMaze(wall);
        if(avatar.overlaps(maze[m])){
            currentScene = gameScenes[2];
        }
    }

    for(var i = 0; i < pickups.length; i++){
        pickups[i].renderMouse(mouseIMG);
        if(avatar.overlaps(pickups[i])){
            pickups[i].x = 1000;
            score += 1;
            avatarSpeed += 0.1;
        }
    }

    if(score == 5){
        currentScene = gameScenes[3];
    }

    avatar.move();
    avatar.renderSlippy(slippy);

    ctx.fillText(`Mice: ${score}`, 110, 50);
    ctx.fillStyle = "blue";
    ctx.textAlign = `center`;
    ctx.font = '64px Arial';

}

//random number generator
function rand(_low, _high)
{
    return Math.random()*(_high - _low) + _low;
}

//Converts degrees to radians
function radians(_deg)
{
    return _deg * Math.PI/180
}

//Converts radians to degrees
function degrees(_rad)
{
    return _rad * 180/Math.PI
}