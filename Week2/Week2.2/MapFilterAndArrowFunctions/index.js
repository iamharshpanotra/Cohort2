// Arrow Function 
// function sum(a,b){
//     return a + b;
// }
 
// const sum = (a,b) => {
//     return a + b;
// }

// app.get("/", (req,res) => {
    
// })

// app.get("/", function(req,res) {

// })
// const ans = sum(2,3);
// console.log(ans);

// Given a array, return a new array with the square of each number
// const input = [1,2,3,4,5];

// function transform(i) {
//     return i * 2;
// }
// const ans = input.map(function (i){
//     return i * 2;
// });
// console.log(ans);

const arr = [1,2,3,4,5,6,7];

// const newArr = [];
// for(let i = 0; i<arr.length; i++){
//     if(arr[i] % 2 == 0){
//         newArr.push(arr[i]);
//     }
// }

// console.log(newArr);


const ans = arr.filter(function (n) {
    if (n % 2 == 0){
        return true;
    }
    else {
        return false;
    }
});

console.log(ans);


const arr2 = ["Nikhil", "Dikshit", "Harsh", "Aman"];


const ans2 = arr2.filter(function (n) {
    if (n.startsWith("D") || n.endsWith("n")){
        return true;
    }
    else {
        return false;
    }
});

console.log(ans2);