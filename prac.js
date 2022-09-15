let a = 1;
let b = 2;

let c = [3, 4, 5];

console.log(a);
console.log(b);
console.log(c);

function sum(first, second) {
  return first + second;
}

console.log(sum(a, b));
console.log(sum(a, a));


const d = c.map(e => e*2 )

console.log(d);