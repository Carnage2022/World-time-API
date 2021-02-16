const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1, pig1
var backg;

function preload() {
    backg = loadImage('sprites/bg.png');
}

function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600, height, 1200, 20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700, 320, 70, 70);
    box2 = new Box(920, 320, 70, 70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810, 260, 300, PI / 2);

    box3 = new Box(700, 240, 70, 70);
    box4 = new Box(920, 240, 70, 70);
    pig3 = new Pig(810, 220);

    log3 = new Log(810, 180, 300, PI / 2);

    box5 = new Box(810, 160, 70, 70);
    log4 = new Log(760, 120, 150, PI / 7);
    log5 = new Log(870, 120, 150, -PI / 7);

    bird = new Bird(180, 50);

    slingshot = new Slingshot(bird.body, { x: 200, y: 50 });


}

function draw() {
    if(backg)
    background(backg);
    else
    background("white");
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    platform.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    slingshot.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();

    getTime();

}

function mouseDragged() {
    Matter.Body.setPosition(bird.body, { x: mouseX, y: mouseY });

}

function mouseReleased() {
    slingshot.fly();

}

function keyPressed() {
    if (keyCode === 32 ) {
        Matter.Body.setPosition(bird.body, {x: 180, y: 50});
        slingshot.attach(bird.body);
    }

}
//JS is asynchrounous language
async function getTime(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //json 
    var responseJson = await response.json();

    console.log(responseJson);
   
    var dateTime = responseJson.datetime
     //"2021-02-16T14:20:54.249057+05:30"
     var hr = dateTime.slice(11,13);
     if( hr >06 && hr< 17) {
         bg = "sprites/bg.png";
     } else {
         bg = "sprites/bg2.jpg";
     }
     backg = loadImage(bg);
     
    
}

