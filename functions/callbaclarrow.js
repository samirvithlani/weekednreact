const sqr = (no)=>{

    return no *no
}

const test = (cb) =>{

    //sqr(10)
    //return  100
    return cb(10)
    
}
const test1 = (cb) =>{
    console.log("test1 function")
}

const driver = (cb) =>{

    ///
    return cb(sqr)


}
var ans = driver(test)
console.log("ans = ",ans)