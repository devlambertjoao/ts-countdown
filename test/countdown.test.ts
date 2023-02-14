import Countdown from "../src/countdown";

test('can create with default hours, minutes, and seconds', () => {
  const countdown = new Countdown();
  expect(countdown).not.toBe(null);
  expect(countdown.hours).toBe(0);
  expect(countdown.minutes).toBe(25);
  expect(countdown.seconds).toBe(0);
})

test('can create with hours, minutes and seconds', () => {
  const countdown = new Countdown(1, 20, 20);
  expect(countdown).not.toBe(null);
  expect(countdown.hours).toBe(1);
  expect(countdown.minutes).toBe(20);
  expect(countdown.seconds).toBe(20);
})
