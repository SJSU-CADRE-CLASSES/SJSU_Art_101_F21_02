let button;
let fromMemory = [
 "Dog","Cat", "Parrot", "Banana", "Your Mom",
 "Chair", "Cookie", "Coffin", "Pumpkin", "Your Bedroom"];

function setup() {

  createCanvas(windowWidth, windowHeight);
  background (74, 131, 200);
  strokeWeight (10);
  button = createButton ('Draw This!')
  button.mousePressed(drawThis)
  // button.style ()
 textSelection = " "
}

function draw() {

  if (mouseIsPressed){
    stroke (255);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
    noStroke();
    fill (255);
    textFont ('Avenir');
    textStyle (BOLD);
    textSize(50);
    text(textSelection, 145, 700);

}

function keyTyped () {

  if (key === 's'){
    saveCanvas ('fileName' , 'png');
  } else if (key === 'c'){
    clear();
    background (74, 131, 200);
  }
}

function drawThis (){
  textSelection = (fromMemory[int(random(fromMemory.length))])
background (74, 131, 200);
}
