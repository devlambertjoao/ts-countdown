import Countdown from "../src/countdown";

test('nothing', () => {
  const countdown = new Countdown();
  expect(countdown).not.toBe(null);
})

