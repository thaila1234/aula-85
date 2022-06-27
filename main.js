canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var roverWidth=100;
var roverHeight=90;
var roverX=10;
var roverY=10;
var roverImage="rover.png";
var bgImgTag;
var nasaArray=["nasa_image_1.jpg", "nasa_image_2.jpeg", "nasa_image_3.jpg", "nasa_image_4.jpg"];
var ramdomNumber=Math.floor(Math.random()*4);
var Imagebg=nasaArray[ramdomNumber];


function add(){
    bgImgTag=new Image();
    bgImgTag.onload=uploadBackground;
    bgImgTag.src=Imagebg;

    roverImgTag=new Image();
    roverImgTag.onload=uploadRover;
    roverImgTag.src=roverImage;
}

function uploadBackground(){
    ctx.drawImage(bgImgTag, 0, 0, canvas.width, canvas.height)
}

function uploadRover(){
    ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight)
}

window.addEventListener("keydown", myKeydown)
function myKeydown(e){
    keyPressed=e.keyCode;
    if (keyPressed == "38"){
        up();
        console.log("cima");
    }
    if (keyPressed == "40"){
        down();
        console.log("baixo");
    }
    if (keyPressed == "37"){
        left();
        console.log("esquerda");
    }
    if (keyPressed == "39"){
        right();
        console.log("direita");
    }
}

function up(){
    if (roverY >= 0){
        roverY=roverY-5;
        uploadBackground();
        uploadRover();
    }
}
function down(){
    if (roverY <= 500){
        roverY=roverY+5;
        uploadBackground();
        uploadRover();
    }
}
function left(){
    if (roverX >= 0){
        roverX=roverX-5;
        uploadBackground();
        uploadRover();
    }
}
function right(){
    if (roverX <= 700){
        roverX=roverX+5;
        uploadBackground();
        uploadRover();
    }
}
