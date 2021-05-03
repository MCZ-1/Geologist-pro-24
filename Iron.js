class Iron{

    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':3,
            'density':30
        }
         this.body = Bodies.rectangle(x,y,100,100,options);
         World.add(world,this.body);
         this.width = 100;
         this.height = 100;
   
    } 
   
   display(){
   
         var ironpos = this.body.position;
         push()
         translate(ironpos.x,ironpos.y);
         rectMode(CENTER)
         strokeWeight(4);
         stroke("black");
         fill("green");
         rect(0,0,this.width,this.height);
         pop()
   }
   
   }