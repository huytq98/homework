const arr = [1,2,3,4,5]
let x = Number(prompt("Nhập vào x: "))
for(let i=0; i<=arr.length;i++){
    for(let j=0; j<=i; j++){
        if(arr[i]+arr[j]===x){
            console.log(x)
            console.log("số "+arr[i]+" + số "+arr[j])
            console.log("("+i+","+j+")")
        } else {
            console.log("Không có kết quả")
        }
    }
}