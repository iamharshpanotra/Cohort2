let ans = 0;

for (let i = 1; i<= 50; i++){
    ans = ans + 1;
    //console.log(ans);
}


function findSum(n){
    let ans = 0; 
    for (let i = 1; i <= n; i++){
        ans += 1;
    }
    return ans;
}

let sn = findSum(150);
console.log(sn);
