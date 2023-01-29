var users = [
    {
        id:101,
        name:"raj",
        age: 20,
        isActive: true,
        hobbies:["cricket","football","chess"]

    },
    {
        id:102,
        name:"ajay",
        age: 25,
        isActive: true,
        hobbies:["cricket","football","dance"]
    },
    {
        id:103,
        name:"parth",
        age: 24,
        isActive: false,
        hobbies:["cricket","travel","chess"]
    }
]

var filar =[]

// for(let i=0;i<users.length;i++){


//     if(users[i].isActive){
//         filar.push(users[i])
//     }

// }
//0
var filteredAr = users.filter((u)=>{

    if(u.isActive){
        return u;
    }

})

var filarr1 = users.filter((u)=>(u.age>23 && u.isActive))
console.log(filarr1)



var deleteData = (id)=>{

    return users.filter((u)=>{
        return u.id != id
    })
    
}

console.log(deleteData(102))







