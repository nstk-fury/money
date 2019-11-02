export class Money {
  protected _currency: string;
  protected amount: number;

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this._currency = currency;
  }

  static dollar(amount: number): Money {
    return new Money(amount, "USD");
  }

  static franc(amount: number): Money {
    return new Money(amount, "CHF");
  }

  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this._currency);
  }

  currency(): string {
    return this._currency;
  }

  equals(object: Object) {
    const money: Money = <Money>object;
    return this.amount === money.amount && this.currency() === money.currency();
  }
}
