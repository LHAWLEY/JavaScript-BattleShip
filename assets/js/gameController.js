function GameController(userBoard, computerBoard, userView, computerView){
  this.userBoard     = userBoard;
  this.userView      = userView;
  this.computerBoard = computerBoard;
  this.computerView  = computerView;
}

GameController.prototype.getIndex = function(message) {
  var input,
      retries = 0;

  do {
    if (retries > 0) {
      message = 'You already pick that number.  Please pick another between 0 - 15.';
    }
    input = prompt(message)
    if (input > 15) {
      input = 15;
    } else if (input < 0){
      input = 0;
    }
    retries++;
  } while (this.computerBoard.hasGuessed(input));

  return input;
}

GameController.prototype.computerGuess = function(){
    var number;
    do { number = Math.floor(Math.random() * 15) } while (this.userBoard.hasGuessed(number));
    return number;
  }

GameController.prototype.turn = function(model, input, view, message){
    model.guess(input);
    view.render();
    if (model.over){
      alert(message);
    }
  }

GameController.prototype.render = function(){
  this.userView.render();
  this.computerView.render();
}

GameController.prototype.start = function(){
  while (!(this.computerBoard.over || this.userBoard.over)){
    this.turn(
      this.computerBoard,
      this.getIndex('Make your move.  Enter a number 0 - 15.'),
      this.computerView,
      'User Won. Game Over.'
    );
    this.turn(
      this.userBoard,
      this.computerGuess(),
      this.userView,
      'Computer Won. Game Over.'
    );
  }
}

GameController.prototype.placeShips = function(){
  this.render();
  this.userBoard.placeShip(this.getIndex('Place your ship.  Enter a number 0 - 15.'));
  this.computerBoard.placeShip(this.computerGuess());
  this.render();
}
