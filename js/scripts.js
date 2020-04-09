//Business Logic 
//for Player -->
function Player () {
  this.playerName = "";
  this.totalScore = 0;
  this.turnScore = 0;
  this.currentPlayer = ""; 
};

Player.prototype.switchPlayers = function() {
  if (this.currentPlayer === "active") {

  }
}

Player.prototype.rollDice = function() {
  // var num = random; 
  // var num1 = turnScore;
  // var total = num + num1; 
  var random = Math.floor(Math.random() * 6) + 1;
  if (random === 1) {
    this.turnScore = 0;

  } else if (random !== 1) {
    this.turnScore += random;
  } 
  // console.log("turn score", this.turnScore);
  console.log("Random", random);
};

// "Hold Button" Method --> Adds to the total score
Player.prototype.sumScore = function(){  
  this.totalScore = this.totalScore + this.turnScore;
  this.turnScore = 0;

  if (this.totalScore >= 100) {
  this.turnScore = 0;
  return alert("You Win!")
  }
  console.log("total score", this.totalScore)
  console.log("turn score", this.turnScore)

};
  
// Optional "Game" Construct to keep track of which players turn it is??

// var playerOne = new Player(); 
// var playerTwo = new Player();
// var turnScore = [];
// playerOne.rollDice();
// playerOne.sumScore();


//User Interface Logic ----------------->
//creating function for hold button that calls on the .sumScore method when it's clicked 
// testing add function of .sumScore method when said button is clicked
// .append() | .html()
// if we set turnscore to 0 var total would = random number rolled + 0, and on next roll it would be random number rolled + previously stored integer in turnscore.

function showPlayer(){
  // var contact = addressBook.findContact(contactId);
 

  // $("#").html(player.totalScore);

}

  // var buttons = $("#buttons");
  // buttons.empty();
  // buttons.append("<button class='deleteButton' id=" + contact.id + ">Delete</button>");
  // console.log("contactId", contactId)

$(document).ready(function() {
  var playerOne = new Player();
  var playerTwo = new Player(); 

  $("button#roll1").click(function () {
    playerOne.rollDice();
    $(".player-name1").html(playerOne.playerName);
    $(".current-score1").html(playerOne.turnScore);
    
  });

  $("button#roll2").click(function () {
    playerTwo.rollDice();
    $(".player-name2").html(playerTwo.playerName);
    $(".current-score2").html(playerTwo.turnScore);
    
  });

  $("button#hold").click(function(){  
    playerOne.sumScore()
    $(".game-score1").html(playerOne.totalScore);
  });
    
  
  // debugger;
  
});

// Tomorrow!
// - Get functionality for "Hold Button"/sumScore to work in BL 
//    - When player presses "hold" display player's total in UI
//    - Create 4 different outputs in HTML 
//          1. Display Turn Total for PlayerOne & PlayerTwo
//          
//          

