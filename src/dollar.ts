export class Dollar {
  private amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }

  equals(object: Object) {
    const dollar: Dollar = <Dollar>object;
    return this.amount === dollar.amount;
  }
}

export class Franc {
  private amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier);
  }

  equals(object: Object) {
    const franc: Franc = <Franc>object;
    return this.amount === franc.amount;
  }
}
