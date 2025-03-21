const inputEl = document.getElementById("input") as HTMLInputElement | null;

function process(val: unknown) {
    if (typeof val === 'object' && val && 'log' in val && typeof val.log === 'function') {
        val.log('ff')
    }
}

function process1(val: any) {
    val.log('ff')
}

type User = {
    name: string,
    age: number,
    role?: 'admin' | 'user'
}

const user1: User = {
    name: 'Dima',
    age: 30,
}

const print1 = (msg?: any) => console.log(msg)
print1()


let input = '';


