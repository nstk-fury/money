export abstract class Money {
  protected amount: number;

  static dollar(amount: number): Dollar {
    return new Dollar(amount);
  }

  static franc(amount: number): Franc {
    return new Franc(amount);
  }

  abstract times(multiplier: number): Money;

  equals(object: Object) {
    const money: Money = <Money>object;
    return (
      this.amount === money.amount &&
      (this as any).constructor.name === (money as any).constructor.name
    );
  }
}

export class Dollar extends Money {
  constructor(amount: number) {
    super();
    this.amount = amount;
  }

  times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {
  constructor(amount: number) {
    super();
    this.amount = amount;
  }

  times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }
}
