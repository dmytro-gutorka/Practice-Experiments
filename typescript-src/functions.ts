function access(a: number, b: number): number {
    return a + b
}


function log(message: string){
    console.log(message)
}


function logAdnThrow(errorMessage: string): never{
    console.log(errorMessage);
    throw new Error(errorMessage);
}


function printMessage(msg: string){
    console.log(msg)
}


function doSomething(cb: (msg: string) => void){
    cb('message')
}


doSomething(printMessage)


type User1 = {
    name: string,
    age: number,
    greet: () => string;
}

//
// let user: User1 = {
//     name: 'Dima',
//     age: 10,
//     greet(){
//         console.log('Message')
//         return this.name
//     }
// }


let a;



