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
}

class Dollar extends Money {
    constructor(amount, currency) {
        super(amount, currency);
    }
}

class Franc extends Money {
    constructor(amount, currency) {
        super(amount, currency);
    }
}

export { Money, Dollar, Franc };
