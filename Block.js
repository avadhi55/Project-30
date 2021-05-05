class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visible = 255;
      this.image = loadImage("block.png");
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<3){
         var pos = this.body.position;
         var angle = this.body.angle;
         push();
         translate(pos.x,pos.y);
         rotate(angle);
         imageMode(CENTER);
         image(this.image,0,0,this.width,this.height);
         pop();
      }else{
       World.remove(world,  this.body); 
       this.visible = this.visible - 5
      push();
      tint(255,this.visible);
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
      pop();

       }

      }
}