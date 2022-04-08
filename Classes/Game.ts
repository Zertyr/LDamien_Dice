import Cup from "./Cup";
import Player from "./Player";

export default class Game {
    _nbTurn: number = 0;
    _players!: Player[];
    _cup: Cup;

    /**
     * constructor du jeu
     * @param cup : gobelet un nombre définis de dé
     */
    constructor(cup:Cup) {
        this._cup = cup;
    }

    /**
     * Permet d'initialiser la partie avec un nb de tour et de joueur défini
     */
    initializeGame(nbTurn:number, ...players:Player[]):void{
        if(nbTurn != 0){
            this._nbTurn = nbTurn;
            this._players = players;
        } else {
            console.log(`Vous ne pouvez pas définir 0 tours de jeu`);
        }

    }
    
    /**
     * Lancement du jeu
     */
    startGame(){
        if(this._nbTurn != 0) {
            for (let index = 0; index < this._nbTurn; index++) {
                console.log(`_________________tour n° ${index + 1}____________________`);
                
                this._players.forEach(player => {
                    player._score += player.play(this._cup);
                    this._cup.afficherScore(player._name);
                });                
            }
        } else {
            console.log(`Vous n'avez pas initialisé la partie !`);
        }

    }

    /**
     * Affiche le ou les gagnants
     */
    showWinner(){
        let winners:Player[] = [];
        let maxScore:number = 0;
        console.log(`__________________Score Final___________________`);

        this._players.forEach(player => {
            player.showScore();
            if(player._score > maxScore){
                winners = [];
                maxScore = player._score;
                winners.push(player);
            } else if(player._score === maxScore) {
                winners.push(player);
            }
        });

        if(winners.length > 1){
            console.log(`Gagnants ex aequo : `);
            
            winners.forEach(winner => {
                console.log(` ${winner._name} avec un score de ${winner._score}`);
            });
        } else {
            console.log(`Le gagnant est ${winners[0]._name} avec un score de ${winners[0]._score}`);
        }

    }
}