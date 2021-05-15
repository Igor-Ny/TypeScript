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
var User = /** @class */ (function () {
    function User(name, age, nickName, pass) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
        this.pass = pass;
    }
    return User;
}());
var Igor = new User('Igor', 20, "Reky");
console.log(Igor.age);
