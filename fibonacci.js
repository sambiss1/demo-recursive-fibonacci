var fib = [0, 1];
const fibonacci = (index) => {
  let num = fib[index];
  if (num === undefined) {
    for (let i = fib.length; i <= index; i++) {
      // fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
      fib.push(fibonacci(fib.length - 1) + fibonacci(fib.length - 2));
    }
    return fib[index];
  }
  return num;
};
const fibo = (index) => {
  if (index < 2) return index;
  return fibonacci(index - 1) + fibonacci(index - 2);
};
// [0,1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// const fiboj={"10":12, "3":2}
function fibonacci3(n) {
  let fib1 = 0,
    fib2 = 1;
  for (let i = 2; i <= n; i++) {
    let t = fib1 + fib2;
    fib1 = fib2;
    fib2 = t;
  }
  return fib2;
}

const t0 = performance.now()
// console.time("recursive")
fibonacci(55);
fibonacci(12);
// console.timeEnd("recursive")
const t00 = performance.now()
console.log("formule des nokos", t00 - t0);

const t1 = performance.now()
// console.time("no cache");
fibo(55);
// console.timeEnd("no cache");
// console.time("no cache é");
fibo(12);
// console.timeEnd("no cache");

// console.time("fib3")
const t11 = performance.now()
console.log("nocache", t11 - t1);

const t2 = performance.now()
fibonacci3(55)
fibonacci3(12);
// console.timeEnd("fib3")
const t22 = performance.now()
console.log("david ", t22 - t2);
