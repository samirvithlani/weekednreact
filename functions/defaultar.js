function test(a=0,y=0,z=0){
    return a + y + z;
}

console.log(test(10,45))


//nested function

function demo(x){

    console.log("demo function",x)
    function inner(y){

        console.log("inner function",x,y)
    }
    inner(x+10)
}


// function demo2(cb){

//     function inner1(){

//             console.log("inner1 function")
//     }
//     function inner2(){
            
//             console.log("inner2 function")

//     }
//     cb(inner1)

// }
// demo2(inner1)



const test3 = (a) =>(b)=>{
    console.log("test3 function",a,b)
}
test3(100)(50)
