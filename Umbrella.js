class Umbrella
{
	constructor(x,y)
	{
		var options={
			friction:0.001,
            restitution:0.1,
            isStatic:true			
			}
		this.x=x;
		this.y=y;
        this.image = loadImage("images/Walking Frame/walking_1.png")
		this.body=Bodies.circle(x, y , 5 , options);
 		World.add(world, this.body);

	}
    display()
	{
			var pos=this.body.position;		
			imageMode(CENTER)
            image (this.image,pos.x,pos.y+70,300,300)
			
	}
}