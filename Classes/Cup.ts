import Dice from "./Dice";

export default class Cup implements Dice {
    _value:number;
    _score:number = 0;
    /**
     * Permet de créer l'entité gobelet avec un nombre voulu de dé
     * @param value : Nombre de dé dans le gobelet
     */
    constructor(value:number) {
        this._value = value;
    }

    /**
     * Permet de lancer les dé par rapport au nombre voulu de dé
     */
    throw(): number {
        const dice:Dice = new Dice;
        let turnScore = 0;
        for (let index = 0; index < this._value; index++) {
            turnScore += dice.throw();
        }
        this._score = turnScore;
        return turnScore;
    }
    

    /**
     * Permet d'afficher le score du tour pour un joueur
     * @param name: joueur qui viens de lancer
     */
    afficherScore(name:string):void{
        console.log(`${name} : ${this._score} pts.`);
    }
    

}