class shootingStar {
  constructor(_xpos,_ypos,_rot,_size,_speed){
    this.xpos = _xpos;
    this.ypos = _ypos;
    this.rot = _rot
    this.size = _size;
    this.speed = _speed;
  }
  
  display(){
      push();
      translate(this.xpos,this.ypos);
      rotate(this.rot);
      translate(width*-.5,height*-.5);
      scale(this.size);
      fill(245,245,245,200);
      beginShape();
      // vertex(width*.4,height*.2);
      // vertex(width*.8,height*.7);
      // vertex(width*.2,height*.8);
      ellipse(width*.5,height*.5,10);
      endShape(CLOSE);
      pop();
  }
  
  move(){
    //this.rot = this.rot +3;
    if(this.ypos <= height * 1.3){
       this.ypos += this.speed;
       } else {
         this.ypos = -height*.5;
       }
  }
};