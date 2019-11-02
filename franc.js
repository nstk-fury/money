import Money from "./money";

export default class Franc extends Money {
    constructor(amount) {
        super(amount);
    }

    times(multiplier) {
        return new Franc(this.amount * multiplier);
    }

    equals(obj) {
        const money = obj;
        console.log("this.constructor.name", this.constructor.name);
        console.log("money.constructor.name", money.constructor.name);
        return (
            this.amount === money.amount &&
            this.constructor.name === money.constructor.name
        );
    }
}
