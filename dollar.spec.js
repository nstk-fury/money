import Dollar from "./dollar";

describe("Dollar Example", () => {
    test("testMultiplication", () => {
        const five = new Dollar(5);
        five.times(2);
        expect(10 === five.amount).toBeTruthy();
    });
});
