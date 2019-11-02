export default class Franc {
    constructor(amount) {
        this.amount = amount;
    }

    times(multiplier) {
        return new Franc(this.amount * multiplier);
    }

    equals(obj) {
        const franc = obj;
        return this.amount === franc.amount;
    }
}
