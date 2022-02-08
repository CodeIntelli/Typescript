let data = ['shiva','mahadev','bholenath',true,1]
data.push('sankar')
// data.push(200) //Argument of type 'number' is not assignable to parameter of type 'string'. here it will show error 
data.push(true) //Argument of type 'boolean' is not assignable to parameter of type 'string'. solve this error as we solve above error
console.log(data)

//  to solve the problem just put only one number in data at declaration time that means it will be mixed array
// data = ['a','b','c',3,65,7,678]
// to solve the problem just put only one boolean in data at declaration time that means it will be mixed array
// data = ['a','b','c',3,65,7,678,true]
let str:string[] = ['shiva','mahadev','bholenath']
let num:number[] = [1,3,4,3,56,4]