class Tree{
    constructor(){
        var options={
            isStatic: true
        }

        this.body = Bodies.rectangle(970, 530, 20, 300, options);
        World.add(world, this.body);

        this.image = loadImage("tree.png");
    }

    display(){
        var pos = this.body.position;

        image(this.image, pos.x-100, pos.y-470, 350, 650);
    }
}