export class User {
  constructor(
    private readonly _id: string,
    private _name: string,
    private _age: number
  ) {
    this.validateAge(_age);
  }

  get age(): number {
    return this._age;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    this._name = newName;
  }

  set age(newaAge: number) {
    this.validateAge(newaAge);
    this._age = newaAge;
  }

  private validateAge(age: number) {
    if (age < 10 || age > 100) {
      throw new Error('La edad no cumple los requisitos de negocio');
    }
  }
}
