var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
        this.hobbies = [];
    }
    return User;
}());
var dima = new User('Dima', 25);
console.log(dima.age);
