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


    static hey1(){
        console.log('Hi!')
    }
}


const dimaGutorka = new Person('Dima', 'Gutorka', 'Dima Gutorka',  2000);
console.log(dimaGutorka)
console.log(Person)


Person.hey =  function() {
    console.log('Hi there !!!')
}

Person.hey()
Person.hey1()



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





const PersonProto = {
    init(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
    },

    calcAge() {
        console.log(2025 - this.birthYear);
    },
}

const steven = Object.create(PersonProto);
const sara = Object.create(PersonProto);

console.log(steven.__proto__ === sara.__proto__);


steven.init('Dima', 2000)
console.log(steven)


steven.calcAge();
