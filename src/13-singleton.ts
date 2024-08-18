export class MyThing {
  static instance: MyThing | null = null;
  private constructor(private name: string) {}

  getName(): string {
    return this.name;
  }

  static create(name: string) {
    if (MyThing.instance === null) {
      console.log('Created just the first time')
      MyThing.instance = new MyThing(name);
    }
    return MyThing.instance;
  }
}

const myThing = MyThing.create('sebastian´s instance')
console.log(myThing.getName())
const myThing2 = MyThing.create('someone else´s instance')
console.log(myThing2.getName())

