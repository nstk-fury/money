import Dollar from "./dollar";
import Franc from "./franc";

describe("Money Example Test", () => {
    test("testMultiplication", () => {
        const five = new Dollar(5);
        expect(new Dollar(10).equals(five.times(2))).toBeTruthy();
        expect(new Dollar(15).equals(five.times(3))).toBeTruthy();
    });

    test("testEquality", () => {
        expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
        expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
        expect(new Franc(5).equals(new Dollar(5))).toBeTruthy();
        expect(new Franc(5).equals(new Dollar(6))).toBeFalsy();
    });

    test("testFrancMultiplication", () => {
        const five = new Franc(5);
        expect(new Franc(10).equals(five.times(2)));
        expect(new Franc(15).equals(five.times(3)));
    });
});
