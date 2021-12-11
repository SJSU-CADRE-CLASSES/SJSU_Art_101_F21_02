class Lives{
    constructor(_numberOfLive){
        this.x = 5;
        this.y = 15;
        this.width = 150;
        this.height = 150;
        this.numberOfLives = _numberOfLive;
        this.liveSpacing = 10;
    }

    display() {
        for (let i = 0; i < this.numberOfLives; ++i) {
            image(livesImg, this.x + this.width * i + this.liveSpacing, this.y, this.width, this.height)
        }
    }

    loseLife() {
        --this.numberOfLives;
    }

}
