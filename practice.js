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