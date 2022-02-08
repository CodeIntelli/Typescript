// let ab = "Ganesha"
// console.log(ab);
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.test = function () {
        console.log("Test Function Running");
    };
    return App;
}());
var a1 = new App();
a1.test();
