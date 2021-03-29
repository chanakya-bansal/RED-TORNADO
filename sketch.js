var car,carI,m,road,ban,b1,b2,t1I,t2I,t3I,t4I,t5I
var brownGroup,blueGroup,yellowGroup,polGroup,taxiGroup
var accelerate,neutral,bgMusic,sideI,backgroundI,qwerty
var side,side2,side3,side4,sid1,sid2,sid3,sid4,sid5,score,scorer,ender,frontImage,bgSprite
var gameState,btn,timer


function preload(){
  carI=loadImage("car1.png")
  tI1=loadImage("t1.png")
  tI2=loadImage("t2.png")
  tI3=loadImage("t3.png")
  tI4=loadImage("t4.png")
  tI5=loadImage("t5.png")
  
  bgMusic=loadSound("background.mp3")
  accelerate=loadSound("1.mp3")
  neutral=loadSound("neutral.wav")
 
  
  sideI=loadImage("side.png")
  
  backgroundI=loadImage("bgb.png")
  frontImage=loadImage("frontI.png")
  
}



function setup() {
  createCanvas(650,600);
  bgMusic.play()
  m=true
  car=createSprite(325,540,20,20)
  car.addImage(carI)
 
 
  car.scale=0.175
  car.rotation=270
 
  
 b1=createSprite(120,-90000,20,200000)
  b1.shapeColor=100,100,100
  b2=createSprite(530,-90000,20,200000)
  b2.shapeColor=100,100,100
 
  car.setCollider("rectangle",10,0,650,200)
  
  
  brownGroup=Group()
   blueGroup=Group()
  yellowGroup=Group()
   polGroup=Group()
   taxiGroup=Group()
 
  
  side=createSprite(50,455,20,20)
  side.addImage(sideI)
  side.rotation=-90
  side.scale=0.37

  side2=createSprite(50,200,20,20)
  side2.addImage(sideI)
  side2.rotation=-90
  side2.scale=0.37

  side3=createSprite(50,-55,20,20)
  side3.addImage(sideI)
  side3.rotation=-90
  side3.scale=0.37

  side4=createSprite(50,-310,20,20)
  side4.addImage(sideI)
  side4.rotation=-90
  side4.scale=0.37

side5=createSprite(50,-565,20,20)
side5.addImage(sideI)
  side5.rotation=-90
  side5.scale=0.37
  



sid=createSprite(600,455,20,20)
sid.addImage(sideI)
sid.rotation=-270
sid.scale=0.37

sid2=createSprite(600,200,20,20)
sid2.addImage(sideI)
sid2.rotation=-270
sid2.scale=0.37

sid3=createSprite(600,-55,20,20)
sid3.addImage(sideI)
sid3.rotation=-270
sid3.scale=0.37

sid4=createSprite(600,-310,20,20)
sid4.addImage(sideI)
sid4.rotation=-270
sid4.scale=0.37

sid5=createSprite(600,-565,20,20)
sid5.addImage(sideI)
sid5.rotation=-270
sid5.scale=0.37
  
  

bgMusic.setLoop(true)
 bgMusic.setVolume(0.5)

  score=0
  scorer=0
  ender=4


gameState=0





bgSprite=createSprite(325,300,650,600)
bgSprite.addImage(frontImage)
bgSprite.scale=0.5

btn=createSprite(325,500,120,40)
btn.shapeColor=255

timer=120


}

function draw() {
  background(backgroundI);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 if(gameState===0){

  
  if(frameCount%30===0){
    timer=timer-1
  }

  if(timer%2===0){
    btn.shapeColor=rgb(255,22,22)
  }else{
    btn.shapeColor=255
  }
  if(timer===0){
    timer=120
  }
  ender=4
  score=0
 if(mouseWentUp(LEFT)||mouseWentUp(CENTER)){
 
 
   gameState=1
  

  
  




 }

 bgSprite.visible=true
 bgSprite.x=camera.position.x
 bgSprite.y=camera.position.y


 










 }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if(mouseDown() && car.removed===true && score==0){

  car=createSprite(camera.position.x,camera.position.y,20,20)
  car.addImage(carI)
 
 
  car.scale=0.175
  car.rotation=270



 }







 

 if(gameState==1){




   bgSprite.visible=false
   btn.visible=false


 


   

  if(m===true){
  
     


    if(keyDown("w")){
     
      if(car.y===540){
        bgMusic.play()
      }




     
       car.addSpeed(0.1,car.rotation)
      if(ban===true){
        car.addSpeed(0.2,car.rotation)
      }
    }
   
    
    if(keyWentUp("w")){
    
      car.velocityX=0
      ban=true
    }
    if(ban===true){
      car.velocityY=car.velocityY+0.1
      if(car.velocityY>0){
        car.velocityY=0
        ban=false
        car.rotation=-90
      }
    }
    
    if(keyDown("s")){
      if(car.velocityY<0){
      car.addSpeed(0.3,car.rotation-180)
      }
      if(car.velocityY>0){
        car.velocityY=0
        car.rotation=-90
      }
    }
    
   



    if(car.removed===true){
      ender=0
      gameState=2
     
    }











   spawnTraffic()
 
  

 }







  car.collide(b1)
  car.collide(b2)
 
 car.rotateToDirection=true
 

 if(car.y<side4.y){
   side.y=side5.y-255
 }
 if(car.y<side5.y){
   side2.y=side.y-255
 }
 if(car.y<side.y && car.y<side5.y){
   side3.y=side2.y-255
 }
 if(car.y<side2.y && car.y<side.y){
   side4.y=side3.y-255
 }
 if(car.y<side3.y && car.y<side2.y){
   side5.y=side4.y-255
 }




 if(car.y<sid4.y){
  sid.y=sid5.y-255
}
if(car.y<sid5.y){
  sid2.y=sid.y-255
}
if(car.y<sid.y && car.y<sid5.y){
  sid3.y=sid2.y-255
}
if(car.y<sid2.y && car.y<sid.y){
  sid4.y=sid3.y-255
}
if(car.y<sid3.y && car.y<sid2.y){
  sid5.y=sid4.y-255
}












    
    car.limitSpeed(17.5)
    
    
    
  }

  if(car.y<300){
 // camera.position.x=car.x
  camera.position.y=car.y
  }
  
  
  
  

  if(keyWentDown("a")){
    car.rotationSpeed=-2
  }
  if(keyWentUp("a")){
    car.rotationSpeed=0
  }
   if(keyWentDown("d")){
    car.rotationSpeed=2
  }
  if(keyWentUp("d")){
    car.rotationSpeed=0
  }
 
  
  
  
  
  
  
 
   stroke(220)
  


 if(car.y>-10000){
  for(var i =600;i>-10000;i=i-20){
  line(216,i,216,i-10)
    line(325,i,325,i-10)
  line(432,i,432,i-10)
  } 
}
 if(car.y<-10000 && car.y>-20000){
  for(var i =-10000;i>-20600;i=i-20){
  line(216,i,216,i-10)
    line(325,i,325,i-10)
  line(432,i,432,i-10)
  } 
}
 if(car.y<-20000 && car.y>-41200){
  for(var i =-20000;i>-41200;i=i-20){
  line(216,i,216,i-10)
    line(325,i,325,i-10)
  line(432,i,432,i-10)
  }  
}
 if(car.y<-41200 && car.y>-51200){
  for(var i =-41200;i>-51200;i=i-20){
  line(216,i,216,i-10)
    line(325,i,325,i-10)
  line(432,i,432,i-10)
  }  
}
if(car.y<-51200 && car.y>-61200){
  for(var i =-51200;i>-61200;i=i-20){
  line(216,i,216,i-10)
    line(325,i,325,i-10)
  line(432,i,432,i-10)
  }  
}
if(car.y<-61200 && car.y>-71200){
  for(var i =-61200;i>-71200;i=i-20){
  line(216,i,216,i-10)
    line(325,i,325,i-10)
  line(432,i,432,i-10)
  }  
}
if(car.y<-71200 && car.y>-81200){
  for(var i =-71200;i>-81200;i=i-20){
  line(216,i,216,i-10)
    line(325,i,325,i-10)
  line(432,i,432,i-10)
  }  
}
if(car.y<-81200 && car.y>-91200){
  for(var i =-81200;i>-91200;i=i-20){
  line(216,i,216,i-10)
    line(325,i,325,i-10)
  line(432,i,432,i-10)
  }  
}
if(car.y<-91200 && car.y>-101200){
  for(var i =-91200;i>-101200;i=i-20){
  line(216,i,216,i-10)
    line(325,i,325,i-10)
  line(432,i,432,i-10)
  }  
}
if(car.y<-101200 && car.y>-111200){
  for(var i =-101200;i>-111200;i=i-20){
  line(216,i,216,i-10)
    line(325,i,325,i-10)
  line(432,i,432,i-10)
  }  
}
if(car.y<-111200 && car.y>-121200){
  for(var i =-111200;i>-121200;i=i-20){
  line(216,i,216,i-10)
    line(325,i,325,i-10)
  line(432,i,432,i-10)
  }  
}
if(car.y<-121200 && car.y>-131200){
  for(var i =-121200;i>-131200;i=i-20){
  line(216,i,216,i-10)
    line(325,i,325,i-10)
  line(432,i,432,i-10)
  }  
}
if(car.y<-131200 && car.y>-141200){
  for(var i =-131200;i>-141200;i=i-20){
  line(216,i,216,i-10)
    line(325,i,325,i-10)
  line(432,i,432,i-10)
  }  
}
if(car.y<-141200 && car.y>-151200){
  for(var i =-141200;i>-151200;i=i-20){
  line(216,i,216,i-10)
    line(325,i,325,i-10)
  line(432,i,432,i-10)
  }  
}
if(car.y<-151200 && car.y>-161200){
  for(var i =-151200;i>-161200;i=i-20){
  line(216,i,216,i-10)
    line(325,i,325,i-10)
  line(432,i,432,i-10)
  }  
}
if(car.y<-161200 && car.y>-171200){
  for(var i =-161200;i>-171200;i=i-20){
  line(216,i,216,i-10)
    line(325,i,325,i-10)
  line(432,i,432,i-10)
  }  
}
if(car.y<-171200 && car.y>-181200){
  for(var i =-171200;i>-181200;i=i-20){
  line(216,i,216,i-10)
    line(325,i,325,i-10)
  line(432,i,432,i-10)
  }  
}    











  frameRate(60)
  if(car.removed!==true){
  if(round(4*(car.velocityY+(-2*car.velocityY)))<0){
    car.rotation=270
  }
  

 if(round(4*(car.velocityY+(-2*car.velocityY)))===0){
   scorer=999999
 }
  if(round(4*(car.velocityY+(-2*car.velocityY)))>0){
   scorer=100
 }
 if(round(4*(car.velocityY+(-2*car.velocityY)))>10){
  scorer=90
 }
 if(round(4*(car.velocityY+(-2*car.velocityY)))>20){
  scorer=80
 }
 if(round(4*(car.velocityY+(-2*car.velocityY)))>30){
  scorer=70
}
if(round(4*(car.velocityY+(-2*car.velocityY)))>40){
 scorer=60
}
if(round(4*(car.velocityY+(-2*car.velocityY)))>50){
 scorer=50
}
if(round(4*(car.velocityY+(-2*car.velocityY)))>60){
  scorer=40
 }
  }else{
    scorer=999999
  }

 score = score+round(frameRate()/scorer);
 
 





 if(gameState===2){
  textFont('Helvetica');
  fill(255)
  stroke(255)
  textSize(34)
   text("YOUR SCORE : "+score,camera.position.x-175,camera.position.y)
  

   btn.visible=true
   btn.y=camera.position.y+200
   btn.shapeColor=255
   btn.x=camera.position.x

  
   


   if(mouseWentUp(LEFT)||mouseWentUp(CENTER) ){
    
     gameState=0
    
   }
 }

 





//console.log(gameState)

  
  drawSprites()
///////////280,510
  if(gameState===0){
    textFont('Helvetica');
    fill(0)
    stroke(0)
    textSize(34)
    text("PLAY",camera.position.x-45,camera.position.y+210)
      }

if(gameState===1){
  textFont('Helvetica');
  stroke(255)
  fill(255)
  textSize(32)
  text(round(ender*(car.velocityY+(-2*car.velocityY))),camera.position.x+250,camera.position.y-250)
  textSize(16)
 text("Score : "+score,camera.position.x-320,camera.position.y-250)
}

if(gameState===2){
  
  fill(0)
  stroke(0)
  textSize(20)
   text("PLAY AGAIN",btn.x-60,btn.y+7)
} 

 
}



function spawnTraffic(){

  
   
  
  if(frameCount%60===0){
    
    rand=round(random(1,5))
   places=[55,-55,155,-155]
    fPlaces=random(places)
    
   
    
    
    if(rand===1){
   common()
      
       traffic.addImage(tI1)
     brownGroup.add(traffic)
     
     
     
    }else if(rand===2){
    common()
   traffic.addImage(tI2)
  
      blueGroup.add(traffic)
      
    
      
    }else if(rand===3){
    common()
   traffic.addImage(tI3)
   
     yellowGroup.add(traffic)
    
     
    
    }else if(rand===4){
    common()
   traffic.addImage(tI4)
   
      polGroup.add(traffic)
     
     
     
    }else if(rand===5){
    common()
   traffic.addImage(tI5)
  
    taxiGroup.add(traffic)
  
    }
  }
  
 brownGroup.collide(car,end)
   brownGroup.collide(b1)
  brownGroup.collide(b2) 
   blueGroup.collide(car,end)
   blueGroup.collide(b1)
  blueGroup.collide(b2) 
   yellowGroup.collide(car,end)
   yellowGroup.collide(b1)
  yellowGroup.collide(b2) 
   polGroup.collide(car,end)
   polGroup.collide(b1)
  polGroup.collide(b2) 
   taxiGroup.collide(car,end)
   taxiGroup.collide(b1)
  taxiGroup.collide(b2) 
  
  brownGroup.collide(blueGroup,sol)
  brownGroup.collide(yellowGroup,sol)
  brownGroup.collide(polGroup,sol)
  brownGroup.collide(taxiGroup,sol)
  brownGroup.collide(brownGroup,sol)
  
  blueGroup.collide(blueGroup,sol)
  blueGroup.collide(yellowGroup,sol)
  blueGroup.collide(polGroup,sol)
  blueGroup.collide(taxiGroup,sol)
  blueGroup.collide(brownGroup,sol)
  
  yellowGroup.collide(blueGroup,sol)
  yellowGroup.collide(yellowGroup,sol)
  yellowGroup.collide(polGroup,sol)
  yellowGroup.collide(taxiGroup,sol)
  yellowGroup.collide(brownGroup,sol)
  
  polGroup.collide(blueGroup,sol)
  polGroup.collide(yellowGroup,sol)
  polGroup.collide(polGroup,sol)
  polGroup.collide(taxiGroup,sol)
  polGroup.collide(brownGroup,sol)
  
  taxiGroup.collide(blueGroup,sol)
  taxiGroup.collide(yellowGroup,sol)
  taxiGroup.collide(polGroup,sol)
  taxiGroup.collide(taxiGroup,sol)
  taxiGroup.collide(brownGroup,sol)
  
  
  
  
  
  
}



function sol(spriteA, spriteB) {
  spriteA.remove();
  spriteB.remove();
}



function common(){

  traffic=createSprite(camera.position.x+fPlaces,camera.position.y-400,20,20)
  traffic.scale=0.175
    traffic.rotation=-90
     traffic.velocityY=random(-10,-16.5)
 traffic.life=400
 traffic.setCollider("rectangle",10,0,650,200)


 if(frameCount%120===0){
   if(fPlaces===55){
     if(traffic.x>270){
     traffic.velocityX=-0.2
     }
   }
   if(fPlaces===-55){
    if(traffic.x>380){
    traffic.velocityX=0.2
    }
  }
 
 }

  
}

function end(spriteA,spriteB){
  spriteA.remove();
  spriteB.remove();

}