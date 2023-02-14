export default class Countdown {
  hours: number;
  minutes: number;
  seconds: number;

  constructor(
    hours: number = 0,
    minutes: number = 25, 
    seconds: number = 0
  ) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }
}
