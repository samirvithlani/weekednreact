var users = [
    {
        name:"raj",
        age: 20,
        isActive: true,
        hobbies:["cricket","football","chess"]

    },
    {
        name:"ajay",
        age: 25,
        isActive: true,
        hobbies:["cricket","football","dance"]
    },
    {
        name:"parth",
        age: 24,
        isActive: false,
        hobbies:["cricket","travel","chess"]
    }
]

// for(let i =0;i<users.length;i++){
//     console.log(users[i].name,users[i].age,users[i].isActive)
// }


// for(let i=0;i<users.length;i++){

//     console.log(users[i].name)
//     for(let j=0;j<users[i].hobbies.length;j++){
//         console.log(users[i].hobbies[j])
//     }
// }




var y = users.forEach((u)=>{
    console.log(u.name)
    u.hobbies.forEach((h)=>{
        console.log(h)
    })

})

var x = users.map((u)=>{

    // return {
    //     name:u.name.toUpperCase(),
    //     age:u.age*2,
    //     isActive:u.isActive
    // }
    return u;

})
console.log(x)