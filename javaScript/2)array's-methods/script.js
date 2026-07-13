// SORT METHOD

console.log("Sort method");
let fruits = ["mango", "apple", "banana"]
console.log(fruits.sort());
// but for array of numbers sort method works differently , you have to create a fnc in sort method

let numbers = [1, 4, 5, 77, 89, 2, 6, 7, 22, 90, 5]
numbers.sort((a, b) => a - b)// for ascending order
console.log(numbers);

numbers.sort((a, b) => b - a)// for descending order
console.log(numbers);


let users = [
    { name: "umer", age: 25 },
    { name: "ali", age: 30 },
    { name: "rafay", age: 29 },
    { name: "umer", age: 20 },
]

users.sort((a, b) => a.age - b.age)
users.sort((a, b) => b.age - a.age)

console.log(users);
// -----------------------------------------


// MAP AND FILTER FUNCTION 

let loopNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// map function is used to get each element of an array and transform it into a new array

let number2 = loopNumbers.map((a) => a * 2)
console.log(number2);

// filter function is used to get elements that match a specific condition

let number3 = loopNumbers.filter((a) => a > 5)
console.log(number3);
// --------------------------------------------


// FIND METHOD

const arrayNumber = [1, 2, 3, 4, 5, 6, 7]

// Find method returns the first array element that satisfies the testing function
const result = arrayNumber.find((i) => {
    return i > 2
})
console.log(result);
// ----------------------------------------------------


// REDUCE METHOD

let reduceArray = [10, 20, 30, 40];

let total = numbers.reduce((acc, curr) => {
    return acc + curr;
}, 0);
// zero in the end is accumulator initial value

console.log(total);
