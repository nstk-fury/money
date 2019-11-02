import { Dollar } from "../src/dollar";

test("Multiplication 테스트", () => {
  const five: Dollar = new Dollar(5);
  expect(five.times(2)).toEqual(new Dollar(10));
  expect(five.times(3)).toEqual(new Dollar(15));
});

test("Equality 테스트", () => {
  expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
  expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
});
