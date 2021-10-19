//activities I love to do
let activities= [{
  activity: "sketching flowers and faces",

}, {
  activity: "painting backgrounds and scenery"
}, {
  activityy: "sewing skirts and dresses"
}, {
  activity: "cooking and trying out  new recipes"
}, {
  activity: "writing stories, whether its original fiction or fanfiction"
}, {
  activity: "gardening with my mom"
}];

let randomIndex;

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);
}

  function draw() {

}
if (hobbies[0]){

function mousePressed(){
if (activities[0]){
  background(random(200,255));
  randomIndex+int(random(hobbies.length));
  text(activities{randomIndex}.activity, 300,300);
  activities.splice(randomIndex,1);
} else{
  text("nothing left!", 300,300);
}
}
