import Dollar from "./dollar";

describe("Dollar Example", () => {
    test("testMultiplication", () => {
        const five = new Dollar(5);
        expect(new Dollar(10).equals(five.times(2))).toBeTruthy();
        expect(new Dollar(15).equals(five.times(3))).toBeTruthy();
    });

    test("testEquality", () => {
        expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
    });
});
