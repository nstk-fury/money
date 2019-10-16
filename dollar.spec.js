import Dollar from "./dollar";

describe("Dollar Example", () => {
    test("testMultiplication", () => {
        const five = new Dollar(5);
        let proudct = five.times(2);
        expect(10 === proudct.amount).toBeTruthy();
        proudct = five.times(3);
        expect(15 === proudct.amount).toBeTruthy();
    });
});
