// variable and it`s methods


console.log("hello world!");

// alert does not work in node.js
alert("hello world")

let myFloat = 6.67
let myInt = 5
var x = myFloat + myInt

console.log("if we add " + myFloat + " with " + myInt + " it will become " + x);


let a = "hello ,"
let b = "how are you"
let c = a.concat(" ", b)
let d = b.slice(0, 7)
let e = b.replace("are", "r")

console.log(a.length);
console.log(d);
console.log(c);
console.log(e);


const alphabets = " abCde  "
console.log(alphabets);
console.log(alphabets.trim());
console.log(alphabets.toUpperCase());
console.log(alphabets.toLowerCase());


let task = "lets complete , this task tomorrow"
let taskB = task.split() // poorey variable ko array krdega 
let taskC = task.split("") // hr ek character ko array main alag se likhega
let taskD = task.split(" ") // ab yeh space k according array main store karega value, example: jese lets k baad space hai phir complete hai toh space k according let ek alag word hai or complete ek alag word toh woh dono ko alag store karega
let taskE = task.split(",") // ab yeh , k according storee karega jese he comma aiga yeh array main dusre value store krdega 
console.log(taskB);
console.log(taskC);
console.log(taskD);
console.log(taskE);
// -------------------------------

// CONDITIONING (IF-ELSE)

let condition = 20

if (condition < 20) {
    console.log(`${condition} is less than 20`);

}
else if (condition === 20) {
    console.log(`${condition} is equal to 20`);

} else {
    console.log(`${condition} is greater than 20`);

}



// ARRAY AND ITS METHODS

let students = ["umer", "ali", "usman", "abd"]
students.pop()
students.push("rafay")
console.log(students);

let employees = ["umer", "ali", "usman", "abd"]
employees.shift()
employees.unshift("rafay")
console.log(employees);


let fruits = ["mango", "apple", "banana"]
console.log(fruits.sort());
// but for array of numbers sort method works differently , you have to create a fnc in sort method

let numbers = [1, 4, 5, 77, 89, 2, 6, 7, 22, 90, 5]
numbers.sort((a, b) => a - b)// for ascending order
numbers.sort((a, b) => b - a)// for descending order
console.log(numbers);


let users = [
    { name: "umer", age: 25 },
    { name: "ali", age: 30 },
    { name: "rafay", age: 29 },
    { name: "umer", age: 20 },
]

users.sort((a, b) => a.age - b.age)
console.log(users);

users.sort((a, b) => b.age - a.age)
console.log(users);

let reverseArray = ["a", "b", "c", "d", "e", "f", "g", "h"]
console.log(reverseArray.reverse());


// LOOP AND ITS TYPES

// FOR LOOP
for (let i = 1; i < 10; i++) {
    console.log(i);
}
// ---------------------------


// WHILE LOOP
let ii = 1
while (ii <= 10) {
    console.log(ii);
    ii++
}
// -------------------------

// DO-WHILE LOOP

let iii = 0
do {
    iii++
    console.log(iii);
} while (iii < 10)
// -----------------------

// METHODS WHICH ARE ALSO USED AS LOOP 
let loopNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let number2 = loopNumbers.map((a) => a * 2)
console.log(number2);

let number3 = loopNumbers.filter((a) => a % 2 == 0)
console.log(number3);
// ------------------------------------------


// LOOP WITH CONTINUE AND BREAK
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break
    }
    console.log(i);

}

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue
    }
    console.log(i);

}

// FUNCTION AND ITS TYPES

// DECLARATION FUNCTION

function hello() {
    console.log("hello");

}
hello()

function hello2() {
    return "hello from greet 2"

}

let greeting = hello2()

console.log(greeting);

// FUNCTION EXPRESSION

// Anonymous function
let greet = function () {
    console.log("hello from function expression");
}
greet()

// Arrow function
let greet2 = () => {
    return "hello from arrow function expression"
}

console.log(greet2());


// CLOSURES FUNCTION

function counter() {
    let count = 0

    return function () {

        count++

        console.log(count);

    }
}

let increment = counter()

increment()
increment()
increment()

// CLOSURE EXAMPLE AS BANK SYSTEM

function bankAccount() {


    let balance = 10000

    return {
        deposit(amount) {
            balance += amount
            console.log(`your balance after deposit is ${balance}`);
        },
        withdraw(amount) {
            if (balance < amount) {
                console.log("your balance is insufficient");
            } else { balance -= amount; console.log(balance) }

        }
    }
}

let account = bankAccount()

account.deposit(10000)
account.withdraw(30000)
account.withdraw(10000)



