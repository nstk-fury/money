import { Dollar } from "../src/dollar";

test("Multiplication 테스트", () => {
  const five: Dollar = new Dollar(5);
  five.times(2);
  expect(five.amount).toEqual(10);
});
