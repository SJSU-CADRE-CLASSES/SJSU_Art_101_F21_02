// my stuffs
let stuffs = [
  { name: "ipad", color: "silver" },
  { name: "phone", color: "rose" },
  { name: "lipstick", color: "red orange" },
  { name: "notebook", color: "blue and pink" },
  { name: "calculator", color: "purple" },
];
let randomIndex;
let backgroundColor;
let animate = false;
function setup() {
  createCanvas(400, 400);
  background(color(random(255, 205), random(205, 255), random(205, 205)));
  backgroundColor = color(random(255, 205), random(205, 255), random(205, 205));
  textSize(30);
  fill(0);
  text("click to begin", 100, 100);
}
// animate the ellipses
function draw() {
  if (animate == true) {
    noStroke();
    fill(random(255, 205), random(205, 255), random(205, 205))
    ellipse(random(width), random(height), random(10, 200));
  }
}

function randomizer() {
  animate = false;
  if (stuffs[0]) {
    //   get random object from stuffs
    background(backgroundColor);
    randomIndex = int(random(stuffs.length));
      fill(0);

    text(
      `my ${stuffs[randomIndex].name} is 
      ${stuffs[randomIndex].color}`,
      width / 3,
      height / 2
    );
    //   and then take that object out of the array
    stuffs.splice(randomIndex, 1);
  } else {
    //   draw the background again so it does not overlay the previous object
    background(backgroundColor);
    // when we show all obejcts, nothing else to show
      fill(0);

    text("Sorry, I don't have anything left :(", width / 4, height / 2);
  }
}
function mousePressed() {
  animate = true;
  setTimeout(randomizer, 1500);
}
