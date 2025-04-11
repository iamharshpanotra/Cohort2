// To print all the male people's first names given a complex object. 

// const personArray = ["Nikhil", "Avishek", "Sheela"];
// const genderArray = ["male", "male", "female"];
// const numberOfUsers=personArray.length;

// for (let i = 0; i < numberOfUsers; i++) {
//     if(genderArray[i] == "male"){
//         console.log(personArray[i]);
//     }
// }

// Using Objects -- 

const users = [1,2,3];
const users2 = ["Nikhil", "Avishek", "Sheela"];

const allUsers = [{
    firstName : "Nikhil",
    lastName : "Mehra",
    gender : "male"
}, {
    firstName : "Avishek",
    lastName : "Kumar",
    gender : "male"
}, {
    firstName : "Sheela",
    lastName : "Sharma",
    gender : "female"
}
];

const Users = allUsers.length;

for(let i=0; i<Users; i++){
    if(allUsers[i]["gender"] == "male"){
        console.log(allUsers[i]["firstName"]);
    }
}