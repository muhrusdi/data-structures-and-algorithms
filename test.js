function addToUp(n) {
  // let total = 0;
  // for (let i = 0; i < n; i++) {
  //   total += i;
  // }
  // return total;
  return n * (n - 1) /2;
}

function logAtLeast5(n) {
  for (let i = 1; i <= Math.min(35, n); i++) {
    console.log(i)
  }
}

logAtLeast5(5)
// const performance = new Performance();
// const t1 = performance.now();
// addToUp(100000000)
// const t2 = performance.now();

// console.log(`Time elapsed: ${(t2 - t1) / 1000}`)
// console.log(addToUp(3))