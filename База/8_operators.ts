interface Persone {
    name: string;
    age: number;
}

type PersoneKeys = keyof Persone; // 'name' | 'age'

let key: PersoneKeys = 'name';
key = 'age';

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'>;
type UserkeysNoMeta2 = Pick<User, 'name' | 'email'>;

let u1: UserKeysNoMeta1 = 'name';
//u1 = '_id'
