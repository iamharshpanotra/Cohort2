// WAP to print the biggest number in an array. 

const numbers = [1,2,4,65,23];
let max = numbers[0];

for(let i = 0; i < numbers.length; i++){
    if (numbers[i] > max){
        max = numbers[i];
    }
}
console.log(max);