//number
let a: number = 10;
let b: number = 20;

//ye allow nhi h ts me but fir bhii js me  run ho jayega
//string
let str:string="rohit";
 // boolean
 let isExist:boolean=true;
 isExist=false;

 //bigint
 let bignumber:bigint = 132143292183n;

let names="mohan";
 
//lec2
let money:any;
money="rohit";
console.log(money.toUpperCase());

let val2:unknown;
val2="Rohit";
val2=10;


if(typeof val2 === 'string')
    console.log(val2.toUpperCase());
if(typeof val2==='number')
    console.log(val2.toFixed(2));

let arr1:number[]=[2,4,5,7,11];
let arr2=[2,1,19,10];

let arr3:(string|number)[]=["rohit",20,11,"sohan"] 
arr3.push(10);

let arr4:(string|number|boolean)[]=["rohit",10,false]

let tuple:[string,number,number]=["rohit",10,11];
     
//objects
//inline
let obj1:{name:string,age:number,gender:string}={
    name:"rohit",
    age:45,
    gender:"Female"
}
let person:{name:string;age:number,balance:number};

person ={
    name:"rohit",
    age:30,
    balance:439
};

let n1:number;
n1=30;

type customer={
    name:string,
    age:number,
    id:string
}

let cl:customer={
    name:"rohit",
    age:36,
    id:"fffff"
}
 interface admin {
    name:strig,
    age:number,
    position:string
 }; 

let obj3:admin={
    name:"Rohit",
    age:30,
    position:"manager",
    id:345
};

//interface vs type
//function
//classes

//typescript lec3

interface person{
    name:string,
    age:number,
    gender:string,
    aadhar?:number //optional 
}

const obj11:person={
    name:"rohit",
    age:30,
    gender:"male", 
}

//latest example
interface customerr{
    name:string,
    age:number,
    balance:number
}
//required se sari property likni hi padegi ,Partial se optinal ho jati h aur 3 aati h Readonly means you can only read 
const obj2:Partial<customer>={
    name:"rohit",
}

//array of objects
interface People {
  name: string;
  age: number;
}
interface Manager {
  salary: number;
  id: string;
}

const arr2:(people|manager)[]=[{name:"rohit",age:30},{name:"mohit",age:34},{salary:20000}]
//function in TS

function greet(a:number){
    console.log(a);
    return a+5;
}

console.log(greet(10));

function meet(msg:string,val:number){
    console.log(msg,val);
}

meet("Anshika Verma",4);

function neet(msg:string="Jit"){
    console.log(msg);
}

neet();
neet("bittu");
//optional parameter

function GATE(person:string){
    console.log(Person||"mohan");
}
GATE("rohit");

// arrow function  

const squareroot = (val: number) => {
  return Math.sqrt(val);
};
const sum=(a:number,b:number)=>a+b;
console.log(sum(3,4));

//callback funtion
type chill = (amount: number) => void;

const squareroot = (val: number) => {
  return val * val;
};

function placeOrder(order: number, callback: (amount: number) => void): void {
  const amount: number = order + 10;
  callback(amount);
}

placeOrder(10, (amount) => {
  console.log(amount);
});
//rest parameter

function total(...arr:number[]){
    let ans=0;
    arr.forEach((val:number)=>ans+=val);
    console.log(ans);
}


class Person{

    name:string;
    age:number;
    constructor(n1:string,n2:number){
        this.name=n1;
        this.age=n2;
    }
}

const obj6=new Person("rohit",30);
console.log(obj6); 

//extend keyword

interface human{
    name:string,
    age:number
};
interface Teacher extends human{
    salary:string,
    id:number
}

const obj:Teacher  ={
    name:"rohit",
    age:30,
    salary:"chillar",
    id:234
}

interface Teacher extends human{
    salary:string,
    id:number
}

interface BankEmployee extends human{
     salary:string,
     position:string, 
}

const obj7=new Person("rohit",39);
const obj8=new Person("nitin",33);
console.log(obj7);
console.log(obj8);

class Person{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    greet():void{
        console.log(`hi ${this.name}`);
    }
}
// blueprint of an object
const obj9=new Person("rohit",39);
const obj10=new Person("nitin",45);
console.log(obj9);
console.log(obj10);

//public private protected
// agar m kisi ko public kar du too vo class ke bahr bhi uss hoga but private me only class me use hoga
class Customer{
   public name:string;
   private age:number;
    balance:number =0;
    constructor(name:string,age:number,balance:number){
        this.balance=balance;
        this.name=name;
        this.age=age;
    }
    meet():number{
        this.age=this.age+10;
        return this.age;
    }
}

const P1=new Customer("Deepak",30,45);
console.log(P1.name);
console.log(P1.age);
console.log(P1.balance);
// console.log(P1.balance);

class Employee extends Customer{
    salary:number;

    constructor(salary:number,name:string,age:number,balance:number){
        super(name,age,balance);
        this.salary=salary;
    }
    private greet():void{
        console.log(this.balance);
    }
} 

const E1=new Employee(429,"rohit",39,345);
console.log(E1);
console.log(P1.meet())

//Generic:Template

function value(a:(number|string[]){
   return a;
}

function value<T>(a:T):T{
    return a;
}

console.log(value(10));
console.log(value("Rohit"));
console.log(value([10,11,12,13,14]));
console.log(value(true));
console.log(value(["mohan","rohan"]))