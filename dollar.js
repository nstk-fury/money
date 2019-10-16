export default class Dollar {
    constructor(amount) {
        this.amount = amount;
    }

    times(multiplier) {
        return new Dollar(this.amount * multiplier);
    }

    equals(obj) {
        const dollar = obj;
        return this.amount === dollar.amount;
    }
}
