class User{
    readonly hobbies: string[] = [];
    readonly age1: number = 1;

    constructor(
        public firstName : string,
        private lastName : string,
        protected age: number){}

}

const dima = new User('Dima', 'Gutorka', 25);
