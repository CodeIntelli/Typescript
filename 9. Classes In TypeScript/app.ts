export{ }
class App{
    // here we doesn't have to define any let or function keyword in class it understand by default
    constructor(){
        console.log("this will call by default when we call any class")
    }
    name="Shiva"
    setName(username:string){
        this.name = username 
        return username
    }
    //* if we are not return any thing then we use void otherwise we are using data type we needed 
    getName(){
        console.log(this.name)
    }
}


const class_obj = new App();
console.log(class_obj.setName("bholenath "))
class_obj.getName()