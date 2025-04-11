const ages = [12, 13, 15, 16, 19, 20, 26, 4, 3];
const numberOfPeople = ages.length;

for (let i = 0; i < numberOfPeople; i++) {
    if (ages[i] % 2 == 0){
       console.log(ages[i]);
    }
}