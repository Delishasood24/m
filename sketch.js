var c1,c2,c3,c4
var monster,monsterImg
function preload(){
	c1 = loadImage("candy1.png")
	c2 = loadImage("candy2.png")
	c3 = loadImage("candy3.png")
	c4 = loadImage("candy4.png")
	monsterImg = loadImage("monster.png")
}
function setup(){
	createCanvas(displayWidth, displayHeight- 150)
	monster = createSprite(displayWidth/2,displayHeight-250)
	monster.addImage(monsterImg)
	monster.scale=0.1
}
function draw (){
	
	background ("pink");
if (frameCount%75==0){
var r=Math.round(random(1,4))
if(r==1)
create1()
if(r==2)
create2()
if(r==3)
create3()
if(r==4)
create4()
}

	drawSprites()
}

function create1(){
var candy1 = createSprite(random(1,displayWidth),0,20 ,20)
candy1.velocityY=2
candy1.addImage(c1)
candy1.scale=0.25
}
function create2(){
	var candy2 = createSprite(random(1,displayWidth),0,20 ,20)
	candy2.velocityY=2
	candy2.addImage(c2)
	candy2.scale=0.08
	
	}
	function create3(){
		var candy3 = createSprite(random(1,displayWidth),0,20 ,20)
		candy3.velocityY=2
		candy3.addImage(c3)
		candy3.scale=0.2
		
		}
		function create4(){
			var candy4 = createSprite(random(1,displayWidth),0,20 ,20)
			candy4.velocityY=2
			candy4.addImage(c4)
			candy4.scale=0.1
			
			}