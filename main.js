objectDetector="";
img1="";
img2="";
img3="";
img4="";
img5="";
Status="";

function preload(){
    img1=loadImage("Bed_Room.jpeg");
    img2=loadImage("Bottles.jpeg");
    img3=loadImage("Fruit Basket.jpeg");
    img4=loadImage("Study Table.jpeg");
    img5=loadImage("TV and AC.jpeg");
}

function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modalloaded);
}

function modalloaded(){
    console.log("Modal is Loaded");
    Status=true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}