export class MyDate {
  constructor(
    public year: number = 2004,
    public month: number = 6,
    private day: number = 16
  ) {}

  printFormat(): string {
    const day = this.addPaddign(this.day);
    const month = this.addPaddign(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPaddign(value: number): string {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
      if (this.day > 30) {
        this.month += 1;
        this.day = 1;
      }
    } else if (type === 'months') {
      this.month += amount;
      if (this.month > 12) {
        this.year += 1;
        this.month = 1;
      }
    } else if (type === 'years') {
      this.year += amount;
    }
  }

  getDaY() {
    return this.day;
  }
}

const myDate = new MyDate();
console.log(myDate.printFormat());
const myDate2 = new MyDate(2024);
console.log(myDate.printFormat());
const myDate3 = new MyDate(2025,4);
console.log(myDate.printFormat());
const myDate4 = new MyDate(2026,5,6);
console.log(myDate.printFormat());

console.log(myDate)
console.log(myDate2)
console.log(myDate3)
console.log(myDate4)
