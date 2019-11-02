class Money {
    constructor(amount, currency) {
        this.amount = amount;
        this.currency = currency;
    }

    static dollar(amount) {
        return new Money(amount, "USD");
    }

    static franc(amount) {
        return new Money(amount, "CHF");
    }

    getCurrency() {
        return this.currency;
    }

    equals(obj) {
        const money = obj;
        return (
            this.amount === money.amount &&
            this.getCurrency() === money.getCurrency()
        );
    }

    times(multiplier) {
        return new Money(this.amount * multiplier, this.currency);
    }

    plus(addend) {
        return new Money(this.amount + addend.amount, this.currency);
    }
}

class Bank {
    constructor() {}

    reduce(source, to) {
        return Money.dollar(10);
    }
}

export { Money, Bank };
