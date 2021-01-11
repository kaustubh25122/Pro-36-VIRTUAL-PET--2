var database;
var form;
var game;
var player;
var gamestate = 0;
var playercount;
var allplayers;
var car1,car2,car3,car4;
var cars


function setup(){
  createCanvas(displayWidth-20,displayHeight-30)
  database = firebase.database();
  game = new Game()
  game.getstate()
  game.start()
  
}

function draw(){
  background("white");
  if(playercount === 4){
    game.update(1)
  }
    if(gamestate===1){
      clear()
      game.play()
    }
}
