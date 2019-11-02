import Money from "./money";

export default class Dollar extends Money {
    constructor(amount) {
        super(amount);
    }

    times(multiplier) {
        return new Dollar(this.amount * multiplier);
    }
}
