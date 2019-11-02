import Franc from "./franc";

describe("Franc", () => {
    test("testFrancMultiplication", () => {
        const five = new Franc(5);
        expect(new Franc(10).equals(five.times(2)));
        expect(new Franc(15).equals(five.times(3)));
    });
});
