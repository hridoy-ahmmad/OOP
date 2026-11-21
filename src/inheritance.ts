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

const employee3 = new Emplyee3("abir", 154824555);
employee3.accountNumber = 554544
console.log(employee3.accountNumber);
