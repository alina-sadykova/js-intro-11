/*
-Create a class called as Player
-Create a constructor for this class which takes 2 arguments: 
    nickName
    score
-Create a method called as getInfo() which returns the score for the player 
object info in the format: {nickName}'s score is {score}.
-Create a method called as attack() which takes a player object as argument and 
increases the attacking player's score by 1 while it decreases the attacked player's score by 1
-Create a method called as damage() which decreases the score of the player object by 1
*/
class Player {
  constructor(nickName, score) {
    this.nickName = nickName;
    this.score = score;
  }
  getInfo() {
    return `${this.nickName}'s score is ${this.score}`;
  }
  attack(otherPlayer) {
    this.score += 1;
    otherPlayer.score -= 1;
  }
  damage() {
    this.score -= 1;
  }
}

module.exports = Player;
