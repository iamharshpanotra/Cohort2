function getLength(str) {
    console.log("Original String: " + str);
    console.log("Length of the string: " + str.length);
}
getLength("Hello World!");

const str = "Hey there!";
console.log(str.length);

function findIndexOf(str, target) {
    console.log("Original String:", str);
    console.log("Index", str.indexOf(target));
}
findIndexOf("Hello World!", "World");

const a = "Nikhil Mehra Gopoi Mehra";
console.log("Your name is " + a)
console.log(a.lastIndexOf("e"));
console.log(a.indexOf("M"));

function getSlice(str, start, end){
    console.log("Original String: ", str);
    console.log("After Slice: ", str.slice(start, end));
}
getSlice("Hello World!", 0, 5);

let b = "The world is ending sooner than later, Nikhil".slice(0, 24);
console.log(b);


const str1 = "Is this enough, Nikhil?";
let ans = str1.substr(2, 5);
let ans2 = str1.slice(2, 5);
console.log(ans);
console.log(ans2);