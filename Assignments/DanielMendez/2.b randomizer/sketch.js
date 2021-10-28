//animals I have loved before
let animals=[{
  name:"scrappy",
  color:"white powder"
}, {
  name:"scruffy",
  color:"tiger skin"
}, {
  name:"arrow",
  color:"milk"
 }];

let RandomIndex;

function setup() {
  createCanvas(600,600);
  background(200);

}

function mousePressed() {
  background(random(200,255));
  randomIndex = int(random(animals.length));
text(animals[randomIndex].name,50,50);
animals.splice(randomIndex, 1);
}
