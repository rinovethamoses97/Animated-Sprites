let frames=[];
let rabbit;
function preload(){
    for(let i=0;i<7;i++){
        frames.push(loadImage("./horseImages/horse-run-0"+i+".png"));
    }
}
function setup(){
    createCanvas(window.innerWidth,500);
    horse=new Sprite(frames);
}
function draw(){
    background(255);
    horse.update();
    horse.show();
}