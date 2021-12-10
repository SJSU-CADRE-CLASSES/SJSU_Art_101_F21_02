
class Player {
    constructor(){
        this.r = 60;
        this.x = w / 2;
        this.y = h - this.r;
        this.speed = 3;
        this.direction = 'idle';
    }

    display() {
        image(playerImage, this.x, this.y, this.r, this.r);
    }

    move() {
        switch(this.direction){
            case 'idle':    
            break;
            case 'up':
                if (this.y > 0) { // off top of canvas
                this.y -= this.speed;
                } 
            break;
            case 'down':  
                if (this.y < h - this.r) { // off bottom top of canvas
                this.y += this.speed;
                }
            break;
            case 'right':
                if (this.x < w - this.r) { // off right of canvas
                this.x += this.speed;
                }
            break;
            case 'left':
                if (this.x > 0) { // off left of canvas
                this.x -= this.speed;
                }
            break;
        }
    }
}