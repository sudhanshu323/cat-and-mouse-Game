var bgImg;
var cat;

function preload() {
    
    bgImg = loadImage("Images/garden.png");
    catimg1 = loadAnimation("Images/cat1.png");
    catimg2 = loadAnimation("Images/cat2.png","Images/cat3.png");
    mouseimg1 = loadAnimation("Images/mouse1.png");
    mouseimg2 = loadAnimation("Images/mouse2.png","Images/mouse3.png");
}

function setup(){
    createCanvas(700,580);
    
    mouse = createSprite(100,500,40,40);
    mouse.addAnimation("mouseStill",mouseimg1);
    mouse.scale = 0.08;

    cat = createSprite(600,500,40,40);
    cat.addAnimation("catStill",catimg1);
    cat.scale = 0.12;
}

function draw() {

    background(bgImg);
    
    if(cat.x - mouse.x <(cat.width - mouse.width)/2){
       cat.velocityX=0;
    }

    drawSprites();
   
    keyPressed(); 
}


function keyPressed()
{

    if(keyCode === Left_Arrow)
    {
       cat.velocityX=-1;
       cat.addAnimation("catRunning",catimg2);
       cat.changeAnimation("catRunning");

       mouse.addAnimation("mouseTeasing",mouseimg2);
       mouse.changeAnimation("mouseTeasing");
       mouse.frameDelay= 10;
    }

}

