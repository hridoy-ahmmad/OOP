abstract class Person {
  constructor(
    public name: string,
    public age: number,
    protected _baseSalary: number,
  ) {}
  abstract annualSalary(): number;
  abstract loanDeductionPerMonth(): number;
  abstract annualFacilittyAmount(): number;
}

class Person1 extends Person {
  annualSalary() {
    return this._baseSalary * 12;
  }
  loanDeductionPerMonth() {
    return this._baseSalary * 0.1;
  }
  annualFacilittyAmount() {
    return 5000 * 12;
  }
}

const employee4 = new Person1("abul", 546, 47554);
console.log(employee4.annualSalary());
console.log(employee4.loanDeductionPerMonth());
console.log(employee4.annualFacilittyAmount());
