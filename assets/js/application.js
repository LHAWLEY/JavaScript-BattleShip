$(document).ready(function() {
  var userEl        = document.querySelector('.user.board'),
      computerEl    = document.querySelector('.computer.board'),
      userBoard     = new Board(true),
      computerBoard = new Board(false),
      userView      = new View(userEl, userBoard),
      computerView  = new View(computerEl, computerBoard),
      newGame       = new GameController(userBoard, computerBoard, userView, computerView);

  newGame.placeShips();
  newGame.start();
});
