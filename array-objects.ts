let hobbies = ['sports', 'cooking']

let users: Array<string | number>;

users.push('cooking');
users.push(1);


let possibleResults: [number, string, any]; // Tuple - restricted length if an arr

possibleResults = [1, 'string', true]
possibleResults = [1, true] // Error
possibleResults = [1, 2, 'fff'] //Error