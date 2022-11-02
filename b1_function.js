// FUNCTION void type
function sum(x, y) {
    console.log("sum is " + (x + y))
}
sum(1, 3)
sum('her', 'o')


// FUNCTION RETURN TYPE

function fib(n) {
    if (n == 0 || n == 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}
for (let i = 0; i < 10; i++) {
    console.log(fib(i));
}