class Ground{
    constructor(){
        var options={
            isStatic: true
        }

        this.body = Bodies.rectangle(windowWidth/2, 690, windowWidth, 54, options);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        fill("brown");
        rectMode(CENTER);
        rect(pos.x, pos.y, windowWidth, 20);
    }
}