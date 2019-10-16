class Dollar {
  constructor(amount) {
    this.amount = amount;
  }

  times(multiplier) {
    this.amount *= multiplier;
  }
}

module.exports = { Dollar };
