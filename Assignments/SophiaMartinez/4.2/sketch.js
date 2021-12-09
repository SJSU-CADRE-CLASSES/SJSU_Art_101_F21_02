let video;
let poseNet;

function setup() {
  createCanvas(600, 600);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('post', gotPoses);
}


function gotPoses(poses){
  console.log(poses);

function modelLoaded() {
  console.log('poseNet ready');
}


function draw(){
  image(video, 0, 0);

if(pose){
  fill(255 0, 0);
  ellipse(pose.nose.x, pose.nose.y, 64);
}
}
