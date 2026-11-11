class Emplyee {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
const employee = new Emplyee("abir", 20);
const employee2 = new Emplyee("Nahid", 23);
console.log(employee instanceof Emplyee);
console.log(employee2 instanceof Emplyee);
