class Back {
  constructor(xpos, ypos){
    this.xpos = xpos;
    this.ypos = ypos;

}

display(){
    translate(this.xpos,this.ypos);
    rotate(count * 0.25);
    translate(width * 0,height * 0);
    noStroke();
    fill(51,0,51);
    rect(0,-700,600,700);
}
  move(){
    push();
    if (this.ypos <= height){
      this.ypos = this.ypos +2;
    } else {
      this.ypos = height;
    pop();
    }
  }
}
