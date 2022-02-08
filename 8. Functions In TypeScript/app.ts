
// normal function that
function normal(){
    return 10+50 ;
}
// typed function
function calc():number{
    return 10+50 ;
}

function str():string{
    return "HII"+"510";
}


// params in function
function param(a:number,b:number):number{
    return a + b;
}

function paramstr(a:string,b:string):string{
    return a + b;
}

function param_ternary(a:number,b?:number):number{
    return b?a + b:a;
}


console.warn(calc());
console.warn(str());
console.log(param(5874,9789))
console.log(paramstr("shiva"," mahadev"))
console.log(param_ternary(74))