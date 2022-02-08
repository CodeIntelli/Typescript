export{}
class Parent {
    name:string;
    setName(name){
        this.name = name;
    }
}

class Child extends Parent {
    getName(){
        return this.name
    }
}

const c1 = new Child();
c1.setName("sankar")
console.log(c1.getName())