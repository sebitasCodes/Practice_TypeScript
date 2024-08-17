const date = new Date();
date.getHours();
date.getTime();
date.toISOString();

const date2 = new Date();
date2.getHours();
date2.getTime();
date2.toISOString();

class MyDate {
  year: number;
  month: number;
  day: number;

  //constructor
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

const myDate = new MyDate(2022, 1, 15)

console.log(myDate)
