"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
let age = 500;
console.log(age);
// variables: var, let,const
// let is used more nowadays
// String
// Number
// boolean
// null
// object 
// arrays
// undefined
let statement = true;
const names = ["John", "Clark", "Tony"];
console.log(names);
const user = {
    name: "Tony Stark",
    age: 54
};
console.log(user);
// functions with annotations
let a = "20";
console.log(a);
//x:number
function userId(x) {
    return x;
}
const userId2 = (x, y) => {
    return x + y;
};
console.log(userId("hello"));
console.log(userId2(2, "hello"));
//Interfaces
const b = {
    Username: "Mohamed",
    Age: 25,
    email: "mohamed@gmail.com"
};
const c = {
    Username: "Ali",
    Age: 25,
    email: "Ali@gmail.com",
    UserIdname: function () {
        return "Ali";
    }
};
console.log(c.UserIdname());
// Classes
class myapp {
    constructor(name) {
        this.name = name;
    }
    getName() {
        console.log(this.name);
    }
}
let user1 = new myapp("Mohamed");
user1.getName();
//Arrays
let number = [1, 2, 3, 4, 5, 6];
number.push(7); // and pop
console.log(number);
let colors = ['Red', 'Green', 'Blue'];
console.log(colors);
// remove first element
let shifted = colors.shift();
console.log(shifted); // prints the deleted element, shift is opposite to pop, shift first elements and pop last element
console.log(colors);
colors.unshift("Orange"); // unshift first element and push last element
console.log(colors);
colors.unshift("Grey");
console.log(colors);
let Array1 = [1, 2];
let Array2 = [3, 4];
let add = Array1.concat(Array2);
console.log(add);
//slice creates another array from an existing one by specifying start and end indices (end excluded)
let sliced = colors.slice(1, 3);
console.log(sliced);
// Reduce method reduces to a signle value by repeatedly applying a function against an accumulated value and each element of the array(sum,avg ...)
let reducearray = [5, 8, 10, 2, 20, 100];
let sum = reducearray.reduce((acc, curr) => acc + curr, 0); //0 is an initial accumulator value
let max = reducearray.reduce((acc, curr) => Math.max(acc, curr));
console.log(sum);
console.log(max);
// filter removes 
// map transforms
// reduce aggregates
const Fruits = ["apple", "banana", "mango"];
Fruits.forEach(Fruits => console.log(Fruits));
console.log(Fruits);
let score = [150, 741, 841, 22, 410];
let highscore = score.find(score => score > 800);
let highscoreIndex = score.findIndex(score => score > 800);
console.log(highscore);
console.log(highscoreIndex);
// Inheritence
// parent class and child class
class Parent {
    setmyName(name) {
        this.name = name;
    }
}
class Child extends Parent {
    constructor() {
        super(...arguments);
        this.name = "Charlie";
    }
    myName() {
        return this.name;
    }
}
const name1 = new Child();
name1.setmyName("Peter");
console.log(name1.myName());
// Modules : makes the code modular and easy to maintain
const login_1 = __importDefault(require("./login"));
const signup_1 = __importDefault(require("./signup"));
let login = new login_1.default();
console.log(login.data);
let signup = new signup_1.default();
console.log(signup.data);
// Explicit vs Annotations
//Explicitly declaring types
const age2 = 25;
function add2(x, y) {
    return x + y;
}
// type annotation is a more general term used to declare type specifications
// Void
// If you try to print the function it prints undefined
// if you assign an explicit return type it becomes non flexible and forces the return statement to return the specific type
// if you dont declare the return type it'll be implicit based on the returned value type
let num;
function printNumber() {
    return num = 40 * 50 * 40;
}
console.log(printNumber());
// Uknown Type
// with any the following code works
// let data: any;
// data = true
// data = "Hello World"
// data = 30
// let values : string
// values = data
// console.log(values)
let data; // enhances safety
data = true;
data = "Hello World";
data = 30;
let values;
// Type 'unknown' is not assignable to type 'string'.
// values = data
// console.log(values)
// TypeScript configuration
// tsc --init
// Outdir: uncomment it in the tsConfig to have all your compiled files in the same folder "outdir": "./Build"
// Access Modifiers
class newUsers {
    constructor() {
        this.name = "";
    }
    setmyname(name) {
        this.name = name;
    }
    displaymyname() {
        console.log(this.name);
    }
    getLength() {
        console.log(this.name.length);
    }
}
let users = new newUsers();
users.setmyname("John");
// will only be accessible if declared as public
// users.name="Carlos"
users.displaymyname();
// Constructors
class Person {
    // name:string
    // age:number
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // this.name = name
        // this.age = age
    }
    greeting() {
        console.log(`Hello, my name is ${this.name} and i am ${this.age} Years Old`);
    }
}
let person = new Person("John", 30);
person.greeting();
// Promises : handles asynchronus operations and their outcomes, they represent values that may not be available but will be in the future
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "This is the Fetched Data";
            resolve(data);
        }, 2000);
    });
}
fetchData().then((data) => {
    console.log("Data Recieved", data);
}).catch((error) => {
    console.log("Error", error);
});
// Promises with async
function fetchDataAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //simplifies working with promoises instead of then and catch
            let data = yield fetchData();
            console.log("Data Resolved", data);
        }
        catch (error) {
            console.log("Error", error);
        }
    });
}
fetchDataAsync();
