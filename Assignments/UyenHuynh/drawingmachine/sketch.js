let previousState;

let stateIndex = 0;
let array = [];
let noiseOffset = 0.0;
let strokeWidth = 3;
let button;
let prompts = [
  { name: "Draw a llama surfing" },
  { name: "Draw a fish swimming in something other than water" },
  { name: "Combine two animals to create a new one" },
  { name: "Draw a shark eating a cupcake" },
  { name: "Draw a crab at a birthday party" },
  { name: "Draw a seahorse in a blizzard" },
  { name: "Draw a dinosaur crying" },
  { name: "Draw an animal with arms for legs and legs for arms" },
  { name: "Draw a pug on a treadmill" },
  { name: "Draw a horse throwing a horseshoe" },
  { name: "Draw a shark waterskiing" },
  { name: "Draw a walrus in a beach chair" },
  { name: "Draw a circus elephant standing on a ball" },
  { name: "Draw a koala bear sitting on a trash can" },
  { name: "Draw a lizard putting on lipstick" },
  { name: "Draw a squirrel roasting a marshmallow" },
  { name: "Draw an octopus with spoons for legs" },
  { name: "Draw a mouse riding a motorcycle" },


];

let backgroundColor = "#e2f6fd";
// let backgroundColor = "#ffffff";

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  background(backgroundColor);
  strokeWeight(3);
  noFill();
  saveState();

  canvas.style(
    'z-index', 1
  )
  button = createButton("REFRESH")
  button.style('z-index', 2);
  button.style("padding", "25px");
  button.style("background-color", "#7db5f5");
  button.style("border-radius", "15px");
  button.style("border", "none");
  button.style("text-align", "CENTER");
  button.style("color", "white");
  button.style("font-size", "24px");
  button.style("font-family", "Schoolbell");
  button.style("letter-spacing", "1.5px");
  button.style("transform", "translateY(4px)");
  button.position(CENTER, height / 7);
  button.mousePressed(buttonPressed);


}
function draw() {
  if (mouseIsPressed) {
    // line(width-mouseX, height-mouseY, width-pmouseX,height-pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
    array.push([mouseX, mouseY]);
  }

}
function keyTyped() {
  if (key === 's') {
    saveCanvas('fileName', 'png');
  } else if (key === 'd') {
    stroke("#000")
  } else if (key === 'c') {
    clear();
    array.length = 0;
    background(backgroundColor);
  } else if (key === 'e') {
    stroke(backgroundColor)
  }
  return false;
}

function randomizer() {
  var div = select('.randomized-text');
  div.style('z-index',3)
  if (prompts[0]) {
    //   get random object from stuffs
    background(backgroundColor);  
    randomIndex = int(random(prompts.length));
    fill(0);

    div.html(
      ` ${prompts[randomIndex].name}`      
    );
    textAlign(CENTER);
    //   and then take that object out of the array
    prompts.splice(randomIndex, 1);
  } else {
    //   draw the background again so it does not overlay the previous object
    background(backgroundColor);
    // when we show all obejcts, nothing else to show
    fill(0);

    div.html("Sorry, I don't have anything left :(");
  }
}
function buttonPressed() {
  randomizer();
}

function keyPressed(e) {
  // check if the event parameter (e) has Z (keycode 90) and ctrl or cmnd
  if (e.keyCode == 90 && (e.ctrlKey || e.metaKey)) {
    undoToPreviousState();
  }
}

function undoToPreviousState() {
  // if previousState doesn't exist ie is null
  // return without doing anything
  if (!previousState) {
    return;
  }
  // else draw the background (in this case white)
  // and draw the previous state
  background(255);
  image(previousState, 0, 0);
  // then set previous state to null
  previousState = null;
}

function mousePressed() {
  // the moment input is detect save the state
  saveState();
}

function saveState() {
  // save state by taking image of background
  // for more info look at reference for get
  previousState = get();
}