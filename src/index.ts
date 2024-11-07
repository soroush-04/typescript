let isCheck: boolean = true;
let username: string = 'sam';
let age: number = 20;
let mixedArray: (string | number)[] = [1, 'hello', 3, 'world'];

function hey(name: string): string {
    return `hello, ${name}`
}

console.log(hey(username))