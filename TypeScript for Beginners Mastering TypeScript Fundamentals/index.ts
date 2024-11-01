export { }
let age: number = 500
console.log(age)

// variables: var, let,const
// let is used more nowadays
// String
// Number
// boolean
// null
// object 
// arrays
// undefined

let statement: boolean = true

const names: string[] = ["John", "Clark", "Tony"]
console.log(names)

const user: {
    name: string;
    age: number;
} = {
    name: "Tony Stark",
    age: 54
}

console.log(user)

// functions with annotations
let a: number | string = "20"
console.log(a)

//x:number
function userId(x: any): number {
    return x
}
const userId2 = (x: number, y: string) => {
    return x + y
}
console.log(userId("hello"))
console.log(userId2(2, "hello"))

//Interfaces
const b: { Username: string; Age: number; email: string } = {
    Username: "Mohamed",
    Age: 25,
    email: "mohamed@gmail.com"
}
// makes code lengthy so the solution is an interface
interface Detail { Username: string; Age: number; email: string, UserIdname: () => string }

const c: Detail = {
    Username: "Ali",
    Age: 25,
    email: "Ali@gmail.com",
    UserIdname: function () {
        return "Ali"
    }
}

console.log(c.UserIdname())

// Classes
class myapp {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    getName() {
        console.log(this.name)
    }
}
let user1 = new myapp("Mohamed")
user1.getName()

//Arrays

let number: number[] = [1, 2, 3, 4, 5, 6]
number.push(7) // and pop
console.log(number)

let colors: string[] = ['Red', 'Green', 'Blue']
console.log(colors)
// remove first element
let shifted = colors.shift()
console.log(shifted) // prints the deleted element, shift is opposite to pop, shift first elements and pop last element
console.log(colors)
colors.unshift("Orange") // unshift first element and push last element
console.log(colors)
colors.unshift("Grey")
console.log(colors)

let Array1: number[] = [1, 2]
let Array2: number[] = [3, 4]
let add: number[] = Array1.concat(Array2)
console.log(add)

//slice creates another array from an existing one by specifying start and end indices (end excluded)
let sliced: string[] = colors.slice(1, 3)
console.log(sliced)

// Reduce method reduces to a signle value by repeatedly applying a function against an accumulated value and each element of the array(sum,avg ...)

let reducearray: number[] = [5, 8, 10, 2, 20, 100]
let sum: number = reducearray.reduce((acc, curr) => acc + curr, 0) //0 is an initial accumulator value
let max: number = reducearray.reduce((acc, curr) => Math.max(acc, curr))
console.log(sum)
console.log(max)
// filter removes 
// map transforms
// reduce aggregates

const Fruits: string[] = ["apple", "banana", "mango"]
Fruits.forEach(Fruits => console.log(Fruits))
console.log(Fruits)

let score: number[] = [150, 741, 841, 22, 410]
let highscore = score.find(score => score > 800)
let highscoreIndex = score.findIndex(score => score > 800)
console.log(highscore)
console.log(highscoreIndex)

// Inheritence
// parent class and child class
class Parent {
    name: any;
    setmyName(name: string) {
        this.name = name
    }

}
class Child extends Parent {
    name = "Charlie"
    myName() {
        return this.name
    }
}

const name1 = new Child()
name1.setmyName("Peter")
console.log(name1.myName())

// Modules : makes the code modular and easy to maintain
import myLogin from './login'
import mySignup from './signup'

let login = new myLogin()
console.log(login.data)

let signup = new mySignup()
console.log(signup.data)

// Explicit vs Annotations
//Explicitly declaring types
const age2: number = 25;
function add2(x: number, y: number): number {
    return x + y
}
// type annotation is a more general term used to declare type specifications

// Void
// If you try to print the function it prints undefined
// if you assign an explicit return type it becomes non flexible and forces the return statement to return the specific type
// if you dont declare the return type it'll be implicit based on the returned value type
let num;
function printNumber() {
    return num = 40 * 50 * 40
}
console.log(printNumber())

// Uknown Type
// with any the following code works
// let data: any;
// data = true
// data = "Hello World"
// data = 30

// let values : string
// values = data
// console.log(values)

let data: unknown; // enhances safety
data = true
data = "Hello World"
data = 30

let values: string
// Type 'unknown' is not assignable to type 'string'.
// values = data
// console.log(values)

// TypeScript configuration
// tsc --init

// Outdir: uncomment it in the tsConfig to have all your compiled files in the same folder "outdir": "./Build"

// Access Modifiers
class newUsers {
    private name = ""
    setmyname(name: string) {
        this.name = name
    }
    displaymyname() {
        console.log(this.name)
    }
    private getLength() {
        console.log(this.name.length)
    }
}

let users = new newUsers()
users.setmyname("John")
// will only be accessible if declared as public
// users.name="Carlos"
users.displaymyname();

// Constructors
class Person {
    // name:string
    // age:number
    constructor(public name: string, public age: number) {
        // this.name = name
        // this.age = age
    }

    greeting() {
        console.log(`Hello, my name is ${this.name} and i am ${this.age} Years Old`)
    }
}

let person = new Person("John", 30)
person.greeting()

// Promises : handles asynchronus operations and their outcomes, they represent values that may not be available but will be in the future

function fetchData(): Promise<String> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "This is the Fetched Data"
            resolve(data)
        }, 2000)
    })
}

fetchData().then((data) => {
    console.log("Data Recieved", data)
}).catch((error) => {
    console.log("Error", error)
})

// Promises with async

async function fetchDataAsync() {
    try {
        //simplifies working with promoises instead of then and catch
        let data = await fetchData()
        console.log("Data Resolved", data)
    } catch (error) {
        console.log("Error", error)
    }
}
fetchDataAsync()
