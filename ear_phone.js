var model="";
function preload(){
    img=loadImage("earphones.jpeg");
}
function setup(){
    canvas=createcanvas(400, 500);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML='Status:Detecting Objects';
}
function modelLoaded(){
    model="true";
    objectDetector.detect(img, gotResult);
}