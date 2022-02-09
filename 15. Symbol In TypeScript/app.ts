// Starting with ECMAScript 2015, symbol is a primitive data type, just like number and string.

// symbol values are created by calling the Symbol constructor.

// let s1 = Symbol();
// console.log(s1);
// let data ={
//     [s1]:"Some Data"
// }
// console.log(data[s1])

// we can also call symbol using function

let demoF1 = Symbol("d1")
class Demo{
    [demoF1](){
        return "some Data";
    }
}
let d1 = new Demo();
console.log(d1[demoF1]());