export class Person {
    public _name: string;
    public _age: number;

    /**
     *
     */
    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    public toString(): string {
        return `${this._name}: ${this._age}`
    }
}
