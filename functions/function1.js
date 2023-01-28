//2 type function
//user dffine and pre define
//4 type functin
//1. function with no argument and no return type
//2. function with argument and no return type
//3. function with no argument and return type
//4. function with argument and return type
//dynmically typed... return type is not fixed   function
// void,int

function test(){
    console.log("test function")
    //without return type without argument
}
//local variable...
function sum(a,b){

    console.log(typeof(a))
    console.log(typeof(b))
    let c = a + b
    console.log("c = ",typeof(c))

    //return c;
    return a + b;

}

test()
var x = sum(12,"raj")
console.log("x = ",x)

////arrow function

var add =(a,b)=>{
    return a + b;
}
const div =()=>{

    return 100/52
}

console.log(add(45,45))

var p = div()
p = 150
console.log(p)










