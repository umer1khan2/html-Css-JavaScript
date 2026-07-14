// Synchronous

console.log("A");
console.log("B");
console.log("C");

// The code will run line by line , which is a natural flow it is called Synchronous 

function add (a ,b){
    return a+b
}

const result = add(5 ,9)

console.log(result);
console.log("done");
// --------------------------------------------------------------------------------------



//Asynchronous

// Asynchronous code starts a task and continues executing other code while that task is still in progress,asynchronous programming prevents your application from freezing while waiting for slow operations.

console.log("A");

setTimeout(() => {
    console.log("B");
}, 3000);

console.log("C");

// The output would be A,C,B because this code is asynchronous . 
// --------------------------------------------------------------------------------------



// CALLBACK FUNCTION 

function fetchData(userName, cb) {
    console.log(`hello ${userName}`);

    setTimeout(() => {
        cb({ id: 123, userName, age: 22, email: "abc@gmail.com" })
    }, 2000);
}

function fetchprofile(id, cb) {
    setTimeout(() => {
        cb({ _id: id, profile: ["post1", "post2", "post3", "post4"] })
    }, 2000);
}

fetchData("umer", function (data) {
    console.log(data);
    fetchprofile(data.id, function cb2(posts) {
        console.log(posts);
    })
})
// --------------------------------------------------------------------------------------



// PROMISES
// Promises came into JavaScript because developers needed a better way to handle asynchronous operations without creating deeply nested callback code (often called callback hell).


const promise = new Promise((res, rej) => {
    let data = true

    if (data) {
        res("Data received")
    } else {
        rej("Failed to fetch data")
    }
})

promise.then((result) => {
    console.log(result);
})
    .catch((error) => {
        console.log(error);

    })
// --------------------------------------------------------------------------------------



// ASYNC AWAIT

// Async await is a modern way to handle asynchronous operations in JavaScript .The "async" keyword makes a function return a Promise, and "await" pauses the function execution until the Promise is completed, making asynchronous code easier to write and understand.


async function fetchUser (){
    let userData = await fetch("https://jsonplaceholder.typicode.com/users")
    let res = await userData.json()

    let userResult = res.map((user)=>{
        return(user)
    })

    console.log(userResult);
    
}

fetchUser()
