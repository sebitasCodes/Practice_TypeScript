export abstract class Animal {
  constructor(protected name: string) {}

  move() {
    console.log('the animal is moving');
  }

  sayHi() {
    return `Hi, my name is ${this.name}`;
  }
  protected doSomething() {
    console.log('do a flip');
  }
}

export class Dog extends Animal {
  constructor(public owner: string, name: string) {
    super(name);
  }

  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log(`woof ! ${this.name}`);
    }

    this.doSomething();
  }

  move(): void {
    console.log('the dog is moving');
    super.move();
  }
}

const animal = new Animal('mario');

animal.move();
console.log(animal.sayHi());

const doggo = new Dog('mario', 'doggo');

doggo.move();
console.log(doggo.sayHi());
console.log(doggo.owner);
// doggo.name = 'milo'
doggo.woof(1);

doggo.move()
