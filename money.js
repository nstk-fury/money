class Sum {
    constructor(augend, addend) {
        this.augend = augend;
        this.addend = addend;
    }

    reduce(bank, to) {
        const amount =
            this.augend.reduce(bank, to).amount +
            this.addend.reduce(bank, to).amount;
        return new Money(amount, to);
    }

    plus(addend) {
        return null;
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

    reduce(bank, to) {
        const rate = bank.rate(this.currency, to);
        return new Money(this.amount / rate, to);
    }
}

class Bank {
    constructor() {
        this.rates = new Map();
    }

    reduce(source, to) {
        return source.reduce(this, to);
    }

    rate(from, to) {
        if (from === to) return 1;
        const rate = this.rates.get(from + to);
        return rate;
    }

    addRate(from, to, rate) {
        this.rates.set(from + to, rate);
    }
}

export { Money, Bank, Sum };
