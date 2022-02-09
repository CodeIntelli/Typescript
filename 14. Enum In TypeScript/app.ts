enum Days{
    mon,tue,wed,thu,fri,sat,sun
}

let whichDay:Days
whichDay = 3
// here if we are not giving value then it take 0,1,2,3 by default or we can also call it like
whichDay = Days.mon
//  from both ways we are using enum

// if we want to use this as a string then we can also use it
enum newDays{
    mon="mon",tue="tue"
}

let whichnewDay:newDays

// we can also match it
console.log(whichnewDay === "mon")

enum numDays {
    mon=10,tue,wed,thu,fri,sat,sun
}
function numFunc(day:numDays){
    return day
} 

console.log(numFunc(numDays.tue))