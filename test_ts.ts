interface User {
    name: string;
    id: number;
}


class UserAccount {
    name: string;
    id: number;
}


const user: User = new UserAccount();



let message: string = 'Hello, World!';
console.log(message);