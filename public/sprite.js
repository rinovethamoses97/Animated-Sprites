 class Sprite{
     constructor(frames_){
         this.frames=frames_;
         this.currentFrame=0;
         this.x=0;
         this.y=0;
         this.speed=0.2;
     }
     update(){
         this.x+=3;
         if(this.x>width){
             this.x=-192
         }
         this.currentFrame+=this.speed;
     }
     show(){
         let index=floor(this.currentFrame)%this.frames.length;
         image(this.frames[index],this.x,this.y);
     }
 }