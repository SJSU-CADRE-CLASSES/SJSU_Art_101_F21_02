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
  activity: "gardening"
}];

let randomIndex;
let animating = false;
//let activities = [];
let imageCounter = 0;
let button;

function preload() {

  for (let i = 0; i <= 5; i++) {
    activities[i] = loadImage("assets/activity" + i + ".jpeg")
  }

}

function setup() {
  createCanvas(600, 600);
  background('pink');
  textSize(32);
  textFont('Courier new');
  textAlign(CENTER);
  textStyle(BOLD);
  imageMode(CENTER);
 frameRate(8);

  text('Wanna Try A New Hobby?', 250, 50);

button = createButton("click for a hobby")
button.mousePressed(buttonPressed);
}

function draw() {

  if (animating == true) {
    //clear();
    image(activities[imageCounter], width / 2, height / 2);

    if (imageCounter < activities.length - 1) {
      imageCounter++;
      console.log(imageCounter);
    } else {
      imageCounter = 0;
    }
  }
}

function randomizer() {
  animating = false;

  if (activities[0]) {
    //this displays a random activity and splices it out of the array
    //background(random(200, 255));
    //clear();
    randomIndex = int(random(activities.length));
    text(" Maybe Try This?", width/2, height - 50);
    image(random(activities), width / 2, height / 2);
    activities.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("nothing left!", 200, 300);
  }

}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);


}
