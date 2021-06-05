rightwristx=0;
leftwristx=0;
difference=0;
function preload() {

}
function setup() {
    canvas = createCanvas(500, 500);
    canvas.position(700,100);
    video = createCapture(VIDEO);
    video.size(500,500);
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);
}
function draw() {
  background('#a80ca6');
textSize(difference);

text("Peter",rightwristx,leftwristx,difference);
stroke("#f90093");
}
function modelloaded() {
    console.log("modeloaded");
  }
  function gotposes(result) {
  
    if (result.length > 0) {
      console.log(result);
      leftwristx=result[0].pose.leftWrist.x;
      rightwristx=result[0].pose.rightWrist.x;
      difference=floor(leftwristx - rightwristx);
       console.log("leftwristx=" + leftwristx + "rightwristx=" + rightwristx + "difference=" +difference);

    }
}