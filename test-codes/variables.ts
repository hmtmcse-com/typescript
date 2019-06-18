// Boolean
let isDone: boolean = false;


// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;


// String
let color: string = "blue";
color = 'red';

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.
I'll be ${ age + 1 } years old next month.`;

let sentence1 : string = "Hello, my name is " + fullName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";



// Enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

enum Color2 {Red = 1, Green, Blue}
let c2: Color2 = Color2.Green;


enum Color3 {Red = 1, Green = 2, Blue = 4}
let c3: Color3 = Color3.Green;


enum Color4 {Red = 1, Green, Blue}
let colorName: string = Color4[2];


// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;


// Null and Undefined
let u: undefined = undefined;
let n: null = null;



// Never
// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}


// Object
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error



// Void
function warnUser(): void {
    console.log("This is my warning message");
}


// Tuple
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error


// Array
// Basic Way
let array: number[] = [1, 2, 3];

// Type Defined way
let list: Array<number> = [1, 2, 3];