function View(el, model){
  this.el    = el;
  this.model = model;
}

View.prototype.template = function(model){
  var html = '';

  for (var i = 0; i < model.board.length; i++){
    var otherClasses = '';

    if (model.board[i] === SHIP && model.human) {
      otherClasses = 'ship';
    } else if (model.board[i] === MISS) {
      otherClasses = 'miss';
    } else if (model.board[i] === HIT) {
      otherClasses = 'hit';
    }

    html += '<div class="cell ' + otherClasses + '"></div>';
  }
  return html;
}

View.prototype.render = function(){
  this.el.innerHTML = this.template(this.model);
}
