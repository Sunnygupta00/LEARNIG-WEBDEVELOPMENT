const prompt = require('prompt-sync')();

console.log("who is father of nation")
console.log("a)mahatma gandhi               b)rahul gandhi")
console.log("c)ram gandhi                   d)chulbul gandhi")

let ans = prompt("coorect option")
if (ans == "a") {
    console.log("1 crore")
} else if (ans == "audience poll") {
    console.log("correct option is a")
} else {
    console.log("galat uttar")
}
