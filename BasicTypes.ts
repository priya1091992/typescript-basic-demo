
/*variable*/
/***
  This is allowed in JS
  No type is defined.
***/
let demoVariable
demoVariable=20
demoVariable="20"



/***
  Just declare basic type as defined in this example
  (demoVariable is of type number)
***/
let demoVariable : number = 20
demoVariable = "20"   //Error: not allowed to pass string when the type of variable is number



/***
  tsconfig.json file comes in picture
  -> By default typescript compiler coverts code into ES3.
  -> In tsconfig.json file, declare all the compiler configuration.
  -> In this example, comiler target is declared as ES6
    so that typescript compiler converts this code in javascript ES6.
***/
const helloFunc = () => {
  console.log("Hello world!")
}



/***
  Tuple example
***/
let employee1: [number, string] = [1, "Steve"]; // allowed
let employee2: [number, string] = ["1", "Steve"]; //Error: string "1" not allowed to number


/***
  All the array elements are of type number only
***/
let employee3: number[] = [1,2,3,4] //allowed
let employee4: number[] = ["1",2,3,4] //Error: string "1" not allowed to number



/***
  Classes
***/
class Car {
    model: String;
    doors: Number;
    isElectric: Boolean;

    //Declaring type of constructor function
    constructor(model: String, doors: Number, isElectric: Boolean) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }

    make(): void {
        console.log(`This car is ${this.model} which has ${this.doors} doors` );
    }
}

let newCar = new Car('Innova', 4, false); //allowed
newCar.make();

//Error: string "4" not allowed in constructor variable doors (accepts only number).
let newCarExample = new Car('Innova', "4", false);
newCar.make();



/***
  Interface
***/
interface ObjectTest {
  first: String
  second: String
}

//Passing the interface as type of the object
let objectOriginal : ObjectTest
objectOriginal = {
  first: 'First',
  second: '2'
}



/***
  Use of any
  -> `any` type -> pass anything string, number, boolean, null etc in this variable
  -> try to avoid using `any` in typescript
***/
let alpha: any = 'this is string now' //allowed
alpha = 30 //allowed



/***
  Use of Union
  -> string | null: means we can pass two more type of value in the variable alpha
***/
let alpha: string | null = 'this is string now' //allowed
alpha = null //allowed

alpha = 30 //Error: 30 number is not passed to alpha variable of type string | null (string or null)



/***
  Use of void
  -> void: If not returning anything from function, declare the return type as void.
     null or undefined can be passed to variable of type `void`
***/
function sayHi(): void {
    console.log('Hi!')
}
let speech: void = sayHi();
console.log(speech);



/***
  Use of void with variables
***/
let nothing: void = undefined; //allowed
let num: void = 1; // Error: void can only take values null or undefined
