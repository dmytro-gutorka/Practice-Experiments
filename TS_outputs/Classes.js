"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckingAccount = exports.SavingsAccount = exports.BankAccount = void 0;
class User {
    constructor() {
        this._firstName = '';
        this._lastName = '';
    }
    get fullName() {
        return this._firstName + ' ' + this._lastName;
    }
    set firstName(firstName) {
        if (firstName.trim() === '')
            throw new Error('Invalid first name');
        this._firstName = firstName;
    }
    set lastName(lastName) {
        if (lastName.trim() === '')
            throw new Error('Invalid first name');
        this._lastName = lastName;
    }
}
User.id = '1111';
const dima = new User();
dima._lastName = 'aa';
class Student extends User {
    constructor(job) {
        super();
        this.job = job;
    }
    work() {
        this._lastName = ' ';
    }
}
class UIElement {
    constructor(identifier) {
        this.identifier = identifier;
    }
    clone(targetLocation) {
        // Logic
    }
}
class SideDrawerElement extends UIElement {
    constructor(identifier, position) {
        super(identifier);
        this.identifier = identifier;
        this.position = position;
    }
}
class BankAccount {
    constructor(_ownerName, initialBalance) {
        this._ownerName = _ownerName;
        this._balance = initialBalance;
        BankAccount._totalAccounts++;
    }
    static displayTotalAccounts() {
        console.log(this._totalAccounts);
    }
    get ownerName() {
        return this._ownerName;
    }
    getBalance() {
        return this._balance;
    }
    deposit(amount) {
        this._balance += amount;
    }
    withdraw(amount) {
        this._balance -= amount;
    }
}
exports.BankAccount = BankAccount;
BankAccount._totalAccounts = 0;
class SavingsAccount extends BankAccount {
    constructor(_ownerName, initialBalance, interestRate) {
        super(_ownerName, initialBalance);
        this._interestRate = interestRate;
    }
    calculateInterest() {
        return this.getBalance() * this._interestRate;
    }
}
exports.SavingsAccount = SavingsAccount;
class CheckingAccount extends BankAccount {
    constructor(_ownerName, initialBalance, transactionLimit) {
        super(_ownerName, initialBalance);
        this._transactionLimit = transactionLimit;
    }
    withdraw(amount) {
        if (amount <= this._transactionLimit)
            super.withdraw(amount);
        if (amount > this._transactionLimit)
            console.log(`Warning: Exceeds transaction limit of $${this._transactionLimit}`);
    }
    calculateInterest() {
        return 0;
    }
}
exports.CheckingAccount = CheckingAccount;
let user = {
    email: 'test@example.com',
    password: 'qwerty123',
    role: 'Admin',
    login() {
        console.log('Logged in');
    },
    logout() {
        console.log('Logged out');
    }
};
class AuthenticatableUser {
    constructor(email, password, role, anyExtraProperty) {
        this.email = email;
        this.password = password;
        this.role = role;
        this.anyExtraProperty = anyExtraProperty;
    }
    login() { }
    logout() { }
}
