import { Money } from "./money";

describe("Money Example Test", () => {
    test("testMultiplication", () => {
        const five = Money.dollar(5);
        expect(Money.dollar(10).equals(five.times(2))).toBeTruthy();
        expect(Money.dollar(15).equals(five.times(3))).toBeTruthy();
    });

    test("testEquality", () => {
        expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
        expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
        expect(Money.franc(5).equals(Money.franc(5))).toBeTruthy();
        expect(Money.franc(5).equals(Money.franc(6))).toBeFalsy();
        expect(Money.franc(5).equals(Money.dollar(5))).toBeFalsy();
    });

    test("testFrancMultiplication", () => {
        const five = Money.franc(5);
        expect(Money.franc(10).equals(five.times(2)));
        expect(Money.franc(15).equals(five.times(3)));
    });

    test("tsetCurrency", () => {});
});
