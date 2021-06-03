var c1,c2,c3,c4
var monster,monsterImg
var candygrp1,candygrp2,candygrp3,candygrp4;
var a =0
var powerup
var mini
var candygrp11,candygrp22,candygrp33,candygrp44;
var b = 0
var c=0
var d=0
var m=0
var candy1
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
candygrp1= new Group()
candygrp2= new Group()
candygrp3= new Group()
candygrp4= new Group()

candygrp11= new Group()
candygrp22= new Group()
candygrp33= new Group()
candygrp44= new Group()
powerup = createSprite(random(100,300),0,50,50)
powerup.visible=false
}
function draw (){
background ("pink");
if (frameCount%120==0){
//var r=Math.round(random(1,4))
//if(r==1)
create1()
//if(r==2)
//create2()
//if(r==3)
//create3()
//if(r==4)
//create4()
}
if(frameCount==200){
	powerup.visible= true	
	powerup.velocityY=5;
}
if (monster.isTouching(powerup)){
	m=1
	powerup.destroy()
}
if (m==1){
	mini= createSprite(displayWidth/2,displayHeight-215)
	mini.addImage(monsterImg)
	mini.scale=0.05
	if (mini.x>candy1.x){
		mini.x=mini.x-5
	}
	if (mini.x<candy1.x){
		mini.x=mini.x+5
	}
	console.log(candy1.x)
}

console.log(frameCount)
if (keyDown("LEFT_ARROW")){
	monster.x = monster.x-7
}
if (keyDown("RIGHT_ARROW")){
	monster.x = monster.x+7
}
if (monster.isTouching(candygrp1)){
	candygrp1.destroyEach()
}
if (monster.isTouching(candygrp2)){
	candygrp2.destroyEach()
}
if (monster.isTouching(candygrp3)){
	candygrp3.destroyEach()
}
if (monster.isTouching(candygrp4)){
	candygrp4.destroyEach()
}

if (monster.isTouching(candygrp11)){
	candygrp11.destroyEach()
}
if (monster.isTouching(candygrp22)){
	candygrp22.destroyEach()
}
if (monster.isTouching(candygrp33)){
	candygrp33.destroyEach()
}
if (monster.isTouching(candygrp44)){
	candygrp44.destroyEach()
}
	drawSprites()
}

function create1(){
 candy1 = createSprite(random(1,displayWidth),0,20 ,20)
candy1.velocityY=2
candy1.addImage(c1)
candy1.scale=0.25
a=a+1
if (a%2==0)
candygrp1.add(candy1) 
else
candygrp11.add(candy1)
}

function create2(){
	var candy2 = createSprite(random(1,displayWidth),0,20 ,20)
	candy2.velocityY=2
	candy2.addImage(c2)
	candy2.scale=0.1
	b=b+1
	if (b%2==0)
	candygrp2.add(candy2) 
	else
	candygrp22.add(candy2)
	}

	function create3(){

		var candy3 = createSprite(random(1,displayWidth),0,20 ,20)
		candy3.velocityY=2
		candy3.addImage(c3)
		candy3.scale=0.2
		candygrp3.add(candy3)
		c=c+1
if (c%2==0)
candygrp3.add(candy3) 
else
candygrp33.add(candy3)
		}
		function create4(){
		
			var candy4 = createSprite(random(1,displayWidth),0,20 ,20)
			candy4.velocityY=2
			candy4.addImage(c4)
			candy4.scale=0.1
			candygrp4.add(candy4)
			d=d+1
			console.log(d)
if (d%2==0)
candygrp4.add(candy4) 
else
candygrp44.add(candy4)
			}
		