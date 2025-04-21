function square(n) {
    return n*n;
}

function cube(n) {
    return n*n*n;
}

function sumOfSquares(a, b){
    let s1 = square(a);
    let s2 = square(b);
    return s1 + s2;
}

function sumOfCubes(a,b){
    let c1 = cube(a);
    let c2 = cube(b);
    return c1 + c2;
}
let ans1 = sumOfCubes(2, 3);
console.log(ans1); // 99

let ans = sumOfSquares(2, 3);
console.log(ans); // 13


function sumOfSomething(a, b, fn) {
    let s1 = fn(a);
    let s2 = fn(b);
    return s1 + s2;
}

let result = sumOfSomething(2,3, square);
console.log(result); // 13