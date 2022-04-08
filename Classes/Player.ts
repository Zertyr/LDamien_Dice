import Cup from "./Cup";

export default class Player {
    _name:string;
    _score:number = 0;
    constructor(name:string) {
        this._name = name;
    }

    /**
     * permet de lancer les dé pour un joueur
     * @param cup gobelet avec le nombre de dé
     * @returns 
     */
    play(cup:Cup):number{
        this._score = cup.throw();
        return this._score;
    }

    /**
     * permet d'afficher le score total du joueur
     */
    showScore():void {
        console.log(`Le score final du joueur ${this._name}  est de : ${this._score} pts.`);
    };
}