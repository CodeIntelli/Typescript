/// <reference path="./Utils.ts" />
namespace UserUtils {
    export class Users extends Parent{
        getName(){
            return this.name;
        }
    }
}

let u1 = new UserUtils.Users();
u1.setName("sankar")
console.log(u1.getName()) 