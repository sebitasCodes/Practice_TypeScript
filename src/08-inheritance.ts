export class Animal {
  constructor(public name: string) {}

  move() {
    console.log('the animal is moving');
  }

  sayHi() {
    return `Hi, my name is ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(public owner: string, name: string) {
    super(name);
  }
  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('woof !');
    }
  }
}

const animal = new Animal('mario');

animal.move();
console.log(animal.sayHi());

const doggo = new Dog('mario', 'doggo');

doggo.move();
doggo.woof(5);
console.log(doggo.sayHi());
console.log(doggo.owner)
