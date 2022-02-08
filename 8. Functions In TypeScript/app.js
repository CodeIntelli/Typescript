// normal function that
function normal() {
    return 10 + 50;
}
// typed function
function calc() {
    return 10 + 50;
}
function str() {
    return "HII" + "510";
}
// params in function
function param(a, b) {
    return a + b;
}
function paramstr(a, b) {
    return a + b;
}
function param_ternary(a, b) {
    return b ? a + b : a;
}
console.warn(calc());
console.warn(str());
console.log(param(5874, 9789));
console.log(paramstr("shiva", " mahadev"));
console.log(param_ternary(74));
