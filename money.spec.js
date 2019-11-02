import { Money, Bank } from "./money";

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
});
