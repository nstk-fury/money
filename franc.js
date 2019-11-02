import Money from "./money";

export default class Franc extends Money {
    constructor(amount) {
        super(amount);
    }

    times(multiplier) {
        return new Franc(this.amount * multiplier);
    }
}
