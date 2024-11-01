"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var age = 500;
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
var statement = true;
var names = ["John", "Clark", "Tony"];
console.log(names);
var user = {
    name: "Tony Stark",
    age: 54
};
console.log(user);
// functions with annotations
var a = "20";
console.log(a);
//x:number
function userId(x) {
    return x;
}
var userId2 = function (x, y) {
    return x + y;
};
console.log(userId("hello"));
console.log(userId2(2, "hello"));
//Interfaces
var b = {
    Username: "Mohamed",
    Age: 25,
    email: "mohamed@gmail.com"
};
var c = {
    Username: "Ali",
    Age: 25,
    email: "Ali@gmail.com",
    UserIdname: function () {
        return "Ali";
    }
};
console.log(c.UserIdname());
// Classes
var myapp = /** @class */ (function () {
    function myapp(name) {
        this.name = name;
    }
    myapp.prototype.getName = function () {
        console.log(this.name);
    };
    return myapp;
}());
var user1 = new myapp("Mohamed");
user1.getName();
//Arrays
var number = [1, 2, 3, 4, 5, 6];
number.push(7); // and pop
console.log(number);
var colors = ['Red', 'Green', 'Blue'];
console.log(colors);
// remove first element
var shifted = colors.shift();
console.log(shifted); // prints the deleted element, shift is opposite to pop, shift first elements and pop last element
console.log(colors);
colors.unshift("Orange"); // unshift first element and push last element
console.log(colors);
colors.unshift("Grey");
console.log(colors);
var Array1 = [1, 2];
var Array2 = [3, 4];
var add = Array1.concat(Array2);
console.log(add);
//slice creates another array from an existing one by specifying start and end indices (end excluded)
var sliced = colors.slice(1, 3);
console.log(sliced);
// Reduce method reduces to a signle value by repeatedly applying a function against an accumulated value and each element of the array(sum,avg ...)
var reducearray = [5, 8, 10, 2, 20, 100];
var sum = reducearray.reduce(function (acc, curr) { return acc + curr; }, 0); //0 is an initial accumulator value
var max = reducearray.reduce(function (acc, curr) { return Math.max(acc, curr); });
console.log(sum);
console.log(max);
// filter removes 
// map transforms
// reduce aggregates
var Fruits = ["apple", "banana", "mango"];
Fruits.forEach(function (Fruits) { return console.log(Fruits); });
console.log(Fruits);
var score = [150, 741, 841, 22, 410];
var highscore = score.find(function (score) { return score > 800; });
var highscoreIndex = score.findIndex(function (score) { return score > 800; });
console.log(highscore);
console.log(highscoreIndex);
// Inheritence
// parent class and child class
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.setmyName = function (name) {
        this.name = name;
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Charlie";
        return _this;
    }
    Child.prototype.myName = function () {
        return this.name;
    };
    return Child;
}(Parent));
var name1 = new Child();
name1.setmyName("Peter");
console.log(name1.myName());
// Modules : makes the code modular and easy to maintain
var login_1 = require("./login");
var signup_1 = require("./signup");
var login = new login_1.default();
console.log(login.data);
var signup = new signup_1.default();
console.log(signup.data);
// Explicit vs Annotations
//Explicitly declaring types
var age2 = 25;
function add2(x, y) {
    return x + y;
}
// type annotation is a more general term used to declare type specifications
// Void
// If you try to print the function it prints undefined
// if you assign an explicit return type it becomes non flexible and forces the return statement to return the specific type
// if you dont declare the return type it'll be implicit based on the returned value type
var num;
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
var data; // enhances safety
data = true;
data = "Hello World";
data = 30;
var values;
// Type 'unknown' is not assignable to type 'string'.
// values = data
// console.log(values)
// TypeScript configuration
// tsc --init
// Outdir: uncomment it in the tsConfig to have all your compiled files in the same folder "outdir": "./Build"
// Access Modifiers
var newUsers = /** @class */ (function () {
    function newUsers() {
        this.name = "";
    }
    newUsers.prototype.setmyname = function (name) {
        this.name = name;
    };
    newUsers.prototype.displaymyname = function () {
        console.log(this.name);
    };
    newUsers.prototype.getLength = function () {
        console.log(this.name.length);
    };
    return newUsers;
}());
var users = new newUsers();
users.setmyname("John");
// will only be accessible if declared as public
// users.name="Carlos"
users.displaymyname();
// Constructors
var Person = /** @class */ (function () {
    // name:string
    // age:number
    function Person(name, age) {
        this.name = name;
        this.age = age;
        // this.name = name
        // this.age = age
    }
    Person.prototype.greeting = function () {
        console.log("Hello, my name is ".concat(this.name, " and i am ").concat(this.age, " Years Old"));
    };
    return Person;
}());
var person = new Person("John", 30);
person.greeting();
// Promises : handles asynchronus operations and their outcomes, they represent values that may not be available but will be in the future
function fetchData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var data = "This is the Fetched Data";
            resolve(data);
        }, 2000);
    });
}
fetchData().then(function (data) {
    console.log("Data Recieved", data);
}).catch(function (error) {
    console.log("Error", error);
});
// Promises with async
function fetchDataAsync() {
    return __awaiter(this, void 0, void 0, function () {
        var data_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetchData()];
                case 1:
                    data_1 = _a.sent();
                    console.log("Data Resolved", data_1);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log("Error", error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
fetchDataAsync();
