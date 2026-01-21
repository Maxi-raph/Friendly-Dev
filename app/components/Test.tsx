// unions, tuples, string and number arrays, tuple arrays
let t:Array<number> | Array<string> = [1,2,3]

t = ['6']

let tuple: Array<[number,boolean,string?] | [number,string?]> = [[1, 'laugh'],[1,true, 'laugh']]

tuple = [[2,false,'hhh'],[2,'hhh']]


//enums
enum directions{
    up = 1,
    down,
    left = 'left',
    right = 5
}
let {up,down,right,left} = directions
console.log();

// functions
function direction(d:string | number):string|number{
  return d
}

//objects, user

type User = {
    id:number
    name:string
    registered?:boolean
}

const user: User= {
    id:90,
    name:"Ralph",
    registered: false
}

//any, type assertion

let ticketId:any = 'omo'

export let customerId:number = (ticketId as string).length

console.log(customerId);

//functions

function addNum(x:number ,y:number):string {
  return `The result is ${x + y}`
} 


console.log(addNum(2,3));



const subNum = (x:number,y:number):number => x - y


console.log(subNum(88,55));



//interface with objects and destructuring objects with interface in functions

interface UserInterface {
    readonly id:number
    name:string
    registered?:boolean  
}


const user1: UserInterface = {
    id: 44,
    name: 'Ralph',
    registered: true
}

function getUser({name,id,registered}:UserInterface):string{
  return `User ${name} is ${id} years old ${registered ? 'and is already registered': 'and is not registered'}`
}

console.log(getUser(user1))

//interface with functions

interface FuncInterface {
   ( id:number, name:string , registered?:boolean):string
}


let gh:FuncInterface = (id:number,name:string,registered?:boolean):string =>  `User ${name} is ${id} years old ${registered ? 'and is already registered': 'and is not registered'}`


//classes
class Person1 {
  private age:number
  name:string

  constructor(age:number,name:string) {
    this.age = age
    this.name = name
  }
}


let user8 = new Person1(20,'Ralph')

//interface in classes
interface PersonInterFace{
  age:number
  name:string 
  register?():string
}

type PersonInterFace1 = {
  age:number
  name:string 
  register?():string
}

class Person2 implements PersonInterFace{
  age:number
  name:string 

  constructor(age:number, name:string ){
    this.age = age
    this.name = name
  }

  register():string {
   return  `${this.name} was registered at ${this.age} years old`
  }
  
}

class Person3 implements PersonInterFace1{
  age:number
  name:string 

  constructor(age:number, name:string ){
    this.age = age
    this.name = name
  }

  register():string {
   return  `${this.name} was registered at ${this.age} years old`
  }
  
}

let user4 = new Person2(20,'Bradley')

console.log(user4.register());


//Extended classes

class Characteristics extends Person3{
  bright: boolean
  intelligent:boolean

  constructor(age:number,name:string,bright:boolean,intelligent:boolean){
    super(age,name)
    this.bright = bright
    this.intelligent = intelligent
  }
  speak():string {
    return `My name is ${this.name}, i am ${this.bright ? 'bright': 'not bright'} and ${this.intelligent ? 'intelligent': 'unintelligent'}`
  }
}


let human = new Characteristics(20,'Ethan',true,false)


human.name = 'Trent'
console.log(human.speak())

//Generics

function getArray<G>(arr:G):G{

  return arr

}

const numArr = getArray<number[]>([4,5,6])

const stringArr = getArray<string[]>(['4','5','6'])







