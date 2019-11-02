class Money {
    constructor(amount, currency) {
        this.amount = amount;
        this.currency = currency;
    }

    static dollar(amount) {
        return new Dollar(amount, "USD");
    }

    static franc(amount) {
        return new Franc(amount, "CHF");
    }

    equals(obj) {
        const money = obj;
        return (
            this.amount === money.amount &&
            this.constructor.name === money.constructor.name
        );
    }

    times(multiplier) {}

    currency() {}
}

class Dollar extends Money {
    constructor(amount, currency) {
        super(amount, currency);
    }

    times(multiplier) {
        return Money.dollar(this.amount * multiplier);
    }

    currency() {
        return this.currency;
    }
}

class Franc extends Money {
    constructor(amount, currency) {
        super(amount, currency);
    }

    times(multiplier) {
        return Money.franc(this.amount * multiplier);
    }

    currency() {
        return this.currency;
    }
}

export { Money, Dollar, Franc };
