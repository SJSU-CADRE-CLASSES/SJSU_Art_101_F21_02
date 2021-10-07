let dogs = [{name: "max", color:"white"}, {name: "jordan", color: "brown"},{name:"slinky", color:"green"}, {name: "buddha", color:blue }]

let randomIndex;
let counter = 0;

function setup() {
  createCanvas(400, 400);
  background(220);

text("click to randomize",50,50);

c
}

function draw() {
  background(220);
  
  fill(90,186,51);
  ellipse(100,100,50)

}

function changeBackground(){
if (counter <= 5){
    counter++;
    console.log(counter)

  background(random(255),random(255),random(255));
  setTimeout(changeBackground, 1000);
}else {
  
}
}

function mousePressed() {

if (dogs[0]){

background(random(200,255));
randomIndex = int(random(dogs.length))
text(dogs[randomIndex].name, 50, 50);
dogs.splice(randomIndex, 1);
}
else {
  background(random(200,255));
  text("nothing left!",50,50);
}
}