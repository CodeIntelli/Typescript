// let users = {
//     name:"bruce", // it will automatically take default type string
//     age:30, // it will automatically take default type number
//     address:'USA' // it will automatically take default type string
// }


// users.name="shiva"
// // users.name=400 //if we put 400 means a number then it shows error
// console.warn(users.name)

// * default typed
interface userTyped {
    name:string,
    // name:number,
    age: number, 
    address:string,
    description:any // means it accept any datatyped 
}
// as we declare interface now we have to assign in users 
let users:userTyped = {
    name:"bruce", // it will automatically take default type string
    age:30, // it will automatically take default type number
    address:'USA', // it will automatically take default type string
    description:232
}


// * or we can use like this also
let userData:any = {
    name:"bruce",
    age:30, 
    address:'USA',
    description:232
}


console.log(users)