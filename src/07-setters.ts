export class MyDate {
  constructor(
    public year: number = 2004,
    private _month: number = 6,
    private _day: number = 16
  ) {}

  printFormat(): string {
    const day = this.addPaddign(this._day);
    const month = this.addPaddign(this._month);
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
        this._month += 1;
        this._day = 1;
      }
    } else if (type === 'months') {
      this._month += amount;
      if (this._month > 12) {
        this.year += 1;
        this._month = 1;
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
  get month() {
    return this._month
  }

  set month(newvalue: number)  {
    if (newvalue >= 1 && newvalue <= 12) {
      this._month  = newvalue
    } else{
      throw new Error("month out of range");
    }
  }
}

const myDate = new MyDate(2000,1,1);

myDate.month = 5
console.log(myDate.month)

myDate.month = 52
console.log('it brokes')


