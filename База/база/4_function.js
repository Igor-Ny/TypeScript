function add(a, b) {
    var S = a * b;
    var p = Math.sqrt(a + b);
    return p;
}
function toUpperCase(str) {
    return str.trim().toUpperCase();
}
function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined, "default": a.toString() };
    }
    return { x: a, y: b };
}
console.log(add(3, 4));
console.log('Empty', position());
console.log('One param: ', position(42));
console.log('Two params: ', position(10, 14));
