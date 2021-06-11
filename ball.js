class Ball {

    constructor(){

        this.body=Bodies.circle(300,200,50,{restitution : 0.5})
        World.add(world,this.body)
    }

    display(){

      ellipse(CENTER)
        ellipse(this.body.position.x,this.body.position.y,100)
    }
}