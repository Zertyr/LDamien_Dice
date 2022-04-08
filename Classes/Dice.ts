export default class Dice {
    _value:number = 0;
    constructor() {
        
    }

    /**
     * Permet de lancer le dé 
     */
    throw():number{
        return this._value = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    }

}