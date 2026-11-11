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
// console.log(employee.age);

//  TypeScript shorthand and uses of access modifier
// public,
// private
// protected
// readonly
// public readonly

// class Emplyee2 {
//   constructor(
//     public name: string,
//     private salary: number,
//   ) {}
// }

// const employee2 = new Emplyee2("adnan", 23);
// console.log(employee2.salary); // provate property

// set and get methode

class Emplyee2 {
  constructor(
    public name: string,
    private _salary: number,
  ) {}
  get salary(): number {
    return this._salary;
  }
  get salaryWithBonus (): number{
    return this._salary + 5500
  }
  set salary(newSalary: number) {
    if (newSalary < 0) throw new Error("Salary cannot be negative value");
    this._salary = newSalary;
  }
}
const employee2 = new Emplyee2("adnan", 23000);
// employee2.salary = -50; // wrong
employee2.salary = 50000;
console.log(employee2.salaryWithBonus);
