class Sum {
    constructor(augend, addend) {
        this.augend = augend;
        this.addend = addend;
    }

    reduce(to) {
        const amount = this.augend.amount + this.addend.amount;
        return new Money(amount, to);
    }
}

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
        return new Sum(this, addend);
    }

    reduce(to) {
        return this;
    }
}

class Bank {
    constructor() {}

    reduce(source, to) {
        return source.reduce(to);
    }
}

export { Money, Bank, Sum };
