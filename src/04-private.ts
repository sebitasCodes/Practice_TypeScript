export class MyDate {
  private year: number;
  private month: number;
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    const day = this.addPaddign(this.day)
    const month = this.addPaddign(this.month)
    return `${day}/${month}/${this.year}`;
  }

  private addPaddign (value : number) : string {
    if (value < 10) {
      return `0${value}`
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

  getDaY () {
    return this.day
  }
}

const myDate = new MyDate(2024, 6, 4);

console.log( myDate.printFormat())

console.log(myDate.getDaY())

