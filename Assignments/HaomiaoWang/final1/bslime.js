class Bslime{
    constructor(){
        //constructor(_size){
        //this.r = _size;
        // this.r = 190;
        // this.x =  random(0+ this.r, w-this.r);
        // this.y = 0 - this.r;
        // this.speed = 4;

        this.r = 185;
        this.x = random(w);
        this.y = 0 - this.r;
        this.speed = 4;


    }

    display(){
        image(bslimeImg, this.x, this.y, this.r, this.r)
    }
    move(){
        this.y += this.speed;

    }
}
