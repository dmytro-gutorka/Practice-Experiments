// function getProperty<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
//     return obj[key];
// }
//
// interface QueueInterface<T> {
//     push(item: T): void;
//     pop(): T | undefined;
//     getValue(): T[];
// }
//
// class Queue<T> implements QueueInterface<T> {
//     private items: T[] = [];
//
//     push(item: T): void {
//         this.items.push(item);
//     }
//
//     pop(): T | undefined {
//         return this.items.shift();
//     }
//
//     getValue(): T[] {
//         return [...this.items];
//     }
// }
//
// export { Queue, getProperty };


let names: Array<string | number> = ['dima', 21]


type dataStore<T> = {
    [key: string] : T
}


let obj: dataStore<string | number | boolean> = {
    name: 'Dima',
    age: 24,
}


function merge<T, U>(a: T, b: U) {
    return [a, b]
}


merge<number, string>(1, 'ff');



function mergeObj<T extends object, U extends object>(obj1: T, obj2: U){
    return { ...obj1, ...obj2}
}

mergeObj({name: 'dima'}, {name: 'dima2'})




class User<T> {
    constructor(public id: T) {
    }
}

const user = new User('')