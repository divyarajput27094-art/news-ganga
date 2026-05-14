<!-- any -->
let value: any=42;
Represents any type of value, when a variable has the any type, it can be assigned any value, and no type checking is done.

<!-- unknown-->
The any and unknown types in Typescript are both used to represent values of any type.
The unknown type is safar any because yopu cannot perform operation on an unknown value without first narrowing its type through type checks.

<!-- Array -->
let numbers: number[] =[2,3,4,6];
let numbers:(string|number)[]=[2,3,4,5,6,"mohit"];
<!-- Tuples -->
Tuples are arrays with a fixed number of elements of specific types.
let tuple: [string,number]= ["rohit",10];
<!--extend with interfaces-->

<!--type uses internsections (&) to combine multiple types.-->

type animal=gen &{
   
}

<!--Declaration Merging-->
interface person{
    name:string
}
interface person{
    age:number
}

<!--Above syntax  is allowed-->

but width type it is not allowed

<!--Utility types for objects-->
Partial<person>
Required<Person>
Readonly<Person>

<!--Arraay of objects-->
<!--functions in js-->
function greet(name:string):string{
    return 'hello,${name}!';
}

<!--optimal parameter-->
function meet(name?:string):void{
    console.log('hello ${name!|"guest"}');
}

<!--Defaul parameter-->

<--utility types for objeects -->
1: Partial<person>
2: Required<person>
3: Readonly<Person>

<!--Array of objects-->
<!--rest parameter-->
<!--Function in js-->

function greet(name: string):string{
    return `hello,$(namne)`;
}

<!--classes in js-->
class Bank{
    name:string;
    age:number;
    account:number;

    constructor(name:string,age:number,account:number){
        this.name=name;
        this.age;
        this.account=account;
    }
}

greet():void{
    console.log
}

<!--First we need to install Typescript compiler-->
1: npm install -g typescript
2: tsc --version

<!--Intialize config file-->
tsc --init

<!--run tsc-->
<!--Every JS file will be valid TS-->

<!--Generics-->
Generics in TypeScript allow you to create flexible,reusable components by enabling you to specify types as parameters in functions, classes,interfaces, and other coinstructs.This helps provide type safest while keeping the flexibility to work with various data types.
function identity<T>(value:T):T{
    return value;
}

console.log(identity(5)); //works with numbers
console.log(identity("hello")); //work with strings
console.log(identity([1,2,3])); //work with arrays

