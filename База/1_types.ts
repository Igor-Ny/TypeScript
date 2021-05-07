const isFetching: boolean = true;
const numberArrey: number[] = [1,1,24,5,32,5,6,7,8];
const contact: [string, number] = ['Vlad', 1232132];

let varuble: any = 432;

varuble = 'String';

function sayMyName(name: string): void{
    console.log(name);
}
sayMyName('Have');

type ID = string | number;
const id1: ID = "123231"
const id2: ID = 32121

type Sometype = string | null | undefined
