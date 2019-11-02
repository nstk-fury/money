export default class Money {
    constructor(amount) {
        this.amount = amount;
    }

    equals(obj) {
        const money = obj;
        return this.amount === money.amount;
    }
}
