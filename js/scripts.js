//Business Logic 
//for Player -->
function Player () {
  this.totalScore = 0;
  this.turnScore = 0;
  this.currentPlayer = ""; 
};

// Roll button method ==> outputs a random number
Player.prototype.rollDice = function() {
  var random = Math.floor(Math.random() * 6) + 1;
  if (random === 1) {
    this.turnScore = 0;

  } else if (random !== 1) {
    this.turnScore += random;
  } 

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

// User interface logic
$(document).ready(function() {
  var playerOne = new Player();
  var playerTwo = new Player(); 

  // Roll button for player one
  $("button#roll1").click(function () {
    playerOne.rollDice();
    $(".player-name1").html(playerOne.playerName);
    $(".current-score1").html(playerOne.turnScore);
    if (playerOne.turnScore === 0){
      $(".player-one-turn").slideUp(this);
      $(".player-two-turn").slideDown();
      $("#turnOver2").show();
      $("#turnOver1").hide();
    }
  });

  // Roll button for player two
  $("button#roll2").click(function () {
    playerTwo.rollDice();
    $(".player-name2").html(playerTwo.playerName);
    $(".current-score2").html(playerTwo.turnScore);
    if (playerTwo.turnScore === 0) {
      $(".player-two-turn").slideUp(this);
      $(".player-one-turn").slideDown();
      $("#turnOver1").show();
      $("#turnOver2").hide();
    }
  });

  // Hold button for player one
  $("button#hold1").click(function(){  
    playerOne.sumScore()
    $(".game-score1").html(playerOne.totalScore);
    $(".player-one-turn").slideUp(this);
    $(".player-two-turn").slideDown();
    $("#turnOver2").show();
    $("#turnOver1").hide();
  });

  // Hold button for player two
  $("button#hold2").click(function(){  
    playerTwo.sumScore()
    $(".game-score2").html(playerTwo.totalScore);
    $(".player-two-turn").slideUp(this);
    $(".player-one-turn").slideDown();
    $("#turnOver1").show();
    $("#turnOver2").hide();
    
  });
});

