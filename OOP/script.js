'use strict';


class Person {
    constructor(firstName, lastName, fullName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = fullName
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2025 - this.birthYear);
    }


    get age() {
        return 2025 - this.birthYear;
    }


    set fullName(fullName) {
        if (fullName.includes(' ')) this._fullName = fullName;
        else alert(`Name ${fullName} is not valid`);
    }

    get fullName() {
        return this._fullName;
    }
}


const dimaGutorka = new Person('Dima', 'Gutorka', 'Dima Gutorka',  2000);
console.log(dimaGutorka)





Person.prototype.greet = function() {
    console.log(`Hello, ${this.firstName}!`);
}

dimaGutorka.greet()
dimaGutorka.calcAge();


const account = {
    owner: 'dima',
    movements: [100, 2000, 300],

    get latest() {
        return this.movements.slice(-1).pop()
    },

    set latest(mov) {
        this.movements.push(mov)
    }
}



