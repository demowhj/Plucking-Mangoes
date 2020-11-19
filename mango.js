class Mango{
    constructor(x,y){
        var options={
            isStatic: true,
            restitution:0,
            friction:1
        }

        this.body = Bodies.circle(x, y, 25, options);
        World.add(world, this.body);
        this.r = 25;
        this.image = loadImage("mango.png");
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        //console.log(pos.y);
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        pop();
    }
}