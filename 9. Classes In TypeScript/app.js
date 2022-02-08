"use strict";
exports.__esModule = true;
var App = /** @class */ (function () {
    // here we doesn't have to define any let or function keyword in class it understand by default
    function App() {
        this.name = "Shiva";
        console.log("this will call by default when we call any class");
    }
    App.prototype.setName = function (username) {
        this.name = username;
        return username;
    };
    //* if we are not return any thing then we use void otherwise we are using data type we needed 
    App.prototype.getName = function () {
        console.log(this.name);
    };
    return App;
}());
var class_obj = new App();
console.log(class_obj.setName("bholenath "));
class_obj.getName();
