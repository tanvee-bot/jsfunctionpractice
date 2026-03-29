// for (let  i = 0; i  <= 10; i++) {
//     console.log(i  * 2);
    
// }


// let me = 0 
// const house = 10


// while (me != house) {
// me = me + 1 
//     console.log("you arrived" + 1)
// }    


// do 
// {me = me + 1 
//     console.log("you arrived" + 1)
    
// } while (me != house);


function multipilay (num1 ,num2){
    let a = num1 * num2
 return num1 * num2
}
 let a = multipilay(10 , 5)
 console.log(`hy user this is your total ${a}` ,)

 function addnums(){
    let result = 0
for (let i = 0; i < arguments.length; i++) {
result = result + arguments[i]
}
return result
}
let result2  = addnums(33,44,33,22,333,42,34,445)


console.log(result2)






function practiceofunction ( ...number){
let reault = 0
for (let i = 0; i < number.length; i++) {
    reault = reault + number[i];
}
return reault
}


let total = practiceofunction(33 ,44,67,66,666)

console.log(total)



function greet (name ,cb){
    console.log("hello" + name)
    cb()
}

function example (){
    console.log("goodbuy")
}

greet(" TANVEER " , example)