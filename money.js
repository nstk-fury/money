class Money {
    constructor(amount) {
        this.amount = amount;
    }

    equals(obj) {
        const money = obj;
        return (
            this.amount === money.amount &&
            this.constructor.name === money.constructor.name
        );
    }

    times(multiplier) {}

    static dollar(amount) {
        return new Dollar(amount);
    }

    static franc(amount) {
        return new Franc(amount);
    }
}

class Dollar extends Money {
    constructor(amount) {
        super(amount);
    }

    times(multiplier) {
        return new Dollar(this.amount * multiplier);
    }
}

class Franc extends Money {
    constructor(amount) {
        super(amount);
    }

    times(multiplier) {
        return new Franc(this.amount * multiplier);
    }
}

export { Money, Dollar, Franc };
