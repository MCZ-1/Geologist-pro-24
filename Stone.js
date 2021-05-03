class Stone{

 constructor(x,y){
     var options = {
         'restitution':0.8,
         'friction':0.9,
         'density':12
     }
      this.body = Bodies.rectangle(x,y,80,80,options);
      World.add(world,this.body);
      this.width = 80;
      this.height = 80;

 } 

display(){

      var stonepos = this.body.position;
      push()
      translate(stonepos.x,stonepos.y);
      rectMode(CENTER)
      strokeWeight(4);
      stroke("black");
      fill("red");
      rect(0,0,this.width,this.height);
      pop()
}

}