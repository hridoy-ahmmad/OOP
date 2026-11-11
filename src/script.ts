class Emplyee {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
const employee = new Emplyee("abir", 20);

employee.name = "mdna";
employee.age = 5000; // need to prevent this
console.log(employee.age);

//  TypeScript shorthand and uses of access modifier
// public, 
// private
// protected
// readonly
// public readonly


class Emplyee2 {
  constructor(
    public name: string,
    public readonly salary: number,
  ) {}
}
