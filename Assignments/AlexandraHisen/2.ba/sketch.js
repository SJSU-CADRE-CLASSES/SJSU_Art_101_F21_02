let alphabet = ["a","b","c","d","e"]


function setup() {
  cnv= createCanvas (400,400);
  background (200)
  cnv.mouseClicked(pick);
  letter = ""
}

function draw() {
  background(220);
  text(letter, 50, 50)
}

function pick() {
  letter = (alphabet[int(random(alphabet.length))])
}
