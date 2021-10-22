class Avatar {
  constructor(xpos, ypos){
    this.xpos = xpos;
    this.ypos = ypos;
  }
  
  display(){
      push();
      translate(this.xpos,this.ypos);
      rotate(count * 0.25);
      translate(width * 0,height * 0);

      //LHorn
      noStroke();
      fill(0,0,0)
      triangle(220,145,140,180,125,90);

      //RHorn
      noStroke();
      fill(0,0,0)
      triangle(380,145,460,180,475,90);

      //REar
      noStroke();
      fill(255,250,90)
      circle(500,300,80)

      //RInnerEar
      strokeWeight(3)
      stroke(255,209,120);
      fill(254,253,225)
      circle(500,300,40)

      //LEar
      noStroke();
      fill(255,250,90)
      circle(100,300,80)

      //RInnerEar
      strokeWeight(3)
      stroke(255,209,120);
      fill(254,253,225)
      circle(100,300,40)

      //Face
      noStroke();
      fill(249,77,105)
      circle(300,300,400);

      //REyeShadow
      fill(230,0,3)
      circle(420,280,100)

      //LEyeShadow
      fill(230,0,3)
      circle(180,280,100)

      //REye
      strokeWeight(4)
      stroke(230,0,3)
      fill(254,253,225);
      circle(420,300,90);

      //LEye
      strokeWeight(4)
      stroke(230,0,3)
      fill(254,253,225);
      circle(180,300,90);

//       //RUndereye
//       noStroke();
//       fill(249,77,105);
//       circle(420,350,90);

//       //LUndereye
//       noStroke();
//       fill(249,77,105);
//       circle(180,350,90);

      //RPupil
      push();
      noStroke();
      fill(0,0,0);
      circle(431,279,40)
      pop();

      //LPupil
      push();
      noStroke();
      fill(0,0,0);
      circle(191,279,40)
      pop();

      //Nose
      noStroke();
      fill(255,250,90)
      rect(270,250,60,125,40)

      //Mouth
      noFill();
      strokeWeight(7)
      stroke(230,0,3);
      arc(300,390,80,80,0,180);

      //Chin
      noFill();
      strokeWeight(5)
      stroke(230,0,3);
      arc(290,462,20,20,0,180);

      noFill();
      strokeWeight(5)
      stroke(230,0,3);
      arc(310,462,20,20,0,180);
      pop();
  }
}
