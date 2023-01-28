function test(x){

    console.log("test function",x)
    return x+100
}
function test1(x){

    console.log("test1 function",x)
    return x+200
}

//cb callback function
function driver(age,cb){

    //a+=100
    //as function....
    //15()
    //undefined()
    let ans = cb(age)
    console.log("ans = ",ans)

    return ans
}

var age = 2
if(age>18){

    var ifx = driver(age,test)
    console.log("ifx = ",ifx)
}
else{
        var elsex = driver(age,test1)
        console.log("elsex = ",elsex)
}







