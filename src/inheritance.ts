// set and get methode

class Emplyee3 {
  constructor(
    public name: string,
    private _accountNumber: number,
  ) {}
  get accountNumber() {
    return this._accountNumber;
  }
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
    this._baseSalary = _baseSalary;
  }
}
const employee3 = new Emplyee3("abir", 154824555);
employee3.accountNumber = 554544;
// console.log(employee3.accountNumber);

const manager = new Manager ('khan', 12545894, 55)
console.log(manager.accountNumber);

