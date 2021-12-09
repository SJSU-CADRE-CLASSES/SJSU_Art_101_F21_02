let hh, clap, bass;
let hPat, cPat, bPat;
let hPhrase, cPhrase, bPhrase;
let drums;
let bpmControl;
let beatLength;
let celWidth;
let cnv;
let sPat;
let cursorPos;

function setup() {
  cnv =   createCanvas(700,700);

  cnv.mousePressed(canvasPressed);


  hh = loadSound('assets/hh_sample.mp3', () => {});
  clap = loadSound('assets/clap_sample.mp3', () => {});
  bass = loadSound('assets/bass_sample.mp3', () => {});

beatLength = 16;
celWidth = width/beatLength;
cursorPos = 0;

  hPat = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  cPat = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  bPat = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  sPat = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

  hPhrase = new p5.Phrase('hh', (time) => {
    hh.play(time);
  }, hPat);
  cPhrase = new p5.Phrase('clap', (time) => {
    clap.play(time);
  }, cPat);
  bPhrase = new p5.Phrase('bass', (time) => {
    bass.play(time);
  }, bPat);

  drums = new p5.Part();

  drums.addPhrase(hPhrase);
  drums.addPhrase(cPhrase);
  drums.addPhrase(bPhrase);
  drums.addPhrase('seq', sequence, sPat);

  bpmControl = createSlider(30,130, 80, 1);
  bpmControl.position(670,445);
  bpmControl.input(() => {drums.setBPM(bpmControl.value())});
  drums.setBPM('60');

drawMatrix();
}
function keyPressed() {
  if (key === " ") {
    if (hh.isLoaded() && clap.isLoaded() && bass.isLoaded()){
      if (!drums.isPlaying) {
        drums.metro.metroTicks = 0;
        drums.loop();
  }else {
    drums.stop();
  }
}else {
  console.log
  }
}

}

function canvasPressed() {
  let rowClicked = floor(3*mouseY/height);
  let indexClicked = floor(16*mouseX/width);
  if (rowClicked === 0) {
  console.log('first row' + indexClicked);
  hPat[indexClicked] = +!hPat[indexClicked];
}  else if (rowClicked === 1) {
  console.log('second row');
    cPat[indexClicked] = +!cPat[indexClicked];
  } else if (rowClicked === 2) {
  console.log('third row');
    bPat[indexClicked] = +!bPat[indexClicked];
  }
  drawMatrix();
}

function drawMatrix(){
  background('#0E2424');
  stroke('#506652');
  strokeWeight(2);
  fill('cyan');
  for (let i = 0; i < beatLength+1; i++) {
    //startx, starty, endx, endy
    line(i*celWidth, 0,i*celWidth, height);
  }
  for (let i = 0; i < 4; i ++) {
    line(0,i*height/3,width, i*height/3);
  }
  noStroke();
  for (let i = 0; i < beatLength; i++){
    if (hPat[i] === 1) {
    ellipse(i*celWidth +0.5*celWidth,height/6,10);
  }
    if (cPat[i] === 1) {
    ellipse(i*celWidth +0.5*celWidth,height/2,10);
  }
    if (bPat[i] === 1) {
    ellipse(i*celWidth +0.5*celWidth,height*5/6,10);
  }
  }
}

function sequence(time, beatIndex) {
  // console.log(beatIndex);
  setTimeout(() => {
    drawMatrix();
    drawPlayhead(beatIndex);
  }, time*1000);

}

function drawPlayhead(beatIndex) {
  stroke('red');
  fill(255,0,0,30);
  rect((beatIndex-1)*celWidth, 0, celWidth, height);
}
