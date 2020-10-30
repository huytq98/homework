let numbers = prompt('Input number: ');
let arrNumbers = numbers.split(',').map(function (num){
    return Number(num);
})

let check = {};

for (let i=0; i< arrNumbers.length; i++){
    if (!check[arrNumbers[i]]){
        check[arrNumbers[i]] = 1;
    }else {
        check[arrNumbers[i]]++;
    }
}

for (const key in check) {
    // console.log(`key : ${check[key]}`)
    if(check[key] ===1){
        console.log(key)
    }
}
console.log(check)