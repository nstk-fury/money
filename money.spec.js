import { Money, Bank, Sum } from "./money";

describe("Money Example Test", () => {
    test("testMultiplication", () => {
        const five = Money.dollar(5);
        expect(Money.dollar(10).equals(five.times(2))).toBeTruthy();
        expect(Money.dollar(15).equals(five.times(3))).toBeTruthy();
    });

    test("testEquality", () => {
        expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
        expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
        expect(Money.franc(5).equals(Money.dollar(5))).toBeFalsy();
    });

    test("testCurrency", () => {
        expect("USD").toEqual(Money.dollar(1).getCurrency());
        expect("CHF").toEqual(Money.franc(1).getCurrency());
    });

    test("testSimpleAddition", () => {
        const five = Money.dollar(5);
        const sum = five.plus(five);
        const bank = new Bank();
        const reduced = bank.reduce(sum, "USD");
        expect(Money.dollar(10)).toEqual(reduced);
    });

    test("testReduceSum", () => {
        const sum = new Sum(Money.dollar(3), Money.dollar(4));
        const bank = new Bank();
        const result = bank.reduce(sum, "USD");
        expect(Money.dollar(7)).toEqual(result);
    });

    test("testReduceMoney", () => {
        const bank = new Bank();
        const result = bank.reduce(Money.dollar(1), "USD");
        expect(Money.dollar(1)).toEqual(result);
    });

    test("testReduceMoneyDifferentCurrency", () => {
        const bank = new Bank();
        bank.addRate("CHF", "USD", 2);
        const result = bank.reduce(Money.franc(2), "USD");
        expect(Money.dollar(1)).toEqual(result);
    });

    test("testIdentityRate", () => {
        expect(1).toEqual(new Bank().rate("USD", "USD"));
    });

    test("tsetMixedAddition", () => {
        const fiveBucks = Money.dollar(5);
        const tenFrancs = Money.franc(10);
        const bank = new Bank();
        bank.addRate("CHF", "USD", 2);

        const result = bank.reduce(fiveBucks.plus(tenFrancs), "USD");
        expect(Money.dollar(10)).toEqual(result);
    });
});
