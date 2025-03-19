let hobbies = ['sports', 'cooking']

let users: Array<string | number>;

let user1: [string, number]
user1 = ['fff', 11]


let possibleResults: [number, string, any]; // Tuple - restricted length if an arr

possibleResults = [1, 'string', true]
// possibleResults = [1, true] // Error
// possibleResults = [1, 2, 'fff'] //Error


let user: {
    name: string;
    age: number;
    hobbies: Array<string | number>
    role: {
        description: string;
        id: number
    }
} = {
    name: 'dina',
    age: 20,
    hobbies: ['sport', 111],
    role: {
        description: 'some desription',
        id: 1
    }
}


let val: {} = 'some text';
let data: Record<string, string | number>;

data = {
    entry1: 1,
    entry2: 'ss'
}