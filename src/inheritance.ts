// set and get methode

class Emplyee3 {
  constructor(
    public name: string,
    protected _accountNumber: number,
  ) {}
  // get accountNumber() {
  //   return this._accountNumber;
  // }
  set accountNumber(NewAccountNumber: number) {
    this._accountNumber = NewAccountNumber;
  }
}
class Manager extends Emplyee3 {
  constructor(
    name: string,
    _accountNumber: number,
    public _baseSalary: number,
  ) {
    super(name, _accountNumber);
  }
  describe(): string {
    return `${this.name} earns ${this._baseSalary} every month , acc No: ${this._accountNumber}`;
  }
}
// const employee3 = new Emplyee3("abir", 154824555);
// employee3.accountNumber = 554544;
// console.log(employee3.accountNumber);

const manager = new Manager("khan", 12545894, 55000);
console.log(manager.describe());
