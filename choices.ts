enum Role1 {
    Admin,
    Editor,
    Guest,
}


type Role =  'admin' | 'editor' | 'guest';
type User = {
    name: string,
    email: string,
    role: Role,
    permissions: Array<string> // equal to string[],
}

let userRole: Role;

let possibleResults: [1 | -1, string | boolean, any];
possibleResults = [-1, 's', true]
