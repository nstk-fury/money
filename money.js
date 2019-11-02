import Dollar from "./dollar";
import Franc from "./franc";

export default class Money {
    constructor(amount) {
        this.amount = amount;
    }

    equals(obj) {
        const money = obj;
        return this.amount === money.amount;
    }

    times(multiplier) {}

    static dollar(amount) {
        return new Dollar(amount);
    }

    static franc(amount) {
        return new Franc(amount);
    }
}
