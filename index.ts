import Cup from "./Classes/Cup";
import Dice from "./Classes/Dice";
import Game from "./Classes/Game";
import Player from "./Classes/Player";

const dice:Dice = new Dice;
const player1: Player = new Player('Damien');
const player2: Player = new Player('Kyllian');
const player3: Player = new Player('Alexandre');
const cup:Cup = new Cup(3);
const game:Game = new Game(3,cup,player1,player2,player3);
game.startGame();
game.showWinner();