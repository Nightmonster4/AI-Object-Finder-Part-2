function preload(){

}

function setup(){
   canvas = createCanvas(480, 300);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(600, 300);
}

function start(){
   objectdetector.detect(video, modelloaded);
   document.getElementById("status").innerHTML = "Status: Detecting Objects";
   document.getElementById("inputbox").value;
}

function modelloaded(){
   console.log("Model Loaded!");
   status = true;
}

function draw(){
   image(video, 0, 0, 480,300);
}