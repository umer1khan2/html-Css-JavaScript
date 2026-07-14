// OOPS

// OLDER WAY OF creating OBJECT

function Student (name , id , age , city){
    this.name = name ;
    this.id = id;
    this.age = age;
    this.city = city;
}

const st1 = new Student("umer", 1 , 22 , "karachi")
const st2 = new Student("ali", 3 , 20 , "lahore")
const st3 = new Student("rafay", 2 , 17 , "islamabad")

console.log(st1);
console.log(st2);
console.log(st3);

// NEW WAY OF CREATING OBJECT

class Pencil{

    constructor(company , type , price){
        this.company = company;
        this.type = type;
        this.price = price;
    }
}

const p1 = new Pencil("dollars", "black-pencil" , 15)
const p2 = new Pencil("dollars", "blue-color-pencil" , 10)
const p3 = new Pencil("dollars", "red-color-pencil" , 10)

console.log(p1);
console.log(p2);
console.log(p3);


// INHERITANCE

class Animal {
    constructor(name){
        this.name = name
    }

    eat(){
        console.log(`${this.name} eats treat`);
    }
}


//  Dog class inherits the name from animal class
class Dog extends Animal {

    constructor(name , breed){
        super(name);
        this.breed = breed
    }

    bark(){
        console.log(`${this.name} barks`);

    }
}

const d1 = new Dog("tom","dobeman")
d1.bark()
d1.eat()

const d2 = new Dog("max" , "Argentino")
d2.eat()
d2.bark()


// ENCAPSULATION 
// Encapsulation is a concept of protecting Data and provide a proper way of accessing it

class Account {

    #balance = 2000

    getBalance() {
        console.log(this.#balance);
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount
        }
    }

    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount
        }
    }

}

const a1 = new Account()
a1.getBalance()
a1.deposit(5000)
a1.withdraw(1000)
a1.getBalance()
console.log("----------------------");


const a2 = new Account()
a2.getBalance()
a2.deposit(10000)
a2.withdraw(350)
a2.withdraw(293)
a2.withdraw(784)
a2.deposit(277)
a2.deposit(42)
a2.deposit(11)
a2.withdraw(596)
a2.getBalance()


// POLYMORPHISM
// Polymorphism means same method name having different behaviors for different objects. In JavaScript, it is commonly achieved through method overriding.

class Car {
    constructor(name) {
        this.name = name
    }

    start() {
        console.log(`${this.name} car engine started `);

    }
}

class Bike extends Car {


    start(){
        console.log(`${this.name} bike engine started`);       
    }

}

const car = new Car("Toyota")
const bike = new Bike("Honda")

// ABSTRACTION
// Abstraction is similar to encapsulation, but the main difference is that abstraction is used to hide complexity, while encapsulation is used to hide data by making variables private so that they cannot be accessed directly.

class CoffeeMachine {

    makeCoffee(){
        this.#addWater();    
        this.#boilWater();
        this.#addCoffee();
        this.#addMilk();    
        this.#addSugar(); 
        
        console.log("coffee is ready");
        
    }

    #addWater(){
        console.log("water added");
        
    }

    #boilWater(){
        console.log("water is boiling");
    }

    #addCoffee(){
        console.log("coffee added");
    }

    #addMilk(){
        console.log("milk added");
    }

    #addSugar(){
        console.log("sugar added");
        
    }
}

const coffee = new CoffeeMachine()
coffee.makeCoffee()

