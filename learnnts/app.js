"use strict";
//number
let a = 10;
let b = 20;
//ye allow nhi h ts me but fir bhii js me  run ho jayega
//string
let str = "rohit";
// boolean
let isExist = true;
isExist = false;
//bigint
let bignumber = 132143292183n;
let names = "mohan";
//lec2
let money;
money = "rohit";
console.log(money.toUpperCase());
let val2;
val2 = "Rohit";
val2 = 10;
if (typeof val2 === 'string')
    console.log(val2.toUpperCase());
if (typeof val2 === 'number')
    console.log(val2.toFixed(2));
let arr1 = [2, 4, 5, 7, 11];
let arr2 = [2, 1, 19, 10];
let arr3 = ["rohit", 20, 11, "sohan"];
arr3.push(10);
let arr4 = ["rohit", 10, false];
let tuple = ["rohit", 10, 11];
//objects
//inline
let obj1 = {
    name: "rohit",
    age: 45,
    gender: "Female"
};
let person;
person = {
    name: "rohit",
    age: 30,
    balance: 439
};
let n1;
n1 = 30;
let cl = {
    name: "rohit",
    age: 36,
    id: "fffff"
};
;
let obj3 = {
    name: "Rohit",
    age: 30,
    position: "manager",
    id: 345
};
const obj11 = {
    name: "rohit",
    age: 30,
    gender: "male",
};
//required se sari property likni hi padegi ,Partial se optinal ho jati h aur 3 aati h Readonly means you can only read 
const obj2 = {
    name: "rohit",
};
const arr2 = [{ name: "rohit", age: 30 }, { name: "mohit", age: 34 }, { salary: 20000 }];
//function in TS
function greet(a) {
    console.log(a);
    return a + 5;
}
console.log(greet(10));
function meet(msg, val) {
    console.log(msg, val);
}
meet("Anshika Verma", 4);
function neet(msg = "Jit") {
    console.log(msg);
}
neet();
neet("bittu");
//optional parameter
function GATE(person) {
    console.log(Person || "mohan");
}
GATE("rohit");
// arrow function  
const squareroot = (val) => {
    return Math.sqrt(val);
};
const sum = (a, b) => a + b;
console.log(sum(3, 4));
const squareroot = (val) => {
    return val * val;
};
function placeOrder(order, callback) {
    const amount = order + 10;
    callback(amount);
}
placeOrder(10, (amount) => {
    console.log(amount);
});
//rest parameter
function total(...arr) {
    let ans = 0;
    arr.forEach((val) => ans += val);
    console.log(ans);
}
class Person {
    name;
    age;
    constructor(n1, n2) {
        this.name = n1;
        this.age = n2;
    }
}
const obj6 = new Person("rohit", 30);
console.log(obj6);
;
const obj = {
    name: "rohit",
    age: 30,
    salary: "chillar",
    id: 234
};
const obj7 = new Person("rohit", 39);
const obj8 = new Person("nitin", 33);
console.log(obj7);
console.log(obj8);
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`hi ${this.name}`);
    }
}
// blueprint of an object
const obj9 = new Person("rohit", 39);
const obj10 = new Person("nitin", 45);
console.log(obj9);
console.log(obj10);
//public private protected
// agar m kisi ko public kar du too vo class ke bahr bhi uss hoga but private me only class me use hoga
class Customer {
    name;
    age;
    balance = 0;
    constructor(name, age, balance) {
        this.balance = balance;
        this.name = name;
        this.age = age;
    }
    meet() {
        this.age = this.age + 10;
        return this.age;
    }
}
const P1 = new Customer("Deepak", 30, 45);
console.log(P1.name);
console.log(P1.age);
console.log(P1.balance);
// console.log(P1.balance);
class Employee extends Customer {
    salary;
    constructor(salary, name, age, balance) {
        super(name, age, balance);
        this.salary = salary;
    }
    greet() {
        console.log(this.balance);
    }
}
const E1 = new Employee(429, "rohit", 39, 345);
console.log(E1);
console.log(P1.meet());
function value(a) {
    return a;
}
console.log(value(10));
console.log(value("Rohit"));
console.log(value([10, 11, 12, 13, 14]));
console.log(value(true));
console.log(value(["mohan", "rohan"]));








