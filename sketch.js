const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var response ,responseJSON ,dtime,hour,hour3
var bg ;

function preload() {
    getBackgroundImage ()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
   

}

function draw(){
 
    if(backgroundImg){    
        background(backgroundImg);
    }

    Engine.update(engine);

    
   // TIME : HOUR3
   textSize(20)
   fill("pink")
   text ( " Time : " + hour3 ,1000,100  )
}

async function getBackgroundImage (){

    response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

    responseJSON = await response.json()
    console.log(responseJSON)

 
    dtime = responseJSON.datetime
    console.log(dtime )

    hour = dtime.slice(11,13)
    console.log(hour)

    hour3 = dtime.slice(11,16)
    //----------------------------------------DAY TIME ------------------------------------------------------
   if (hour>=07 && hour<=9){
    backgroundImg = loadImage("sunrise1.png");
   }
   
  else if (hour>09 && hour<=11){
    backgroundImg = loadImage("sunrise2.png");
   }

  else if (hour>11 && hour<=13){
    backgroundImg = loadImage("sunrise3.png");
   }
   else if (hour>13 && hour<=15){
    backgroundImg = loadImage("sunrise4.png");
   }

   else if (hour>15 && hour<=17){
    backgroundImg = loadImage("sunrise5.png");
   }

   else if (hour>17 && hour<=19){
    backgroundImg = loadImage("sunrise6.png");
   }
   //----------------------------------------NIGHT TIME ------------------------------------------------------
   
   else if (hour>19 && hour<=21){
    backgroundImg = loadImage("sunset7.png");
   }  
    
   else if (hour>21 && hour<=23){
    backgroundImg = loadImage("sunset8.png");
   }

   else if (hour>23 && hour<=01){
    backgroundImg = loadImage("sunset9.png");
   }

   else if (hour>01 && hour<=03){
    backgroundImg = loadImage("sunset10.png");
   }

   else if (hour>03 && hour<=05){
    backgroundImg = loadImage("sunset11.png");
   }

   else {
    backgroundImg = loadImage("sunset12.png");
   }

}


