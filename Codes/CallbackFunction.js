// // function sum(num1, num2, fnToCall){
// //     let result = num1 + num2;
// //     fnToCall(result);
// // }

// // function displayResult(data){
// //     console.log("Result of the sum is: " + data);
// // }

// // function displayResultPassive(data){
// //     console.log("Sum's Result is : " + data);
// // }

// // const ans = sum(10, 20, displayResult); // Callback function

// function calculateArithmetic(a, b, type) {
//     if (type === 'sum') {
//         const value = sum(a,b);
//         return value;
//     }
//     else if (type === 'sub') {
//         const value = sub(a,b);
//         return value;
//     }
// }
// function sum(a, b) {
//     return a + b;
// }
// function sub(a, b) {
//     return a - b;
// }


// // const value = calculateArithmetic(13, 30, "sum");
// // const updatedValue = calculateArithmetic(13, 30, "sub");
// // console.log(updatedValue); // 17 
// // console.log(value); // 43


function greet(name, callback){
    console.log("Hello " + name);
    callback(); 
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Ajay", sayBye);