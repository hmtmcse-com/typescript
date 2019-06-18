## References
1. https://www.typescriptlang.org/docs/handbook/basic-types.html


## Basic Types

1. **Boolean** : The most basic datatype is the simple true/false value
2. **Number** : As in JavaScript, all numbers in TypeScript are floating point values. These floating point numbers get the type number. In addition to hexadecimal and decimal literals, TypeScript also supports binary and octal literals introduced in ECMAScript 2015.
3. **String** : The type string to refer to textual datatypes
4. **Any** : We may need to describe the type of variables that we do not know when we are writing an application
5. **Enum** : A helpful addition to the standard set of datatypes from JavaScript is the enum.
6. **Null and Undefined** : In TypeScript, both undefined and null actually have their own types named undefined and null respectively. 
7. **Never** : The never type represents the type of values that never occur. For instance, never is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns; Variables also acquire the type never when narrowed by any type guards that can never be true.
8. **Object** : object is a type that represents the non-primitive type, i.e. anything that is not number, string, boolean, symbol, null, or undefined.
9.  **Array** : Set of same types of variables.
10. **Tuple** : Tuple types allow you to express an array where the type of a fixed number of elements is known
11. **Void** : There is not retur value

**Example:**

```
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
```



## Classes

```
class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }

    public move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }

}

class Snake extends Animal {

    constructor(name: string) { super(name); }

    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }

}

class Horse extends Animal {

    constructor(name: string) { super(name); }

    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
```
