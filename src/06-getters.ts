export class MyDate {
  constructor(
    public year: number = 2004,
    public month: number = 6,
    private _day: number = 16
  ) {}

  printFormat(): string {
    const day = this.addPaddign(this._day);
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
      this._day += amount;
      if (this._day > 30) {
        this.month += 1;
        this._day = 1;
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

  get day() {
    return this._day;
  }

  get isLeapYear() : boolean {
    if (this.year % 400 === 0) return false;
    if (this.year % 100 === 0) return true;
    return this.year % 4 === 0;

  }
}

const myDate = new MyDate(2000,1,1);
console.log(myDate.printFormat());
console.log(myDate.day)
console.log(myDate.isLeapYear)


const myDate2 = new MyDate(2001,1,1);
console.log(myDate2.printFormat());
console.log(myDate2.day)
console.log(myDate2.isLeapYear)

const myDate3 = new MyDate(2004,1,1);
console.log(myDate3.printFormat());
console.log(myDate3.day)
console.log(myDate3.isLeapYear)

