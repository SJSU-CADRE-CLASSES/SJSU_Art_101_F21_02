// let array =[]
let noiseOffset = 0.0;
let strokeValue = 5;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background (20, 50, 220,);



}

function draw() {
    background (20, 50, 220, 5);
      strokeWeight (strokeValue);
    noiseOffset += 0.05;
    strokeValue = noise (noiseOffset) * 100;

stroke (map(mouseX, 0, 600, 0, 255, true))
line(mouseX, mouseY, pmouseX, pmouseY);

}

function keyTyped () {
      if (key === 's'){
saveCanvas ('fileName' , 'png');
} else if (key === 'c'){
clear();

}
}


// beginShape ();
// for ( let i =0; i < array.length; i++) {
//
//
// curveVertex (array[i][0], array [i][1])
// }
// endShape ();
//
//
//
// }
//       return false;
// }
