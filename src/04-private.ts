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
    return `${this.day}/${this.month}/${this.year}`;
  }

  addPaddign () {

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
}

const myDate = new MyDate(2024, 6, 16);



console.log(myDate.printFormat);
