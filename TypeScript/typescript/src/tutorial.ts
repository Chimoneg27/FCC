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
*/