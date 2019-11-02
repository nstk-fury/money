import { Money } from "../src/dollar";

test("Multiplication 테스트", () => {
  const five: Money = Money.dollar(5);
  expect(five.times(2)).toEqual(Money.dollar(10));
  expect(five.times(3)).toEqual(Money.dollar(15));
});

test("Equality 테스트", () => {
  expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
  expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
  expect(Money.franc(5).equals(Money.franc(5))).toBeTruthy();
  expect(Money.franc(5).equals(Money.franc(6))).toBeFalsy();
  expect(Money.franc(5).equals(Money.dollar(5))).toBeFalsy();
});

test("Franc Multiplication 테스트", () => {
  const five: Money = Money.franc(5);
  expect(five.times(2)).toEqual(Money.franc(10));
  expect(five.times(3)).toEqual(Money.franc(15));
});

test("Currency 테스트", () => {
  expect(Money.dollar(1).currency()).toEqual("USD");
  expect(Money.franc(1).currency()).toEqual("CHF");
});
