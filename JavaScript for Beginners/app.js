
// single line comment
/* 
multiple lines comment
*/

let x = 8
console.log(x)
x = 7
console.log(x)

// cannot reassign another value to a constant
const a = 2

console.log(2**3, "Power")

// 5 == 5 compares values and it's equal to 5 == '5' because js converts operands
// 5 === 5 values and types

/* 
let x = 5
let y = 'A'
let z = x + y
console.log(z) gives '5A'
*/

// CONDITIONS

let grade = 70

if(grade >= 50){
    console.log("Success !")
}else{
    console.log("Failed")
}

// is Equal to 
(grade <= 50) ? console.log("Success") : console.log("Failed")

let b = 3
switch (x){
    case 1 : console.log("one"); break
    case 2 : console.log("two"); break
    case 3 : console.log("three"); break
    default : console.log("None ! "); break
}

for(let i = 1; i<=10;i++){
    console.log("Hello", i)
}

let i =1
while(i <=10){
    console.log("Hello", i)
    i++
}

let j = 1

do{
    console.log("Hello", j)
    j++
}while (j <=10)

// Nested Loop
for(let i = 1; i<=5; i++){
    for(let j = 1; j<= 3; j++){
        console.log("Hello",i," ",j)
    }
}

// continue ignore => if(i == 7) continue; ignores the rest of the code and passes to the next iteration

let result = 1
let c = 2
let y = 3

// For loop for power
for(let z = 1; z<= 3; z++){
    result = result * c
    // 1 * 2 *2 * 2 = 2**3
}

// Functions

const myfunc = function(){
    console.log("Hello world!")
}

myfunc();

function Power(x=3 ,power=2){

    for(let z = 1; z<= power; z++){
        result = result * x
    }
    console.log(result)
}

Power()

// increment function
let e = 5

function increment(n){
    return ++n
}

console.log(e) // 5
let newE = increment(e)
console.log(newE) // 6

// JavaScript Hoisting (calling a variable without creating it)

var q = 5 // prints undefined if console logged because var makes js know that it exists
let  s = 7 // error
const d = 9
console.log(w) // undefined
console.log(f2) // prints the function code
var w = function f1(){ console.log("here")}
function f2(){ console.log("here too")}

// immediate invoked javascript function

(function test(){
    console.log("Hello")
})()

// Javascript Object
let obj = {
    name :'Mahmoud',
    age : 25,
}

console.log(obj) // Object {age :30,name:'Mahmoud'} in alphabetic ordier

for(let prop in obj){
    console.log(prop + ' ' + obj[prop])
}

// Object methods

let obj2 = {
    name :'Mahmoud',
    age : 25,

    walk(){
        console.log('Walking')
    },
    GetInfo(){
        let that = this
        function printInfo(){
            // console.log(obj.name)
            // console.log(obj.age)

            // this for window
            // console.log(this.name)
            // console.log(this.age)

            console.log(that.name)
            console.log(that.age)
        }
        printInfo()
    }

}

obj2.GetInfo()