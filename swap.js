let first = 5;
let second = 7;

// console.log(first, second);
// this is wrong approach
/* first = second;
second = first */;
// swap
 const temp = first;
 first = second;
 second = temp;

console.log(first, second);

// destructuring
[first, second] = [second, first]
console.log(first, second);
