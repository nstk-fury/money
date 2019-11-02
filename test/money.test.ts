import { Dollar } from "../src/dollar";

test("Multiplication 테스트", () => {
  const five: Dollar = new Dollar(5);
  let product: Dollar = five.times(2);
  expect(product.amount).toEqual(10);
  product = five.times(3);
  expect(product.amount).toEqual(15);
});

test("Equality 테스트", () => {
  expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
  expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
});
