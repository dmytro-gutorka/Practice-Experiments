// const Car = function (brand, year) {
//     this.brand = brand;
//     this.year = year;
// }
//
// Car.prototype.getAge = function() {
//     return new Date().getFullYear() - this.year;
// }
//
// const car1 = new Car('BMW', 2000)
// console.log(car1.getAge())
//
//

// const Animal = function(breed, birthYear) {
//     this.breed = breed;
//     this.birthYear = birthYear;
// }
//
// Animal.prototype.getAge = function() {
//     const age = new Date().getFullYear() - this.birthYear
//     console.log(age)
//     return age
//  }
//
//
// const Mammal = function(breed, birthYear, paws) {
//     Animal.call(this, breed, birthYear);
//     this.paws = paws
// }
//
// Mammal.prototype = Object.create(Animal.prototype)
// Mammal.prototype.constructor = Mammal
// Mammal.prototype.bark = function() {
//     console.log('Gav gav')
// }
//
//
// const dog = new Mammal('ovcharka', 2005, 4)
//
//
// const obj = {}
//
// Object.setPrototypeOf(obj, Mammal.prototype)
// Mammal.call(obj, 'Alabai', 1901, 3)


//
// class Rectangle{
//     width = 100
//     height = 100
//
//
//     area() {
//         console.log('area of rectangle')
//     }
//
//     get isSquare(){
//         return this.width === this.height
//     }
// }
//
// const rect = new Rectangle();
// rect.area();
// console.log(rect.isSquare)


// const User = function(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
//
// const Admin = function(name, age, isSuperAdmin) {
//     User.call(this, name, age);
//     this.isSuperAdmin = isSuperAdmin;
// }
//
// Admin.prototype = Object.create(User.prototype);
// Admin.prototype.constructor = Admin;
//
// Admin.prototype.hasAccess = function() {
//     if (this.isSuperAdmin) {
//         console.log('You have access to this resource')
//         return true;
//     }
//     console.log('You have NO access to this resource');
//     return false
// }
//
//
// const user1 = new User('Not admin', 100);
// console.log(user1)
//
// const admin1 = new Admin('Not admin', 100, true);
// console.log(admin1)
// admin1.hasAccess();


// class Counter {
//     count = 0;
//
//     constructor(name) {
//         this.name = name;
//     }
//
//     increment = () => {
//         this.count++;
//         console.log(`${this.name}: ${this.count}`);
//     };
// }
//
// const test = new Counter('Dima');
//
// setTimeout(test.increment, 2000);


// function outer() {
//     this.name = 'outerThis';
//
//     const regular = function () {
//         console.log('regular:', this.name);
//     };
//
//     const arrow = () => {
//         console.log('arrow:', this.name);
//     };
//
//     return { regular, arrow };
// }
//
// const obj = {
//     name: 'realObj'
// };
//
//
// const { regular, arrow } = outer.call(obj); // outer вызван с this = obj
//
// console.log(regular, arrow)
//
//
// regular();
// arrow();


//HW 9


let company = {

    sales: [
        {
            name: 'John',
            salary: 1000
        },
        {
            name: 'Alice',
            salary: 2000
        },
    ],
    development: {
        web: [
            {
                name: 'Peter',
                salary: 3000,
            },
            {
                name: 'Alex',
                salary: 4000
            }
        ],
        internals: [
            {
                name: 'Jack',
                salary: 5000
            }
        ],
    }
}

function calcOverallSalary(obj) {
    let sum = 0

    for (let key of Object.keys(obj)) {

        if (Array.isArray(obj[key])) {
            obj[key].forEach(key => sum += key.salary)
        }

        if (obj[key] && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            console.log(obj[key])
            return sum += calcOverallSalary(obj[key])
        }
    }

    return sum;
}

calcOverallSalary(company)

// HW 10



