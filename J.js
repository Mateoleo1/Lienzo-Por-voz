x = 0;
y = 0;
draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "El sistema está escuchando. Por favor, habla."; 
    recognition.start();
} 

recognition.onresult=function (Para){
var L=Para.results[0][0].transcript;
document.getElementById("status").innerHTML="La palabra a sido identificada" +L;
if(L=="circular"){
x =Math.floor(Math.random()*240);
y =Math.floor(Math.random()*240);
draw_circle="Circulo";
}
if(L=="rectangular"){
    x =Math.floor(Math.random()*240);
    y =Math.floor(Math.random()*240);
    draw_rect="Rec";
    }
}







function setup() {
  canvas = createCanvas(900, 600);
}

function draw(){
    if (draw_circle=="Circulo"){
    circle(x,y,60);
    draw_circle="";
} 

    if (draw_rect=="Rec"){
    rect(x,y,60,100);
    draw_rect="";
}}