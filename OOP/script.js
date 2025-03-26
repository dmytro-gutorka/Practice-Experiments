'use strict';
//
//
// class Person {
//     constructor(firstName, lastName, birthYear) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.birthYear = birthYear;
//     }
//
//     calcAge() {
//         console.log(2025 - this.birthYear);
//     }
//
//
//     get age() {
//         return 2025 - this.birthYear;
//     }


    // set fullName(fullName) {
    //     if (fullName.includes(' ')) this._fullName = fullName;
    //     else alert(`Name ${fullName} is not valid`);
    // }
    //
    // get fullName() {
    //     return this._fullName;
    // }


//     static hey1(){
//         console.log('Hi!')
//     }
// }
//
//
// class Student extends Person {
//     constructor(firstName, lastName, birthYear, course) {
//         super(firstName, lastName, birthYear)
//         this.course = course
//     }
//
//
// }
//
// const martha = new Student('Martha', 'Jhonas', 2000, 'CS')
// martha.calcAge()
//
// console.log(martha)

//
// const dimaGutorka = new Person('Dima', 'Gutorka', 'Dima Gutorka',  2000);
// console.log(dimaGutorka)
// console.log(Person)
//
//
// Person.hey =  function() {
//     console.log('Hi there !!!')
// }
//
// Person.hey()
// Person.hey1()
//
//
//
// Person.prototype.greet = function() {
//     console.log(`Hello, ${this.firstName}!`);
// }
//
// dimaGutorka.greet()
// dimaGutorka.calcAge();
//
//
// const account = {
//     owner: 'dima',
//     movements: [100, 2000, 300],
//
//     get latest() {
//         return this.movements.slice(-1).pop()
//     },
//
//     set latest(mov) {
//         this.movements.push(mov)
//     }
// }
//
//
// const PersonProto = {
//     init(name, birthYear) {
//         this.name = name;
//         this.birthYear = birthYear;
//     },
//
//     calcAge() {
//         console.log(2025 - this.birthYear);
//     },
// }
//
// const steven = Object.create(PersonProto);
// const sara = Object.create(PersonProto);
//
// console.log(steven.__proto__ === sara.__proto__);
//
//
// steven.init('Dima', 2000)
// console.log(steven)
//
//
// steven.calcAge();


//
// const Person = function(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// }
//
//
// Person.prototype.calcAge = function() {
//     console.log(2025 - this.birthYear);
// }
//
//
//
// const Student = function(firstName, birthYear, course) {
//     Person.call(this, firstName, birthYear);
//     this.course = course;
// }
//
//
// Student.prototype = Object.create(Person.prototype)
// Student.prototype.constructor = Student
//
// Student.prototype.introduce = function() {
//     console.log(`My name is ${this.firstName} and I study ${this.course}!`);
// }
//
//
// const mike = new Student('Mike', 2020, 'Computer Science')
// const dima = new Student('dima', 2000, 'Frontend Development')
//
//
// const testFunc = function (a,b) {
//     return a + b
// }
//
// console.log(testFunc.prototype)
//
// const testClass = class Person {
//     constructor(c, d) {
//         this.c = c;
//         this.d = d;
//     }
//
//     greeting() {
//         console.log('Hii')
//     }
// }
//
// console.log(testClass.prototype)
//
//
// const testObj = {
//     a: 1,
//     b: 2,
//     c: 3
// }



// const PersonProto = {
//     calcAge() {
//         console.log(2025 - this.birthYear);
//     },
//
//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// }
//
//
// const StudentProto = Object.create(PersonProto)
//
// StudentProto.init = function(firstName, birthYear, course) {
//     PersonProto.init.call(this, firstName, birthYear)
//     this.course = course;
// }
//
// const jay = Object.create(StudentProto)
//
//
// jay.init('Dima', 2000, 'CS')
//
//
//
// class Account {
//     locale = navigator.language;
//     bank = 'Bankist';
//     #movements = [];
//     #pin;
//
//     constructor(owner, currency, pin, movements) {
//         this.owner = owner;
//         this.currency = currency;
//         this.#pin = pin;
//     }
//
//     getMovements() {
//         console.log(this.#movements)
//         return this.#movements;
//     }
//
//     deposit(val) {
//         this.#movements.push(val);
//         return this
//     }
//
//     withdraw(val) {
//         this.deposit(-val);
//         return this
//     }
//
//     #approveLoan() {
//         return true
//     }
//
//     requestLoan(val) {
//         if (this.#approveLoan(val)){
//             this.deposit(val)
//             console.log('Loan approved')
//         }
//         return this
//     }
// }
//
// const acc1 = new Account('Dima', 'EUR', 1111, [1,2,3]);
// acc1.deposit(1).withdraw(20).requestLoan(300).deposit(2000).getMovements();



//
// class CarCl {
//     constructor(make, speed) {
//         this.make = make;
//         this.speed = speed;
//     }
//
//     accelerate() {
//         this.speed += 10;
//         console.log(`${this.make} is going at ${this.speed} km/h`);
//     }
//
//     brake() {
//         this.speed -= 5;
//         console.log(`${this.make} is going at ${this.speed} km/h`);
//         return this;
//     }
//
//     get speedUS() {
//         return this.speed / 1.6;
//     }
//
//     set speedUS(speed) {
//         this.speed = speed * 1.6;
//     }
// }
//
// class EVCl extends CarCl {
//     #charge;
//
//     constructor(make, speed, charge) {
//         super(make, speed);
//         this.#charge = charge;
//     }
//
//     chargeBattery(chargeTo) {
//         this.#charge = chargeTo;
//         return this;
//     }
//
//     accelerate() {
//         this.speed += 20;
//         this.#charge--;
//         console.log(
//             `${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}`
//         );
//
//         return this;
//     }
// }
//

