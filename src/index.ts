let isCheck: boolean = true;
let username: string = 'sam';
let age: number = 20;
let mixedArray: (string | number)[] = [1, 'hello', 3, 'world'];

function hey(name: string): string {
    return `hello, ${name}`
}

console.log(hey(username))

interface Person {
    age: number;
    name: string;
}

const user: Person = {
    name: 'sam', 
    age: 30
};

console.log(user)

class Car {
    model: string;
    year: number;
  
    constructor(model: string, year: number) {
      this.model = model;
      this.year = year;
    }
  
    displayInfo(): string {
      return `${this.model} - ${this.year}`;
    }
}
  
const myCar = new Car("Honda", 2023);
console.log(myCar.displayInfo());

function generics<T>(arg: T): T {
    return arg
}

console.log(generics(25));
  
let tuple: [string, number] = ["John", 30];

// union types
let value: string | number;
value = "Hello";
value = 42;

type Employee = { name: string };
type Work = { job: string };

type EmployeeWorker = Employee & Work;
const e: EmployeeWorker = { name: "John", job: "Developer" };

// nullable variable
let gamertag: string | null = null;

// type aliases
type ID = string | number;
let userId: ID = 123;
