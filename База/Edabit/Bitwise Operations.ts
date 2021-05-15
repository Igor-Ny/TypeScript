function bitewiseAND(a, b){
    var c: number = a & b;
    a = a.toString(2);
    b = b.toString(2);
        return c; 
}
function bitewiseOR(a, b){
    var c: number = a | b;
    a = a.toString(2);
    b = b.toString(2);
        return c; 
}
function bitewiseXOR(a, b){
    var c: number = a ^ b;
    a = a.toString(2);
    b = b.toString(2);
        return c; 
}

console.log(bitewiseAND(7,12));
console.log(bitewiseOR(7,12));
console.log(bitewiseXOR(7,12));
