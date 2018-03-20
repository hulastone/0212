"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    /**
     *
     */
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    toString() {
        return `${this._name}: ${this._age}`;
    }
}
exports.Person = Person;
//# sourceMappingURL=person.js.map