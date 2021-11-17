function preload(){}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  pumpkin = ml5.imageClassifier('MobileNet', mdkaid);
}

function draw(){
  image(video, 0, 0, 300, 300);
  pumpkin.classify(video, hn);
}

function mdkaid(){
  console.log("M.O.M.")
}

function hn(error, results){
  if(error){
    console.error(error);
  }
  else{
    console.log(results);
    document.getElementById("object_name").innerHTML = results[0].label;
    document.getElementById("object_accuracy").innerHTML = results[0].confidence.toFixed(3);
  }
}