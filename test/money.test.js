const { Dollar } = require("../src/dollar");

test("Multiplication 테스트", () => {
  const five = new Dollar(5);
  five.times(2);
  expect(five.amount).toEqual(10);
});
