//Starting off with defining some variables and entities
//defining both scenes for the MouseClick Process
var Scene1 = true;
var Scene2 = false;

//Defining named values to control the color of multiple objects with as least code as i have //to use

//Color of the moon/sun
let MoonColor = ("gray");

//Color of the Sky
let SkyColor = ("darkblue");

//Color of the stars/cloud
let StarColor = ("yellow");


//Creating the canvas and setting the Font of the text in the upper right
function setup() {
  createCanvas(400, 400);
  textSize(25);
}

//beginning the constant draw function, which will run over and over.
function draw() {

//defining the objects to be filled by the varied color variables
  background(SkyColor);

//creating the moon/sun object  
  fill (MoonColor);
  stroke(0);
  ellipse (250, 150, 200, 200);

//creating Scene1
  if(Scene1 === true) {
    
//The text in the upper right corner for Scene1
    fill("white");
    text('Goodnight!', 270, 30);

//setting the default color values for Scene1
    SkyColor = ("darkblue");
    MoonColor = ("gray");
    StarColor = ("yellow");

//using a random variable based on the size of the canvas with low framerate to enable a 
//constantly changing star-like pattern
    fill(StarColor);
    stroke(0);
   
//enabling the low frame rate in order to make the stars more visible
    frameRate(2);

//using multiple instances of this to generate multiple stars 
//too lazy to bother with arrays.
    circle(random(0,width),random(0,height), 5);
    circle(random(0,width),random(0,height), 5);
    circle(random(0,width),random(0,height), 5);
    circle(random(0,width),random(0,height), 5);
    circle(random(0,width),random(0,height), 5);
    circle(random(0,width),random(0,height), 5);
    circle(random(0,width),random(0,height), 5);
    circle(random(0,width),random(0,height), 5);
    circle(random(0,width),random(0,height), 5);
    circle(random(0,width),random(0,height), 5);
    circle(random(0,width),random(0,height), 5);
    circle(random(0,width),random(0,height), 5);
    circle(random(0,width),random(0,height), 5);
    circle(random(0,width),random(0,height), 5);
    circle(random(0,width),random(0,height), 5);
    circle(random(0,width),random(0,height), 5);
    circle(random(0,width),random(0,height), 5);
    circle(random(0,width),random(0,height), 5);
    circle(random(0,width),random(0,height), 5);
    circle(random(0,width),random(0,height), 5);
  }
  
//beginning the instance of Scene2
  if(Scene2 === true) {
    
//chaning the text to fit a light background and the morning feel.
    fill("black");
    text('Good Morning!', 230, 30);

//changing the sky from night to day
    SkyColor = ("lightblue");

//changing the moon into a sun
    MoonColor = ("yellow");
    
//changing the stars into clouds
    StarColor = ("white");
    
    
//changing the stars into cloud-like shapes
    fill(StarColor);
    ellipse(30,30, 50, 20);
    ellipse(130,60, 90, 30);
    ellipse(80,40, 80, 50);
    
  }
}

//a simple mousepressed event to change scenes
function mousePressed(){
  
//simple check for if Scene1 is true, which is default.
  if (Scene1 === true){
  
//change Scene1 to false and Scene2 to true, effectively switching scenes.
    Scene1 = false
    Scene2 = true

//secondary conditional for when Scene1 isnt true.
  }else{
    
//when Scene1 isnt true, switch Scene1 to true and Scene2 false, switchin back to scene1
    Scene1 = true
    Scene2 = false
  }
  
}

