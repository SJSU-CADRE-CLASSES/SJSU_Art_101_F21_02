//activities I love to do
let activities = [{
  activity: "sketching flowers and faces",
}, {
  activity: "painting some scenery"
}, {
  activityy: "sewing skirts and dresses"
}, {
  activity: "cooking and trying out new recipes"
}, {
  activity: "writing stories to be creative"
}, {
  activity: "gardening with my mom"
}];

 let randomIndex;
let animating = false;

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);

  text('click to randomize', 50, 50);


}

  function draw() {

    if(animating == true){
  ellipse(random(width), random(height), random(50, 200));

 }
}

 function randomizer(){
   animating = false;

 if (activities[0]){
   //this displays a random activity and splices it out of the array
  background(random(200, 255));
 randomIndex = int(random(activities.length));
  text(activities[randomIndex].activity + " is fun", 50, 50);
  activities.splice(randomIndex, 1);
 } else {
   background(random(200, 255));
   text("nothing left!", 50, 50);
}

}
 function mousePressed() {
 animating = true;
 setTimeout(randomizer, 2000);


 }
