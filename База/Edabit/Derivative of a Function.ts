function derivative(b, m) {
    let f:number = b*(Math.pow(m, b-1));
    return f;
}

console.log(derivative(4, -3));