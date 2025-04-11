// function square(n) {
//     return n*n;
// }
// function cubes(n){
//     return n * n * n;
// }
// function sumOfSquares(a,b){
//     const val1 = square(a);
//     const val2 = square(b);
//     return val1 + val2;
// }

// const ans = sumOfSquares(3,5);
// console.log(ans);

// function sumOfCubes(a,b){
//     const val1 = cubes(a);
//     const val2 = cubes(b);
//     return val1 + val2;
// }

// const ans2 = sumOfCubes(3,5);
// console.log(ans2);


function square(a){
    return a * a;
}

function cube(a){
    return a * a * a;
}

function sumOfSomething(a, b, fn){
    const val1 = fn(a);
    const val2 = fn(b);
    return val1 + val2;
}

let result = sumOfSomething(3, 23, cube);
let result1 = sumOfSomething(3, 23, function(a){
    return a * a * a;
});
let result2 = sumOfSomething(3, 23, square);

console.log(result);
console.log(result1);
console.log(result2);