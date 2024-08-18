

class MyMath {

  static readonly PI: number = 3.14


  static max (...numbers: number[]): number{
    return numbers.reduce((max, item) => max >= item ? max: item)
  }
}



console.log(MyMath.max(2,2,2,2,2,3,500))
const numbers = [1,2,3,4,6,7,4,3,23,4645]
console.log(MyMath.max(...numbers))
console.log(MyMath.max(-1,-9,-8))

