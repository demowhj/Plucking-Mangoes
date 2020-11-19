class Stone{
    constructor(x,y){
        var options={
            isStatic: false,
            restitution:0,
            friction:1.5,
            density:1
        }

        this.body = Bodies.circle(x, y, 25, options);
        World.add(world, this.body);
        this.r = 25;
        this.image = loadImage("stone.png");
    }

    display(){
        var pos = this.body.position;
        fill(230);
        image(this.image,pos.x,pos.y,50,50);
    }
}