let quotes = [{name: "pic1"}, {name: "pic2"},{name:"pic3"}, {name: "pic4"},{name: "pic5"},{name: "pic6"},{name: "pic7"},{name: "pic8"}]

let randomIndex;
let randompics = [];
let imageCounter = 0;
let animating = false;
let button;
let backgroundColor = 255;
// let array = [];
let strokeWidth = 5;
function preload(){

  for (let i = 0; i <=10; i++){

randompics[i] = loadImage(`assets/random-${i}.jpg`)

  }
}



function setup() {
  createCanvas(600, 600);
  background(182,235,242);
  textSize(32);
  imageMode(CENTER);
  frameRate(2);


// fill(255);
text("click blue button to randomize",50,50);

button = createButton("click for diagram");
button.mousePressed(buttonPressed);
button.style("padding","20px");
button.style("background-color","#49b7e3");
}

function draw() {

if (animating == true){
  clear();

  image(randompics[imageCounter], width/2, height/2);

  if (imageCounter < randompics.length-1)
  imageCounter++;
  console.log(imageCounter);
} else{
  imageCounter = 0;
}

}

function randomizer (){
  animating = false;
  if (quotes[0]){

  // background(random(200,255));

  randomIndex = int(random(quotes.length))
  text(`${quotes[randomIndex].name}'s favorite color inspect;
  ${quotes[randomIndex].color}`,50, 50);
  image(random(randompics), width/2, height/2);
  // text(dogs[randomIndex].name + "'s favorite color is" +
  // dogs[randomIndex].color,50, 50);
  quotes.splice(randomIndex, 1);
  }
  else {
    background(random(226,225,85));
    text("Have a great day :)",50,50);
  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer,2500);


}
function draw() {

  if (mouseIsPressed){
    // stroke(map(mouseX, 0, 600, 0, 255, true))
    // line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);

  }


}


function keyTyped(){
  //0-5 change the pen size
  if (key == '0') {
    stroke(250);
    strokeWeight(1);
  }
  if (key == '1') {
    stroke(250);
    strokeWeight(10);
  }
  if (key == '2') {
    stroke(250);
    strokeWeight(20);
  }
  if (key == '3') {
    stroke(250);
    strokeWeight(30);
  }
  if (key == '4') {
    stroke(250);
    strokeWeight(40);
  }
  if (key == '5') {
    stroke(250);
    strokeWeight(50);
  }

  if (key === 's'){

    saveCanvas('fileName', 'png');
}
}
