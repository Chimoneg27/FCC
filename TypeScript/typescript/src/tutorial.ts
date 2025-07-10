/*
// setting my first types example 1
let myName: string = 'Garvin'
myName.toUpperCase()

let myNumber: number = 23
let yearOlder = myNumber + 1
console.log(yearOlder)

let truths: boolean = true
truths = false
console.log(truths)

// Union Types
// in the case the value you are expecting is not a string
let tax: number | string = 10;
tax = 100;
tax = '$10';

// in the case that the request, usually when waiting for API requests
let requestStatus: 'pending' | 'success' | 'error' = 'pending'
requestStatus = 'success'

// type any
// this means my variable can be anything I can come up with
// looks like the way variables behave in JS.
// be careful of this, just because you can does not mean you should
let notSure: any = 4;
let random;


// exapmle 2
const books = ['1984', 'Brave New World', 'Fahrenheit 451']

let foundBook:string | undefined;

for (let book of books) {
  if (book === '1984') {
    foundBook = book;
    foundBook = foundBook.toUpperCase()
    break;
  }
}

console.log(
  foundBook?.length
);

// challenge #2
let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing';
orderStatus = 'shipped';
orderStatus = 'delivered';

let discount: number | string = 20;
discount = '20%';

// Arrays
let prices: number[] = [100,75,42];
prices.push(27);

let fruit: string[] = ['apple', 'orange'];
fruit.push('banana');

let randomValues:[] = []
// typescript will always show this as an empty array

let emptyValues = [] // this is seeting this variable as type any

let names = ['peter', 'paul', 99]; // type inference
let array:(string| boolean)[] = ['apple', 'orange', true]


// Objects and functions
let car:{ brand: string; year:number } = { brand: 'toyota', year: 2020 };

let car1:{ brand: string; year:number } = { brand: 'audi', year: 2022 }

let book = {title: 'book', cost:20}
let pen = {title: 'pen', cost:10}
let notebook = {title: 'notebook'}

let items:{ readonly title:string; cost?:number }[] = [book, pen, notebook] // array of objects
// readonly means that the data cannot be overwritten

// challenge #4
let bike:{brand:string; year: number} = {brand: 'carbon', year: 2002}
let laptop:{brand:string; year: number} = {brand: 'DELL', year: 2022}

let console = {title: 'PS5', price:20000}
let phone = {title: 'iPhone.', price:23000}
let bread = {title: 'albany'}
let products:{title:string; price?: number}[] = [console, phone, bread]

// challenge #5
let arrNames:string[] = ['timmy', 'mello', 'AI', 'Ball']
function checkName(name: string, arr:string[]): boolean {
  return arr.includes(name)
}

console.log(checkName('ben', arrNames))

//challenge #6
const processinput = (input: string|number) => {
  if (typeof input === 'number') {
    console.log(input * 2)
  } else {
    console.log(input.toLocaleUpperCase())
  }
}

processinput(10)
processinput('Hello')

// Challenge #6

const processData = (input: string | number, config: { reverse: boolean } = { reverse: false }): string | number => {
  if (typeof input === 'number') {
    return input * 2
  } else {
    return config.reverse ? input.toUpperCase().split('').reverse().join() : input.toUpperCase()
  }
}

let result = processData(4)
console.log(result)

// ALias and Interface

type User = { id: number; name: string; isActive: boolean }

const john: User = {
  id: 1,
  name: 'john',
  isActive: true,
};
const susan: User = {
  id: 1,
  name: 'susan',
  isActive: false,
};

function createUser(user:User):User{
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}

type Theme = 'light' | 'dark'
let theme: Theme
theme = 'dark'
console.log(theme)

//challenge#7 2:04:
type Employee = {id:number, name:string, department:string}
type Manager = {id:number, name:string, employees:Employee[]}
type Staff = Employee | Manager

const printStaffDetails = (staff:Staff):string => {
  if('employees' in staff) {
    return `${staff.name} is a manager and has ${staff.employees.length} emplyees`
  } else {
    return `${staff.name} and works in the ${staff.department} department`
  }
}

const alice: Employee = {
  id: 1,
  name: 'alice',
  department: 'HR'
}

const steve: Employee = {
  id:2,
  name: 'Steve',
  department: 'Board of Directors'
}

const manager: Manager = {
  id: 1,
  name: 'Gary',
  employees: [alice, steve]
}

const details = printStaffDetails(alice)
console.log(details)

// Interfaces 
interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  printAuthor(): void
  printTitle(message:string):string
  printSomething: (someValue: number) => number
}

const deepWork: Book = {
  isbn: 9781455586691,
  title: 'Deep Work',
  author: 'Cal Newport',
  genre: 'Self-help',
  printAuthor() {
    console.log(this.author)
  },
  printTitle(message){
    return `${this.title} ${message}`
  },
  printSomething:function(someValue){
    return someValue;
  }
}

const result = deepWork.printTitle('is an awesome book')

//challenge#8
interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  storage?: number;
  upgradeRam:(capacity: number) => number
}

const hp: Computer = {
  id: 1,
  brand: 'hp',
  ram: 16,
  storage: 2000,
  upgradeRam:function(capacity){
    return this.ram + capacity
  }
}

const newComputer = hp;
const newRam = hp.upgradeRam(16)
console.log(newComputer, newRam)

interface Person {
  name: string;
  getDetails(): string;
}

interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}

interface Person {
  age: number
}

const person:Person = {
  name: 'john',
  age: 30,
  getDetails(){
    return `Name: ${this.name}, Age: ${this.age}`
  }
}

//challenge#9 part1
interface Person {
  name: string;
}

interface DogOwner extends Person {
  dogName: string;
}

interface Manager extends Person {
  managePeople(): void;
  delegateTasks(): void;
}

const employee: Person | DogOwner | Manager = getEmployee();
console.log(employee)

function getEmployee(): Person | DogOwner | Manager {

  const randomNumber = Math.random();
  if (randomNumber < 0.33) {
    return {
      name: 'john'
    }
  } else if (randomNumber < 0.66) {
    return {
      name: 'sarah',
      dogName: 'Rex'
    }
  } else {
    return {
      name: 'bob',
      managePeople (){
        console.log('Managing people...')
      },
      delegateTasks() {
        console.log('Delegating tasks people...')
      }
    }
  }
}

console.log(getEmployee())
//challenge#9 part2

function isManager(object: Person | DogOwner | Manager):object is Manager {
  return 'managePeople' in object
}
// 3:02:56
if(isManager(employee)) {
  employee.delegateTasks()
}

// Tuples and Enums
//let person: [string, number] = ['john', 25]

const ServerResponseStatus = {
  Success: 'Success',
  Error: 'Error'
} as const; // allows to define a name of set constants

type ServerResponseStatus = typeof ServerResponseStatus[keyof typeof ServerResponseStatus];

interface ServerResponse{
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse():ServerResponse { // this function must return properties defined in the ServerResponse interface
  return {
    result: ServerResponseStatus.Success,
    data: ['first', 'second']
  }
}
*/
// challenge #10
enum UserRole {
  Admin,
  Manager,
  Employee
}

type User = {
  id: number,
  name: string,
  role: UserRole,
  contact: [string, string]
}

function createUser(obj:User){
  return obj
}

const user1:User = createUser({
  id: 1,
  name: 'Hakimi',
  role: UserRole.Admin,
  contact: ['hakimi@psg.com', '+202022020202']
})
// 3:18:30
console.log(user1)