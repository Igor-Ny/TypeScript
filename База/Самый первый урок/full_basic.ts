// let myFunc: (first: string) => void;
// function oldFunc(name: string): void {
//     console.log(`Hello ${name}, nice to see you!`);
// };
// myFunc = oldFunc;
// myFunc('Igor');

// type Person = {name: string, age: number, nickName?: string, getPass?: () => string,};
// let user: Person = {
//     name: 'Igor',
//     age: 20,
//     nickName: "Reky",
// };

// class User {
//     name: string;
//     age: number;
//     nickName: string;
//     pass: number;

//     constructor(name:string, age:number, nickName: string, pass?: number) {
//         this.name = name;
//         this.age = age;
//         this.nickName = nickName;
//         this.pass = pass;
//     }
// }

// const Igor = new User('Igor', 20, "Reky");

// console.log(Igor.age);

// class User {
//     constructor(
//         public name:string, 
//         public age:number, 
//         public nickName: string, 
//         public pass?: number) 
//         {}
// }

// class User {
//     private age: number = 20;

//     constructor(name: string){
//     }
//     set myAge(age: number){
//         this.age = age;
//     }
// }
// const igor = new User('Igor');
// igor.myAge = 30;

// class Igor extends User {
//     name: string = 'Igoe';
//     constructor(age: number){
//         super(name, age);
//     }
// }

// abstract class User {
//     constructor(public name: string, public age: number) {}
//     greet(): void {
//         console.log(this.name);
//     }
//     abstract getPass(): string;
// }

// class Igor extends User {
//     name: string = 'Igor';
    
//     constructor(age: number) {
//         super(name, age);
//     }
//     getPass(): string {
//         return `${this.age}${this.name}`
//     }
// }

//File Utils.ts
// export const SECRET: string = '1212312';
// export const getPass = (name: string, age: number): string => `${name}${age}`; 

// import {SECRET, getPass} from ./Utils.ts
// const myPass = Utils.isEmpty(Utils.SECRET);
// type Usar {
//     name: string,
//     age: number,
// }

// interface User {
//     readonly name: string,
//     age: number,
// }

// interface Admin extends User {
//     getPass(): string,
// }

// class Igor implements Admin {
//     name: string = 'Igor';
//     age: number = 20;
//     getPass() {
//         return `${this.name}${this.age}`
//     }
// }

// const getter = <T>(data: T): T => data;

// getter(10);
// getter('test');

// const logClass = (constructor: Function) => {
//     console.log(constructor);
// }

// @logClass
// class User {
//     constructor(public name: string, public age: number){}

//     public getPass(): string {
//         return `${this.name}${this.age}`;
//     }
// }

// function factory(value: any) {
//     return function (target: any){
//         console.log(target);
//     }
// }

