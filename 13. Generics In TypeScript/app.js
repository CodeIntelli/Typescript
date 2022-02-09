//this is normal function 
function users(data) {
    return data;
}
console.log(users({ name: "shiva", age: 30 }));
// from above function we know that data type of return data and params will be define 
function usersData(data) {
    return data;
}
console.log(usersData({ name: "usersData", age: 30 }));
// so in above both function  it will not raised any error but now we are consider that we dont need to initialize datatype of return and params all the time at that time generics function is used
function userGeneric(data) {
    return data;
}
console.log(userGeneric({ name: "usersData", age: 30 }));
// from that "T" the function is not send void it always have return type. now we can send string, number , object in userGenerics otherwise we have to specify always that which type of data we need from user
