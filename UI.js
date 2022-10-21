export class UI {
  constructor(game) {
    this.game = game;
    this.fontSize = 44;
    this.fontFamily = "Arial";
    this.fontWeight = 900
  }
  draw(context) {
    context.font = this.fontSize + "px " + this.fontFamily;
    context.textAlign = "left";
    context.fillStyle = "purple";
    // score
    context.fillText("Score: " + this.game.score, 20, 50);
    context.font = this.fontSize * 0.8 + "px " + this.fontFamily;
    context.fillText("Time: " + (this.game.time * 0.001).toFixed(1), 20, 90);
    // game over messages
    if (this.game.gameOver) {
      context.textAlign = "center";
      context.font = this.fontSize * 2 + "px " + this.fontFamily;
      if (this.game.score > this.game.winningScore){

        context.fillText(
          "You Win!!",
          this.game.width * 0.5,
          this.game.height * 0.5 - 100
        );
        context.font = this.fontSize * 0.7 + "px " + this.fontFamily;
        context.fillText(
          "Great job gamer!",
          this.game.width * 0.5,
          this.game.height * 0.5 - 70
          );
          context.fillText(
            "Press Enter to play again!",
            this.game.width * 0.5,
            this.game.height * 0.5 - 45
            );
          
      } else {
        context.fillText(
          "YOU LOSE",
          this.game.width * 0.5,
          this.game.height * 0.5 - 100
        );
        context.font = this.fontSize * 0.7 + "px " + this.fontFamily;
        context.fillText(
          "Better luck next time gamer!",
          this.game.width * 0.5,
          this.game.height * 0.5 - 70 
        );
        context.fillText(
          "Press Enter to try again!",
          this.game.width * 0.5,
          this.game.height * 0.5 - 45
          );
         
      }
    }
  }
}
