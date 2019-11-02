export class Money {
  protected amount: number;

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

  times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {
  constructor(amount: number) {
    super();
    this.amount = amount;
  }

  times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier);
  }
}
