// let array =[]
let noiseOffset = 0.0;
let strokeValue = 5;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background (220, 50, 133,);



}

function draw() {
    background (220, 50, 133, 5);
      strokeWeight (strokeValue);
    noiseOffset += 0.05;
    strokeValue = noise (noiseOffset) * 100;

stroke (map(mouseX, 0, 600, 0, 255, true))
line (width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
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
