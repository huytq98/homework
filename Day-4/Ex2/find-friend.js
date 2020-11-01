const data = [
    {
        name : "mrA",
        phone_number: 123,
        friends: ["mrB", "mrC"]
    },
    {
       name: "mrB",
       phone_number: 1234,
       friends: ["mrD", "mrC"]
    },
    {
       name: "mrC",
       phone_number: 12345,
       friends: ["mrB", "mrC", "mrA"]
    },
    {
       name: "mrD",
       phone_number: 12346,
       friends: ["mrB", "mrC"]
    },
    {
       name: "mrE",
       phone_number: 12347,
       friends: ["mrA", "mrC"]
    },
]

let x = Number(prompt("Enter phone number: "))
for (let i = 0; i < data.length; i ++){
    if (data[i].phone_number === x){
        alert(`This is ${data[i].name}'s phone number and this is his friends ${data[i].friends}`)
    } else {
        alert("This number doesn't exist or the owner of this number doesn't has any friend")
    }
}