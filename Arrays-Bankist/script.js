'use strict';

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};


const accounts = [account1, account2, account3, account4];


// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


function displayMovements(acc, sort = false) {
    containerMovements.innerHTML = '';
    
    const moves = sort ? acc.movements.slice().sort((a, b) => a - b) : movements;

    moves.forEach((mov, i) => {
        const type = mov > 0 ? 'deposit' : 'withdrawal';
        const html = `
       <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}€</div>
        </div>
    `
        containerMovements.insertAdjacentHTML('afterbegin', html)
    })
}


function createUserName(accs) {
    accs.forEach((acc) => {
        acc.username = acc.owner
            .toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('');
    })
}

createUserName(accounts);


function calcDisplayBalance(acc) {
    acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
    labelBalance.textContent = `${acc.balance}€`;
}


function calcDisplaySummary(acc) {
    const incomes = acc.movements
        .filter(mov => mov > 0)
        .reduce((acc, cur) => acc + cur, 0);

    const out = acc.movements
        .filter(mov => mov < 0)
        .reduce((acc, cur) => acc + cur, 0);

    const interest = acc.movements
        .filter(mov => mov > 0)
        .map(deposit => (deposit * acc.interestRate) / 100)
        .filter((int) => int > 1)
        .reduce((acc, cur) => acc + cur, 0);

    labelSumInterest.textContent = `${interest}€`;
    labelSumOut.textContent = `${Math.abs(out)}€`;
    labelSumIn.textContent = `${incomes}€`;
}


function transferMoney(sender, receiver, money) {
    sender.movements.push(-money)
    receiver.movements.push(money)
}


function renderUI(acc) {
    displayMovements(acc)
    calcDisplayBalance(acc)
    calcDisplaySummary(acc)
}

let currentAccount


btnLogin.addEventListener('click', (e) => {
    e.preventDefault()
    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)

    if (currentAccount?.pin === +inputLoginPin.value) {
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}!`;
        containerApp.style.opacity = '1';

        renderUI(currentAccount)
        inputLoginUsername.value = inputLoginPin.value = ''
    }
})


btnTransfer.addEventListener('click', (e) => {
    e.preventDefault()
    const amount = +inputTransferAmount.value
    const receiverAccount = accounts.find(acc => acc.username === inputTransferTo.value)
    inputTransferAmount.value = inputTransferTo.value = ''

    if (amount > 0 && receiverAccount &&
        currentAccount.balance >= amount &&
        currentAccount?.username !== receiverAccount.username) {

        transferMoney(currentAccount, receiverAccount, amount)
        renderUI(currentAccount)
    }
})


btnClose.addEventListener('click', (e) => {
    e.preventDefault()
    if (inputCloseUsername.value === currentAccount.username &&
        +inputClosePin.value === currentAccount.pin) {
        const index = accounts.findIndex((acc) => acc.username === currentAccount.username)
        accounts.splice(index , 1)
        containerApp.style.opacity = 0;
    }
})


btnLoan.addEventListener('click', (e) => {
    e.preventDefault()
    const amount = +inputLoanAmount.value
    if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
        currentAccount.movements.push(amount)
        renderUI(currentAccount)
        inputLoanAmount.value = ''
    }
})

let isSorted = false

btnSort.addEventListener('click', (e) => {
    e.preventDefault()
    displayMovements(currentAccount, !isSorted)
    isSorted = !isSorted
})




