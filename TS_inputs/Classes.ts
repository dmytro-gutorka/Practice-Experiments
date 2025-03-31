class User{
    static id = '1111'

    protected _firstName: string = ''
    public _lastName: string = ''


    get fullName() {
        return this._firstName + ' ' + this._lastName;
    }

    set firstName(firstName: string) {
        if (firstName.trim() === '') throw new Error('Invalid first name')
        this._firstName = firstName;
    }

    set lastName(lastName: string) {
        if (lastName.trim() === '') throw new Error('Invalid first name')
        this._lastName = lastName;
    }
}


const dima = new User();
dima._lastName = 'aa'


class Student extends User {
    constructor(public job: string) {
        super();
    }

    work(){
        this._lastName = ' '
    }
}


abstract class UIElement {
    constructor(public identifier: string) {}

    clone(targetLocation: string) {
        // Logic
    }
}


class SideDrawerElement extends UIElement {
    constructor(
        public identifier: string,
        public position: 'left' | 'right') {
        super(identifier);
    }
}


export abstract class BankAccount {
    private static _totalAccounts: number = 0;
    private readonly _ownerName: string;
    private _balance: number;

    constructor(_ownerName: string, initialBalance: number) {
        this._ownerName = _ownerName;
        this._balance = initialBalance;

        BankAccount._totalAccounts++;
    }

    public abstract calculateInterest(): number;

    public static displayTotalAccounts(): void {
        console.log(this._totalAccounts);
    }

    public get ownerName(): string {
        return this._ownerName;
    }

    public getBalance(): number {
        return this._balance;
    }

    public deposit(amount: number): void {
        this._balance += amount;
    }

    public withdraw(amount: number): void {
        this._balance -= amount;
    }
}


export class SavingsAccount extends BankAccount {
    private _interestRate: number;

    constructor(_ownerName: string, initialBalance: number, interestRate: number) {
        super(_ownerName, initialBalance)
        this._interestRate = interestRate;
    }

    public calculateInterest() {
        return this.getBalance() * this._interestRate;
    }
}


export class CheckingAccount extends BankAccount {
    private _transactionLimit: number;

    constructor(_ownerName: string, initialBalance: number, transactionLimit: number) {
        super(_ownerName, initialBalance);
        this._transactionLimit = transactionLimit
    }

    public withdraw(amount: number): void {
        if (amount <= this._transactionLimit)
            super.withdraw(amount);

        if (amount > this._transactionLimit)
            console.log(`Warning: Exceeds transaction limit of $${this._transactionLimit}`)
    }

    public calculateInterest(): number {
        return 0
    }
}


interface Authentication {
    email: string;
    password: string;

    login(): void;
    logout(): void;
}


interface AuthenticationExtra extends Authentication {
    role: 'Admin' | 'Guest'
}


let user: Authentication = {
    email: 'test@example.com',
    password: 'qwerty123',

    login() {
        console.log('Logged in')
     },

    logout() {
        console.log('Logged out')
    }
}


class AuthenticationExtra implements AuthenticationExtra{
    constructor(
        public email: string,
        public password: string,
        public role: 'Admin' | 'Guest',
        public anyExtraProperty: string,
    ) {}

    public login() {}
    public logout() {}

}

