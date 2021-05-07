const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5, 8];
const arrayOfString: Array<string> = ['Hello', 'Igor'];

function reverse<T>(array: T[]): T[] {
    return array.reverse();
}

reverse(arrayOfNumbers);
reverse(arrayOfString);