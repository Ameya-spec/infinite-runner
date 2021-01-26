class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
car1 = createSprite(100,200);
car2 = createSprite(300,200);
car3 = createSprite(500,200);
car4 = createSprite(700,200);
cars = [car1,car2,car3,car4]
obstacle = createSprite(400,400, 35,10);
obstacle2 = createSprite(600,650, 75,30 );
obstacle3 = createSprite(200,150,85,15)
console.log(cars)
console.log(cars[0].x)
console.log(cars[1].x)
console.log(cars[2].x)
console.log(cars[3].x)

  }

  play(){
    form.hide();
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
    //  var display_position = 130;
    var index = 0;
    var x = 0;
    var y 

      for(var plr in allPlayers){
        index = index+1
        x = x+200
        y = height-allPlayers[plr].distance      
        cars[index-1].y=y
        if(keyIsDown(LEFT_ARROW)&& player.index !== null){                  
              if(plr === "player" + player.index){
                cars[index-1].x=cars[index-1].x-10
              }      
          }
          if(keyIsDown(RIGHT_ARROW)&& player.index !== null){                  
            if(plr === "player" + player.index){
              cars[index-1].x=cars[index-1].x+10
            }      
        }
        if (plr === "player" + player.index){
        cars[index-1].shapeColor = "red"
        camera.position.x = width/2
        camera.position.y = cars[index-1].y  

        }
         
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
    
    if(keyIsDown(DOWN_ARROW)&& player.index !== null){
      player.distance  = player.distance- 50
      player.update();                                                                                          
    }  
    drawSprites();
  }
}
