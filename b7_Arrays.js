// Two ways to declare arrays
//first
const num = [1, 2, 3, 4, 5];
// console.log(num[num.length - 1])
// second
const num2 = new Array(1, 2, 3, 4, 5);
// console.log(num2[num2.length - 1])

/*

// OPERATIONS   

//1. Push : IT PUSH ELEMENT IN THE LAST
console.log(num.push('last'))
// 2. unShift  : IT ADD ELEMENT IN THE FIRST
console.log(num.unshift('first'))
// 3 . pop() : remove element from the last
console.log(num.pop())
// 4. shift() : remove element from the first
console.log(num.shift())

console.log(num.includes(1)) // same as contains

*/
// lmao finding objects in arrys 

const arr = [
    {
        name: "a",
        roll: 1
    },
    {
        name: "b",
        roll: 2
    },
    {
        name: "c",
        roll: 3
    }
];
// console.log(arr.find(element => element.roll === 2)) //=== is type and value :)

/*
// SOME ADVANCE OPERATIONS
let a = [1, 2, 3];
let b = [4, 5, 6];
// concatinaion
console.log(a.concat(b))
// using ...
let c = [...a, ...b]
console.log(c)

console.log(c.slice(3)) // slice for cutting :) from starting to that possition
console.log(c.slice(3, 4)) //  from starting to that possition and then from that position to last
*/


// FOR LOOPS in const num = [1, 2, 3, 4, 5];
//  FOR 
for (let i = 0; i < num.length; ++i) {
    // console.log(num[i]);
}
// FOR OF
for (const key of num) {
    //console.log(key)
}

// FOR EACH
num.forEach(function (name) {
    // console.log(name);
})
// it is same as
num.forEach(print);
function print(name) {
    //console.log(name);
}


// JOIN : it is used to convert from array keys to string
let v = num.join('..');
// console.log(v)
// SPLIT('') : it is used to slip into the array
v = v.split('..');
// console.log(v)

//FILTER : filter is same as find but it prints all the outputs
let marks = [
    {
        name: "dhiraj",
        marks: 51
    }, {
        name: "raj",
        marks: 30
    }, {
        name: "vikram",
        marks: 52
    }
]
console.log(marks.filter(element => element.marks > 50));

// MAP : this create new array with resulting opration
// for example see in practice


// for more function visit mdn website : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

/* conclusion : * to iterate use forEach 
                * search use filter this returns array
                * to apply opperations use map this also returns array
                * to sort use sort functions
*/







