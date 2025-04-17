

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

//
// function longestConsec(strarr, k) {
//   if (strarr.length === 0 || strarr.length < k || k <= 0) return ""
//
//   const wordLength =  Math.max(...strarr.map(word => word.length))
//   const longestWord = strarr.filter(word => word.length === wordLength)[0]
//   const firstWordOccurrenceIndex = strarr.indexOf(longestWord)
//   const concatWords = strarr.slice(firstWordOccurrenceIndex, (firstWordOccurrenceIndex + k + 1)).join('')
//
//   return concatWords
// }



// function throttle(func, delay) {
//   let lastCall = 0;
//
//   return function(...args) {
//     const now = Date.now()
//
//     if (now - lastCall >= delay) {
//       lastCall = now
//       func.apply(this, args)
//     }
//   }
// }
//
// function logScroll() {
//   console.log('scroll event:', new Date().toISOString())
// }
//
// const throttledScroll = throttle(logScroll, 2000)
//
// window.addEventListener('scroll', throttledScroll)


//
// function debounce(func, delay) {
//   let timer;
//
//   return function(...args) {
//     clearTimeout(timer)
//
//     timer = setTimeout(() =>
//       func.apply(this, args), delay
//     )
//   }
// }
//
//
// function logScroll() {
//   console.log('scroll event:', new Date().toISOString())
// }
//
//
// const debouncedScroll = debounce(logScroll, 2000)
//
// window.addEventListener('scroll', debouncedScroll)
//
//
// const elements = document.querySelectorAll('p')
//
// console.log(elements)

//
//
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, 1000)
//
// }


//   What is currying?
//   What are the advantages of Getters and Setters?
//   What is an event loop?
//   What is destructuring assignment (array, object)?
//   What are the different ways of adding event listener to an element?
//   What is the use of stopPropagation method?
//   What is an event delegation?


// const accordion = document.querySelector('.accordion')
//
//
// accordion.addEventListener('click', (e) => {
//   const clickedBtn = e.target.closest('.accordion-header')
//   const a = [...accordion.querySelectorAll('.accordion-item')]
//
//   a.map(el => el !== clickedBtn.parentElement && el.classList.remove('active'))
//
//   clickedBtn.parentElement.classList.toggle('active')
// })


