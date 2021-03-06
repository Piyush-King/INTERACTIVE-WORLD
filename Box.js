class Box
{
    constructor(x,y,width,height)
    {
        var option={
            'restitution' : 0.8 ,
            density : 0.5 ,
            friction : 3
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
        
        this.width=width;
        this.height=height;
    }

    display()
    {
        push()
        translate(this.body.position.x,this.body.position.y)
       rotate(this.body.angle)
        var pos=this.body.position;
        rectMode(CENTER);
        rect(0,0,this.width,this.height);    
    pop()
    }
}

