interface userTyped{
    name: string,
    age: number,
    getName:()=>string,
    description:any
}

let users:userTyped ={
    name: "Shiva",
    age: 23,
    getName: function () {
        return "Shiva";
    },
    description: "here are all description we can put here"
};

console.log(users.name);
console.log(users);
console.log(users.description);
console.log(users.age);
console.log(users.getName());

